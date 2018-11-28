import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import styles from './index.less';

export default function Result({
  className,
  type,
  title,
  description,
  extra,
  actions,
  ...restProps
}) {
  const iconMap = {
    error: <Icon className='cube-result-error' type="close-circle" theme="filled" />,
    success: <Icon className='cube-result-success' type="check-circle" theme="filled" />,
  };
  const clsString = classNames('cube-result', className);
  return (
    <div className={clsString} {...restProps}>
      <div className='cube-result-icon'>{iconMap[type]}</div>
      <div className='cube-result-title'>{title}</div>
      {description && <div className='cube-result-description'>{description}</div>}
      {extra && <div className='cube-result-extra'>{extra}</div>}
      {actions && <div className='cube-result-actions'>{actions}</div>}
    </div>
  );
}
