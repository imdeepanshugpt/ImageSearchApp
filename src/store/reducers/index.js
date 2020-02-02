import { combineReducers } from 'redux';
import Images from '../../constants';

const searchData = (data = 'car', action) => {
    if(action.type === Images.SEARCH_DATA){
        return action.payload;
    }
    return data;
}
const imagesReducer = (images = [], action) => {
    if (action.type === Images.SET_IMAGES) {
        return action.payload;
    }
    return images;
}

export default combineReducers({
    images: imagesReducer,
    search: searchData
})