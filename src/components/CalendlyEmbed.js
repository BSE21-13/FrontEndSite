import React from 'react';

const CalendlyEmbed = ({ title, link }) => {
  return (
    <div>
      <iframe
        title={title}
        src={link}
        width='100%'
        height='950'
        scrolling='no'
        frameBorder='0'
      ></iframe>
    </div>
  );
};

export default CalendlyEmbed;
