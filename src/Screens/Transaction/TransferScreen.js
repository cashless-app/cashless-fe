import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import { connect } from 'react-redux'
import { getAllNasabah } from '../../Redux/Actions/nasabah'
import { transfer } from '../../Redux/Actions/transfer'
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';


class TransferScreen extends Component {
  state = {
    nasabah: [],
    sendphone: '',
    amount: '',
    idpenerima: ''
  }

  componentDidMount = () => {
    this.getAllNasabah()
  }
  getAllNasabah = async () => {
    await this.props.dispatch(getAllNasabah())
    this.setState({
      nasabah: this.props.nasabah.nasabah.nasabahData.data
    })
  }

  handleSubmit = async () => {
    const idpengirim = await AsyncStorage.getItem('id')
    console.log('pengirim', idpengirim);

    this.props.dispatch(transfer(idpengirim, this.state.idpenerima, this.state.amount))
      .then(response => {
        if (response.value.data.status === 'success') {
          this.props.navigation.navigate('Home')
        } else {
          ToastAndroid.show(
            response.value.data.message,
            ToastAndroid.SHORT
          )
        }
      })
  }
  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity key={item.id} activeOpacity={0.6} style={styles.card} onPress={() => this.setState({
        sendphone: item.phone,
        idpenerima: item.id
      })}>
        <Text>{item.name}</Text>
        <Text>{item.phone}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    console.log('id user', this.state.sendphone)
    console.log('state nasabah:', this.state.nasabah)
    return (
      <View>
        <View
          style={{
            backgroundColor: '#118eea',
            height: 53,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '38%',
                paddingHorizontal: 15,
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}>
                <Image
                  style={{ width: 13, height: 13 }}
                  source={require('../../../assets/arrow-left.png')}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{ color: 'white', fontSize: 19 }}> Send Danaku</Text>
            </View>
          </View>
        </View>

        <ScrollView>
          {/* COMPONENT TEXT */}
          <View
            style={{
              marginTop: 20,
              marginHorizontal: 15,
              width: 190,
              marginBottom: 10,
            }}>
            <Text style={{ fontSize: 27, fontWeight: 'bold' }}>
              Send to Phone Number
          </Text>
            <Text style={{ paddingTop: 10, color: '#adacac' }}>
              Choose recipient, please!
          </Text>
          </View>
          <View style={{ marginHorizontal: 15, marginTop: 5 }}>
            <TextInput
              placeholder="Ketik nomor telepon atau nama"
              defaultValue={this.state.sendphone}
              keyboardType={'numeric'}
              maxLength={16}
              autoFocus={true}
              style={{
                height: 37,
                borderColor: '#e3e3e3',
                borderWidth: 1,
                borderRadius: 4,
                paddingHorizontal: 15,
              }}
            />
            <View style={{ marginTop: 10 }}>
              <TextInput
                placeholder="Enter the nominal that you want to send"
                onChangeText={e => {
                  this.setState({ amount: e })
                }}
                keyboardType={'numeric'}
                maxLength={16}
                style={{
                  height: 37,
                  borderColor: '#e3e3e3',
                  borderWidth: 1,
                  borderRadius: 4,
                  paddingHorizontal: 15,
                }}
              />
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderColor: '#b7b7b7',
              justifyContent: 'center',
              height: 60,
            }}>
            <View style={{ marginHorizontal: 15 }}>
              <View
                style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    style={{ width: 25, height: 25 }}
                    source={require('../../../assets/plus-icon.png')}
                  />
                  <TouchableOpacity onPress={this.handleSubmit}>
                    <Text
                      style={{
                        paddingLeft: 10,
                        color: '#118eea',
                        fontWeight: 'bold',
                      }}>
                      Send to pohone number
                  </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <Image
                    style={{ width: 13, height: 13 }}
                    source={require('../../../assets/arrow-grey.png')}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginHorizontal: 15, marginTop: 10 }}>
            <FlatList
              data={this.state.nasabah}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
};
const mapStateToProps = (nasabah, transfer) => {
  return {
    nasabah,
    transfer
  };
};

export default connect(mapStateToProps)(TransferScreen);

const styles = StyleSheet.create({
  card: {
    borderBottomWidth: 1,
    paddingBottom: 10
  }
})
