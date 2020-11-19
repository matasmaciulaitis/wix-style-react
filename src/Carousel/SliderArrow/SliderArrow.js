import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../../IconButton/IconButton';

const skinPriorityMap = {
  standard: 'secondary',
  inverted: 'primary',
  light: 'primary',
  transparent: 'primary',
  premium: 'primary',
};

const SliderArrow = ({
  dataHook,
  arrowSize,
  buttonSkin,
  icon,
  className,
  ...remainingProps
}) => {
  const isDisabled = className.includes('slick-disabled');

  return (
    <div {...remainingProps} data-hook={dataHook} className={className}>
      <IconButton
        skin={buttonSkin}
        size={arrowSize}
        disabled={isDisabled}
        priority={skinPriorityMap[buttonSkin]}
      >
        {icon}
      </IconButton>
    </div>
  );
};

SliderArrow.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /** Icon to be rendered within the icon button */
  icon: PropTypes.element.isRequired,
};

export default SliderArrow;
