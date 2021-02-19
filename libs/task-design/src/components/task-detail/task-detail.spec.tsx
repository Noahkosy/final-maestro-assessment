import { newSpecPage } from '@stencil/core/testing';
import { TaskDetail } from './task-detail';

describe('task-detail', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [TaskDetail],
      html: '<task-detail></task-detail>'
    });
    expect(root).toEqualHtml(`
      <task-detail>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </task-detail>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [TaskDetail],
      html: `<task-detail first="Stencil" last="'Don't call me a framework' JS"></task-detail>`
    });
    expect(root).toEqualHtml(`
      <task-detail first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </task-detail>
    `);
  });
});
