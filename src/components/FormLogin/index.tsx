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
  StepsForm,
  Review,
  subTitleMap,
  dataUserFill,
} from './partials';

export function FormLogin() {
  let [step, setStep] = useState(StepsForm.ENTER_USER_DATA);
  let [dataUser, setDataUser] = useState(dataUserFill);

  let renderedComponent = useMemo(() => {
    if (step === StepsForm.ENTER_USER_DATA) {
      return (
        <EnterClientDetails
          onContinue={() => {
            setStep(StepsForm.ENTER_PASSWORD);
          }}
          setDataUser={setDataUser}
        />
      );
    }

    if (step === StepsForm.ENTER_PASSWORD) {
      return (
        <EnterPassword
          onContinue={() => {
            setStep(StepsForm.USER_DATA);
          }}
        />
      );
    }
    if (step === StepsForm.USER_DATA) {
      return (
        <Review
          dataUser={dataUser}
          onContinue={() => {
            setStep(StepsForm.ENTER_USER_DATA);
          }}
        />
      );
    }
  }, [dataUser, step]);

  return (
    <MainWrapper>
      <StepperContainer>
        <Stepper step={step} />
      </StepperContainer>
      <ContentContainer>
        <TitleContainer>
          <TitleMain>Super test form</TitleMain>
          <SubtitleMain>{subTitleMap[step]}</SubtitleMain>
        </TitleContainer>
        {renderedComponent}
      </ContentContainer>
    </MainWrapper>
  );
}
