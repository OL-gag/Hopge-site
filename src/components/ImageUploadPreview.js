import React, { Component } from 'react'
import ImageUploader from 'react-images-upload';
import  './imageUploadPreview.css'

export default class ImageUploadPreview extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
    this.onFileSelectSuccess = props.onFileSelectSuccess;
  }

  onDrop(picture) {
    let urlObjtmp = URL.createObjectURL(picture[0]);
    this.setState({
      pictures: urlObjtmp,
    });
    this.onFileSelectSuccess(picture[0]);
  }

  removeImage = (id) => {
    this.setState({
      pictures: this.state.pictures.filter((image) => image.public_id !== id),
    });
  };

  render() {
    if (this.state.pictures.length > 0) {
      return (
        <img src={this.state.pictures} className="imagePreview" alt=""></img>
      );
    }

    return (
      <div className="imgUpload">
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".png"]}
          maxFileSize={5242880}
        />
      </div>
    );
  }
}
