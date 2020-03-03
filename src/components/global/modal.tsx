

import * as React from 'react';

type CSSDisplay = 'block' | 'none';

interface PropsI {
    children: React.ReactNode,
    display?: string | CSSDisplay,
    onClick?: React.MouseEventHandler,
    headerContent?: string
}

// Modal production house
const Modal: React.FC<PropsI> = (props) => {
    const style: React.CSSProperties = {
        display: props.display
    };

    return (
        <div id="modal" className="modal" style={style}>
            <div className="modal-content">
                <span className="close" onClick={props.onClick}>&times;</span>
                <div className="modal-header">
                    <span>{props.headerContent}</span>
                </div>
                <div className="modal-form">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                        <div className="modal-form__inner">
                            <div className="form-group">
                                <label>
                                    Production House Name
                                    <span className="icon-required">*</span>
                                </label>
                                <input type="text" placeholder="Enter production house name" required name="prod_house_name" />
                            </div>
                        </div>
                        <div className="modal-form__action">
                            <button type="reset" value="Cancel" onClick={props.onClick}>
                                Cancel
                            </button>
                            <button type="submit" value="Save Data">
                                Save Data
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal