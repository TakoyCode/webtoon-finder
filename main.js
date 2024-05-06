const app = Vue.createApp({
    data() {
        return {
            currentPage: null,
            id: 0,
            data: null,
        }
    },

    methods: {
        changePage(page) {
            this.currentPage = page;
        },

        async fetchData() {
            try {
                this.data = await this.getWebtoonData();
            } catch (err) {
                this.error = err.toString();
            }
            console.log(this.data);
        },

        async getWebtoonData() {

            const options = {
                headers: {
                    Accept: "application/json",
                },
            }

            const proxyUrl = `http://localhost:3000/api/proxy`;
            // const apiUrl = `https://api.mangaupdates.com/v1/series/${this.id}`;
            const apiUrl = `https://pirate.monkeyness.com/api/insult`;
            // const respone = await fetch(`${proxyUrl}?url=${apiUrl}`);
            const respone = await fetch(`${proxyUrl}?url=${apiUrl}`);
            console.log(respone);

            if (!respone.ok) {
                throw new Error("Could not fetch Webtoon data");
            };

            return await respone.json();
        }
    },
})