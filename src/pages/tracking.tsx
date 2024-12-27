import React from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-paper/src/components/Icon';
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

export default function Tracking() {
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
            source={require('../assets/BackWhite.png')}
            style={{ width: responsiveWidth(2), height: responsiveHeight(2) }}
          />
        </TouchableOpacity>
        <Text style={styles.mainText}>Track Order</Text>
       
      </View>

      <View style={{marginTop: "5%"}}>
        <Image source={require('../assets/TrackOrder.png')} style={{width: responsiveWidth(63), height: responsiveHeight(40.5)}}/>
      </View>
      <View key={order.id} style={styles.card}>
            {/* Order ID Section */}
            <View style={styles.row}>
              <Text style={styles.labelText}>Order ID</Text>
              <Text style={styles.labelText}>{order.id}</Text>
            </View>

            {/* Pick Up Order Section */}
            <View style={styles.orderSection}>
              <View style={styles.iconContainer}>
                <Icon source="food-turkey" size={20} color="#FF7622" />
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.regularText}>Pick Up Order</Text>
                <Text style={styles.boldText}>{order.pickupAddress}</Text>
              </View>
              <TouchableOpacity>
                <Icon source="phone" size={30} color="#0DA700" />
              </TouchableOpacity>
            </View>

            {/* Delivery Order Section */}
            <View style={[styles.orderSection, { marginTop: '10%' }]}>
              <View style={styles.iconContainer}>
                <Icon source="home" size={20} color="#FF7622" />
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.regularText}>Deliver Order To</Text>
                <Text style={styles.boldText}>{order.deliveryAddress}</Text>
              </View>
              <TouchableOpacity>
                <Icon source="phone" size={30} color="#0DA700" />
              </TouchableOpacity>
            </View>


            {/* Order Summary Section */}
            <View style={styles.summaryRow}>
              <View style={styles.summaryItem}>
                <Icon source="tag-multiple" size={20} />
                <Text style={styles.summaryText}>$ {order.total}</Text>
              </View>
              <View style={styles.summaryItem}>
                <Icon source="clock" size={20} />
                <Text style={styles.summaryText}>{order.date}</Text>
              </View>
              <View style={styles.summaryItem}>
                <Icon source="map-marker-radius" size={20} />
                <Text style={styles.summaryText}>{order.distance}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.cancelButton}
            
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
      </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#D0D9E1',
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
      
    },
    backButtonWrapper: {
        backgroundColor: '#212029',
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
        marginLeft: "5%"
      },
      orderIdText: {
        fontSize: responsiveFontSize(2),
        fontFamily: 'Sen-Medium',
        color: '#FF7622',
      },
      errorText: {
        fontSize: responsiveFontSize(2),
        color: 'red',
        marginTop: '20%',
      },
      card: {
        marginTop: "20%",
        width: responsiveWidth(90),
        marginBottom: responsiveHeight(3),
        padding: responsiveWidth(5),
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      labelText: {
        color: '#676767',
        fontFamily: 'Sen-Medium',
        fontSize: responsiveFontSize(1.7),
      },
      orderSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: responsiveHeight(2),
      },
      iconContainer: {
        backgroundColor: '#FFE4C3',
        width: responsiveWidth(10),
        height: responsiveWidth(10),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      },
      infoContainer: {
        flex: 1,
        marginHorizontal: responsiveWidth(3),
      },
      regularText: {
        color: '#676767',
        fontFamily: 'Sen-Regular',
        fontSize: responsiveFontSize(1.7),
      },
      boldText: {
        color: '#000000',
        fontFamily: 'Sen-Bold',
        fontSize: responsiveFontSize(2),
        marginTop: 4,
      },
      detailButton: {
        alignSelf: 'center',
        marginTop: responsiveHeight(2),
        padding: responsiveHeight(1),
      },
      detailButtonText: {
        color: '#FF7622',
        fontFamily: 'Sen-Regular',
        fontSize: responsiveFontSize(1.8),
      },
      summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: responsiveHeight(2),
      },
      summaryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        padding: responsiveWidth(2),
        borderRadius: 8,
        minWidth: responsiveWidth(25),
        justifyContent: 'center',
      },
      summaryText: {
        color: '#676767',
        fontSize: responsiveFontSize(1.6),
        marginLeft: responsiveWidth(2),
        fontFamily: 'Sen-Regular',
      },
      cancelButton: {
        alignSelf: 'center',
        marginTop: responsiveHeight(1.5),
        padding: responsiveHeight(1),
      },
      cancelButtonText: {
        color: '#676767',
        fontFamily: 'Sen-Regular',
        fontSize: responsiveFontSize(1.9),
      },
})