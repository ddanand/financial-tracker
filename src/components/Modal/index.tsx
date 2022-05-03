import React from 'react';

import classes from "./styles.module.scss";

type ModalProps = {
    note: string;
    closeNote: (event: React.MouseEvent<HTMLElement>) => void;
}

const Modal = (props: ModalProps) => {
    
    return (
        <>
            <div className={classes.modal}>
                <p>{props.note}</p>
                <button onClick={props.closeNote}>Close</button>
            </div>
            <div className={classes.backdrop} onClick={props.closeNote} data-testid="backdrop"></div>   
        </>
    )
}
export default Modal;