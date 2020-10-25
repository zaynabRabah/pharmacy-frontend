import { OrdersAction } from "../models/redux/orderType";
import { IOrder } from "../models/itypes";

const initState: Array<IOrder> = []
const ordersReducer = (state = initState, action: OrdersAction): Array<IOrder> => {
    switch(action.type){
        case 'INITIALIZE_ORDERS':
            
            return action.orders
        case 'CREATE_ORDER':

            return[...state, action.order]
        case 'UPDATE_ORDER':

            return state.map(order => {
                if (action.order._id !== order._id) {
                    return {
                        ...order,
                        ...action.order
                    };
                } else {
                    return order;
                } 
            });
        case 'DELETE_ORDER':

            return state.filter(({_id}) => action._id !== _id )
        default:
            return state;
    }
    
}
export default ordersReducer;