import axios from "axios";

export default class TestYoutubeClient {
    constructor() {
    }

    async search() {
        return axios.get(`/videos/search.json`);
    };

    async videos() {
        return axios.get(`/videos/popular.json`);
    };

    async channel() {
        return axios.get(`/videos/channel.json`);
    }

    async related() {
        return axios.get(`/videos/related.json`);
    }

}