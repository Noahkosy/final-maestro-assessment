import { Component, h, Host, Prop } from '@stencil/core';

@Component({
    tag: 'task-card',
    styleUrl: 'task-card.scss',
})
export class TaskCard {
    @Prop() img: string;
    @Prop() labels: string;
    @Prop() taskTitle: string;
    @Prop() description: string;
    @Prop() date: string;

    render() {
        return (
            <Host>
                <div class='card'>
                    <div class='card-img'>
                        <img src='' alt='' />
                        {this.img}
                    </div>

                    <label-value labels={this.labels}></label-value>

                    <div class='card-title'>
                        <p>{this.taskTitle}</p>
                    </div>

                    <div class='card-description'>
                        <p>{this.description}</p>
                    </div>

                    <div class='card-date'>
                        <slot />
                    </div>
                </div>
            </Host>
        );
    }
}
