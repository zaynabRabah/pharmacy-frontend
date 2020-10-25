import { applyMiddleware, compose, createStore } from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import { AppActions } from '../models/redux';
import rootReducer, { AppState } from '../reducers'

export default () => {

  const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>))

  return store
}