import React, { Component } from 'react'
import {Button} from  "@material-ui/core";
import ImageUploader from 'react-images-upload';
import  './imageUploadPreview.css'

export default class ImageUploadPreview extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pictures: [] , 
      needRefresh : false 
    };
    this.onDrop = this.onDrop.bind(this);
    this.onFileSelectSuccess = props.onFileSelectSuccess;
    this.onFileRemove = props.onFileRemove;
  }

  onDrop(picture) {
    let urlObjtmp = URL.createObjectURL(picture[0]);
    this.setState({
      pictures: urlObjtmp,
    });
    this.onFileSelectSuccess(picture[0]);
  }
  removeImage = () => {
    this.setState({
      pictures: [],
    });
    this.onFileRemove();
  };


  componentWillReceiveProps(props) {
    console.log("componentWillReceiveProps" +  props.needRefresh);
    this.setState({ needRefresh: props.needRefresh })
    if ( this.state.needRefresh )
    {
      this.removeImage();
    }
  }

  render() {
    if (this.state.pictures.length > 0) {
      return (
        <>
        <img src={this.state.pictures} className="imagePreview" alt=""></img>
        <Button  color="secondary" onClick={this.removeImage}>Remove Image</Button>
        </>
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
