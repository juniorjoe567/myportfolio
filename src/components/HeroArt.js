import React from 'react';

const HeroArt = () => {
  return (
    <div className="hero-art-container">
      <span className="art-icon-wrapper" data-tooltip="C# / .NET">
        <i className="bi bi-filetype-cs art-icon-glyph icon-cs"></i>
      </span>

      <span className="art-icon-wrapper" data-tooltip="React.js">
        <i className="bi bi-arrow-repeat art-icon-glyph icon-react"></i>
      </span>

      <span className="art-icon-wrapper" data-tooltip="Microservices">
        <i className="bi bi-diagram-3-fill art-icon-glyph icon-microservices"></i>
      </span>
      
      <span className="art-icon-wrapper" data-tooltip="JavaScript">
        <i className="bi bi-filetype-js art-icon-glyph icon-js"></i>
      </span>
    </div>
  );
};

export default HeroArt;