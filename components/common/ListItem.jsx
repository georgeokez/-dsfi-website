import React from 'react'

const ListItem = ({ items }) => {
  return (
    <ul className="list">
        {
            items.map( (item, index) => (
                <li key={item+index}>{item}</li>
            ))
        }
    </ul>
  )
}

export default ListItem;