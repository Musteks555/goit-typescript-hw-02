import { FC } from "react";
import { Images } from "../types";

import css from "./ImageCard.module.css";

interface ImageCardProps {
    image: Images;
    onHandleClick: (event: any) => void;
}

const ImageCard: FC<ImageCardProps> = ({ image, onHandleClick }) => {
    return (
        <div className={css.imageContainer} data-src={image.urls.regular}>
            <img src={image.urls.small} alt={image.alt_description} className={css.image} onClick={onHandleClick} />
        </div>
    );
};

export default ImageCard;
