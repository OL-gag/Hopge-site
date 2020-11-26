import React, { Component } from 'react'
import ImageUploader from 'react-images-upload';
import Image from 'material-ui-image'

export default class ImageUploadPreview extends Component {

    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: URL.createObjectURL(picture[0])
        });
    }

    removeImage = id => {
        this.setState({
            pictures: this.state.pictures.filter(image => image.public_id !== id)
        })
      }

    render() {

        if ( this.state.pictures.length > 0)
        {
            return (  <img src={this.state.pictures} width="300" height="150"/> )
        }

        return (

            <div>
                <ImageUploader
                  withIcon={true}
                  buttonText="Choose images"
                  onChange={this.onDrop}
                  imgExtension={[".jpg", ".png"]}
                  maxFileSize={5242880}
                />
            </div>
        )
    }
}
