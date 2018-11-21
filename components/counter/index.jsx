import * as React from 'react';
import './index.less';
export default class Counter extends React.Component {
    render() {
        const { name, count } = this.props;
        return (<div className="counter">
        Counter {name}: {count}
      </div>);
    }
}
Counter.defaultProps = {
    count: 1,
};
