import styled from '@emotion/styled';

interface ICubeProps {
  isStep: boolean;
}

export let Wrapper = styled.div`
  display: grid;
  grid-row-gap: 20px;
  justify-items: start;
`;

export let ContainerContent = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 12px;
`;

export let Cube = styled.div<ICubeProps>`
  width: 16px;
  height: 16px;
  background-color: ${({ isStep }) => (isStep ? '#5845dd' : '#C9C5E8')};
`;

export let Title = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.14;
  color: #817ca5;
`;
