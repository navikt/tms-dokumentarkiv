import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { afterAll, afterEach, beforeAll } from 'vitest';
import { server } from './src/mocks/server';

beforeAll(() => {
  server.listen({ onUnhandledRequest: "warn" });
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => {
  server.close();
});

const customRender = ( children: React.ReactNode ) =>
  render(
    <BrowserRouter>
      <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>
    </BrowserRouter>
  );
// override render export
export { customRender as render };
