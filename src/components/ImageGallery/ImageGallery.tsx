import { FC } from "react";

import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

import { Images } from "../types";

interface ImageGalleryProps {
    images: Images[];
    onHandleClick: (event: any) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onHandleClick }) => {
    return (
        <ul className={css.galleryList}>
            {images.map((image) => {
                return (
                    <li key={image.id} className={css.galleryItem}>
                        <ImageCard image={image} onHandleClick={onHandleClick} />
                    </li>
                );
            })}
        </ul>
    );
};

export default ImageGallery;
