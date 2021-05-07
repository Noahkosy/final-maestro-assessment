import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'form-field',
  styleUrl: 'form-field.scss',
})
export class FormField {

  @Prop() label: string;
  @Prop() for: string;

  render() {
    return [
    <label htmlFor={this.for}>{this.label}</label>,
    <slot/>
    ];
  }
} 