import { IOrder } from "../itypes";

export const INITIALIZE_ORDERS = "INITIALIZE_ORDERS";
export const CREATE_ORDER = "CREATE_ORDER";
export const UPDATE_ORDER = "UPDATE_ORDER";
export const DELETE_ORDER = "DELETE_ORDER";

export interface initializeOrderAction {
    type: typeof INITIALIZE_ORDERS;
    orders: Array<IOrder>;
}

export interface createOrderAction {
    type: typeof CREATE_ORDER | typeof UPDATE_ORDER;
    order: IOrder;
}

export interface deleteOrderAction {
    type: typeof DELETE_ORDER;
    _id: string;
}

export type OrdersAction = initializeOrderAction | createOrderAction | deleteOrderAction;