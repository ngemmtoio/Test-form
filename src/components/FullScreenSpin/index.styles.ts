import styled from '@emotion/styled';
import { Typography } from 'antd';

export let StyledWrapper = styled.div`
  &&& {
    width: 100%;
    height: 50vh;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export let StyledDescription = styled(Typography.Text)`
  &&& {
    margin-top: 15px;
  }
`;
