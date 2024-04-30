const app = Vue.createApp({
    data() {
        return {
            currentPage: null,
            id: 0,
        }
    },
    async data() {
        return {
            webtoonSeries: await this.getWebtoonData(),
        }
    },

    methods: {
        changePage(page) {
            this.currentPage = page;
        },
        async getWebtoonData() {

            const apiUrl = `https://api.mangaupdates.com/v1/series/${0}`;

            const respone = await fetch(apiUrl);

            if (!respone.ok) {
                throw new Error("Could not fetch Webtoon data")
            }

            return await respone.json();
        }
    },
})