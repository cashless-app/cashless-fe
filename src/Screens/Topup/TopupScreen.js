import React, {useState} from 'react';

import {connect} from 'react-redux';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {topUp} from '../../Redux/Actions/transaction';

const TopupScreen = props => {
  useState;
  const [amountState, setAmountState] = useState(0);

  topupprocess = async () => {
    const id = await AsyncStorage.getItem('id');
    const amountTotal = amountState;

    props.dispatch(topUp(amountTotal, id));
  };

  console.log('amount: ', amountState);
  return (
    <View style={{backgroundColor: '#f5f5f5', flex: 1}}>
      <View
        style={{
          backgroundColor: '#118eea',
          justifyContent: 'center',
          height: 50,
        }}>
        <View
          style={{
            marginHorizontal: 15,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('TabScreen')}>
            <Image
              style={{width: 13, height: 13}}
              source={require('../../../assets/arrow-left.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: 'white',
              fontSize: 19,
              paddingLeft: 150,
            }}>
            Top Up
          </Text>
        </View>
      </View>

      <View style={{marginHorizontal: 15, height: 80, marginBottom: 35}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Amount</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          <View style={{flex: 1, marginRight: 20}}>
            <TextInput
              onChangeText={e => setAmountState(e)}
              style={{
                height: 40,
                borderColor: '#e5e5e5',
                backgroundColor: '#f8f8f8',
                borderRadius: 5,
                borderWidth: 1,
              }}
              editable={false}
              keyboardType={'numeric'}
              defaultValue={JSON.stringify(amountState)}
            />
          </View>
          <TouchableOpacity onPress={topupprocess}>
            <Image
              style={{width: 25, height: 25}}
              source={require('../../../assets/saldo-icon/bank-icon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{backgroundColor: '#FFF', flex: 1}}>
        <View style={{marginHorizontal: 15, marginVertical: 6}}>
          <Text>Total Top Up</Text>
        </View>
        {/* COMPONENT CARD */}
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <View
            style={{
              width: '44%',
              paddingLeft: 15,
              justifyContent: 'center',
              marginLeft: 15,
              height: 80,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#eaeaea',
            }}>
            <TouchableOpacity
              onPress={() => {
                setAmountState(50000);
              }}>
              <Text
                style={{fontWeight: 'bold', fontSize: 27, color: '#393939'}}>
                50rb
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '44%',
              paddingLeft: 15,
              justifyContent: 'center',
              marginLeft: 20,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#eaeaea',
            }}>
            <TouchableOpacity
              onPress={() => {
                setAmountState(100000);
              }}>
              <Text
                style={{fontWeight: 'bold', fontSize: 27, color: '#393939'}}>
                100rb
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* COMPONENT CARD */}
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <View
            style={{
              width: '44%',
              paddingLeft: 15,
              justifyContent: 'center',
              marginLeft: 15,
              height: 80,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#eaeaea',
            }}>
            <TouchableOpacity
              onPress={() => {
                setAmountState(200000);
              }}>
              <Text
                style={{fontWeight: 'bold', fontSize: 27, color: '#393939'}}>
                200rb
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '44%',
              paddingLeft: 15,
              justifyContent: 'center',
              marginLeft: 20,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#eaeaea',
            }}>
            <TouchableOpacity
              onPress={() => {
                setAmountState(250000);
              }}>
              <Text
                style={{fontWeight: 'bold', fontSize: 27, color: '#393939'}}>
                250rb
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* COMPONENT CARD */}
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <View
            style={{
              width: '44%',
              paddingLeft: 15,
              justifyContent: 'center',
              marginLeft: 15,
              height: 80,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#eaeaea',
            }}>
            <TouchableOpacity
              onPress={() => {
                setAmountState(300000);
              }}>
              <Text
                style={{fontWeight: 'bold', fontSize: 27, color: '#393939'}}>
                300rb
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '44%',
              paddingLeft: 15,
              justifyContent: 'center',
              marginLeft: 20,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#eaeaea',
            }}>
            <TouchableOpacity
              onPress={() => {
                setAmountState(350000);
              }}>
              <Text
                style={{fontWeight: 'bold', fontSize: 27, color: '#393939'}}>
                350rb
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* COMPONENT CARD */}
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <View
            style={{
              width: '44%',
              paddingLeft: 15,
              justifyContent: 'center',
              marginLeft: 15,
              height: 80,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#eaeaea',
            }}>
            <TouchableOpacity
              onPress={() => {
                setAmountState(400000);
              }}>
              <Text
                style={{fontWeight: 'bold', fontSize: 27, color: '#393939'}}>
                400rb
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '44%',
              paddingLeft: 15,
              justifyContent: 'center',
              marginLeft: 20,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#eaeaea',
            }}>
            <TouchableOpacity
              onPress={() => {
                setAmountState(500000);
              }}>
              <Text
                style={{fontWeight: 'bold', fontSize: 27, color: '#393939'}}>
                500rb
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

// export default TopupScreen;

const mapStateToProps = transaction => {
  return {
    transaction,
  };
};

export default connect(mapStateToProps)(TopupScreen);
