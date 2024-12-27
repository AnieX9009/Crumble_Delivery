import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-paper/src/components/Icon';
import {
    StatusBar,
    ScrollView,
    StyleSheet,
    Text,
    Button,
    TextInput,
    Image,
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import {
    responsiveFontSize,
    responsiveWidth,
    responsiveHeight
} from 'react-native-responsive-dimensions';
const { width, height } = Dimensions.get('window');



export default function Profile() {
    const navigation = useNavigation();

    return (
        <View style={[styles.container, { height }]}>

            <StatusBar
                hidden={false}
                barStyle='dark-content'
                animated={true}
                translucent backgroundColor="transparent"
            />
            <View style={styles.mainButton}>
                <TouchableOpacity style={{
                    backgroundColor: "white",
                    // paddingRight: "2%",

                    borderRadius: 50,
                    height: responsiveHeight(6),
                    width: responsiveWidth(11.5),
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                    onPress={() =>
                        navigation.goBack()}
                >
                    <Image source={require('../assets/Back.png')} style={{
                        width: responsiveWidth(2),
                        height: responsiveHeight(2)
                    }} />
                </TouchableOpacity>
                <Text style={styles.mainText}>Profile</Text>
                <TouchableOpacity
                    style={{ alignItems: 'center' }}>
                    <Icon source="dots-horizontal" size={25} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: responsiveWidth(85), marginTop: "10%" }}>
                <Image source={require('../assets/Profile.png')} style={{ width: responsiveWidth(26.2), height: responsiveHeight(13) }} />
                <View style={{ marginLeft: "10%" }}>
                    <Text style={{ fontFamily: 'Sen-SemiBold', color: "#000000", fontSize: 20, fontWeight: 400 }} >Vishal Khadok</Text>
                    <Text style={{ fontFamily: 'Sen-Medium', color: "#A0A5BA", fontSize: 14, fontWeight: 400, marginTop: "10%" }}>I love fast food</Text>
                </View>
            </View>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Personal')
                }}
                style={styles.option}>
                <View style={{ backgroundColor: "#FFFFFF", width: "9%", height: "50%", alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                    <Icon source="account-outline" size={20} color='#FB6F3D' />
                </View>
                <View style={{ width: "70%", alignItems: 'flex-start' }}>
                    <Text style={{ fontFamily: "Sen-SemiBold", color: "#32343E", fontSize: responsiveFontSize(1.9), marginLeft: "10%" }}>
                        Personal Info
                    </Text>
                </View>
                <Image source={require('../assets/right.png')} style={{ width: "10%", height: "70%" }} />
            </TouchableOpacity>

            {/* 2nd option */}
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Notification')
                }}
                style={styles.option}>
                <View style={{ backgroundColor: "#FFFFFF", width: "9%", height: "50%", alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                    <Icon source="bell-outline" size={20} color='#FFAA2A' />
                </View>
                <View style={{ width: "70%", alignItems: 'flex-start' }}>
                    <Text style={{ fontFamily: "Sen-SemiBold", color: "#32343E", fontSize: responsiveFontSize(1.9), marginLeft: "10%" }}>
                        Notifications
                    </Text>
                </View>
                <Image source={require('../assets/right.png')} style={{ width: "10%", height: "70%" }} />
            </TouchableOpacity>
            {/* 3rd option */}
            <TouchableOpacity
             
                style={styles.option}>
                <View style={{ backgroundColor: "#FFFFFF", width: "9%", height: "50%", alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                    <Icon source="shopping" size={20} color='#FB6F3D' />
                </View>
                <View style={{ width: "70%", alignItems: 'flex-start' }}>
                    <Text style={{ fontFamily: "Sen-SemiBold", color: "#32343E", fontSize: responsiveFontSize(1.9), marginLeft: "10%" }}>
                        My Orders
                    </Text>
                </View>
                <Image source={require('../assets/right.png')} style={{ width: "10%", height: "70%" }} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('History')
                }}
                style={styles.option}>
                <View style={{ backgroundColor: "#FFFFFF", width: "9%", height: "50%", alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                    <Icon source="crosshairs-question" size={20} color='#FB6F3D' />
                </View>
                <View style={{ width: "70%", alignItems: 'flex-start' }}>
                    <Text style={{ fontFamily: "Sen-SemiBold", color: "#32343E", fontSize: responsiveFontSize(1.9), marginLeft: "10%" }}>
                        History
                    </Text>
                </View>
                <Image source={require('../assets/right.png')} style={{ width: "10%", height: "70%" }} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('LogInEmpty')
                }}
                style={styles.option1}>
                <View style={{ backgroundColor: "#FFFFFF", width: "9%", height: "50%", alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                    <Icon source="logout" size={20} color='#FB6F3D' />
                </View>
                <View style={{ width: "70%", alignItems: 'flex-start' }}>
                    <Text style={{ fontFamily: "Sen-SemiBold", color: "#32343E", fontSize: responsiveFontSize(1.9), marginLeft: "10%" }}>
                        Log Out
                    </Text>
                </View>
                <Image source={require('../assets/right.png')} style={{ width: "10%", height: "70%" }} />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#ffffff",
    },
    mainButton: {

        flexDirection: 'row',
        marginTop: "15%",
        width: responsiveWidth(90),
        alignItems: 'center',
    },
    backButtonWrapper: {
        backgroundColor: "#ECF0F4",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        height: responsiveHeight(5),
        width: responsiveWidth(10),


    },
    mainText: {
        width: responsiveWidth(65),
        marginLeft: "5%",
        fontSize: 17,
        fontFamily: 'Sen-Bold',
        color: "#181C2E",

    },
    option: {
        flexDirection: 'row',
        width: responsiveWidth(80),
        // justifyContent: 'space-around',
        marginTop: "7%",
        backgroundColor: "#F6F8FA",
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: responsiveHeight(7),

    },
    option1: {
        flexDirection: 'row',
        width: responsiveWidth(80),
        // justifyContent: 'space-around',
        marginTop: "40%",
        backgroundColor: "#F6F8FA",
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: responsiveHeight(7),
    }
})