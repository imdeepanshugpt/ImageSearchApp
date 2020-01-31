import unsplash from '../../api/unsplash';
import Images from '../../constants';

export const fetchFlightDetails = (text) => async dispatch => {
    const response = await unsplash.get('/search/photos', {
        params: { query: text }
    });
    dispatch({ type: Images.FETCH_IMAGES, payload: response.data });
}
