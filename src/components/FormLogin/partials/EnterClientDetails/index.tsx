import { Modal } from '../../../Modal';
import {
  ContainerInput,
  StyledButton,
  StyledInput,
  Title,
  Wrapper,
  Error,
  StyledInputMask,
  StyledSelectInput,
} from '../../index.styles';
import { stepsForm } from '../helpers';
import { IDataUser } from '../../../../entities';
import { useEnterClientDetails } from './useEnterClientDetails';

interface IEnterClientDetails {
  step: (i: stepsForm) => void;
  dataUser: (v: IDataUser) => void;
}

export function EnterClientDetails({ step, dataUser }: IEnterClientDetails) {
  let { form, touchedErrors, isValid, renderedSelectCountry } =
    useEnterClientDetails({ dataUser });

  return (
    <Modal>
      <Wrapper>
        <ContainerInput>
          <Title>Username</Title>
          <StyledInput
            placeholder="Your name"
            type="text"
            name="name"
            value={form.values.name}
            onBlur={form.handleBlur}
            onChange={form.handleChange}
          />
          <Error>{touchedErrors.name}</Error>
        </ContainerInput>
        <ContainerInput>
          <Title>Email</Title>
          <StyledInput
            placeholder="Your email"
            type="text"
            name="email"
            value={form.values.email}
            onBlur={form.handleBlur}
            onChange={form.handleChange}
          />
          <Error>{touchedErrors.email}</Error>
        </ContainerInput>
        <ContainerInput>
          <Title>Country</Title>
          <StyledSelectInput
            placeholder="Select a country"
            onBlur={form.handleBlur}
            style={{ width: '100%', height: '40px' }}
            options={renderedSelectCountry}
            onChange={(value) => form.setFieldValue('country', value)}
          />
          <Error>{touchedErrors.country}</Error>
        </ContainerInput>
        <ContainerInput>
          <Title>Phone Number</Title>
          <StyledInputMask
            mask="+7 (999) 999-99-99"
            maskChar=""
            type="tel"
            placeholder="Input phone number"
            name="phoneNumber"
            value={form.values.phoneNumber}
            onBlur={form.handleBlur}
            onChange={form.handleChange}
          />
          <Error>{touchedErrors.phoneNumber}</Error>
        </ContainerInput>
        <StyledButton
          disabled={!isValid}
          onClick={async () => {
            await form.handleSubmit();
            step(stepsForm.ENTER_PASSWORD);
          }}
        >
          Continue
        </StyledButton>
      </Wrapper>
    </Modal>
  );
}
