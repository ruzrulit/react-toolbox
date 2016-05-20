import React, { PropTypes } from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';

const CardText = ({ children, className, theme, ...other }) => (
  <div className={classnames(theme.cardText, className)} {...other}>
    {typeof children === 'string' ? <p>{children}</p> : children}
  </div>
);

CardText.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  theme: React.PropTypes.shape({
    cardText: React.PropTypes.string.isRequired
  })
};

export default themr('ToolboxCard')(CardText);
