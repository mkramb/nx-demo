import { render } from '@testing-library/react';

import FrontendInternalComponents from './frontend-internal-components';

describe('FrontendInternalComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendInternalComponents />);
    expect(baseElement).toBeTruthy();
  });
});
