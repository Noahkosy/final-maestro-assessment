import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'read-task',
  styleUrl: 'read-task.css',
  shadow: true,
})
export class ReadTask {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
