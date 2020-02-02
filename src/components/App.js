import React from 'react';
import SearhBar from './SearchBar';
import ImageList from './ImageList';
import { connect } from 'react-redux';
import IMAGES from'../constants';
import configureStore from '../store/storeConfig';
const store = configureStore();

class App extends React.Component {
    state = { images: [] }
    onSearchBar = async (text) => {
        store.dispatch({type: IMAGES.LOAD_IMAGES, payload: text})
        // const response = await unsplash.get('/search/photos', {
        //     params: { query: text }
        // });
        // this.setState({ images: response.data.results });
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearhBar onSubmit={this.onSearchBar} />
                Found: {this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        images: state.images
    }
}
export default connect(mapStateToProps, null)(App);