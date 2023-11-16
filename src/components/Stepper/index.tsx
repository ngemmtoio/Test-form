import { StepsForm } from '../FormLogin/partials';
import { ContainerContent, Cube, Title, Wrapper } from './index.styles';

interface IStepper {
  step: StepsForm;
}

export function Stepper({ step }: IStepper) {
  return (
    <Wrapper>
      <ContainerContent>
        <Cube isStep={step === StepsForm.ENTER_USER_DATA} />
        <Title>Initial info</Title>
      </ContainerContent>
      <ContainerContent>
        <Cube isStep={step === StepsForm.ENTER_PASSWORD} />
        <Title>Password screen</Title>
      </ContainerContent>
      <ContainerContent>
        <Cube isStep={step === StepsForm.USER_DATA} />
        <Title>Review</Title>
      </ContainerContent>
    </Wrapper>
  );
}
