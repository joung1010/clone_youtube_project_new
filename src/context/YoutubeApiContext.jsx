import {createContext, useContext} from "react";
import Youtube from "../service/api/youtube";
import YoutubeClient from "../service/api/youtubeClient";
import TestYoutubeClient from "../service/api/testYoutubeClient";

export const YoutubeApiContext = createContext();

// const client = new YoutubeClient();
const client = new TestYoutubeClient();
const youtube = new Youtube(client);
export function YoutubeApiProvider({children}) {
    return (
        <YoutubeApiContext.Provider value={{youtube}}>
            {children}
        </YoutubeApiContext.Provider>
    );
}

export function useYoutubeApi() {
    return useContext(YoutubeApiContext);
}