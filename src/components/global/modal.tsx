
import * as React from 'react';
import { useCtxDispatch, useRand } from "../hooks";
import { FormAddProd, FormEditProd } from './modal.form';

type CSSDisplay = 'block' | 'none';

interface CoreProps {
    children?: React.ReactNode,
    modalDisplay?: string,
    modalStyle?: React.CSSProperties,
    headerContent?: string,
    closeModal?: React.MouseEventHandler,
}
interface PropsI extends CoreProps {
    display: string | CSSDisplay,
}

interface PropsEditI extends CoreProps, PropsI {
    deleteAction: (e: React.MouseEvent) => void,
    inputValue: {
        id: string,
        name: string
    },
    onSubmit: (e) => void,
    // onChange: (e) => void,
}

export const ModalContainer: React.FC<PropsI> = (props) => {
    const style: React.CSSProperties = {
        display: props.display
    };

    const [display, setDisplay] = React.useState<{
        show: boolean,
    }>({ show: false });

    const handleModalDisplay = display.show ? 'modal-hide' : 'modal-show';

    return (
        <div id="modal" className={`modal ${handleModalDisplay}`} style={style} >
            <div className="modal-content">
                <span className="close" onClick={props.closeModal}>&times;</span>
                <div className="modal-header">
                    <span>{props.headerContent}</span>
                </div>
                <div className="modal-form">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export const ModalAddProd: React.FC<PropsI> = (props) => {
    const dispatch = useCtxDispatch();
    const [state, setState] = React.useState<{ id?: any, name: string }>({
        id: "",
        name: ""
    });

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
    }

    const propsMod = {
        onSubmit: (e) => handleSubmit(e),
        onChange: (e) => handleChange(e),
        inputValue: state.name,
        closeModal: props.closeModal
    }

    return (
        <ModalContainer
            display={props.display}
            closeModal={props.closeModal}
            headerContent={props.headerContent}>
            <FormAddProd {...propsMod} />
        </ModalContainer>
    )
}


export const ModalEditProd: React.FC<PropsEditI> = (props) => {
    const dispatch = useCtxDispatch();
    const [state, setState] = React.useState<{ id?: any, name: string }>({
        id: props.inputValue.id,
        name: props.inputValue.name,
    });
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
            type: 'EDIT',
            payload: {
                id: state.id,
            }
        }),
            setState({ name: "" });
    }

    const propsMod = {
        onSubmit: (e) => props.onSubmit(e),
        onChange: (e) => handleChange(e),
        inputValue: state.name,
        closeModal: props.closeModal,
        deleteAction: (e) => props.deleteAction(e),
    }

    return (
        <ModalContainer
            display={props.display}
            closeModal={props.closeModal}
            headerContent={props.headerContent}>
            <FormEditProd {...propsMod} />
        </ModalContainer>
    )
}