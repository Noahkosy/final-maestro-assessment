import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nxlp-task-form',
  styleUrl: 'task-form.css',
  shadow: true,
})
export class TaskForm {

  render() {
    return (
      <Host>
        <div>

          <div>
            <form action="/your-route-here" method="post">
              <ul>
                <li>
                  <label htmlFor="TASK NAME">TASK NAME*</label>
                  <input type="text" id="TASK NAME"/>
                </li>
                <li>
                  <label htmlFor="THUMBNAIL">THUMBNAIL</label>
                  <input type="file" id="THUMBNAIL"/>
                </li>
                <li>
                  <label htmlFor="DESCRIPTION">DESCRIPTION</label>
                  <textarea name="" id="DESCRIPTION" ></textarea>
                </li>
                <li>
                  <label htmlFor="LABELS">LABELS</label>
                  <input type="text" id="LABELS"/>
                </li>
                <li>
                  <label htmlFor="DUE DATE">DUE DATE</label>
                  <input type="text" id="DUE DATE"/>
                </li>
                <li>
                  <label htmlFor="NOTES">NOTES</label>
                  <textarea name="" id="NOTES" ></textarea>
                </li>
              </ul>
            </form>
          </div>

          

          
        </div>
        <slot></slot>
      </Host>
    );
  }

}
