import { Field, Form, Formik } from "formik";
import { IoIosSearch } from "react-icons/io";
import toast from "react-hot-toast";

import css from "./SearchBar.module.css";
import { FC } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

interface handleSubmitProps {
    query: string;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
    const handleSubmit = ({ query }: handleSubmitProps) => {
        if (query.trim() === "") {
            toast.error("This field cannot be empty.");

            return;
        }

        onSearch(query);
    };

    return (
        <header>
            <Formik onSubmit={handleSubmit} initialValues={{ query: "" }}>
                <Form className={css.searchForm}>
                    <div className={css.searchInputContainer}>
                        <Field type="text" name="query" placeholder="Search images and photos" className={css.searchInput} />
                        <button type="submit" className={css.searchBtn}>
                            <IoIosSearch size={24} color="#79797b" />
                        </button>
                    </div>
                </Form>
            </Formik>
        </header>
    );
};

export default SearchBar;
