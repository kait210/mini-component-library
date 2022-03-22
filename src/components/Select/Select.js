import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';



const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const StyledSelect = styled.div`
  {
    color: ${COLORS.gray700};
    background-color: ${COLORS.transparentGray15};
    font-size: ${16 / 16}rem;
    padding: 12px 16px;
    padding-right: 52px;
    border-radius: 8px;

    ${NativeSelect}:focus + & {
      outline: 1px dotted #212121;
      outline: 5px auto -webkit-focus-ring-color;
    }
    ${NativeSelect}:hover + & {
      color: ${COLORS.black};
    }
  }
`;

const Wrapper = styled.div`
  {
    position: relative;
    width: max-content;
  }
`;

const IconWrapper = styled.div`
{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: ${ props => props.size }px;
  height: ${ props => props.size }px;
  pointer-events: none;
}
`;

const Select = ({ value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <StyledSelect>
        {displayedValue}
        <IconWrapper size={24}>
            <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </StyledSelect>
    </Wrapper>
  );
};

export default Select;
