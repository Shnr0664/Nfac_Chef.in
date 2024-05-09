import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Placeholder = ({ icon }) => {
  return (
    <div className="placeholder">
         <div className="icon-container">
            <FontAwesomeIcon icon={icon} size="4x" />
        </div>
      <p>No recipes found</p>
    </div>
  );
};

export default Placeholder;
