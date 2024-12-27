import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-paper/src/components/Icon';

import {
    ScrollView,
    StyleSheet,
    Text,
    Button,
    TextInput,
    Animated,
    Image,
    Alert,
    Modal,
    Pressable,
    FlatList,
    View,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { Dropdown } from 'react-native-element-dropdown';
import { ActivityIndicator, Drawer, Searchbar } from 'react-native-paper';
import {
    responsiveFontSize,
    responsiveWidth,
    responsiveHeight
} from 'react-native-responsive-dimensions';
import PickUp from '../components/pickUp';
import Delivery from '../components/delivery';
import OrderSearch from '../components/OrderSearch';
const countries = [
    { name: 'Kolkata' },
    { name: 'Delhi' },
    { name: 'Mumbai' },
    { name: 'Bangalore' },


    // Add more countries as needed
];

export default function Home() {
    const navigation = useNavigation();
    const [code, setCode] = useState(countries);
    const [showNotification, setShowNotification] = useState<String>('Notification');
    return (
        <View style={styles.container}>
            <StatusBar
                hidden={false}
                barStyle='dark-content'
                animated={true}
                translucent backgroundColor="transparent"
            />
            <View style={{ flexDirection: 'row', width: responsiveWidth(90), height: responsiveHeight(10), justifyContent: 'space-evenly', marginTop: "12%", alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Profile')
                    }}

                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: "#ECF0F4",
                        borderRadius: 50,
                        alignSelf: 'center',
                        height: responsiveHeight(6),
                        width: responsiveWidth(12)

                    }}>
                    <Icon source="menu" size={25} />
                </TouchableOpacity>

                <View style={{
                    paddingLeft: 7,
                    paddingTop: 1,
                    justifyContent: 'center'
                }}>
                    <Text style={{ fontFamily: 'Sen-Bold', fontSize: 12, color: "#FF7622" }}>DELIVER TO</Text>
                    <View style={[{ flexDirection: 'row', width: '80%', borderColor: "#888888" }, styles.formContain]}>
                        <Dropdown
                            style={styles.dropdown}

                            selectedTextStyle={{ color: "#000000", fontFamily: "Sen-Medium", fontSize: 14 }}
                            itemTextStyle={styles.textstyle}
                            iconColor='black'
                            inputSearchStyle={styles.inputSearchStyle}
                            data={countries}
                            maxHeight={200}
                            labelField="name"
                            value={code}
                            onChange={item => {
                                setCode(item.value);
                            }}

                        />
                    </View>

                </View>
                <TouchableOpacity style={{
                    justifyContent: 'center',


                    alignSelf: 'center',
                    alignItems: 'center',
                    height: responsiveHeight(6),
                    width: responsiveWidth(12),
                    marginTop: "5%"

                }}

                >

                    <Image source={require('../assets/MaskGroup.png')} style={{ width: responsiveWidth(12), height: responsiveHeight(12), }} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: "3%", alignSelf: 'flex-start', marginLeft: '5%' }}>
                <Text style={{
                    fontSize: 14, fontFamily: 'Sen-Medium', color: "#321B1C"
                }}>Hey sourav,
                </Text>
                <Text style={{ fontFamily: "Sen-SemiBold", fontSize: 16, color: "#321B1C" }}>
                    Good Afternoon!</Text>
            </View>

            {/* <OrderSearch {}/> */}




            <View style={{ width: responsiveWidth(90), flexDirection: 'row', marginTop: "7%", alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                    style={[styles.button, showNotification && styles.buttonActive]}
                    onPress={() => setShowNotification('Notification')}>
                    <Text style={{ fontSize: 13, fontFamily: 'Sen-Bold', color: showNotification === "Notification" ? "#32343E" : "#5e6069" }}>
                        PICKUP REQUEST
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, showNotification && styles.buttonActive]}
                    onPress={() => setShowNotification('Messages')}
                >
                    <Text style={{ fontSize: 13, fontFamily: 'Sen-Bold', color: showNotification === "Messages" ? "#32343E" : "#5e6069" }}>DELIVERY REQUEST</Text>
                </TouchableOpacity>
            </View>
            {showNotification == 'Notification' ? (
                <View>
                    < PickUp />
                </View>
            ) : (
                <View>
                    <Delivery />
                </View>
            )}

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    dropdown: {
        // margin: 10,
        fontFamily: 'Sen-Medium',
        color: "black",
        width: "70%",
        // height: 50,
        // marginLeft: -50,
        // paddingLeft: "5%",
        textDecorationColor: "black",

    },
    textstyle: {
        color: "#000000",
        fontFamily: 'Sen-Medium',
        fontSize: 10
    },
    formContain: {
        width: "90%",
    },
    inputSearchStyle: {
        fontFamily: 'Sen-Medium',
        color: "red",
    },
    button: {
        width: responsiveWidth(45), alignItems: 'center'
    }
})