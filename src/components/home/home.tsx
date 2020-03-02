
import * as React from 'react';
import useCtx from '../hooks';

import * as Global from '../global/mod';
import ProductionHouseList from './home.prod.list';

import "./home.scss";

const Home = () => {
    const Consumer = useCtx();

    return (
        <Global.Fragment>
            <section className="content-production-house">
                <Global.Container>
                    <Global.Flex>
                        <div className="prod-title">
                            <h2>Production House</h2>
                        </div>
                        <div className="prod-action">
                            <Global.Button onClick={() => console.log("It's works")} backgroundColor="#004c8c">
                                Add Production House
                        </Global.Button>
                        </div>
                    </Global.Flex>

                    <div className="prod-list-content">
                        <ProductionHouseList renderItems={Consumer.productionHouse}/>
                    </div>
                </Global.Container>
            </section>
        </Global.Fragment>
    )
}

export default Home;