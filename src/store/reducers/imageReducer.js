import IMAGES from '../../constants';
const imagesReducer = (state = [], action) => {
    switch (action.type) {
        case IMAGES.SET_IMAGES:
            return [...action.payload];
        default:
            return state;
    }
}

export default imagesReducer;