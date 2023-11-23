import { Spin } from 'antd';
import { StyledDescription, StyledWrapper } from './index.styles';

export interface IFullScreenSpinProps {
  className?: string;
  description?: string;
}

export function FullScreenSpin({
  className,
  description,
}: IFullScreenSpinProps) {
  return (
    <StyledWrapper className={className}>
      <Spin tip="Loading" size="large" />
      <StyledDescription>{description}</StyledDescription>
    </StyledWrapper>
  );
}
