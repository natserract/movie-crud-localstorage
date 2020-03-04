
import * as React from 'react';

import { Fragment, Container, Modal, Flex, Button } from '../global/mod';
import { useCtx, useCtxDispatch } from '../hooks';
import ProductionList from './home.prod.list';

import "./home.scss";

const Home = () => {
    const [display, setDisplay] = React.useState<{
        show: boolean,
        contentT?: boolean
    }>({ show: false, contentT: false });

    const [state, setState] = React.useState<{
        id: string,
        name: string
    }>({
        id: "",
        name: ""
    });

    const { productionHouse } = useCtx();
    const dispatch = useCtxDispatch();

    const modalProps = {
        display: display.show ? 'block' : 'none',
        addAction: () => {
            setDisplay({
                show: !display.show,
            });
        },
        value: state.name,
        contentType: display.contentT,
        headerContent: display.contentT ? "Edit Production House" : "Add New Production House",
        deleteAction: () => {
           dispatch({
               type: "DELETE",
               payload: state.id
           });
           setDisplay({
                show: !display.show
           })
        },
        closeModal: () => {
            setDisplay({
                show: !display.show,
            })
        }
    };

    return (
        <Fragment>
            <section className="content-production-house">
                <Container>
                    <Flex>
                        <div className="prod-title">
                            <h2>Production House</h2>
                        </div>
                        <div className="prod-action">
                            <Button
                                onClick={() => setDisplay({ show: !display.show })}
                                backgroundColor="#004c8c">
                                Add Production House
                            </Button>
                        </div>
                    </Flex>

                    <div className="prod-list-content">
                        <ProductionList onClick={(t) => {
                                setDisplay({
                                    show: !display.show,
                                    contentT: !display.contentT,
                                });
                                setState({
                                    id: t.id,
                                    name: t.name
                                })
                            }
                        } renderItems={productionHouse}/>
                    </div>
                </Container>
            </section>
            { display.show ? <Modal {...modalProps}> Hello </Modal> : null}
        </Fragment>
    )
}

export default Home;