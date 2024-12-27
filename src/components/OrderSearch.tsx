// OrderSearch.tsx

import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
    responsiveFontSize,
    responsiveWidth,
    responsiveHeight
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-paper/src/components/Icon';

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

interface OrderSearchProps {
    orders: Order[];
    onOrderSelect: (order: Order) => void;
    style?: any;
}

const OrderSearch: React.FC<OrderSearchProps> = ({ orders, onOrderSelect, style }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);

    const handleSearch = (text: string) => {
        setSearchQuery(text);
        setIsSearching(true);

        // Filter orders based on order ID
        const filtered = orders.filter((order) =>
            order.id.toLowerCase().includes(text.toLowerCase())
        );

        setFilteredOrders(filtered);
        setIsSearching(false);
    };

    const renderOrderItem = ({ item }: { item: Order }) => (
        <TouchableOpacity
            style={styles.orderItem}
            onPress={() => onOrderSelect(item)}
        >
            <View style={styles.orderHeader}>
                <Text style={styles.orderId}>Order {item.id}</Text>
                <Text style={styles.orderTime}>{item.date}</Text>
            </View>
            <View style={styles.addressContainer}>
                <View style={styles.iconTextContainer}>
                    <View style={styles.iconContainer}>
                        <Icon source='food-turkey' size={20} color='#FF7622' />
                    </View>
                    <View>
                        <Text style={styles.addressLabel}>Pick Up Order</Text>
                        <Text style={styles.address}>{item.pickupAddress}</Text>
                    </View>
                </View>
                <View style={styles.iconTextContainer}>
                    <View style={styles.iconContainer}>
                        <Icon source='home' size={20} color='#FF7622' />
                    </View>
                    <View>
                        <Text style={styles.addressLabel}>Deliver Order To</Text>
                        <Text style={styles.address}>{item.deliveryAddress}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={[styles.container, style]}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search by Order ID"
                    value={searchQuery}
                    onChangeText={handleSearch}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor="#676767"
                />
                {isSearching && (
                    <ActivityIndicator style={styles.loader} size="small" />
                )}
            </View>

            {searchQuery.length > 0 && (
                <FlatList
                    data={filteredOrders}
                    renderItem={renderOrderItem}
                    keyExtractor={(item) => item.id}
                    style={styles.resultsList}
                    ListEmptyComponent={
                        <Text style={styles.noResults}>No orders found</Text>
                    }
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(90),
        alignSelf: 'center',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: responsiveHeight(2),
    },
    searchInput: {
        flex: 1,
        height: responsiveHeight(6),
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: responsiveWidth(4),
        fontSize: responsiveFontSize(1.8),
        fontFamily: 'Sen-Regular',
        backgroundColor: '#fff',
    },
    loader: {
        marginLeft: responsiveWidth(2),
    },
    resultsList: {
        maxHeight: responsiveHeight(40),
    },
    orderItem: {
        backgroundColor: '#fff',
        padding: responsiveWidth(4),
        borderRadius: 8,
        marginBottom: responsiveHeight(1),
        borderWidth: 1,
        borderColor: '#eee',
    },
    orderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: responsiveHeight(1),
    },
    orderId: {
        fontSize: responsiveFontSize(1.7),
        fontFamily: 'Sen-Bold',
        color: '#676767',
    },
    orderTime: {
        fontSize: responsiveFontSize(1.7),
        fontFamily: 'Sen-Medium',
        color: '#676767',
    },
    addressContainer: {
        gap: responsiveHeight(2),
    },
    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        backgroundColor: "#FFE4C3",
        width: responsiveWidth(7),
        height: responsiveHeight(4),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: responsiveWidth(3),
    },
    addressLabel: {
        color: '#676767',
        fontFamily: 'Sen-Regular',
        fontSize: responsiveFontSize(1.7),
    },
    address: {
        color: "#000000",
        fontFamily: 'Sen-Bold',
        fontSize: responsiveFontSize(2),
    },
    noResults: {
        textAlign: 'center',
        color: '#676767',
        fontFamily: 'Sen-Regular',
        fontSize: responsiveFontSize(1.8),
        marginTop: responsiveHeight(2),
    },
});

export default OrderSearch;