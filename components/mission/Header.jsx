import React from 'react';

const Header = ({ title }) => {
  return (
    <div className="row">
        <div className="col-12">
            <div className="wpo-section-title">
                <h2>{title}</h2>
            </div>
        </div>
    </div>
  )
}

export default Header;