import React, { FunctionComponent } from 'react'
import styled, { keyframes, Keyframes } from 'styled-components'
import PropTypes from 'prop-types'

export interface GhostProps {
  fill?: string
}

// fill: ${(props: PacmanProps) => (props.fill ? props.fill : 'var(--primary-color)')};
const GhostContainer = styled.div<GhostProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 56px;
  height: 56px;

  animation-name: move;
  animation-duration: $duration;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
`

const propFill: (props: GhostProps) => string = props => (props.fill ? props.fill : '#FF0000')

const GhostBody = styled.div<GhostProps>`
  fill: ${(props: GhostProps): string => propFill(props)};
`

const GhostEye = styled.div`
  fill: #fff;
  position: absolute;
  top: 16px;
  width: 16px;
  height: 20px;

  animation-name: eyes;
  animation-duration: $duration;
  animation-fill-mode: forwards;
  animation-timing-function: steps(1);
  animation-iteration-count: infinite;

  &:after {
    background: blue;
    content: '';
    display: block;
    position: absolute;
    top: 8px;
    left: 0;
    width: 8px;
    height: 8px;

    animation-name: eyesballs;
    animation-duration: $duration;
    animation-fill-mode: forwards;
    animation-timing-function: steps(1);
    animation-iteration-count: infinite;
  }
`

const GhostLeftEye = styled(GhostEye)`
  left: 8px;
`

const GhostRightEye = styled(GhostEye)`
  right: 8px;
`

const GhostFeetKeyframes: (fill: string) => Keyframes = fill => keyframes`
  0% {
    box-shadow:
        4px 0 ${fill},
        8px 0 ${fill},
        12px 0 ${fill},
        
        4px 4px ${fill},
        8px 4px ${fill},
        
        20px 0 ${fill},
        24px 0 ${fill},
        28px 0 ${fill},
        32px 0 ${fill},
    
        24px 4px ${fill},
        28px 4px ${fill},
      
        40px 0 ${fill},
        44px 0 ${fill},
        48px 0 ${fill},
        52px 0 ${fill},
    
        44px 4px ${fill},
        48px 4px ${fill}
      ;
  }
  50% { 
    box-shadow:
        0 4px ${fill},
        4px 0 ${fill},
        
        12px 0 ${fill},
        16px 0 ${fill},
        20px 0 ${fill},
        16px 4px ${fill},
        20px 4px ${fill},
      
        32px 0 ${fill},
        36px 0 ${fill},
        40px 0 ${fill},
        32px 4px ${fill},
        36px 4px ${fill},
      
        48px 0 ${fill},
        52px 0 ${fill},
        52px 4px ${fill}
      ;
  }
  100% {
    box-shadow:
        4px 0 ${fill},
        8px 0 ${fill},
        12px 0 ${fill},
        
        4px 4px ${fill},
        8px 4px ${fill},
        
        20px 0 ${fill},
        24px 0 ${fill},
        28px 0 ${fill},
        32px 0 ${fill},
    
        24px 4px ${fill},
        28px 4px ${fill},
      
        40px 0 ${fill},
        44px 0 ${fill},
        48px 0 ${fill},
        52px 0 ${fill},
    
        44px 4px ${fill},
        48px 4px ${fill}
      ;
  }
`

const GhostFeet = styled.div<GhostProps>`
  animation-name: ${(props: GhostProps): Keyframes =>
    props.fill ? GhostFeetKeyframes(props.fill) : GhostFeetKeyframes('#FF0000')};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  animation-timing-function: steps(1);
  animation-iteration-count: infinite;

  background: ${(props: GhostProps): string => propFill(props)};

  content: '';
  display: block;
  position: absolute;
  top: 48px;
  left: 0;
  width: 4px;
  height: 4px;
  z-index: 1;
`

const Ghost: FunctionComponent<GhostProps> = ({
  // todo fill
  fill = '#FF0000',
}) => (
  <GhostContainer>
    <GhostBody fill={fill}>
      <svg>
        <polygon points="0 24, 4 24, 4 12, 8 12, 8 8, 12 8, 12 4, 20 4, 20 0, 36 0, 36 4, 44 4, 44 8, 48 8, 48 12, 52 12, 52 24, 56 24, 56 48, 0 48 " />
      </svg>
    </GhostBody>
    <GhostLeftEye>
      <svg>
        <polygon points="4 0, 12 0, 12 4, 16 4, 16 16, 12 16, 12 20, 4 20, 4 16, 0 16, 0 4, 4 4 " />
      </svg>
    </GhostLeftEye>
    <GhostRightEye>
      <svg>
        <polygon points="4 0, 12 0, 12 4, 16 4, 16 16, 12 16, 12 20, 4 20, 4 16, 0 16, 0 4, 4 4 " />
      </svg>
    </GhostRightEye>
    <GhostFeet fill={fill} />
  </GhostContainer>
)

Ghost.defaultProps = {
  fill: '',
}

Ghost.propTypes = {
  fill: PropTypes.string,
}

export default Ghost
