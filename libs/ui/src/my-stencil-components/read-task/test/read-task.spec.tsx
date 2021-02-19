import { newSpecPage } from '@stencil/core/testing';
import { ReadTask } from '../read-task';

describe('read-task', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ReadTask],
      html: `<read-task></read-task>`,
    });
    expect(page.root).toEqualHtml(`
      <read-task>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </read-task>
    `);
  });
});
