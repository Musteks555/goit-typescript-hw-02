import css from "./ImageCard.module.css";

const ImageCard = ({ alt, src, onHandleClick, srcLarge }) => {
    return (
        <div className={css.imageContainer} data-src={srcLarge}>
            <img src={src} alt={alt} className={css.image} onClick={onHandleClick} />
        </div>
    );
};

export default ImageCard;
