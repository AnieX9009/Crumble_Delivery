import React from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import {
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import { Order } from '../components/redux/types';

const { height } = Dimensions.get('window');

type OrderDetailsRouteProp = RouteProp<{ params: { order: Order } }, 'params'>;

export default function Orderdetails() {
  const navigation = useNavigation();
  const route = useRoute<OrderDetailsRouteProp>();
  const order = route.params?.order;

  // Return an error if no order is found
  if (!order) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Order not found!</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { height }]}>
      <StatusBar
        hidden={false}
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      {/* Header Section */}
      <View style={styles.mainButton}>
        <TouchableOpacity
          style={styles.backButtonWrapper}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../assets/Back.png')}
            style={{ width: responsiveWidth(2), height: responsiveHeight(2) }}
          />
        </TouchableOpacity>
        <Text style={styles.mainText}>Order Details</Text>
        <Text style={styles.orderIdText}>{order.id}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Pickup Date & Time */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Pickup Date & Time</Text>
          <View style={styles.row}>
          <Text style={styles.regularText1}>November 02-2021</Text>
            <Text style={styles.regularText}>{order.date}</Text>
            </View>
        </View>

        {/* Pickup Location */}
        <View style={styles.locationSection}>
          <IconButton icon="circle-slice-8" size={20} iconColor='#F99026' />
          <View style={styles.locationInfo}>
            <Text style={styles.locationHeader}>Pickup Location</Text>
            <Text style={styles.locationText}>{order.pickupAddress}</Text>
          </View>
        </View>

        {/* Drop Off Location */}
        <View style={styles.locationSection}>
          <IconButton icon="circle-slice-8" size={20} />
          <View style={styles.locationInfo}>
            <Text style={styles.locationHeader}>Drop Off Location</Text>
            <Text style={styles.locationText}>{order.deliveryAddress}</Text>
          </View>
        </View>

        {/* List of Items */}
        <Text style={styles.sectionHeader}>List Of Items</Text>
        
          <View  style={styles.itemRow}>
            <Text style={styles.itemName}>Snacks</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: "2%"}}>
            <Text style={styles.itemQuantity}>XXXXXXXX</Text>
           <Text style={{fontFamily: 'Sen-Regular', fontSize: responsiveFontSize(2.5), color: "#000000"}}>2</Text>
            </View>
            <Text style={styles.itemPrice}>${order.total}</Text>
          </View>
     

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton1}>
          <Text style={styles.saveButtonText1}>Call The Restaurant</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Call The Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton2}>
          <Text style={styles.saveButtonText}>Call The Customer</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: '10%',
  },
  mainButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15%',
    width: responsiveWidth(90),
    justifyContent: 'space-between',
  },
  backButtonWrapper: {
    backgroundColor: '#ECF0F4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: responsiveHeight(6),
    width: responsiveWidth(11.5),
  },
  mainText: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'Sen-Bold',
    color: '#181C2E',
  },
  orderIdText: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Sen-Medium',
    color: '#FF7622',
  },
  section: {
   
    width: responsiveWidth(85),
    marginTop: '5%',
  },
  sectionHeader: {
    color: '#FF7622',
    fontFamily: 'Sen-SemiBold',
    fontSize: responsiveFontSize(2),
    alignSelf: 'flex-start',
    marginTop: "5%"
  },
  row: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginTop: '3%',
  },
  regularText: {
    color: '#676767',
    fontFamily: 'Sen-Medium',
    fontSize: responsiveFontSize(1.8),
    marginLeft: "5%"
  },
  regularText1: {
    color: '#676767',
    fontFamily: 'Sen-Medium',
    fontSize: responsiveFontSize(1.8),
  
  },
  locationSection: {
    flexDirection: 'row',
    marginTop: '5%',
    width: responsiveWidth(85),
  },
  locationInfo: {
    marginLeft: '5%',
  },
  locationHeader: {
    color: '#000000',
    fontFamily: 'Sen-Regular',
    fontSize: responsiveFontSize(2),
  },
  locationText: {
    color: '#808080',
    fontFamily: 'Sen-Regular',
    fontSize: responsiveFontSize(1.9),
  },
  itemRow: {
    width: responsiveWidth(85),
    
    
    marginTop: '5%',
  },
  itemName: {
    color: '#000000',
    fontFamily: 'Sen-Regular',
    fontSize: responsiveFontSize(2),
  },
  itemQuantity: {
    color: '#808080',
    fontFamily: 'Sen-Regular',
    fontSize: responsiveFontSize(1.7),
  },
  itemPrice: {
    color: '#F99026',
    fontFamily: 'Sen-Regular',
    fontSize: responsiveFontSize(2.5),
  },
  saveButton: {
    height: responsiveHeight(7),
    width: '60%',
    marginTop: '3%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    alignSelf: 'flex-start',
    borderColor: "#FF7622"
 
  },
  saveButton1: {
    height: responsiveHeight(7),
    width: '60%',
    marginTop: '10%',
    backgroundColor: '#FF7622',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
   
    alignSelf: 'flex-start',
    
 
  },
  saveButton2: {
    height: responsiveHeight(7),
    width: '60%',
    marginTop: '15%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    alignSelf: 'flex-end',
    borderColor: "#FF7622"
    
 
  },
  saveButtonText1: {
    fontFamily: 'Sen-Medium',
    fontSize: responsiveFontSize(2),
    color: '#FFFFFF',
  },
  saveButtonText: {
    fontFamily: 'Sen-Medium',
    fontSize: responsiveFontSize(2),
    color: '#FF7622',
  },
  errorText: {
    fontSize: responsiveFontSize(2),
    color: 'red',
    marginTop: '20%',
  },
});
