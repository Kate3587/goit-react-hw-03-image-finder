import React from "react";
import { Component } from "react";
// import styles from './Searchbar.module.css'

class Searchbar extends Component{
    state = {
        search: '',
    };

    handleChangeName = event => {
        const { value } = event.currentTarget;
        this.setState({
            search: value.toLowerCase()
        })
    };

    handleSubmit = event => {
        event.preventDefault()

        const { search } = this.state;

        if (search.trim() === '') {
            return alert('Please write search name.')   
        };

        this.props.onSubmit(search)
        this.setState({
            search: ''
        });
    };

    render() {
        const { search } = this.state;

        return (
            <header className="searchbar" onSubmit={this.handleSubmit}>
                <form className="form">
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        name="search"
                        value={search}
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

