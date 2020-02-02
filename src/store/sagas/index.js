import { put, call, takeEvery, select } from 'redux-saga/effects';
import { fetchImages } from '../../api/fetchImageService';
import IMAGES from '../../constants'
import { setImages } from '../actions';

const search = state => state.search;
function* fetchImageService() {
    const searchData = yield select(search);
    const images = yield call(fetchImages, searchData);
    console.log('images', images);
    yield put(setImages(images));
}
function* rootSaga() {
    console.log('Hello World from root Saga');
    yield takeEvery(IMAGES.LOAD_IMAGES,fetchImageService);

}

export default rootSaga;