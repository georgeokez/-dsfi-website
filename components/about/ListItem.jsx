import React from 'react'

const ListItem = ({ items }) => {
  return (
    <ul className="list">
        {
            items.map( item => (
                <li>{item}</li>
            ))
        }
    </ul>
  )
}

export default ListItem;