import React from 'react';
import { withKnobs, color } from "@storybook/addon-knobs";
import styled from 'styled-components';
import Ghost from '../src/ghost';
import { GHOSTS } from '../../../../constants/ghosts';

export default {
  component: Ghost,
  title: 'Characters/Ghost',
  decorators: [withKnobs],
};

const Container = styled.div`
  width: 100px;
  height: 100px;
`;

export const BlinkyDefault = () => (
  <Container>
    <Ghost fill={GHOSTS.BLINKY}/>
  </Container>
);

BlinkyDefault.story = {
  name: 'Blinky Storybook',
};

export const PinkyDefault = () => (
  <Container>
    <Ghost fill={GHOSTS.PINKY}/>
  </Container>
);

PinkyDefault.story = {
  name: 'Pinky Storybook',
};

export const InkyDefault = () => (
  <Container>
    <Ghost fill={GHOSTS.INKY}/>
  </Container>
);

InkyDefault.story = {
  name: 'Inky Storybook',
};

export const ClydeDefault = () => (
  <Container>
    <Ghost fill={GHOSTS.CLYDE}/>
  </Container>
);

ClydeDefault.story = {
  name: 'Clyde Storybook',
};