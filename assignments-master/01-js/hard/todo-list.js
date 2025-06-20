/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todolist {
    constructor(){
      this.todolist=[];
    }

    add(str){
      this.todolist.push(str);
    }
    remove(n){
      for(let i=n;i<this.todolist.length;i++){
              this.todolist[i]=this.todolist[i+1];
              if(i==this.todolist.length-1){
                this.todolist.pop();
              }
      }
    }

    update(n,str){
      if(n>this.todolist.length-1){
              return this.todolist;
        }
        this.todolist[n]=str;
    }
    
    get(n){
      if(n>this.todolist.length-1){
        return null;
      }
      return this.todolist[n];
    }
    
    getAll(){
      return this.todolist;
    }

    clear(){
      this.todolist=[];
    }
}

module.exports = Todolist;
