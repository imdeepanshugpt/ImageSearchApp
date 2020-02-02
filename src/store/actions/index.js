import Images from '../../constants';

const setImages = (images) => ({
    type: Images.SET_IMAGES,
    payload: images
});

export { setImages };