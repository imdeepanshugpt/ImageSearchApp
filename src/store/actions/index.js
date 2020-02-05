import IMAGES from '../../constants';

const setImages = (images) => ({
    type: IMAGES.SET_IMAGES,
    payload: images
});

export { setImages };