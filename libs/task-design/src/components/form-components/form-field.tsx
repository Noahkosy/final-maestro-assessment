import { Component, h, Host, Prop } from '@stencil/core';

@Component({
    tag: 'form-field',
    styleUrl: 'form-field.scss',
})
export class FormField {
    @Prop() label: string;
    @Prop() for: string;
    @Prop({ reflect: true }) showError: boolean;
    @Prop() errorMessage: string;

    render() {
        return (
            <Host>
                <label htmlFor={this.for}>{this.label}</label>
                <slot />
                <p class='error-message'>{this.errorMessage}</p>
            </Host>
        );
    }
}
