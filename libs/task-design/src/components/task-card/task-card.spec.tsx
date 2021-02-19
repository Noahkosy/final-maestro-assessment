import { newSpecPage } from '@stencil/core/testing';
import { TaskCard } from './task-card';

describe('task-card', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [TaskCard],
      html: '<task-card></task-card>'
    });
    expect(root).toEqualHtml(`
      <task-card>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </task-card>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [TaskCard],
      html: `<task-card first="Stencil" last="'Don't call me a framework' JS"></task-card>`
    });
    expect(root).toEqualHtml(`
      <task-card first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </task-card>
    `);
  });
});
