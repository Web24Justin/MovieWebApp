import React, { Component } from 'react';
import HeroImage from "../elements/HeroImage/HeroImage"
import SearchBar from "../elements/SearchBar/SearchBar"
import FourColGrid from "../elements/FourColGrid/FourColGrid"
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn"
import Spinner from "../elements/Spinner/Spinner"
import './Home.css';

class Home extends Component {
    state = {

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
