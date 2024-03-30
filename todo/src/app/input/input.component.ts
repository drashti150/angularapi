import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
    tasks: any[] = [];
    name: string = '';
    isEditing = false;
    // isAddClicked = false;
    editingIndex: number | null = null; 
  
    addInput() {
      // this.isAddClicked = true; 
      this.tasks.push(this.name);
      this.name = '';
    }
  
    editTask(index: number) {
      this.name = this.tasks[index];
      this.isEditing = true;
      this.editingIndex = index; 
    }
  
    deleteTask(index: number) {
      this.tasks.splice(index, 1);
    }
  
    updateTask(index: number) {
      this.tasks[index] = this.name;
      this.isEditing = false;
      this.name = ''; 
    }
  }
  




























  // isEditing = false;
  // editingIndex: number | null = null;
  // tasks: string[] = [''];
  // savedTasks: string[] = [];
  // inputValue = 'Initial value';

  // addInput() {
  //   // this.tasks.push(Math.random().toString());
  //   this.tasks.push('');
  // }
  // editTask(index: number) {
  //   console.log(index);
  //   console.log("Task Edit: ", this.tasks[index]);
  //   console.log(this.tasks);
  //   this.inputValue = this.tasks[index];
  //   this.isEditing = true;
  //   this.editingIndex = index;
  //   this.savedTasks.push(this.tasks[index]);
  // }
  // deleteTask(index: number) {
  //   console.log(index);
  //   console.log("Task deleted:", this.tasks);
  //   this.tasks.splice(index, 1);

  // }
  // updateTask() {
  //   if (this.editingIndex !== null) {
  //     this.tasks[this.editingIndex] = this.inputValue;
  //     this.isEditing = false;
  //     this.editingIndex = null;
  //     this.inputValue = ''; // Reset input value
  //   }
  // }
  
// }


//   isEditing = false;
//   inputValue = 'Initial Value';
//   tasks: string[] = ['']; // Sample tasks array
//   savedTasks: string[] = [];
//   editingIndex: number | null = null; // Track the index of the task being edited

//   addInput() {
//     this.tasks.push('');
//   }

//   deleteTask(index: number) {
//     this.tasks.splice(index, 1);
//   }

//   editTask(index: number) {
//     this.inputValue = this.tasks[index];
//     this.isEditing = true;
//     this.editingIndex = index; // Set the editingIndex
//   }

//   updateValue(index: number) {
//     // Perform update logic here (e.g., send data to server)
//     console.log('Updated value:', this.inputValue);
//     this.tasks[index] = this.inputValue; // Update the task with the new value
//     this.isEditing = false;
//     this.editingIndex = null; // Reset editingIndex after updating
//   }
// }
