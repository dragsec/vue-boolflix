new Vue({
    el: "#app",
    data: {
        tmdbApiKey: "0ab1e8bf1bb14d51b6ba7c8ff6e53732"
        queryToSearch: ""
    },
    methods: {
        doSearch(){

            axios.get("https://api.themoviedb.org/3/search/movie?api_key")
        }

    }
})