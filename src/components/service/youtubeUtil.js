export  default class YoutubeUtil {
    constructor() {
        this.API_KEY = process.env.REACT_APP_YOUTUBE_KEY;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

     async getPopularVideoList() {
       const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&hl=ko&maxResults=50&key=${this.API_KEY}`, this.requestOptions);
         return await response.json();
    }
}