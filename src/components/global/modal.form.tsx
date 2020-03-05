
import * as React from 'react';
import { IProductionHouse } from '../../context/context.types';
import { useCtx } from '../hooks';
import "./global.scss";

interface PropsForm {
    closeModal: React.MouseEventHandler,
    onSubmit?: (e: React.FormEvent) => void,
    onChange?: (e: React.ChangeEvent | React.MouseEvent) => void,
}

interface PropsFormAddProps extends PropsForm {
    inputValue?: string,
}
interface PropsFormEditProd extends PropsFormAddProps {
    deleteAction: (e: React.MouseEvent) => void,
}

export interface PropsFormAddMovie extends PropsForm {
    movieName: string,
    movieGenre: string,
    ageFilmRatings: string,
    productionHouseName: string,
}

interface PropsFormEditMovie extends PropsFormAddMovie {
    deleteAction: (e: React.MouseEvent) => void,
    defaultSelectedValue: string,
    defaultSelectedValueHouse: string,
}

export const FormAddProd: React.FC<PropsFormAddProps> = (props) => {
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


export const FormEditProd: React.FC<PropsFormEditProd> = (props) => {
    return (
        <form onSubmit={(e) => {
            props.onSubmit(e);
        }}>
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
                <button type="button" onClick={(id) => props.deleteAction(id)} value="Delete">
                    Delete
                </button>
                <button type="reset" value="Cancel" onClick={props.closeModal}>
                    Cancel
                </button>
                <button type="submit" value="Update Data">
                    Update Data
                </button>
            </div>
        </form>
    )
}

export const FormAddMovie: React.FC<PropsFormAddMovie> = (props) => {
    const { HouseContext } = useCtx();

    return (
        <form onSubmit={(e) => {
            props.onSubmit(e);
        }} className="form-add-movie">
            <div className="modal-form__inner">
                <div className="form-group">
                    <label>Movie Name<span className="icon-required">*</span></label>
                    <input type="text" value={props.movieName} name="movie_name" onChange={(e) => props.onChange(e)} placeholder="Enter movie name" required />
                </div>
                <div className="form-group">
                    <label>Production House Name<span className="icon-required">*</span></label>
                    <select name="movie_prodhouse_name" required onChange={(e) => props.onChange(e)}>
                        <option selected disabled></option>
                        {
                            HouseContext.productionHouse.map(item => (
                                    <option value={item.name} key={item.id}>{item.name}</option>
                                )
                            )
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Movie Genre<span className="icon-required">*</span></label>
                    <input type="text" value={props.movieGenre} name="movie_genre" onChange={(e) => props.onChange(e)} placeholder="Enter movie genre" required />
                </div>
                <div className="form-group">
                    <label>Age Film Ratings<span className="icon-required">*</span></label>
                    <select name="movie_prodhouse_ratings" required onChange={(e) => props.onChange(e)}>
                        <option selected disabled></option>
                        <option value="G">G</option>
                        <option value="PG">PG</option>
                        <option value="PG-13">PG 13</option>
                        <option value="R">R</option>
                        <option value="NC-17">NC-17</option>
                    </select>
                </div>
            </div>

            <div className="modal-form__action">
                <button type="button" value="Cancel" onClick={props.closeModal}>
                    Cancel
                </button>
                <button type="submit" value="Update Data">
                    Save Data
                </button>
            </div>
        </form>
    )
}

export const FormEditMovie: React.FC<PropsFormEditMovie> = (props) => {
    const { HouseContext } = useCtx();

    return (
        <form onSubmit={(e) => {
            props.onSubmit(e);
        }} className="form-add-movie">
            <div className="modal-form__inner">
                <div className="form-group">
                    <label>Movie Name<span className="icon-required">*</span></label>
                    <input type="text" value={props.movieName} name="movie_name" onChange={(e) => props.onChange(e)} placeholder="Enter movie name" required />
                </div>
                <div className="form-group">
                    <label>Production House Name<span className="icon-required">*</span></label>
                    <select name="movie_prodhouse_name" value={props.defaultSelectedValue} onChange={(e) => props.onChange(e)}>
                        {
                            HouseContext.productionHouse.map(t => (
                                    <option value={t.name} key={t.id}>{t.name}</option>
                                )
                            )
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Movie Genre<span className="icon-required">*</span></label>
                    <input type="text" value={props.movieGenre} name="movie_genre" onChange={(e) => props.onChange(e)} placeholder="Enter movie genre" required />
                </div>
                <div className="form-group">
                    <label>Age Film Ratings<span className="icon-required">*</span></label>
                    <select name="movie_prodhouse_ratings" value={props.defaultSelectedValueHouse} onChange={(e) => props.onChange(e)}>
                        <option value="G">G</option>
                        <option value="PG">PG</option>
                        <option value="PG-13">PG-13</option>
                        <option value="R">R</option>
                        <option value="NC-17">NC-17</option>
                    </select>
                </div>
            </div>

            <div className="modal-form__action">
                <button type="button" onClick={(id) => props.deleteAction(id)} value="Delete">
                        Delete
                </button>
                <button type="button" value="Cancel" onClick={props.closeModal}>
                    Cancel
                    </button>
                <button type="submit" value="Update Data">
                    Save Data
                    </button>
            </div>
        </form>
    )
}