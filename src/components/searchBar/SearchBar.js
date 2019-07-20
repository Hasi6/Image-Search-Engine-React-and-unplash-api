import React, { Component } from 'react';

// import css
import './SearchBar.css';

class SearchBar extends Component {
    state = {
        searchWord : ''
    }
    onInputChange = (e) => {
        this.setState({
            searchWord: e.target.value.toLowerCase()
        });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmits(this.state.searchWord);
     }
    
    render () {
        return (
            <div>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="ui icon input searchdiv">
                        <input className="searchBar" value={this.state.searchWord} type="text" placeholder="Search..." onChange={this.onInputChange}/>
                        <i className="search icon"></i>
                    </div>
                </form>
                <span>{this.state.searchWord}</span>
            </div>
        )
    }
}

export default SearchBar;