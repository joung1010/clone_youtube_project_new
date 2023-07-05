import axios from "axios";

export default class Youtube {
    constructor() {
        this.API_KEY = process.env.REACT_APP_YOUTUBE_KEY;
        this.API_URL = 'https://youtube.googleapis.com/youtube/v3';
    }

    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular()
    };

    async #searchByKeyword(keyword) {
        return axios
            .get(`${this.API_URL}/search`, {
                params: {
                    part: 'snippet',
                    maxResults: 25,
                    q: keyword,
                    key: this.API_KEY
                }
            })
            .then((res) => res.data.items)
            .then(items => items.map(item => ({...item, id: item.id.videoId})));
    }

    async #mostPopular() {
        return axios
            .get(`${this.API_URL}/videos`, {
                params: {
                    part: 'snippet',
                    chart: 'mostPopular',
                    hl: 'ko',
                    maxResults: 25,
                    key: this.API_KEY,
                }
            })
            .then((res) => res.data.items);
    }
}