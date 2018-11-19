import * as React from 'react';
import './index.less';

export interface Props {
  name: string;
  count?: number;
}

export default class Counter extends React.Component<Props, {}> {
  static defaultProps = {
    count: 1,
  };

  render() {
    const {name,count} = this.props;
    return (
      <div className="counter">
        Counter {name}: {count}
      </div>
    );
  }
}
