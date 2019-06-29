import React from 'react';
import unsplash from '../api/unsplash';
import SearhBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] }
    onSearchBar = async (text) => {
        console.log('App', text);
        const response = await unsplash.get('/search/photos', {
            params: { query: text }
        });
        this.setState({ images: response.data.results });
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

export default App;