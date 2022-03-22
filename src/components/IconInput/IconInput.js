import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const styles = {
  small: {
    height: '24px',
    width: '100px',
    paddingLeft: '24px',
    fontSize: '14px',
    borderThickness: '1px',
    iconSize: '16'  // passed into Icon & IconWrapper components, ignored by CSS
  },
  large: {
    height: '36px',
    width: `250px`,
    paddingLeft: '36px',
    fontSize: '18px',
    borderThickness: '2px',
    iconSize: '24' // passed into Icon & IconWrapper components, ignored by CSS
  }
}

const Wrapper = styled.label`
  {
    display: block;
    position: relative;
    color: ${COLORS.gray700}
  }

  &:hover {
    color: ${COLORS.black}
  }
`;

const Input = styled.input`
  {
    height: ${24 / 16}rem;
    font-size: ${14 / 16}rem;
    border: none;
    border-bottom: 1px solid ${COLORS.black};
    display: inline-block;
    padding-left: 24px;
    font-weight: 700;
    outline-offset: 2px;
    color: inherit;

    ${ props => props.size === 'small' && styles.small}
    ${ props => props.size === 'large' && styles.large}
  }

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500}
  }
`;

const IconWrapper = styled.div`
  {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: ${ props => props.size}px;
  }
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...props
}) => {
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper size={styles[`${size}`].iconSize}>
        <Icon id={icon} strokeWidth={1} size={styles[`${size}`].iconSize} />
      </IconWrapper>
      <Input size={size} {...props} />
    </Wrapper>
  );
};

export default IconInput;
