export interface ImageData {
    results: {
        id: string;
        alt_description: string;
        urls: {
            small: string;
            regular: string;
        };
        length: number;
    };
}

export interface Images {
    id: string;
    alt_description: string;
    urls: {
        small: string;
        regular: string;
    };
}

export interface LargeImg {
    dataSrc: string;
    dataAlt: string;
}
