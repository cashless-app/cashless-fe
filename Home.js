import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Home extends Component {
    static navigationOptions = {
        headerShown: false
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <View style={styles.containerTop}>
                        <View style={styles.containerFlexTop}>
                            <Image style={styles.iconDana}
                                source={require('../../assets/top-icon/iconapp-icon-01.png')}
                            />
                            <Text style={styles.textRp}>Rp</Text>
                            <Text style={styles.textNominal}>0</Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image
                                    style={styles.iconChart}
                                    source={require('../../assets/top-icon/chart-icon.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.containerIconTop}>
                        <View style={styles.containerImageTop}>
                            <Image
                                style={styles.iconTop}
                                source={require('../../assets/top-icon/pindai-icon.png')}
                            />
                            <Text style={styles.textIcon}>Scan</Text>
                        </View>

                        <View style={styles.containerImageTop}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.iconTop}
                                    source={require('../../assets/top-icon/saldo-icon.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.textIcon}>Top Up</Text>
                        </View>

                        <View style={styles.containerImageTop}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.iconTop}
                                    source={require('../../assets/top-icon/kirim-icon.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.textIcon}>Send</Text>
                        </View>

                        <View style={styles.containerImageTop}>
                            <Image
                                style={styles.iconTop}
                                source={require('../../assets/top-icon/minta-icon.png')}
                            />
                            <Text style={styles.textIcon}>Request</Text>
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
                                        source={require('../../assets/mid-icon/corona.jpg')}
                                    />
                                </View>
                                <View style={styles.containerTextCorona}>
                                    <Text style={styles.textCorona}>Update Covid-19</Text>
                                    <Text style={styles.textInfoCorona}>Info Virus Corona Terbaru!</Text>
                                </View>
                                <View style={styles.containerButtonCorona}>
                                    <TouchableHighlight
                                        onPress={() => props.navigation.navigate('TransaksiScreen')}
                                        style={styles.buttonLihat}>
                                        <Text style={styles.textLihat}>VIEW</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomCard}>
                        <View style={styles.containerImageService}>
                            <View style={styles.containerImageTop}>
                                <Image
                                    style={styles.iconMid}
                                    source={require('../../assets/mid-icon/games-icon.png')}
                                />
                                <Text style={styles.textMid}>Games</Text>
                            </View>

                            <View style={styles.containerImageTop}>
                                <Image
                                    style={styles.iconMid}
                                    source={require('../../assets/mid-icon/listrik-icon.png')}
                                />
                                <Text style={styles.textMid}>Electricity</Text>
                            </View>
                            <View style={styles.containerImageTop}>
                                <Image
                                    style={styles.iconMid}
                                    source={require('../../assets/mid-icon/telepon-icon.png')}
                                />
                                <Text style={styles.textMid}>Telepon</Text>
                            </View>
                            <View style={styles.containerImageTop}>
                                <Image
                                    style={styles.iconMid}
                                    source={require('../../assets/mid-icon/bpjs-icon.png')}
                                />
                                <Text style={styles.textMid}>BPJS</Text>
                            </View>
                        </View>
                        <View style={styles.containerImageService2}>
                            <View style={styles.containerImageTop}>
                                <Image
                                    style={styles.iconMid}
                                    source={require('../../assets/mid-icon/pascabayar-icon.png')}
                                />
                                <Text style={styles.textMid}>Pascabayar</Text>
                            </View>

                            <View style={styles.containerImageTop}>
                                <Image
                                    style={styles.iconMid}
                                    source={require('../../assets/mid-icon/tariksaldo-icon.png')}
                                />
                                <Text style={styles.textMid}>Cashout</Text>
                            </View>

                            <View style={styles.containerImageTop}>
                                <Image
                                    style={styles.iconMid}
                                    source={require('../../assets/mid-icon/danakaget-icon.png')}
                                />
                                <Text style={styles.textMid}>DANAIN Kaget</Text>
                            </View>
                            <View style={styles.containerImageTop}>
                                <Image
                                    style={styles.iconMid}
                                    source={require('../../assets/mid-icon/lihatsemua-icon.png')}
                                />
                                <Text style={styles.textMid}>See All</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardPromo}>
                        <View style={styles.containerPromo}>
                            <View style={styles.containerTextPromo}>
                                <Text style={styles.textAdaPromo}>Promos For You</Text>
                                <Text style={styles.textHidupLebih}>Everything's better with promos</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.buttonLihatSemua}>
                                    <Text style={styles.textLihatSemua}>LIHAT SEMUA</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bannerPromo}>
                        <Image
                            style={styles.imagePromo}
                            source={require('../../assets/promo-icon/promo1.png')}
                        />
                    </View>
                    <View style={styles.containerHotPromo}>
                        <Image
                            style={styles.imageHotPromo}
                            source={require('../../assets/promo-icon/promo4.png')}
                        />
                    </View>
                    <View style={styles.cardNearby}>
                        <View style={styles.containerPromo}>
                            <View style={styles.containerTextPromo}>
                                <Text style={styles.textNearby}>Nearby Me</Text>
                                <Text style={styles.textHidupLebih}>
                                    Temukan merchant DANAIN didekat kamu!
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.buttonLihatSemua}>
                                    <Text style={styles.textLihatSemua}>LIHAT SEMUA</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.containerNearby}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <View>
                                <Image
                                    style={styles.imageNear}
                                    source={require('../../assets/near-icon/yoshi-icon.png')}
                                />
                                <Text style={styles.textNear}>0,3 Km</Text>
                            </View>
                            <View>
                                <Image
                                    style={styles.imageNear}
                                    source={require('../../assets/near-icon/hokben-icon.png')}
                                />
                                <Text style={styles.textNear}>0,4 Km</Text>
                            </View>
                            <View>
                                <Image
                                    style={styles.imageNear}
                                    source={require('../../assets/near-icon/indo-icon.png')}
                                />
                                <Text style={styles.textNear}>1,2 Km</Text>
                            </View>
                            <View>
                                <Image
                                    style={styles.imageNear}
                                    source={require('../../assets/near-icon/kfc-icon.png')}
                                />
                                <Text style={styles.textNear}>1,0 Km</Text>
                            </View>
                            <View>
                                <Image
                                    style={styles.imageNear}
                                    source={require('../../assets/near-icon/danas-icon.png')}
                                />
                                <Text style={styles.textNear}>2,0 Km</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    containerHeader: {
        height: 120,
        backgroundColor: '#118eea'
    },
    containerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 15,
        marginHorizontal: 15
    },
    containerFlexTop: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconDana: {
        width: 24,
        height: 24
    },
    TextRp: {
        marginLeft: 9,
        color: '#a2d8fb'
    },
    textNominal: {
        marginLeft: 9,
        fontWeight: 'bold',
        fontSize: 17,
        color: '#FFF'
    },
    iconChart: {
        width: 33,
        height: 33
    },
    containerIconTop: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    containerImageTop: {
        alignItems: 'center'
    },
    iconTop: {
        width: 40,
        height: 40,
        marginHorizontal: 28,
        marginBottom: 3
    },
    textIcon: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 12
    },
    containerCorona: {
        backgroundColor: '#118eea',
        height: 90
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
        borderTopRightRadius: 6
    },
    containerFlexCorona: {
        flexDirection: 'row',
        height: 92,
        paddingBottom: 20
    },
    containerImageCorona: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageCorona: {
        width: 32,
        height: 47
    },
    containerTextCorona: {
        width: 170,
        justifyContent: 'center'
    },
    textCorona: {
        fontWeight: '900',
        fontSize: 16
    },
    textInfoCorona: {
        fontSize: 12,
        color: '#fb8b01'
    },
    containerButtonCorona: {
        width: 125,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2
    },
    buttonLihat: {
        backgroundColor: '#118eea',
        width: 92,
        height: 37,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLihat: {
        color: '#FFF',
        fontSize: 12
    },
    bottomCard: {
        backgroundColor: '#FFF',
        marginHorizontal: 15,
        height: 184,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        borderColor: '#e3e3e3'
    },
    containerImageService: {
        flexDirection: 'row',
        height: '55%'
    },
    containerImageService2: {
        flexDirection: 'row',
        flex: 1
    },
    iconMid: {
        width: 38,
        height: 38,
        marginHorizontal: 28,
        marginBottom: 10
    },
    cardPromo: {
        // backgroundColor: '#FFF',
        justifyContent: 'center',
        marginHorizontal: 15,
        marginTop: 15,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        // borderTopWidth: 1,
        // borderLeftWidth: 1,
        // borderRightWidth: 1,
        // borderColor: '#e3e3e3',
        height: 55
    },
    containerPromo: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center'
    },
    containerTextPromo: {
        flex: 1
    },
    textAdaPromo: {
        fontWeight: 'bold'
    },
    textHidupLebih: {
        fontSize: 12,
        marginTop: 3,
        color: '#313131'
    },
    buttonLihatSemua: {
        backgroundColor: '#FFF',
        width: 89,
        height: 35,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#118eea',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLihatSemua: {
        color: '#118eea',
        fontSize: 12,
        fontWeight: 'bold'
    },
    bannerPromo: {
        marginHorizontal: 15,
        height: 99,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#e3e3e3',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    imagePromo: {
        height: 97,
        width: 378,
        alignSelf: 'center',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    containerHotPromo: {
        marginTop: 12
    },
    imageHotPromo: {
        height: 86,
        width: 378,
        alignSelf: 'center',
        borderRadius: 6
    },
    cardNearby: {
        backgroundColor: '#FFF',
        justifyContent: 'center',
        marginHorizontal: 15,
        marginTop: 15,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#e3e3e3',
        height: 75
    },
    containerPromo: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center'
    },
    textNearby: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 5
    },
    textHidupLebih: {
        fontSize: 12,
        marginTop: 3,
        color: '#313131'
    },
    containerNearby: {
        height: 90,
        backgroundColor: '#eff8ff',
        marginHorizontal: 15,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6, borderColor: '#e3e3e3'
    },
    imageNear: {
        marginTop: 13,
        marginHorizontal: 15,
        width: 43,
        height: 43,
        alignItems: 'center'
    },
    textNear: {
        fontSize: 12,
        color: '#313131',
        alignSelf: 'center',
        paddingTop: 5
    },
})