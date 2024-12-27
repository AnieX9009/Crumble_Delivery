// action.ts
import { Dispatch } from 'redux';
import {
  Order,
  OrderActionTypes,
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
  ACCEPT_ORDER,
  CANCEL_ORDER,
  SET_SELECTED_ORDER
} from './types';

// Action Creators
export const fetchOrders = () => {
  return async (dispatch: Dispatch<OrderActionTypes>) => {
    dispatch({ type: FETCH_ORDERS });

    try {
      // Sample orders data (replace with your API call)
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
      ];

      dispatch({
        type: FETCH_ORDERS_SUCCESS,
        payload: orders,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ORDERS_FAILURE,
        payload: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  };
};

export const acceptOrder = (orderId: string): OrderActionTypes => ({
  type: ACCEPT_ORDER,
  payload: orderId,
});

export const cancelOrder = (orderId: string): OrderActionTypes => ({
  type: CANCEL_ORDER,
  payload: orderId,
});

export const setSelectedOrder = (order: Order): OrderActionTypes => ({
  type: SET_SELECTED_ORDER,
  payload: order,
});
