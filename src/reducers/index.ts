import authReducer from './authReducer'
import ordersReducer from './ordersReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    orders: ordersReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;