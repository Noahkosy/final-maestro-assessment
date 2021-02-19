import { newE2EPage } from '@stencil/core/testing';

describe('read-task', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<read-task></read-task>');

    const element = await page.find('read-task');
    expect(element).toHaveClass('hydrated');
  });
});
