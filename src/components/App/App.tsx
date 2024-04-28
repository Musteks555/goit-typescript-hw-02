import { MouseEvent, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { fetchImagesWithQuery } from "../../images-api";

import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import { ImageData, Images, LargeImg } from "../types";

function App() {
    const [images, setImages] = useState<Images[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [loadMore, setLoadMore] = useState<boolean>(false);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1);
    const [largeImg, setLargeImg] = useState<LargeImg>({ dataSrc: "", dataAlt: "" });

    function openModal(event: MouseEvent<HTMLElement>): void {
        const dataSrc: string = event.target.parentNode.dataset.src;
        const dataAlt: string = event.target.getAttribute("alt");

        onSetLargeImg({ dataSrc, dataAlt });

        setModalIsOpen(true);
    }

    function closeModal(): void {
        setModalIsOpen(false);
    }

    useEffect(() => {
        if (searchQuery === null) return;

        async function fetchDataByQuery() {
            try {
                setLoadMore(false);
                setError(false);
                setLoading(true);

                const data = await fetchImagesWithQuery<ImageData>({ searchQuery, page });

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

    const onSetSearchQuery = (query: string): void => {
        setSearchQuery(query);
        setPage(1);
        setImages([]);
    };

    const onSetLargeImg = (data: LargeImg): void => {
        setLargeImg(data);
    };

    const onSetPage = (): void => {
        setPage((prevState: number) => prevState + 1);
    };

    return (
        <>
            <SearchBar onSearch={onSetSearchQuery} />
            {images.length > 0 && <ImageGallery images={images} onHandleClick={openModal} />}
            {loadMore && <LoadMoreBtn onHandleClick={onSetPage} />}
            <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} largeImg={largeImg} />
            <Toaster position="top-right" reverseOrder={false} />
            {loading && <Loader />}
            {error && <Error />}
        </>
    );
}

export default App;
