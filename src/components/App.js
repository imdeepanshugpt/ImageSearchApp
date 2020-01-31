import React from 'react';
import unsplash from '../api/unsplash';
import SearhBar from './SearchBar';
import ImageList from './ImageList';
import { Provider } from 'react-redux';

import configureStore from '../store/storeConfig';

const store = configureStore();


class App extends React.Component {
    state = { images: [] }
    onSearchBar = async (text) => {
        // store.dispatch({type:'FETCHING IMAGES'});
        console.log('App', text);
        const response = await unsplash.get('/search/photos', {
            params: { query: text }
        });
        this.setState({ images: response.data.results });
        // store.dispatch({type:'images loaded'});
    }
    render() {
        return (
            <Provider store={store}>
                <div className="ui container" style={{ marginTop: '10px' }}>
                    <SearhBar onSubmit={this.onSearchBar} />
                    Found: {this.state.images.length} images
                <ImageList images={this.state.images} />
                </div>
            </Provider>
        );
    }
}

export default App;