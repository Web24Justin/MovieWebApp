import React, { Component } from 'react';
import {API_URL,API_KEY,IMAGE_BASE_URL,POSTER_SIZE,BACKDROP_SIZE} from "../../config";
import HeroImage from "../elements/HeroImage/HeroImage"
import SearchBar from "../elements/SearchBar/SearchBar"
import FourColGrid from "../elements/FourColGrid/FourColGrid"
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn"
import Spinner from "../elements/Spinner/Spinner"
import './Home.css';

class Home extends Component {
    state = {
        movies: [],
        heroImage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: ""
    }

    componentDidMount = () => {
        this.setState({loading: true});
        const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        this.fetchItems(endPoint);
    }

    loadMoreItems = () => {
        let endpoint = "";
        this.setState({ loading: true});
        
        if(this.state.searchTerm === ""){
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;   
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query${this.state.searchTerm}&page=${this.this.state.currentPage + 1}`;
        }
        this.fetchItems(endpoint);        
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            this.setState({
                movies: [...this.state.movies, ...result.results],
                heroImage: this.state.heroImage || result.results[0],
                loading: false,
                currentPage: result.page,
                totalPages: result.total_pages
            })
        })
    }
    render() {
        return (
            <div>
                <HeroImage />
                <SearchBar />
                <FourColGrid />
                <Spinner />
                <LoadMoreBtn />
            </div>
        )
    }

}

export default Home;
