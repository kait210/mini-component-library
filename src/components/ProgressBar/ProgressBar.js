/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {

  return (
    <ProgressBarBase className={size} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      <VisuallyHidden>{value}%</VisuallyHidden>
      <SolidProgressBar className={size} value={value}/>
    </ProgressBarBase>
  );
};

const SolidProgressBar = styled.div`
  {
    background-color: ${COLORS.primary};
    border-radius: 4px;
    height: 12px;
    width: ${ props => props.value}%;
    ${ props => props.value <= 99 ? 'border-top-right-radius: 0px' : ''};
    ${ props => props.value <= 99 ? 'border-bottom-right-radius: 0px' : ''};
  }

  &.small {
    height: 8px;
  }

  &.medium {
    height: 12px;
  }

  &.large {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    height: 16px;
  }
`;

const ProgressBarBase = styled.div`
  {
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: 4px;
  }

  &.large {
    padding: 4px;
    border-radius: 8px;
  }
`;

export default ProgressBar;
