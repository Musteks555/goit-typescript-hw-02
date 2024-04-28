import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items, onHandleClick }) => {
    return (
        <ul className={css.galleryList}>
            {items.map((item) => {
                return (
                    <li key={item.id} className={css.galleryItem}>
                        <ImageCard
                            alt={item.alt_description}
                            src={item.urls.small}
                            onHandleClick={onHandleClick}
                            srcLarge={item.urls.regular}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default ImageGallery;
