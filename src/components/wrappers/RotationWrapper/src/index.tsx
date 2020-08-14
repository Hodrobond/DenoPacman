import React, { useState, useRef, useEffect, FunctionComponent } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { STATES } from '../../../../constants/grid'
import PropTypes from 'prop-types'
import { ReducerStateInterface } from '../../../../reducers'

const ROTATION_MAP = {
  [STATES.RIGHT]: 0,
  [STATES.DOWN]: 90,
  [STATES.LEFT]: 180,
  [STATES.UP]: 270,
}

export interface RotationWrapperProps {
  children?: React.ReactNode
  direction: string
}

const mapStateToProps: (input: ReducerStateInterface) => RotationWrapperProps = ({
  userInputReducer: { direction = 'right' } = {},
}) => ({
  direction,
})

interface WrapperInterface {
  rotation: number
}

const Rotation = styled.div<WrapperInterface>`
  transition-duration: 0.5s;
  transform: ${(props: WrapperInterface): string => `rotate(${props.rotation}deg);`};
`

const usePrevious = (value: any) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const RotationWrapper: FunctionComponent<RotationWrapperProps> = ({ children, direction }) => {
  const previousDirection = usePrevious(direction)
  const [rotation, setRotation] = useState(0)
  useEffect(() => {
    if (!previousDirection) return
    const totalRotate = ROTATION_MAP[direction] - ROTATION_MAP[previousDirection || '']
    let sum = rotation + totalRotate
    if (Math.abs(totalRotate) > 180) {
      if (sum > 0) {
        sum -= 360
      } else {
        sum += 360
      }
    }
    setRotation(sum)
  }, [direction])
  return <Rotation rotation={rotation}>{children}</Rotation>
}

RotationWrapper.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(RotationWrapper)
