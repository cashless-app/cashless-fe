import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../Redux/Actions/auth';
// import Input from './Regex/Input';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';

class Login extends Component {
  state = {
    phone: '',
    token: '',
    id: '',
  };

  loginProcess = async () => {
    const {phone} = this.state;
    const userData = {phone};
    this.props
      .dispatch(login(userData))
      .then(result => {
        this.props.navigation.navigate('Home');
      })
      .catch(err => {
        console.log(err);
        this.props.navigation.navigate('Login');
        ToastAndroid.show('Phone number is wrong', ToastAndroid.SHORT);
      });
  };
  render() {
    console.log('phone', this.state.phone);
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, paddingLeft: 60}}>
            <Image
              source={require('../../assets/danaku-text.png')}
              style={styles.image}
            />
          </View>
          <View style={{width: 60}}>
            <TouchableOpacity onPress={this.loginProcess}>
              <Text style={styles.textNext}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>
            Enter your phone number to sign in or create a new account.
          </Text>
        </View>
        <View style={styles.containerInd}>
          <Text style={styles.textInd}>+62</Text>
          <TextInput
            onChangeText={e => {
              this.setState({phone: e});
            }}
            style={styles.textInput}
            maxLength={16}
            placeholder="Phone Number"
            placeholderTextColor="#84c8f9"
            underlineColorAndroid="transparent"
            keyboardType={'numeric'}
            autoFocus={true}
          />
        </View>
        <View style={styles.containerBorder} />
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>DANAKU also connected with</Text>
        </View>
        <View style={styles.containerIcon}>
          <Image
            source={require('../../assets/bl-icon.png')}
            style={styles.iconCon}
          />
          <Image
            source={require('../../assets/laz-icon.png')}
            style={styles.iconCon}
          />
          <Image
            source={require('../../assets/tix-icon.png')}
            style={styles.iconCon}
          />
          <Image
            source={require('../../assets/many-icon.png')}
            style={styles.iconCon}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = auth => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#118eea',
  },
  image: {
    width: 150,
    height: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
  textNext: {
    fontSize: 18,
    color: '#FFF',
    paddingTop: 20,
    textAlign: 'left',
  },
  containerText: {
    marginHorizontal: 20,
    alignSelf: 'center',
    marginTop: 45,
  },
  text: {
    color: '#FFF',
  },
  containerInd: {
    marginTop: 50,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textInd: {
    fontSize: 25,
    color: '#FFF',
    opacity: 0.5,
    paddingTop: 10,
  },
  textInput: {
    fontSize: 25,
    paddingLeft: 15,
    color: '#FFF',
    fontWeight: '100',
    paddingHorizontal: 15,
  },
  containerBorder: {
    alignSelf: 'center',
    width: 40,
    height: 2,
    backgroundColor: '#84c8f9',
  },
  containerTitle: {
    paddingTop: 40,
    alignItems: 'center',
  },
  textTitle: {
    color: '#FFF',
    fontSize: 15,
  },
  containerIcon: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconCon: {
    width: 40,
    height: 40,
  },
});
