import { takeEvery } from 'redux-saga/effects';

// eslint-disable-next-line require-yield
function* handleImagesLoad() {
    console.log('fetching images from unsplash');
}
function* rootSaga() {
    yield takeEvery('FETCHING IMAGES', handleImagesLoad)
    console.log('Hey World from root Saga');
}

export default rootSaga;