import { StyledButton } from './Button.styled';

export const LoadMore = ({ onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      Load more...
    </StyledButton>
  );
};
