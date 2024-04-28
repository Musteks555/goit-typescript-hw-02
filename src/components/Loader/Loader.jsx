import { Circles } from "react-loader-spinner";

import css from "./Loader.module.css";

const Loader = () => {
    return <Circles height="80" width="80" color="#bbbbbe" ariaLabel="circles-loading" wrapperClass={css.loader} visible={true} />;
};

export default Loader;
