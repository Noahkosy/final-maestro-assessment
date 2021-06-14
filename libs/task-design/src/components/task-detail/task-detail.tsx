import { Component, h, Host, Prop } from '@stencil/core';

@Component({
    tag: 'task-detail',
    styleUrl: 'task-detail.scss',
})
export class TaskDetail {
    @Prop() img: string;

    @Prop() description: string;

    @Prop() labels: string;

    @Prop() date: string;

    @Prop() notes: string;

    render() {
        return (
            <Host class='detail-card'>
                <p class='section-title'>THUMBNAIL</p>
                <div class='detail-img mrgn--btm'>
                    <img src='' alt='' />
                    {this.img}
                </div>

                <p class='section-title'>DESCRIPTION</p>
                <div class='detail-description mrgn--btm'>
                    <p>{this.description}</p>
                </div>

                <p class='section-title'>LABELS</p>
                <label-value labels={this.labels}></label-value>

                <p class='section-title'>DUE DATE</p>

                <div class='detail-date mrgn--btm'>
                    <slot name='date-placement' />
                </div>

                <p class='section-title'>NOTES</p>
                <div class='detail-notes'>
                    <p>{this.notes}</p>
                </div>
            </Host>
        );
    }
}
