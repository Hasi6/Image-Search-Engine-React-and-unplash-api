import React, { Component } from 'react';
import axios from 'axios';

// created Components
import SearchBar from "./searchBar/SearchBar";
import ImageList from "./imageLIst/ImageList";

class App extends Component {

    state = {
      images : []
    };

      onSubmitSearch = async(searchWord) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
              query: searchWord
            },
            headers: {
              Authorization: 'Client-ID 2063b599466b1a55744b9156c341e90cdc7141b5c7d0d13e95768a0e12287865'
            }
        });
        this.setState({images: response.data.results});
    }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmits={this.onSubmitSearch}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
