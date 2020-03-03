
import * as React from 'react';

import * as Global from '../global/mod';
import { useCtx } from '../hooks';
import ProductionHouseList from './home.prod.list';

import { Context } from '../../context';

import "./home.scss";

const Home = () => {
    const [display, setDisplay] = React.useState<{
        show: boolean}>({
            show: false
        });

    // Example usage
    const state = useCtx();
    console.log(state);

    const ModalProps = {
        display: display.show ? 'block': 'none' ,
        onClick: () => {
            setDisplay({
                show: !display.show
            })
        },
        headerContent: "Add New Production House"
    };

    return (
        <Global.Fragment>
            <section className="content-production-house">
                <Global.Container>
                    <Global.Flex>
                        <div className="prod-title">
                            <h2>Production House</h2>
                        </div>
                        <div className="prod-action">
                        <Global.Button onClick={() => setDisplay({ show: !display.show })} backgroundColor="#004c8c">
                                Add Production House
                        </Global.Button>

                        { display.show ? (
                            <Global.Modal {...ModalProps}>
                                Hello
                            </Global.Modal>
                            ) : null
                        }
                        </div>
                    </Global.Flex>

                    <div className="prod-list-content">
                        {/* <ProductionHouseList renderItems={Consumer.productionHouse}/> */}
                    </div>
                </Global.Container>
            </section>
        </Global.Fragment>
    )
}

export default Home;