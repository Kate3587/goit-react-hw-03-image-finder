import React from "react";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import css from './Searchbar.module.css'

function Searchbar({ onSubmit }) {
    const [search, setSearch] = useState('');
    
   const handleChangeName = event => {
        setSearch(event.currentTarget.value.toLowerCase())
    };

   const handleSubmit = event => {
        event.preventDefault()

        if (search.trim() === '') {
            return alert('Please write search name.')   
        };

       onSubmit(search)
       setSearch('')
    };

        return (
            <header className={css.Searchbar} onSubmit={handleSubmit}>
                <form className={css.SearchForm}>
                    <button type="submit" className={css.SearchFormButton}>
                        <span className={css.SearchFormButtonLabel} >Search</span>
                        <GoSearch/> 
                    </button>

                    <input
                        className={css.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        name="search"
                        value={search}
                        onChange={handleChangeName}
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
};
    

export default Searchbar;

