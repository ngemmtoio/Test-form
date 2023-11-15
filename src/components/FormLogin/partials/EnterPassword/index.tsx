import {
  ContainerInput,
  Error,
  StyledButton,
  StyledPasswordInput,
  Title,
  Wrapper,
} from '../../index.styles';
import { Modal } from '../../../Modal';
import { stepsForm } from '../helpers';
import { useEnterPassword } from './useEnterPassword';

interface IEnterPassword {
  step: (i: stepsForm) => void;
}

export function EnterPassword({ step }: IEnterPassword) {
  let { form, touchedErrors, isValid } = useEnterPassword();

  return (
    <Modal>
      <Wrapper>
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
        <StyledButton
          disabled={!isValid}
          onClick={() => step(stepsForm.USER_DATA)}
        >
          Continue
        </StyledButton>
      </Wrapper>
    </Modal>
  );
}
