import { Modal } from '../../../Modal';
import {
  DataContainer,
  StyledButton,
  Title,
  WrapperReview,
} from '../../index.styles';
import { IDataUser } from '../../../../entities';

interface IReview {
  dataUser: IDataUser;
}

export function Review({ dataUser }: IReview) {
  return (
    <Modal>
      <WrapperReview>
        <DataContainer>
          <Title style={{ color: '#CECAEB' }}>Username</Title>
          <Title>{dataUser.name}</Title>
        </DataContainer>
        <DataContainer>
          <Title style={{ color: '#CECAEB' }}>Email</Title>
          <Title>{dataUser.email}</Title>
        </DataContainer>
        <DataContainer>
          <Title style={{ color: '#CECAEB' }}>Country</Title>
          <Title>{dataUser.country}</Title>
        </DataContainer>
        <DataContainer>
          <Title style={{ color: '#CECAEB' }}>Number Phone</Title>
          <Title>{dataUser.phoneNumber}</Title>
        </DataContainer>
        <StyledButton style={{ marginTop: '16px' }}>Complete</StyledButton>
      </WrapperReview>
    </Modal>
  );
}
