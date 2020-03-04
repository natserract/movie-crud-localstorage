
import * as React from 'react';
import { useRand }  from "../hooks";

interface Props{
    closeModal: React.MouseEventHandler,
    inputValue: string,
    onSubmit: (e: React.FormEvent) => void,
    onChange: (e: React.ChangeEvent) => void,
}
export const AddModalFormProd:React.FC<Props> = (props) => {
    return (
        <form onSubmit={(e) => props.onSubmit(e)}>
            <div className="modal-form__inner">
                <div className="form-group">
                    <label>
                        Production House Name
                    <span className="icon-required">*</span>
                    </label>
                    <input type="text" value={props.inputValue} name="name" onChange={(e) => props.onChange(e)} placeholder="Enter production house name" required />
                </div>
            </div>
            <div className="modal-form__action">
                <button type="reset" value="Cancel" onClick={props.closeModal}>
                    Cancel
                </button>
                <button type="submit" value="Save Data">
                    Save Data
                </button>
            </div>
        </form>
    )
}
