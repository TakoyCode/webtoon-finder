app.component('nav-bar', {

    template: /*HTML*/ `
    
        <div class="Navbar-Container">
            <img src="assets/GOAT2.png"  class="Navbar-Icon">
            <div class="Navbar-Button" @click="changePage(null)">Main</div>
            <div class="Navbar-Button" @click="changePage('search-page')">Search</div>
            <div class="Navbar-Button">Favorites</div>
        </div>
    
    
    `,

    data() {
        return {

        }
    },

    methods: {
        changePage(page) {
            this.$emit('change-page', page)
        }
    }
})