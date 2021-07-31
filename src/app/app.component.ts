import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';

todolist:any[] = [];
 
 todolistFuncetion(todoval:any)

{
  this.todolist.push(todoval.value);

  todoval.value='';  
} 
removeTodoitem(item:any) {
  this.todolist.splice(item,1);
}

itemname="";
indexval:any="";
displayval=false;
displayval1=true;
updateItem(item:any){ 

  this.displayval=true;
  this.displayval1=false;
  this.itemname=item;
  
  this.indexval=this.todolist.indexOf(item);

   //index = this.todolist.indexOf(item);

}
edittodo(todoitem:any,todoitemindex:any)
{   
  this.displayval1=true;
  this.displayval=false;
  //alert(todoitem.value+todoitemindex.value);
  this.todolist[todoitemindex.value] = todoitem.value;
}

}
