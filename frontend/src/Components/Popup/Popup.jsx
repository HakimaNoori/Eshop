import React from 'react';
import './Popup.css';

const Popup = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="popup">
            <div className="popup-content">
                <button className="close" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Popup;