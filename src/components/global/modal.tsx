
import * as React from 'react';
import { useCtxDispatch, useRand }  from "../hooks";
import { AddModalFormProd } from './modal.form';

type CSSDisplay = 'block' | 'none';

interface PropsI{
    addAction: React.MouseEventHandler,
    children: React.ReactNode,
    closeModal: React.MouseEventHandler,
    display: string | CSSDisplay,
    contentType: boolean,
    headerContent: string,
    value: string,
}

const Modal: React.FC<PropsI> = (props) => {
    const dispatch = useCtxDispatch();
    const [state, setState] = React.useState<{id?: any, name: string}>({
        id: useRand(),
        name: ""
    });

    const style: React.CSSProperties = {
        display: props.display
    };

    const [display, setDisplay] = React.useState<{
        show: boolean,
    }>({ show: false });

    const handleCloseModal =  {
        display: display.show ?  'modal-hide' : 'modal-show'
    }

    const handleChange = (event) => {
        event.persist();
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD',
            payload: state.name
        });
        setState({ name: "" });
        setDisplay({
            show: !display.show
        });
    }

    return (
        <div id="modal" className={`modal ${handleCloseModal.display}`} style={style} >
            <div className="modal-content">
                <span className="close" onClick={props.addAction}>&times;</span>
                <div className="modal-header">
                    <span>{props.headerContent}</span>
                </div>
                <div className="modal-form">
                    <AddModalFormProd
                        onSubmit={(e) => handleSubmit(e)}
                        onChange={(e) => handleChange(e)}
                        inputValue={state.name}
                        closeModal={props.closeModal}
                    />
                </div>
            </div>
        </div>
    )
}

export default Modal