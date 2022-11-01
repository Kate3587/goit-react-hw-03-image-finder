import React from "react";
import { Component } from "react";
// import styles from './Searchbar.module.css'

class Searchbar extends Component{
    state = {
        search: '',
    };

    handleChangeName = event => {
        this.setState({
            search: event.currentTarget.value.toLowerCase()
        })
    };

    handleSubmit = event => {
        event.preventDefault()

        if (this.state.search.trim() === '') {
            return alert('Please write search name.')   
        };

        this.props.onSubmit(this.state.search)
        this.setState({
            search: ''
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
                        name="search"
                        value={this.state.search}
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

