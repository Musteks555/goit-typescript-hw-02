import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { fetchImagesWithQuery } from "../../images-api";

import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

function App() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [loadMore, setLoadMore] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState(null);
    const [page, setPage] = useState(1);
    const [largeImg, setLargeImg] = useState({ dataSrc: "", dataAlt: "" });

    function openModal(event) {
        let dataSrc = "";
        let dataAlt = "";
        if (event.currentTarget.tagName === "DIV") {
            dataSrc = event.currentTarget.dataset.src;
            dataAlt = event.currentTarget.firstElementChild.getAttribute("alt");
        } else {
            dataSrc = event.currentTarget.parentNode.dataset.src;
            dataAlt = event.currentTarget.getAttribute("alt");
        }

        onSetLargeImg({ dataSrc, dataAlt });

        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    useEffect(() => {
        if (searchQuery === null) return;

        async function fetchDataByQuery() {
            try {
                setLoadMore(false);
                setError(false);
                setLoading(true);

                const data = await fetchImagesWithQuery({ searchQuery, page });
                console.log(data);

                setImages((prevState) => prevState.concat(data.results));

                if (data.results.length) {
                    setLoadMore(true);
                } else {
                    toast.error("Unfortunately, no results were found.");
                }
            } catch (error) {
                console.log(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchDataByQuery();
    }, [searchQuery, page]);

    const onSetSearchQuery = (query) => {
        setSearchQuery(query);
        setPage(1);
        setImages([]);
    };

    const onSetLargeImg = (data) => {
        setLargeImg(data);
    };

    const onSetPage = () => {
        setPage((prevState) => prevState + 1);
    };

    return (
        <>
            <SearchBar onSearch={onSetSearchQuery} />
            {loading && <Loader />}
            {error && <Error />}
            {images.length > 0 && <ImageGallery items={images} onHandleClick={openModal} />}
            {loadMore && <LoadMoreBtn onHandleClick={onSetPage} />}
            <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} largeImg={largeImg} />
            <Toaster position="top-right" reverseOrder={false} />
        </>
    );
}

export default App;
