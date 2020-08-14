import React from 'react'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, color } from '@storybook/addon-knobs'
import styled from 'styled-components'
import Pacman from '../src/components/pacman'
import PacmanOnGrid from '../src/components/pacmanOnGrid'

export default {
  component: Pacman,
  title: 'Characters/Pacman',
  decorators: [withKnobs],
}

const Container = styled.div`
  width: 100px;
  height: 100px;
`

const LargerContainer = styled.div`
  width: 300px;
  height: 300px;
`

export const PacmanDefault = () => (
  <Container>
    <Pacman />
  </Container>
)

PacmanDefault.story = {
  name: 'Pacman Storybook',
}

export const PacmanOnGridDefault = () => (
  <LargerContainer>
    <PacmanOnGrid />
  </LargerContainer>
)

PacmanOnGridDefault.story = {
  name: 'Pacman On Grid Storybook',
}
