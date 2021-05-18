new Vue({
    el: "#app",
    data: {
        tmdbApiKey: "0ab1e8bf1bb14d51b6ba7c8ff6e53732",
        textToSearch: "",
        moviesList: [],
        tvSeriesList: [],
    },
    methods: {
        makeAxiosSearch(searchType){
            const axiosOptions = {
                params: {
                    api_key: this.tmdbApiKey,
                    query: this.textToSearch,
                    language: "it-IT"
                }
            };

            axios.get("https://api.themoviedb.org/3/search/" + searchType, axiosOptions) 
            .then((resp) => {
                if (searchType === "movie"){
                    this.movieList = resp.data.results
                }else if (searchType === "tv"){

                    this.tvSeriesList = resp.data.results.map((tvShow) => {
                        tvShow.original_title = tvShow.original_name;
                        tvShow.title = tvShow.name;
                        
                        return tvShow
                    });
                }
            });
        }

        doSearch(){
            this.makeAxiosSearch("movie")
            this.makeAxiosSearch("tv")
        }
    }
})