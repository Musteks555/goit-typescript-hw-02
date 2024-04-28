import { FC, MouseEvent } from "react";

import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
    onHandleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onHandleClick }) => {
    return (
        <button type="button" className={css.loadMoreBtn} onClick={onHandleClick}>
            Load more
        </button>
    );
};

export default LoadMoreBtn;
