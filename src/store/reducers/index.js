import { combineReducers } from 'redux';
import imagesReducer from './imageReducer';
const rootReducer = combineReducers({
    images: imagesReducer
});

export default rootReducer;