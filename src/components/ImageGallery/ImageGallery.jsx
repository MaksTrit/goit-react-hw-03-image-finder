import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImgGalleryStyled } from './ImageGallery.styled';
import { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    const pictures = this.props.pictures;

    return (
      <ImgGalleryStyled>
        {pictures.map(({ id, webformatURL, tags, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              smallImg={webformatURL}
              tags={tags}
              largeImg={largeImageURL}
            />
          );
        })}
      </ImgGalleryStyled>
    );
  }
}
