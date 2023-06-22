export   class YoutubeUtil {
    constructor() {
        this.API_KEY = process.env.REACT_APP_YOUTUBE_KEY;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

     async getPopularVideoList() {
       const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&hl=ko&maxResults=25&key=${this.API_KEY}`, this.requestOptions);
       const res = await response.json();
         return res.items;
    }

    async search(q) {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${q}&key=${this.API_KEY}`, this.requestOptions);
        const res = await response.json();
        return res.items;
    }
}