import {
  ContainerInput,
  Error,
  StyledButton,
  StyledPasswordInput,
  Title,
  EnterPasswordContainer,
  Wrapper,
} from '../../index.styles';
import { useEnterPassword } from './useEnterPassword';

interface IEnterPassword {
  onContinue: () => void;
}

export function EnterPassword({ onContinue }: IEnterPassword) {
  let { form, touchedErrors, isValid } = useEnterPassword();

  return (
    <Wrapper>
      <EnterPasswordContainer>
        <ContainerInput>
          <Title>Password</Title>
          <StyledPasswordInput
            placeholder="Input password"
            type="password"
            name="password"
            value={form.values.password}
            onBlur={form.handleBlur}
            onChange={form.handleChange}
          />
          <Error>{touchedErrors.password}</Error>
        </ContainerInput>
        <ContainerInput>
          <Title>Repeat passport</Title>
          <StyledPasswordInput
            placeholder="Repeat passport"
            type="password"
            name="repeatPassword"
            value={form.values.repeatPassword}
            onBlur={form.handleBlur}
            onChange={form.handleChange}
          />
          <Error>{touchedErrors.repeatPassword}</Error>
        </ContainerInput>
        <StyledButton disabled={!isValid} onClick={onContinue}>
          Continue
        </StyledButton>
      </EnterPasswordContainer>
    </Wrapper>
  );
}
