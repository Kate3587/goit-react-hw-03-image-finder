import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

function Modal({ modalPhoto, handleModalClose, handleKeyDown }) {
    
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [modalPhoto]);

        return (
            <div className={css.Overlay} onClick={handleModalClose}>
                <div className={css.Modal}>
                    <img src={modalPhoto} alt={''} />
                </div>
            </div>
        )
}
    
export default Modal;

Modal.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string
}