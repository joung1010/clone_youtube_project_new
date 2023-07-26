export default class Youtube {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular()
    };

    async channel(id) {
        return this.#channelDetail(id);
    }

    async related(id) {
        return this.#searchByChannelId(id);
    }


    async #searchByKeyword(keyword) {
        return this.apiClient.search( {
            params: {
                part: 'snippet',
                maxResults: 25,
                type:'video',
                q: keyword,
            }
        })
            .then((res) => res.data.items)
            .then(items => items.map(item => ({...item, id: item.id.videoId})));
    }

    async #mostPopular() {
        return this.apiClient.videos( {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                hl: 'ko',
                maxResults: 25,
            }
        })
            .then((res) => res.data.items);
    }

    async #channelDetail(id) {
        return this.apiClient.channel({
            params:{
                part: 'snippet',
                id,
            }
        })
            .then((res) => res.data.items[0]);
    }

    async #searchByChannelId(channelId) {
        return this.apiClient.related({
            params:{
                part: 'snippet',
                channelId,
                type:'video',
                maxResults:'25',
            }
        })
            .then((res) => res.data.items)
            .then(items => items.map(item => ({...item, id: item.id.videoId})));
    }
}