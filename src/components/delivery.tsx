import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
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



export default function Delivery() {
    const navigation = useNavigation();
    return (
        <View style={[styles.container, { height }]}>
            <ScrollView>

                <View style={{
                    width: responsiveWidth(75), alignSelf: 'center', marginTop: '10%', height: responsiveHeight(48)


                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: "#676767", fontFamily: 'Sen-Medium', fontSize: responsiveFontSize(1.7) }}>DELIVER ID</Text>
                        <Text style={{ color: "#676767", fontFamily: 'Sen-Medium', fontSize: responsiveFontSize(1.7) }}>#123456</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: responsiveWidth(75), alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                        <View style={{ backgroundColor: "#FFE4C3", width: responsiveWidth(7), height: responsiveHeight(4), alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                            <Icon source='food-turkey' size={20} color='#FF7622' />
                        </View>
                        <View style={{ width: "70%", marginLeft: "5%" }}>
                            <Text style={{ color: '#676767', fontFamily: 'Sen-Regular', fontSize: responsiveFontSize(1.7) }}>Pick Up Order</Text>
                            <Text style={{ color: "#000000", fontFamily: 'Sen-Bold', fontSize: responsiveFontSize(2) }}>062 kuhn plain suit 7</Text>
                        </View>
                        <Icon source='phone' size={30} color='#0DA700' />
                    </View>
                    <View style={{ flexDirection: 'row', width: responsiveWidth(75), alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: '10%' }}>
                        <View style={{ backgroundColor: "#FFE4C3", width: responsiveWidth(7), height: responsiveHeight(4), alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                            <Icon source='home' size={20} color='#FF7622' />
                        </View>
                        <View style={{ width: "70%", marginLeft: "5%" }}>
                            <Text style={{ color: '#676767', fontFamily: 'Sen-Regular', fontSize: responsiveFontSize(1.7) }}>Deliver Order To</Text>
                            <Text style={{ color: "#000000", fontFamily: 'Sen-Bold', fontSize: responsiveFontSize(2) }}>922 Willfredo Tunnel</Text>
                        </View>
                        <Icon source='phone' size={30} color='#0DA700' />
                    </View>
                    <TouchableOpacity style={{ width: responsiveWidth(67), alignSelf: 'center' }}>
                        <Text style={{ color: "#FF7622", fontFamily: 'Sen-Regular', marginTop: "7%" }}>Order Detail</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: "5%" }}>
                        <View style={{ flexDirection: 'row', backgroundColor: "#d0d0d0", width: responsiveWidth(15), alignItems: 'center', borderRadius: 5, justifyContent: 'center' }}>
                            <Icon source="tag-multiple" size={20} />
                            <Text style={{ color: "#676767", fontSize: 14 }}>$ 54</Text>
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: "#d0d0d0", width: responsiveWidth(15), alignItems: 'center', borderRadius: 5, justifyContent: 'center' }}>
                            <Icon source="clock" size={20} />
                            <Text style={{ color: "#676767", fontSize: 14 }}>12:30</Text>
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: "#d0d0d0", width: responsiveWidth(15), alignItems: 'center', borderRadius: 5, justifyContent: 'center' }}>
                            <Icon source="map-marker-radius" size={20} />
                            <Text style={{ color: "#676767", fontSize: 14 }}>1.2km</Text>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center', width: "100%", marginTop: "7%", marginLeft: "2%" }}>
                        <Text style={{ color: "#676767", fontFamily: 'Sen-Medium', }}>Comment</Text>
                        <Text style={{ color: "#000000", fontFamily: 'Sen-Bold', fontSize: responsiveFontSize(1.9), marginTop: "2%" }}>Call me when you are in entrance</Text>
                    </View>
                    <TouchableOpacity style={styles.submitButton} >
                        <Text style={styles.submitButtonText}>ACCEPT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignSelf: 'center', alignItems: 'center', marginTop: '3%' }}>
                        <Text style={{ color: "#676767", fontFamily: 'Sen-Regular', fontSize: responsiveFontSize(1.9) }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
                {/* 2nd order */}
                <View style={{
                    width: responsiveWidth(75), alignSelf: 'center', marginTop: '7%',
                    height: responsiveHeight(48)

                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: "#676767", fontFamily: 'Sen-Medium', fontSize: responsiveFontSize(1.7) }}>DELIVER ID</Text>
                        <Text style={{ color: "#676767", fontFamily: 'Sen-Medium', fontSize: responsiveFontSize(1.7) }}>#123456</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: responsiveWidth(75), alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                        <View style={{ backgroundColor: "#FFE4C3", width: responsiveWidth(7), height: responsiveHeight(4), alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                            <Icon source='food-turkey' size={20} color='#FF7622' />
                        </View>
                        <View style={{ width: "70%", marginLeft: "5%" }}>
                            <Text style={{ color: '#676767', fontFamily: 'Sen-Regular', fontSize: responsiveFontSize(1.7) }}>Pick Up Order</Text>
                            <Text style={{ color: "#000000", fontFamily: 'Sen-Bold', fontSize: responsiveFontSize(2) }}>062 kuhn plain suit 7</Text>
                        </View>
                        <Icon source='phone' size={30} color='#0DA700' />
                    </View>
                    <View style={{ flexDirection: 'row', width: responsiveWidth(75), alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: '10%' }}>
                        <View style={{ backgroundColor: "#FFE4C3", width: responsiveWidth(7), height: responsiveHeight(4), alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                            <Icon source='home' size={20} color='#FF7622' />
                        </View>
                        <View style={{ width: "70%", marginLeft: "5%" }}>
                            <Text style={{ color: '#676767', fontFamily: 'Sen-Regular', fontSize: responsiveFontSize(1.7) }}>Deliver Order To</Text>
                            <Text style={{ color: "#000000", fontFamily: 'Sen-Bold', fontSize: responsiveFontSize(2) }}>922 Willfredo Tunnel</Text>
                        </View>
                        <Icon source='phone' size={30} color='#0DA700' />
                    </View>
                    <TouchableOpacity style={{ width: responsiveWidth(67), alignSelf: 'center' }}>
                        <Text style={{ color: "#FF7622", fontFamily: 'Sen-Regular', marginTop: "7%" }}>Order Detail</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: "5%" }}>
                        <View style={{ flexDirection: 'row', backgroundColor: "#d0d0d0", width: responsiveWidth(15), alignItems: 'center', borderRadius: 5, justifyContent: 'center' }}>
                            <Icon source="tag-multiple" size={20} />
                            <Text style={{ color: "#676767", fontSize: 14 }}>$ 54</Text>
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: "#d0d0d0", width: responsiveWidth(15), alignItems: 'center', borderRadius: 5, justifyContent: 'center' }}>
                            <Icon source="clock" size={20} />
                            <Text style={{ color: "#676767", fontSize: 14 }}>12:30</Text>
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: "#d0d0d0", width: responsiveWidth(15), alignItems: 'center', borderRadius: 5, justifyContent: 'center' }}>
                            <Icon source="map-marker-radius" size={20} />
                            <Text style={{ color: "#676767", fontSize: 14 }}>1.2km</Text>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center', width: "100%", marginTop: "7%", marginLeft: "2%" }}>
                        <Text style={{ color: "#676767", fontFamily: 'Sen-Medium', }}>Comment</Text>
                        <Text style={{ color: "#000000", fontFamily: 'Sen-Bold', fontSize: responsiveFontSize(1.9), marginTop: "2%" }}>Call me when you are in entrance</Text>
                    </View>
                    <TouchableOpacity style={styles.submitButton} >
                        <Text style={styles.submitButtonText}>ACCEPT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignSelf: 'center', alignItems: 'center', marginTop: '3%' }}>
                        <Text style={{ color: "#676767", fontFamily: 'Sen-Regular', fontSize: responsiveFontSize(1.9) }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
                {/* 3rd order */}
                <View style={{
                    width: responsiveWidth(75), alignSelf: 'center', marginTop: '7%',
                    height: responsiveHeight(48)
                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: "#676767", fontFamily: 'Sen-Medium', fontSize: responsiveFontSize(1.7) }}>DELIVER ID</Text>
                        <Text style={{ color: "#676767", fontFamily: 'Sen-Medium', fontSize: responsiveFontSize(1.7) }}>#123456</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: responsiveWidth(75), alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                        <View style={{ backgroundColor: "#FFE4C3", width: responsiveWidth(7), height: responsiveHeight(4), alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                            <Icon source='food-turkey' size={20} color='#FF7622' />
                        </View>
                        <View style={{ width: "70%", marginLeft: "5%" }}>
                            <Text style={{ color: '#676767', fontFamily: 'Sen-Regular', fontSize: responsiveFontSize(1.7) }}>Pick Up Order</Text>
                            <Text style={{ color: "#000000", fontFamily: 'Sen-Bold', fontSize: responsiveFontSize(2) }}>062 kuhn plain suit 7</Text>
                        </View>
                        <Icon source='phone' size={30} color='#0DA700' />
                    </View>
                    <View style={{ flexDirection: 'row', width: responsiveWidth(75), alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: '10%' }}>
                        <View style={{ backgroundColor: "#FFE4C3", width: responsiveWidth(7), height: responsiveHeight(4), alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                            <Icon source='home' size={20} color='#FF7622' />
                        </View>
                        <View style={{ width: "70%", marginLeft: "5%" }}>
                            <Text style={{ color: '#676767', fontFamily: 'Sen-Regular', fontSize: responsiveFontSize(1.7) }}>Deliver Order To</Text>
                            <Text style={{ color: "#000000", fontFamily: 'Sen-Bold', fontSize: responsiveFontSize(2) }}>922 Willfredo Tunnel</Text>
                        </View>
                        <Icon source='phone' size={30} color='#0DA700' />
                    </View>
                    <TouchableOpacity style={{ width: responsiveWidth(67), alignSelf: 'center' }}>
                        <Text style={{ color: "#FF7622", fontFamily: 'Sen-Regular', marginTop: "7%" }}>Order Detail</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: "5%" }}>
                        <View style={{ flexDirection: 'row', backgroundColor: "#d0d0d0", width: responsiveWidth(15), alignItems: 'center', borderRadius: 5, justifyContent: 'center' }}>
                            <Icon source="tag-multiple" size={20} />
                            <Text style={{ color: "#676767", fontSize: 14 }}>$ 54</Text>
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: "#d0d0d0", width: responsiveWidth(15), alignItems: 'center', borderRadius: 5, justifyContent: 'center' }}>
                            <Icon source="clock" size={20} />
                            <Text style={{ color: "#676767", fontSize: 14 }}>12:30</Text>
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: "#d0d0d0", width: responsiveWidth(15), alignItems: 'center', borderRadius: 5, justifyContent: 'center' }}>
                            <Icon source="map-marker-radius" size={20} />
                            <Text style={{ color: "#676767", fontSize: 14 }}>1.2km</Text>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center', width: "100%", marginTop: "7%", marginLeft: "2%" }}>
                        <Text style={{ color: "#676767", fontFamily: 'Sen-Medium', }}>Comment</Text>
                        <Text style={{ color: "#000000", fontFamily: 'Sen-Bold', fontSize: responsiveFontSize(1.9), marginTop: "2%" }}>Call me when you are in entrance</Text>
                    </View>
                    <TouchableOpacity style={styles.submitButton} >
                        <Text style={styles.submitButtonText}>ACCEPT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignSelf: 'center', alignItems: 'center', marginTop: '3%' }}>
                        <Text style={{ color: "#676767", fontFamily: 'Sen-Regular', fontSize: responsiveFontSize(1.9) }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {

        width: responsiveWidth(100),
        backgroundColor: "#ffffff",
    },
    submitButton: {

        height: responsiveHeight(6.5),
        alignSelf: 'center',
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginTop: '4%',
        backgroundColor: '#FF7622'

    },
    submitButtonText: {
        fontFamily: "Sen-Medium",
        fontSize: responsiveFontSize(1.9),
        color: "#FFFFFF",
    },
})
