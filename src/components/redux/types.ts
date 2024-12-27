// types.ts
export interface Order {
  id: string;
  customerName: string;
  total: number;
  date: string;
  pickupAddress: string;
  deliveryAddress: string;
  comment: string;
  distance: string;
}

export interface OrderState {
  orders: Order[];
  acceptedOrders: Order[];
  loading: boolean;
  error: string | null;
}

// Action Types
export const FETCH_ORDERS = 'FETCH_ORDERS';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';
export const ACCEPT_ORDER = 'ACCEPT_ORDER';
export const CANCEL_ORDER = 'CANCEL_ORDER';
export const SET_SELECTED_ORDER = 'SET_SELECTED_ORDER';

interface FetchOrdersAction {
  type: typeof FETCH_ORDERS;
}

interface FetchOrdersSuccessAction {
  type: typeof FETCH_ORDERS_SUCCESS;
  payload: Order[];
}

interface FetchOrdersFailureAction {
  type: typeof FETCH_ORDERS_FAILURE;
  payload: string;
}

interface AcceptOrderAction {
  type: typeof ACCEPT_ORDER;
  payload: string; // orderId
}

interface CancelOrderAction {
  type: typeof CANCEL_ORDER;
  payload: string; // orderId
}

interface SetSelectedOrderAction {
  type: typeof SET_SELECTED_ORDER;
  payload: Order;
}

export type OrderActionTypes =
  | FetchOrdersAction
  | FetchOrdersSuccessAction
  | FetchOrdersFailureAction
  | AcceptOrderAction
  | CancelOrderAction
  | SetSelectedOrderAction;