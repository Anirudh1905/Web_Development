import { Component } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  Servername="";
  ServerId;
  ServerStatus='offline';
  statusFlag=false;
  buttonstate=true;
  resetstate=true;
  flag=true;
  Students=['Anil','Amal'];
  Currentname='';
  flag1=true;
  c=0;
  constructor()
  {
    setTimeout(() => {
      this.buttonstate=false;
    }, 2500);
  }
  resetcheck()
  {
    if (this.Servername == "")
      this.resetstate = true;
    else
      this.resetstate = false;
    return this.resetstate;
  }
  resetstatus()
  {
    this.Servername="";
    this.ServerId="";
  }
  toggleServerStatus()
  {
    this.statusFlag= !this.statusFlag;
    if(this.statusFlag===true)
      this.ServerStatus='online';
    else
      this.ServerStatus='offline';
    return this.ServerStatus;
  }
  toggleFlag()
  {
    this.flag= !this.flag;
    return this.flag;
  }
  getcolor()
  {
    if(this.flag==true)
      return 'red';
    else
      return 'green';
  }
  add()
  {
    this.Students.push(this.Currentname);
  }
  togile()
  {
    this.flag1= !this.flag1;
    this.c++;
    if(this.c>=5)
    return this.flag1;
  }
  putcolor()
  {
    if(this.c>=5)
      return 'orange';
    else
      return 'white';
  }
}
