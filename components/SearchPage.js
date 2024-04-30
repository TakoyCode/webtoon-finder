app.component('search-page', {
    template: /*HTML*/ `
    
        <input type="text" v-model="searchTerm"  class="SearchPage-SearchBar" placeholder="Search Bar">
        
        <div class="SearchPage-FilterContainer">
            <div class="SearchPage-FilterBox">Genre >></div>
            <div class="SearchPage-FilterBox">
                <span>Title</span> <img src="./assets/filter.png">
            </div>
            <div class="SearchPage-FilterBox">
                <span>Year</span> <img src="./assets/filter.png">
            </div>
            <div class="SearchPage-FilterBox">
                <span>Rating</span> <img src="./assets/filter.png">
            </div>
        </div>

        <div class="SearchPage-WebtoonInfoBoxContainer">
            <div v-for="(item, index) in mockData" key="index" class="SearchPage-WebtoonInfoBox">
                <div class="SearchPage-ImgGenreContainer">
                    <img src="./assets/GOAT2.png" class="SearchPage-WebtoonInfoBoxImg">
                    <div class="SearchPage-WebtoonInfoBoxGenres">Genres</div>
                </div>    
                <div class="SearchPage-WebtoonInfoBoxSummary">Summary</div>
            </div>
        </div>
    `,

    data() {
        return {
            searchTerm: null,
            mockData: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        }
    },

    methods: {

    },
})

