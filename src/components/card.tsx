// PickUp.tsx
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-paper/src/components/Icon';
import {
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import { NavigationProp } from '@react-navigation/native';

interface Order {
  id: string;
  customerName: string;
  total: number;
  date: string;
  pickupAddress: string;
  deliveryAddress: string;
  comment: string;
  distance: string;
}



const { height } = Dimensions.get('window');

export default function PickUp() {
  const navigation = useNavigation();

  // Sample orders data
  const orders: Order[] = [
    {
      id: '#123456',
      customerName: '062 Kuhn Plain Suit 7',
      total: 54,
      date: '12:30',
      pickupAddress: '062 Kuhn Plain Suit 7',
      deliveryAddress: '922 Willfredo Tunnel',
      comment: 'Call me when you are at the entrance',
      distance: '1.2km',
    },
    {
      id: '#654321',
      customerName: '845 Cedar Street',
      total: 72,
      date: '14:00',
      pickupAddress: '845 Cedar Street',
      deliveryAddress: '730 Birch Avenue',
      comment: 'Leave at the front desk',
      distance: '3.5km',
    },
    {
      id: '#999991',
      customerName: '845 Cedar Street',
      total: 72,
      date: '14:00',
      pickupAddress: '845 Cedar Street',
      deliveryAddress: '730 Birch Avenue',
      comment: 'Leave at the front desk',
      distance: '3.5km',
    },
  ];




  return (
    <View style={[styles.container, { height }]}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {orders.map((order) => (
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

            {/* Order Detail Button */}
            <TouchableOpacity
            
            >
              <Text style={styles.detailButtonText}>Order Detail</Text>
            </TouchableOpacity>

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

            {/* Comment Section */}
            <View style={styles.commentSection}>
              <Text style={styles.labelText}>Comment</Text>
              <Text style={styles.commentText}>{order.comment}</Text>
            </View>

            {/* Action Buttons */}
            <TouchableOpacity
             
            >
              <Text style={styles.submitButtonText}>ACCEPT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
            
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        ))}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContainer: {
    width: responsiveWidth(100),
    alignItems: 'center',
    paddingTop: responsiveHeight(2),
  },
  card: {
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
    marginLeft: "5%",
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
  commentSection: {
    marginTop: responsiveHeight(2),
  },
  commentText: {
    color: '#000000',
    fontFamily: 'Sen-Bold',
    fontSize: responsiveFontSize(1.9),
    marginTop: responsiveHeight(1),
  },
  submitButton: {
    height: responsiveHeight(6.5),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: responsiveHeight(2),
    backgroundColor: '#FF7622',
  },
  submitButtonText: {
    fontFamily: "Sen-Medium",
    fontSize: responsiveFontSize(1.9),
    color: "#FFFFFF",
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
  bottomSpacing: {
    height: responsiveHeight(25),
  },
});