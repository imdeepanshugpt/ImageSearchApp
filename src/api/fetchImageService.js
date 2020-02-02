import unsplash from '../api/unsplash';
const fetchImages = async (data) => {
    const response = await unsplash.get('/search/photos', {
        params: { query: data }
    });

    if (response.status >= 400) {
        throw new Error(response.errors);
    }
    return response.data.results;
}
export { fetchImages };