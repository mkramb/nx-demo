import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FrontendInternalComponentsProps {}

const StyledFrontendInternalComponents = styled.div`
  color: red;
`;

export function FrontendInternalComponents(
  props: FrontendInternalComponentsProps
) {
  return (
    <StyledFrontendInternalComponents>
      <h1>Welcome from InternalComponents!</h1>
    </StyledFrontendInternalComponents>
  );
}

export default FrontendInternalComponents;
