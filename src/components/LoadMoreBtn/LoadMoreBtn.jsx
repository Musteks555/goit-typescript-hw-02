import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onHandleClick }) => {
    return (
        <button type="button" className={css.loadMoreBtn} onClick={onHandleClick}>
            Load more
        </button>
    );
};

export default LoadMoreBtn;
