import React from 'react';
import Avatar from '../avatar';
import List from '../list';
import classNames from 'classnames';
import styles from './NoticeList.less';

export default function NoticeList({
  data = [],
  onClick,
  onClear,
  title,
  locale,
  emptyText,
  emptyImage,
  showClear = true,
}) {
  if (data.length === 0) {
    return (
      <div className='cube-noticIcon-notFound'>
        {emptyImage ? <img src={emptyImage} alt="not found" /> : null}
        <div>{emptyText || locale.emptyText}</div>
      </div>
    );
  }
  return (
    <div>
      <List className='cube-noticIcon-list'>
        {data.map((item, i) => {
          const itemCls = classNames('item', {
            read: item.read,
          });
          // eslint-disable-next-line no-nested-ternary
          const leftIcon = item.avatar ? (
            typeof item.avatar === 'string' ? (
              <Avatar className='avatar' src={item.avatar} />
            ) : (
              item.avatar
            )
          ) : null;

          return (
            <List.Item className={itemCls} key={item.key || i} onClick={() => onClick(item)}>
              <List.Item.Meta
                className='meta'
                avatar={<span className='iconElement'>{leftIcon}</span>}
                title={
                  <div className='title'>
                    {item.title}
                    <div className='extra'>{item.extra}</div>
                  </div>
                }
                description={
                  <div>
                    <div className='description' title={item.description}>
                      {item.description}
                    </div>
                    <div className='datetime'>{item.datetime}</div>
                  </div>
                }
              />
            </List.Item>
          );
        })}
      </List>
      {showClear ? (
        <div className='cube-noticIcon-clear' onClick={onClear}>
          {locale.clear} {title}
        </div>
      ) : null}
    </div>
  );
}
