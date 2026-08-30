import { useRef, useEffect } from "react";
import '../css/inventory.css';

function Modal({ isOpen, onClose, children }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [isOpen]);

    const manejarClickFondo = (e) => {
        if (e.target === dialogRef.current) {
            onClose();
        }
    };

    return (
        <dialog 
            ref={dialogRef} 
            onClose={onClose} 
            onClick={manejarClickFondo}
            className="modal-nativo"
            style={{ overflowY: 'auto', maxWidth: '800px', padding: '0px', height: 'auto', border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.37)' }}
        >

            <div className="modal-contenido">
                <div className="modal-header" 
                    style={{ margin:'none', padding:'none', alingItems: 'center', textAling: 'right'}}>
                    <button type="button" onClick={onClose}
                    style={{
                        position: 'absolute',
                        marginTop: '60px',
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: 'rgba(0, 0, 0, 0.45)',
                        marginLeft: '740px',
                        fontSize: '30px',
                        cursor: 'pointer',

                    }}>×</button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </dialog>
    );
}

export default Modal;