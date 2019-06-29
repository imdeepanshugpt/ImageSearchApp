import React from 'react';

export class ImageCard extends React.Component {
    render() {
        const { description, urls } = this.props.image;
        return (
            <img src={urls.regular} alt={description} style={{ width: '500px', height: '350px', padding: '5px' }} />
        );
    }
}
