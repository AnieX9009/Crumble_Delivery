import {
  OrderState,
  OrderActionTypes,
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
  ACCEPT_ORDER,
  CANCEL_ORDER,
  SET_SELECTED_ORDER,
} from './types';

const initialState: OrderState = {
  orders: [],
  acceptedOrders: [],
  loading: false,
  error: null,
};

export const orderReducer = (
  state = initialState,
  action: OrderActionTypes
): OrderState => {
  switch (action.type) {
    case FETCH_ORDERS:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };

    case FETCH_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ACCEPT_ORDER: {
      const acceptedOrder = state.orders.find(order => order.id === action.payload);
      if (!acceptedOrder) return state;

      return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.payload),
        acceptedOrders: [...state.acceptedOrders, acceptedOrder],
      };
    }

    case CANCEL_ORDER:
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.payload),
      };

    case SET_SELECTED_ORDER:
      return {
        ...state,
        selectedOrder: action.payload,
      };

    default:
      return state;
  }
};