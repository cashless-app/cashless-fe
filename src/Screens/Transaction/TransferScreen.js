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
import { FlatList } from 'react-native-gesture-handler';

// import {useSelector} from 'react-redux';
// import {transfer} from '../../Redux/Actions/transfer';
// import {useDispatch} from 'react-redux';

class TransferScreen extends Component {
  //   const {resultLogin} = useSelector((state) => state.auth)
  //   const [input, setInput] = useState({
  //     customer: '',
  //     id_user: resultLogin.id,
  //     amount: '',
  //     id_services: '1',
  //     description: '',
  //   });

  //   const dispatch = useDispatch();

  //   const handleSubmit = () => {
  //     dispatch(transfer(input))
  //     .then(response => {
  //       if(response.value.data.status === 'success') {
  //           props.navigation.navigate('TabScreen');
  //       } else {
  //         ToastAndroid.show (
  //           response.value.data.message,
  //           ToastAndroid.SHORT,
  //         );
  //       }
  //     })
  //     .catch(error => alert(error));
  //   }

  //   console.log('CUST', input);
  state = {
    nasabah: []
  }
  componentDidMount = () => {
    this.getAllNasabah()
  }
  getAllNasabah = async () => {
    await this.props.dispatch(getAllNasabah())
    // console.log('nasabah', this.props.dispatch(getAllNasabah()));

    // console.log('nasabahkuu', this.props.nasabah.config.data)

    this.setState({
      nasabah: this.props.nasabah.nasabah.nasabahData.data
    })
  }
  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.onPress(item.id)} style={styles.card}>
        <Text>{item.name}</Text>
        <Text>{item.phone}</Text>
      </TouchableOpacity>
    )
  }
  render() {
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
          {/* <Image
          style={{width: 415, height: 124}}
          source={require('../../../assets/kirimsiapa-card.png')}
        /> */}
          <View style={{ marginHorizontal: 15, marginTop: 5 }}>
            <TextInput
              onChangeText={Customer => setInput({ ...input, customer: Customer })}
              placeholder="Ketik nomor telepon atau nama"
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
                onChangeText={Amount =>
                  setInput({ ...input, amount: parseInt(Amount) })
                }
                placeholder="Enter the nominal that you want to send"
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

          {/* COMPONENT BANK */}
          {/* <View style={{borderBottomWidth: 0.5, borderColor: '#b7b7b7'}}>
          <View style={{marginHorizontal: 15, marginTop: 15, marginBottom: 5}}>
            <Text style={{color: '#b7b7b7', fontSize: 12}}>BANK TERSIMPAN</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: '#b7b7b7',
            justifyContent: 'center',
            height: 60,
          }}>
          <View style={{marginHorizontal: 15}}>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../../../assets/plus-icon.png')}
                />
                <Text
                  style={{
                    paddingLeft: 10,
                    color: '#118eea',
                    fontWeight: 'bold',
                  }}>
                  Kirim ke Rekening Bank
                </Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Image
                  style={{width: 13, height: 13}}
                  source={require('../../../assets/arrow-grey.png')}
                />
              </View>
            </View>
          </View>
        </View> */}

          {/* COMPONENT NOMOE TELEPON */}
          {/* <View style={{borderBottomWidth: 0.5, borderColor: '#b7b7b7'}}>
          <View style={{marginHorizontal: 15, marginTop: 15, marginBottom: 5}}>
            <Text style={{color: '#b7b7b7', fontSize: 12}}>SEMUA KONTAK</Text>
          </View>
        </View> */}
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
                  <TouchableOpacity onPress={() => handleSubmit()}>
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
            />
            {/* <Image
            style={{width: 373, height: 577}}
            source={require('../../../assets/kontak-card.png')}
          /> */}
          </View>
        </ScrollView>
      </View>
    );
  }
};
const mapStateToProps = nasabah => {
  return {
    nasabah
  };
};

export default connect(mapStateToProps)(TransferScreen);

const styles = StyleSheet.create({
  card: {
    borderBottomWidth: 1,
    paddingBottom: 10
  }
})
