//import counterReducer from '../features/counter/counterSlice';
import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userState: userReducer,
});

export default rootReducer;
