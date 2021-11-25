import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  contacts= [
    
    {'id':1,'name':'Facebook Account','description':'Username: Cherry G. Cuna','image':'../../assets/fb.png'},
    {'id':2,'name': 'Gmail Account','description':'Email:cherrycuna4@gmail.com','image':'../../assets/gmail.png'},
    {'id':3,'name': 'Instagram Account','description':'Username:CherrGanda3817','image':'../../assets/insta.jfif'},
    {'id':4,'name': 'Contact Number','description':'Number:09701481454','image':'../../assets/download.png'},

  ]

}
