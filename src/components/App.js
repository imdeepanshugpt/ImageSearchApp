import React from 'react';
import SearhBar from './SearchBar';
import ImageList from './ImageList';
import { connect } from 'react-redux';
import IMAGES from '../constants';
import { store } from '../index';

class App extends React.Component {
    state = { images: [] }

    onSearchBar = async (text) => {
        store.dispatch({ type: IMAGES.LOAD_IMAGES, payload: text });
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearhBar onSubmit={this.onSearchBar} />
                Found: {this.props.images.length} images
                <ImageList images={this.props.images} />
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