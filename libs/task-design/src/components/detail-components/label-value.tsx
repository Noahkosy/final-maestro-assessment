import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'label-value',
    styleUrl: 'label-value.scss',
})
export class LabelValue {
    @Prop() labels: string;

    labelArray() {
        const array = this.labels.split(' ');
        return array;
    }

    render() {
        return (
            <Host>
                {this.labelArray().map((label) => (
                    <div class='label'>
                        <p>{label}</p>
                    </div>
                ))}
            </Host>
        );
    }
}
