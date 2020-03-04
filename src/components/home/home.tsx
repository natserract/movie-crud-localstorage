
import * as React from 'react';

import { Fragment, Container, ModalAddProd, ModalEditProd, Flex, Button } from '../global/mod';
import { useCtx, useCtxDispatch } from '../hooks';
import ProductionList from './home.prod.list';
import { reducer, initialState } from './home.action';

import "./home.scss";

const Home = () => {
    const dispatch = useCtxDispatch();
    const [val, valDispatch] = React.useReducer(reducer, initialState);
    const { productionHouse } = useCtx();

    const modalAddProps = {
        closeModal: () => {
           valDispatch({
               type: 'SETDISPLAY'
           })
        },
        headerContent: "Add New Production House",
        display: val.modalProdAddShow ? 'block' : 'none',
    };

    const modalEditProps = {
        closeModal: () => {
            valDispatch({
                type: 'SETMODEDIT'
            })
         },
         headerContent: "Edit Production House",
         display: val.modalProdEditShow ? 'block' : 'none',
         deleteAction: () => {
             dispatch({
                 type: 'DELETE',
                 payload: val.value.id
             });
             valDispatch({ type: 'SETMODEDIT'})
         },
         inputValue: {
             id: val.value.id,
             name: val.value.name
         },
         onSubmit: (event) => {
            event.preventDefault();
            dispatch({
                type: 'EDIT',
                payload: {
                    id: val.value.id,
                }
            });
        }
    }

    console.log(val.value.name);

    return (
        <Fragment>
            <section className="content-production-house">
                <Container>
                    <Flex>
                        <div className="prod-title">
                            <h2>Production House</h2>
                        </div>
                        <div className="prod-action">
                            <Button onClick={() => valDispatch({ type: 'SETDISPLAY'})}
                                backgroundColor="#004c8c">
                                Add Production House
                            </Button>
                        </div>
                    </Flex>

                    <div className="prod-list-content">
                        <ProductionList onClick={(t) => {
                            valDispatch({
                                type: 'SETMODEDIT'
                            });
                             valDispatch({
                                type: 'SETNAME',
                                payload: {
                                    id: t.id,
                                    name: t.name
                                }
                            });
                            }
                        } renderItems={productionHouse}/>
                    </div>
                </Container>
            </section>

            { val.modalProdEditShow ? <ModalEditProd {...modalEditProps}/> : null}
            { val.modalProdAddShow ? <ModalAddProd {...modalAddProps}/> : null}
        </Fragment>
    )
}

export default Home;