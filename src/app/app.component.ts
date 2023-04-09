import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl="https://cdn.telanganatoday.com/wp-content/uploads/2021/09/Bridgelabzz.jpg";
  url="https://bridgelabz.com/";
  userName:string = "";
  nameError:string = "";

  ngOnInit():void{
    this.title = "Hello From Bridgelabz."
  }
  
  onClick($event:any){
    console.log("Save button is clicked!",$event);
    window.open(this.url,"_blanck")
  }

  onInput($event:any){
    console.log("change event occured!",$event.data);
    const nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError="";
      return;
    }this.nameError = "Name is Incorrect";
  }
}
