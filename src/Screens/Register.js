import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {register} from '../Redux/Actions/auth';

class Register extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    password: '',
    role: '',
    nasabah: 'Nasabah',
    errorMsg: [],
  };

  registerProcess = async () => {
    const {name, phone, email, password, role} = this.state;
    const userData = {name, phone, email, password, role};
    await this.props.dispatch(register(userData, this.props.navigation));
  };
  componentWillUnmount = async () => {
    await this.setState({
      name: '',
      phone: '',
      email: '',
      password: '',
    });
  };
  render() {
    console.log('error: ', this.state.errorMsg);
    return (
      <>
        <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, paddingLeft: 60}}>
              <Image
                source={require('../../assets/danaku-text.png')}
                style={styles.image}
              />
            </View>
            <View style={{width: 60}}>
              <TouchableOpacity onPress={event => this.registerProcess(event)}>
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
            <TextInput
              onChangeText={e => {
                this.setState({name: e});
              }}
              style={styles.textInput}
              maxLength={16}
              placeholder="Nama"
              placeholderTextColor="#84c8f9"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.containerBorder} />
          <View style={styles.containerInd2}>
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
            />
          </View>
          <View style={styles.containerBorder} />
          <View style={styles.containerInd2}>
            <TextInput
              onChangeText={e => {
                this.setState({email: e});
              }}
              autoCompleteType={'email'}
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="#84c8f9"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.containerBorder} />
          <View style={styles.containerInd2}>
            <TextInput
              onChangeText={e => {
                this.setState({password: e});
              }}
              style={styles.textInput}
              secureTextEntry
              maxLength={16}
              placeholder="Password"
              placeholderTextColor="#84c8f9"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.containerBorder} />
          <View style={styles.containerInd2}>
            <TextInput
              onChangeText={e => {
                this.setState({role: e});
              }}
              style={styles.textInput}
              value={this.state.nasabah}
              maxLength={16}
              placeholderTextColor="#84c8f9"
              underlineColorAndroid="transparent"
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
          <View style={styles.newAccount}>
            <Text
              style={styles.textAccount}
              onPress={() => this.props.navigation.navigate('Login')}>
              Login
            </Text>
          </View>
        </View>
      </>
    );
  }
}
const mapStateToProps = auth => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Register);

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
  containerInd2: {
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textInd: {
    fontSize: 20,
    color: '#FFF',
    opacity: 0.5,
    paddingTop: 10,
  },
  textInput: {
    fontSize: 20,
    paddingLeft: 15,
    color: '#FFF',
    fontWeight: '100',
    paddingHorizontal: 15,
  },
  containerBorder: {
    alignSelf: 'center',
    width: 250,
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
  newAccount: {
    paddingTop: 20,
    alignItems: 'center',
  },
  textAccount: {
    color: '#FFF',
    fontSize: 13,
  },
});
