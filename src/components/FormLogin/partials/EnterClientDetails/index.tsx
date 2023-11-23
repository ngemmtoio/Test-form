import {
  ContainerInput,
  StyledButton,
  StyledInput,
  Title,
  Error,
  StyledInputMask,
  StyledSelectInput,
  ClientDetailsContainer,
  Wrapper,
} from '../../index.styles';
import { IDataUser } from '../../../../entities';
import { FullScreenSpin } from '../../../FullScreenSpin';
import { useEnterClientDetails } from './useEnterClientDetails';

interface IEnterClientDetails {
  onContinue: () => void;
  setDataUser: (v: IDataUser) => void;
}

export function EnterClientDetails({
  onContinue,
  setDataUser,
}: IEnterClientDetails) {
  let { form, touchedErrors, isValid, renderedSelectCountry, isLoading } =
    useEnterClientDetails({ setDataUser });

  if (isLoading) {
    return <FullScreenSpin description="Данные загружаются..." />;
  }

  return (
    <Wrapper>
      <ClientDetailsContainer>
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
            options={renderedSelectCountry}
            onChange={(value) => form.setFieldValue('country', value)}
            showSearch
            allowClear
            disabled={isLoading}
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
          onClick={() => {
            form.handleSubmit();
            onContinue();
          }}
        >
          Continue
        </StyledButton>
      </ClientDetailsContainer>
    </Wrapper>
  );
}
