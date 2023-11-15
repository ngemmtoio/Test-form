import { useMemo, useState } from 'react';
import { Stepper } from '../Stepper';
import {
  ContentContainer,
  MainWrapper,
  StepperContainer,
  SubtitleMain,
  TitleContainer,
  TitleMain,
} from './index.styles';
import {
  EnterClientDetails,
  EnterPassword,
  stepsForm,
  Review,
} from './partials';

export function FormLogin() {
  let [step, setStep] = useState(stepsForm.ENTER_USER_DATA);

  let [dataUser, setDataUser] = useState({
    name: '',
    email: '',
    country: '',
    phoneNumber: '',
  });

  let renderComponent = useMemo(() => {
    if (step === stepsForm.ENTER_USER_DATA) {
      return (
        <EnterClientDetails
          step={(newStep) => setStep(newStep)}
          dataUser={setDataUser}
        />
      );
    }

    if (step === stepsForm.ENTER_PASSWORD) {
      return <EnterPassword step={(newStep) => setStep(newStep)} />;
    }
    if (step === stepsForm.USER_DATA) {
      return <Review dataUser={dataUser} />;
    }
  }, [dataUser, step]);

  let renderSubTitle = useMemo(() => {
    if (step === stepsForm.ENTER_USER_DATA) {
      return 'Initial info';
    }

    if (step === stepsForm.ENTER_PASSWORD) {
      return 'Password screen';
    }
    if (step === stepsForm.USER_DATA) {
      return 'Review screen';
    }
  }, [step]);

  return (
    <MainWrapper>
      <StepperContainer>
        <Stepper step={step} />
      </StepperContainer>
      <ContentContainer>
        <TitleContainer>
          <TitleMain>Super test form</TitleMain>
          <SubtitleMain>{renderSubTitle}</SubtitleMain>
        </TitleContainer>
        {renderComponent}
      </ContentContainer>
    </MainWrapper>
  );
}
