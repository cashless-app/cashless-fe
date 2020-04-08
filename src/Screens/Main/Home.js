import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Home extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <View style={styles.containerTop}>
            <View style={styles.containerFlexTop}>
              <Image
                style={styles.iconDana}
                source={require('../../../assets/top-icon/iconapp-icon-01.png')}
              />
              <Text style={styles.textRp}>Rp</Text>
              <Text style={styles.textNominal}>0</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  style={styles.iconChart}
                  source={require('../../../assets/top-icon/chart-icon.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.containerIconTop}>
            <View style={styles.containerImageTop}>
              <Image
                style={styles.iconTop}
                source={require('../../../assets/top-icon/pindai-icon.png')}
              />
              <Text style={styles.textIcon}>Pindai</Text>
            </View>

            <View style={styles.containerImageTop}>
              <TouchableOpacity>
                <Image
                  style={styles.iconTop}
                  source={require('../../../assets/top-icon/saldo-icon.png')}
                />
              </TouchableOpacity>
              <Text style={styles.textIcon}>Isi Saldo</Text>
            </View>

            <View style={styles.containerImageTop}>
              <TouchableOpacity>
                <Image
                  style={styles.iconTop}
                  source={require('../../../assets/top-icon/kirim-icon.png')}
                />
              </TouchableOpacity>
              <Text style={styles.textIcon}>Kirim</Text>
            </View>

            <View style={styles.containerImageTop}>
              <Image
                style={styles.iconTop}
                source={require('../../../assets/top-icon/minta-icon.png')}
              />
              <Text style={styles.textIcon}>Minta</Text>
            </View>
          </View>
        </View>

        <ScrollView>
          <View style={styles.containerCorona}>
            <View style={styles.topCard}>
              <View style={styles.containerFlexCorona}>
                <View style={styles.containerImageCorona}>
                  <Image
                    style={styles.imageCorona}
                    source={require('../../../assets/mid-icon/corona.jpg')}
                  />
                </View>
                <View style={styles.containerTextCorona}>
                  <Text style={styles.textCorona}>Update Covid-19</Text>
                  <Text style={styles.textInfoCorona}>
                    Info Virus Corona Terbaru!
                  </Text>
                </View>
                <View style={styles.containerButtonCorona}>
                  <TouchableHighlight
                    onPress={() => props.navigation.navigate('TransaksiScreen')}
                    style={styles.buttonLihat}>
                    <Text style={styles.textLihat}>LIHAT</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  containerHeader: {
    height: 120,
    backgroundColor: '#118eea',
  },
  containerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
    marginHorizontal: 15,
  },
  containerFlexTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconDana: {
    width: 24,
    height: 24,
  },
  TextRp: {
    marginLeft: 9,
    color: '#a2d8fb',
  },
  textNominal: {
    marginLeft: 9,
    fontWeight: 'bold',
    fontSize: 17,
    color: '#FFF',
  },
  iconChart: {
    width: 33,
    height: 33,
  },
  containerIconTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  containerImageTop: {
    alignItems: 'center',
  },
  iconTop: {
    width: 40,
    height: 40,
    marginHorizontal: 28,
    marginBottom: 3,
  },
  textIcon: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  containerCorona: {
    backgroundColor: '#118eea',
    height: 90,
  },
  topCard: {
    backgroundColor: '#FFF',
    marginHorizontal: 15,
    height: 90,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#e3e3e3',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  containerFlexCorona: {
    flexDirection: 'row',
    height: 92,
    paddingBottom: 20,
  },
  containerImageCorona: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageCorona: {
    width: 32,
    height: 47,
  },
  containerTextCorona: {
    width: 170,
    justifyContent: 'center',
  },
  textCorona: {
    fontWeight: '900',
    fontSize: 16,
  },
  textInfoCorona: {
    fontSize: 12,
    color: '#fb8b01',
  },
  containerButtonCorona: {
    width: 125,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  buttonLihat: {
    backgroundColor: '#118eea',
    width: 92,
    height: 37,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLihat: {
    color: '#FFF',
    fontSize: 12,
  },
});
