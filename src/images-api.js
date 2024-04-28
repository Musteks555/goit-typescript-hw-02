import axios from "axios";

const API_KEY = "imBfnDhKgKzVDBXy8pmv0p2OZIVBvIAB0Xnh9Vvtdew";

const PER_PAGE = 12;

export const fetchImagesWithQuery = async ({ searchQuery, page = 1 }) => {
    const { data } = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${searchQuery}&per_page=${PER_PAGE}&page=${page}`
    );
    return data;
};
