import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'task-card',
  styleUrl: 'task-card.css',
  shadow: true,
})
export class TaskCard {

  @Prop() name: string;

  render() {
    return (

      <div class="card">

        <div class="card-img">
          <img src="" alt="User uploaded picture"/>
        </div>

        <div class="card-labels">
          <i>WORK</i>  <i>IMPORTANT</i>
        </div>
        
        <div class="card-title">
          <slot name ="task-title"></slot>
        </div>

        <div class="card-description">
          <slot name="task-description"></slot>
        </div>

        <p>I</p> <slot name="date"></slot>

      </div>
    );
  }

}
