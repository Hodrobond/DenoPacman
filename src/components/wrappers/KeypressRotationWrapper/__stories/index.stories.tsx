import React from 'react'
import styled from 'styled-components'
import KeypressRotationWrapper from '../src'
import RotationWrapper from '../../RotationWrapper/src'
import Pacman from '../../../characters/Pacman/src/components/pacman'

export default {
  component: KeypressRotationWrapper,
  title: 'Wrappers/RotatingPacman',
}

const Container = styled.div`
  width: 100px;
  height: 100px;
`

export const KeypressRotationWrapperDefault = () => (
  <Container>
    <KeypressRotationWrapper>
      <RotationWrapper>
        <Pacman />
      </RotationWrapper>
    </KeypressRotationWrapper>
  </Container>
)

KeypressRotationWrapperDefault.story = {
  name: 'Keypress Rotation Wrapper Storybook',
}
