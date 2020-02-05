import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchImages } from '../../api/fetchImageService';
import IMAGES from '../../constants'
import { setImages } from '../actions';

function* fetchImageService(action) {
    const images = yield call(fetchImages, action.payload);
    yield put(setImages(images));
}
function* rootSaga() {
    yield takeEvery(IMAGES.LOAD_IMAGES, fetchImageService);
}

export default rootSaga;