import { Component, OnInit } from '@angular/core';
import { ComponentService } from './app.component.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css'
    ],
    providers: [ComponentService]
})

export class AppComponent implements OnInit {

    constructor(private componentService: ComponentService) {}

    todo = [];
    newTodo = '';

    ngOnInit() {  
        
        this.componentService.getTodos()
            .subscribe(data => {
                this.todo = data.json();
            });
    }

    addTodo(addNewTodo) {       
        
        this.componentService.addTodos(addNewTodo)
            .subscribe(data => {
                this.todo.push(data.json());
            });
        this.newTodo = '';
    }

    deleteTodo(index) {
        
        let delTodo = this.todo[index].id;
        this.componentService.deleteTodo(delTodo)
            .subscribe();
        this.ngOnInit();
    }
}
