import { combineReducers } from 'redux';
import Images from '../../constants';

const INITIAL_STATE = [];
const imagesReducer = (images = INITIAL_STATE, action) => {
    if (action.type === Images.FETCH_IMAGES) {
        return action.payload;
    }
    return images;
}

export default combineReducers({
    images: imagesReducer
})