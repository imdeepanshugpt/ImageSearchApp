import React from 'react';
import { ImageCard } from './ImageCard';
function clipboard(imageUrl) {
    const textArea = document.createElement("textarea");
    textArea.value = imageUrl;
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
    document.body.removeChild(textArea);
}
const ImageList = (props) => {
    const images = props.images.map((image) => {
        return (
            <div key={image.id} className="col-sm" style={{ borderStyle: 'soild' }}>
                <ImageCard image={image} />
                <div className="ui buttons" style={{ marginLeft: '120px' }}>
                    <button className="ui button" onClick={() => clipboard(image.urls.regular)}>Copy URL</button>
                    <div className="or"></div>
                    <a href={image.urls.regular} target="_blank" rel="noopener noreferrer">
                        <button className="ui positive button active">Download</button>
                    </a>
                </div>
            </div>
        );
    });
    return (
        <div className="row">
            {images}
        </div>
    );
};
export default ImageList;