import {Component, OnInit, EventEmitter, Output, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef} from "@angular/core";

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit, DoCheck {

  @Output()
  public onAddTodo = new EventEmitter<string>();
  public todo: string;

  public constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {

    this.cd.detach();
  }


  public addTodo($event) {
    $event.preventDefault();
    this.onAddTodo.emit(this.todo);
    this.cd.detectChanges();
  }

  public handleInput(value) {
    this.todo = value;
  }

  ngDoCheck(): void {
    console.log('FormComponent checked');
  }

}
