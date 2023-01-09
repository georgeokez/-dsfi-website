import React from 'react';
import ListItem from '../common/ListItem';

const ExtraContent = ({content, items}) => {
  return (
    <>
        <ListItem items={items.map((item) => item)}/>
        <p>{content}</p>
    </>
  )
}

export default ExtraContent;