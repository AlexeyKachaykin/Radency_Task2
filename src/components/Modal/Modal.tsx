import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
    const modalRoot = document.getElementById('modal-root');

    if (!modalRoot) {
        throw new Error(
            'Modal root element not found. Make sure you have a div with id "modal-root" in your HTML.'
        );
    }

    return ReactDOM.createPortal(
        <div className="modal-background">
            <div className="modal">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>,
        modalRoot
    );
};

export default Modal;
