import { render } from '@testing-library/react';

import FrontendExternalComponents from './frontend-external-components';

describe('FrontendExternalComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendExternalComponents />);
    expect(baseElement).toBeTruthy();
  });
});
