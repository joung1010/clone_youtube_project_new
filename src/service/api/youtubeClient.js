import axios from "axios";

export default class YoutubeClient {
    constructor() {
        this.httpClient = axios.create({
            baseURL: 'https://youtube.googleapis.com/youtube/v3/',
            params: {
                key: process.env.REACT_APP_YOUTUBE_KEY
            }
        });
    }

    async search(params) {
        return this.httpClient.get('search', params);
    };

    async videos(params) {
        return this.httpClient.get('videos', params);
    };
    async channel(params) {
        return axios.get(`channels`,params);
    }
    async related(param) {
        return axios.get('search',param);

    }
}