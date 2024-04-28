import css from "./ImageModal.module.css";

import Modal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, largeImg }) => {
    Modal.setAppElement("#root");

    return (
        <>
            <Modal isOpen={isOpen} onRequestClose={onRequestClose} className={css.modal} overlayClassName={css.modalOverlay}>
                <img src={largeImg.dataSrc} alt={largeImg.dataAlt} className={css.modalImg} />
            </Modal>
        </>
    );
};

export default ImageModal;
