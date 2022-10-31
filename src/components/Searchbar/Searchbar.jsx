import React from "react";
import { Component } from "react";
// import styles from './Searchbar.module.css'

class Searchbar extends Component{
    state = {
        searchName: '',
    };

    handleChangeName = event => {
        this.setState({
            searchName: event.currentTarget.value.toLowerCase()
        })
    };

    handleSubmit = event => {
        event.preventDefault()

        if (this.state.searchName.trim() === '') {
            return alert('Please write search name.')   
        };

        this.props.onSubmit(this.state.searchName)

        this.setState({
            searchName: ''
        });
    };

    render() {
        return (
            <header className="searchbar">
                <form className="form" onSubmit={this.handleSubmit}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        name="searchName"
                        value={this.state.searchName}
                        onChange={this.handleChangeName}
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );

    };

};

export default Searchbar;

