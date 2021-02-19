import { Component, h, Prop, State,  } from '@stencil/core';

@Component({
  tag: 'task-form',
  styleUrl: 'task-form.scss',
  shadow: true,
})
export class TaskForm {

  @Prop() method: any;

  @State() name: string;
  @State() description: string;
  @State() labels: string[];
  @State() dueDate: string;
  @State() notes: string;

  handleSubmit() {
    {this.method}({
      title: this.name,
      description: this.description,
      labels: this.labels,
      date: this.dueDate,
      notes: this.notes
    })
    
  }

  handleNameChange(event) {
    this.name = event.target.value;
  }

  handleDescriptionChange(event) {
    this.description = event.target.value;
  }

  handleLabelsChange(event) {
    this.labels = event.target.value;
  }

  handleDueDateChange(event) {
    this.dueDate = event.target.value;
  }

  handleNotesChange(event) {
    this.notes = event.target.value;
  }

  render() {
    return (
      
      <div>
        <div>
          <form onSubmit={()=> this.handleSubmit()}>
            <section>
            
              <div>
                <label htmlFor="TASK NAME">TASK NAME*</label>
                <input type="text" id="TASK NAME" value={this.name} onInput={(e) => this.handleNameChange(e)}/>
              </div>

              <div>
                <label htmlFor="THUMBNAIL">THUMBNAIL</label>
                <input class='dashes' type="file" id="THUMBNAIL"/>
              </div>

              <div>
                <label htmlFor="DESCRIPTION">DESCRIPTION</label>
                <textarea name="" id="DESCRIPTION" value={this.description} onInput={(e) => this.handleDescriptionChange(e)} ></textarea>
              </div>

              <div>
                <label htmlFor="LABELS">LABELS</label>
                <input type="text" id="LABELS" value={this.labels} onInput={(e) => this.handleLabelsChange(e)}/>
              </div>

              <div>
                <label htmlFor="DUE DATE">DUE DATE</label>
                <input class='sm-box' type="text" id="DUE DATE" value={this.dueDate} onInput={(e) => this.handleDueDateChange(e)}/>
              </div>

              <div>
                <label htmlFor="NOTES">NOTES</label>
                <textarea name="" id="NOTES" value={this.notes} onInput={(e) => this.handleNotesChange(e)} ></textarea>
              </div>

              
              </section>
          </form>
        </div>
      </div>
    )
  }
}
