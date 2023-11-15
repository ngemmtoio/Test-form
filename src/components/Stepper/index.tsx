import { stepsForm } from '../FormLogin/partials/helpers';
import { ContainerContent, Cube, Title, Wrapper } from './index.styles';

interface IStepper {
  step: stepsForm;
}

export function Stepper({ step }: IStepper) {
  return (
    <Wrapper>
      <ContainerContent>
        <Cube isStep={step === 'ENTER_USER_DATA'} />
        <Title>Initial info</Title>
      </ContainerContent>
      <ContainerContent>
        <Cube isStep={step === 'ENTER_PASSWORD'} />
        <Title>Password screen</Title>
      </ContainerContent>
      <ContainerContent>
        <Cube isStep={step === 'USER_DATA'} />
        <Title>Review</Title>
      </ContainerContent>
    </Wrapper>
  );
}
