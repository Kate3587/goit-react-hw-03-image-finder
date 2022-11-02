import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.props.handleKeyDown)
    };

    componentWillUnmount() {
        document.removeEventListener('keydown', this.props.handleKeyDown)
    };

    render() {
        const {handleModalClose, modalPhoto} = this.props

        return (
            <div className={css.Overlay} onClick={handleModalClose}>
                <div className={css.Modal}>
                    <img src={modalPhoto} alt={''} />
                </div>
            </div>
        )
    }
};

export default Modal;

Modal.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string
}