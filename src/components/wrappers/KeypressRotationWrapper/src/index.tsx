import React, { useState, useEffect, FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { setUserDirection, UserInterfaceTypes } from '../../../../actions/userInput'
import { STATES } from '../../../../constants/grid'

const useKeyPress = (targetKey: string): boolean => {
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = ({ key }: { key: string }): void => {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }

  const upHandler = ({ key }: { key: string }): void => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    return (): void => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  })

  return keyPressed
}

export interface KeypressWrapperInterface {
  children?: React.ReactNode
  dispatch: React.Dispatch<UserInterfaceTypes>
}

const KeypressRotationWrapper: FunctionComponent<KeypressWrapperInterface> = ({ dispatch, children }) => {
  const downPress = useKeyPress('ArrowDown')
  const upPress = useKeyPress('ArrowUp')
  const leftPress = useKeyPress('ArrowLeft')
  const rightPress = useKeyPress('ArrowRight')

  useEffect(() => {
    if (downPress) dispatch(setUserDirection(STATES.DOWN))
  }, [downPress])
  useEffect(() => {
    if (leftPress) dispatch(setUserDirection(STATES.LEFT))
  }, [leftPress])
  useEffect(() => {
    if (rightPress) dispatch(setUserDirection(STATES.RIGHT))
  }, [rightPress])
  useEffect(() => {
    if (upPress) dispatch(setUserDirection(STATES.UP))
  }, [upPress])

  return <div>{children}</div>
}

export default connect()(KeypressRotationWrapper)
