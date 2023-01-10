import React from 'react';

const camelCaseItem = (item) => {
    const split = item.split(" ");
    split[0] = split[0].toLowerCase();

    return split.join("");
}

const ListItemExtended = ({ items, pdfs }) => {
    

    return (
        <ul className="list">
            {
                items.map( (item, index) => (
                    <li key={item+index}>
                        {item} 
                        { pdfs[camelCaseItem(item)] ? 
                            <a href={pdfs[camelCaseItem(item)]} download> - click to download</a> : null
                        }
                    </li>
                ))
            }
        </ul>
      )
}

export default ListItemExtended;