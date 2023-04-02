import React, { Children } from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

Section.propTypes = {
  good: PropTypes.string,
};

export default Section;
