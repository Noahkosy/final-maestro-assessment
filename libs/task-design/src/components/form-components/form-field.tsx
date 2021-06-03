import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'form-field',
  styleUrl: 'form-field.scss',
})
export class FormField {

  @Prop() label: string;
  @Prop() for: string;
  @Prop() isInvalid: boolean;

  render() {
    return [
    <label htmlFor={this.for}>{this.label}</label>,
    <slot/>,

        // This is what I want to implement but typescript throws an error when I do //    

    // if(this.isInvalid) {
    //   return <span>{this.label} is required.</span>
    // }
    ];
  }
} 