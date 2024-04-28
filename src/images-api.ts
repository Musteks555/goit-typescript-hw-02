import axios from "axios";

const API_KEY: string = "imBfnDhKgKzVDBXy8pmv0p2OZIVBvIAB0Xnh9Vvtdew";
const PER_PAGE: number = 12;

interface fetchImagesWithQueryProps {
    searchQuery: string | null;
    page: number;
}

export const fetchImagesWithQuery = async <T>({ searchQuery, page = 1 }: fetchImagesWithQueryProps): Promise<T> => {
    const { data } = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${searchQuery}&per_page=${PER_PAGE}&page=${page}`
    );

    return data;
};
