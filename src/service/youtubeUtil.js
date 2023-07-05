import axios from "axios";

export class YoutubeUtil {
    constructor() {
        this.API_KEY = process.env.REACT_APP_YOUTUBE_KEY;
        this.API_URL = 'https://youtube.googleapis.com/youtube/v3';
    }

    //https://github.com/axios/axios
    async getPopularVideoList() {
        console.log('통신!');
        return axios.get(`${this.API_URL}/videos`, {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                hl: 'ko',
                maxResults: 25,
                key: this.API_KEY,
            }
        }).then(res => res.data.items);
/*        const response = await fetch(`${this.API_URL}/videos?part=snippet&chart=mostPopular&hl=ko&maxResults=25&key=${this.API_KEY}`, this.requestOptions);
        const res = await response.json();
        return res.items;*/
    }

    async search(q) {
        return axios.get(`${this.API_URL}/search`, {
            params: {
                part: 'snippet',
                maxResults: 25,
                q,
                key: this.API_KEY
            }
        }).then(res => res.data.items)
            .then(items => items.map(item => ({...item,id:item.id.videoId})));

/*        const response = await fetch(`?&q=${q}&key=${this.API_KEY}`, this.requestOptions);
        const res = await response.json();
        return {
            ...res.items,
            id: res.items.id.channelId,
        }*/
    }
}