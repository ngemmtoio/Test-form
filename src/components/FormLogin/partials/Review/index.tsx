import {
  DataContainer,
  ReviewTitle,
  StyledButton,
  Title,
  Wrapper,
  ReviewContainer,
} from '../../index.styles';
import { IDataUser } from '../../../../entities';

interface IReview {
  dataUser: IDataUser;
  onContinue: () => void;
}

export function Review({ dataUser, onContinue }: IReview) {
  return (
    <Wrapper>
      <ReviewContainer>
        <DataContainer>
          <ReviewTitle>Username</ReviewTitle>
          <Title>{dataUser.name}</Title>
        </DataContainer>
        <DataContainer>
          <ReviewTitle>Email</ReviewTitle>
          <Title>{dataUser.email}</Title>
        </DataContainer>
        <DataContainer>
          <ReviewTitle>Country</ReviewTitle>
          <Title>{dataUser.country}</Title>
        </DataContainer>
        <DataContainer>
          <ReviewTitle>Phone number</ReviewTitle>
          <Title>{dataUser.phoneNumber}</Title>
        </DataContainer>
        <StyledButton style={{ marginTop: '16px' }} onClick={onContinue}>
          Complete
        </StyledButton>
      </ReviewContainer>
    </Wrapper>
  );
}
