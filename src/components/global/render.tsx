

import * as React from 'react';

const withWishesHoC = (WrappedComponent) => {
    return class extends React.Component {
        public constructor(props) {
            super(props);
            this.state = {
                mount: false
            };
        }

        render() {
            return <></>
        }
    }
};
export default withWishesHoC;