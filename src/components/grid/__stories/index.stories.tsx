import React from 'react';
import styled from 'styled-components';
import Grid from '../src';

export default {
  component: Grid,
  title: 'Grid/Main',
};

const Container = styled.div`
  width: 100px;
  height: 100px;
`;

export const GridDefault = () => (
  <Container>
    <Grid />
  </Container>
);

GridDefault.story = {
  name: 'Grid Default',
};
