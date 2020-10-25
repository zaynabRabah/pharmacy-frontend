import axios from 'axios';
import {Dispatch} from 'redux';
import {IOrder} from '../models/itypes';
import {AppActions} from '../models/redux/index';
import {AppState} from '../reducers';

export const InitializeOrders = (
	orders: Array<IOrder>
): AppActions => ({
	type: 'INITIALIZE_ORDERS',
	orders,
});
export const CreateOrder = (order: IOrder): AppActions => ({
	type: 'CREATE_ORDER',
	order,
});
export const UpdateOrder = (order: IOrder): AppActions => ({
	type: 'UPDATE_ORDER',
	order,
});
export const DeleteOrder = (_id: string): AppActions => ({
	type: 'DELETE_ORDER',
	_id,
});

export const startInitializeOrders = () => {
	return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
		//
		axios({
			method: 'get',
			url: 'api/view/viewAllOrders',
		}).then((resp) => {
			dispatch(InitializeOrders(resp.data.api));
		});
	};
};

export const StartCreateOrder = (order: IOrder) => {
	return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
		//
		axios({
			method: 'post',
			url: 'createOrder',
			data: {
				title: order.title,
				subtitle: order.subtitle,
				rating: order.rating,
				instructor: order.instructor,
				duration: order.duration,
				lecturesCount: order.lecturesCount,
				level: order.level,
				photoURL: order.photoURL,
			},
		}).then((resp) => {
			dispatch(CreateOrder(resp.data)); //TO-Do maybe i need spread operator(...)
		});
	};
};
// TO-DO implement order update in orderReducer
export const startUpdateOrder = (order: IOrder) => {
	return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
		//
		axios({
			method: 'put',
			url: `order/${order._id}`,
			data: {
				title: order.title,
				subtitle: order.subtitle,
				rating: order.rating,
				instructor: order.instructor,
				duration: order.duration,
				lecturesCount: order.lecturesCount,
				level: order.level,
				photoURL: order.photoURL,
			},
		}).then((resp) => {
			dispatch(UpdateOrder(resp.data));
		});
	};
};

export const startDeleteOrder = (_id: string) => {
	return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
		//
		axios({
			method: 'delete',
			url: `order/${_id}`,
		}).then((resp) => {
			dispatch(DeleteOrder(resp.data._id));
		});
	};
};
