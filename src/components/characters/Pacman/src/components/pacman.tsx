import React, { FunctionComponent } from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

export interface PacmanProps {
  fill?: string
}

const chomp = keyframes`
  from {
    stroke-dasharray: 157,100;
    stroke-dashoffset: 0;
  }
  to {
    stroke-dasharray: 126,100;
    stroke-dashoffset: -15;
  }
`

// fill: ${(props: PacmanProps) => (props.fill ? props.fill : 'var(--primary-color)')};
const PacmanStyle = styled.svg<PacmanProps>`
  stroke: yellow;
  stroke-width: 50%;
  fill: none;
  animation: ${chomp} 0.15s linear infinite alternate;
`

const Pacman: FunctionComponent<PacmanProps> = ({
  // todo fill
  fill,
}) => (
  <PacmanStyle viewBox="0 0 100 100">
    <circle cx="50%" cy="50%" r="25%" />
  </PacmanStyle>
)

Pacman.defaultProps = {
  fill: '',
}

Pacman.propTypes = {
  fill: PropTypes.string,
}

export default Pacman
