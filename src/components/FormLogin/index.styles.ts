import styled from '@emotion/styled';
import InputMask from 'react-input-mask';
import { Select } from 'antd';

interface IButtonProps {
  disabled?: boolean;
}

export let MainWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

export let StepperContainer = styled.div`
  position: absolute;
  top: 180px;
  left: 70px;
`;

export let TitleContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-row-gap: 17px;
  margin-top: 30px;
`;

export let ContentContainer = styled.div`
  display: grid;
  grid-row-gap: 60px;
  justify-content: center;
`;

export let TitleMain = styled.div`
  font-size: 36px;
  font-weight: 500;
  color: #413c5f;
`;
export let SubtitleMain = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #817ca5;
`;

export let Wrapper = styled.div`
  display: grid;
  grid-row-gap: 40px;
`;

export let ContainerInput = styled.div`
  display: grid;
  grid-row-gap: 8px;
`;

export let Title = styled.div`
  font-size: 14px;
  font-weight: 100;
  line-height: 1.14;
  color: #ffffff;
`;

export let StyledInput = styled.input`
  padding: 12px 10px 12px 16px;
  font-size: 14px;
  font-weight: 100;
  line-height: 1.14;
  border: none;
  outline: none;

  ::placeholder {
    color: #c0bcdf;
  }
`;

export let StyledInputMask = styled(InputMask)`
  padding: 12px 10px 12px 16px;
  font-size: 14px;
  font-weight: 100;
  line-height: 1.14;
  border: none;
  outline: none;
`;

export let StyledPasswordInput = styled(StyledInput)`
  color: #413c5f;

  ::placeholder {
    color: #c0bcdf;
  }
`;

export let StyledSelectInput = styled(Select)`
  .ant-select-selector {
    padding: 12px 10px 12px 16px;
    border: none !important;
    border-radius: 0;
  }

  width: 100%;
  font-size: 14px;
  font-weight: 100;
  line-height: 1.14;
  border: none;
  outline: none;
  position: relative;
`;

export let StyledButton = styled.button<IButtonProps>`
  width: 100%;
  padding: 16px 0;
  border-radius: 4px;
  font-size: 24px;
  font-weight: 500;
  background-color: ${({ disabled }) => (disabled ? '#A39FC1' : '#ffffff')};
`;

export let Error = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.14;
  color: #da2121;
`;

export let WrapperReview = styled.div`
  display: grid;
  grid-row-gap: 24px;
`;

export let DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
