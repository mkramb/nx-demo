import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontendExternalComponentsProps {}

const StyledFrontendExternalComponents = styled.div`
  color: green;
`;

export function FrontendExternalComponents(
  props: FrontendExternalComponentsProps
) {
  return (
    <StyledFrontendExternalComponents>
      <h1>Welcome from ExternalComponents!</h1>
    </StyledFrontendExternalComponents>
  );
}

export default FrontendExternalComponents;
