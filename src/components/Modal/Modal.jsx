import React from 'react';
import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown )
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown )
    };

    handleKeyDown = event => {
        if (event.code === 'Escape') {
            console.log(event.code)
            this.props.onClose()
        }
    };

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose()
        }
    }; 

    render() {
        const { srcLarge, alt } = this.props;

        return (
            <div className={css.Overlay} onClick ={this.handleBackdropClick}>
                <div className={css.Modal}>
                    <img src={srcLarge} alt={alt} />
                </div>
            </div>
        )
    }
};

export default Modal;