import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'task-card',
  styleUrl: 'task-card.scss',
})
export class TaskCard {

  @Prop() img: string;

  @Prop() tags: string;

  @Prop() taskTitle: string;

  @Prop() description: string;

  @Prop() date: string;

  render() {
    return (
    
      <div class="card">

        <div class="card-img">
          <img src="" alt=""/>{this.img}
        </div>

        <div class="card-labels">
          <p>{this.tags}</p>
        </div>
        
        <div class="card-title">
          <p>{this.taskTitle}</p>
        </div>

        <div class="card-description">
          <p>{this.description}</p>
        </div>

        <div class='card-date'>
          <slot/>
        </div>

        <div class='card-calendar'>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
            <path d="M4 30.667c-1.473 0-2.667-1.194-2.667-2.667v0-21.333c0-1.473 1.194-2.667 2.667-2.667v0l5.999-0.001 0.001-1.332c0-0.736 0.597-1.333 1.333-1.333 0.68 0 1.241 0.509 1.323 1.166l0.010 0.167-0.001 1.332h6.667v-1.332c0-0.736 0.597-1.333 1.333-1.333 0.68 0 1.241 0.509 1.323 1.166l0.010 0.167-0.001 1.332 6.001 0.001c1.395 0 2.54 1.072 2.657 2.437l0.010 0.23v21.333c0 1.473-1.194 2.667-2.667 2.667v0zM9.999 22.666h-6l0.001 5.334 5.999-0.001v-5.333zM19.333 22.666h-6.667v5.333h6.667v-5.333zM27.999 22.666h-6v5.333l6.001 0.001-0.001-5.334zM9.999 14.666h-6v5.333h6v-5.333zM19.333 14.666h-6.667v5.333h6.667v-5.333zM27.999 14.666h-6v5.333h6v-5.333zM9.999 6.666l-5.999 0.001-0.001 5.332h24l0.001-5.332-6.001-0.001 0.001 1.334c0 0.736-0.597 1.333-1.333 1.333-0.68 0-1.241-0.509-1.323-1.166l-0.010-0.167v-1.334h-6.667l0.001 1.334c0 0.736-0.597 1.333-1.333 1.333-0.68 0-1.241-0.509-1.323-1.166l-0.010-0.167-0.001-1.334z"></path>
            </svg>
        </div>
        
      </div>
      
    );
  }
}
