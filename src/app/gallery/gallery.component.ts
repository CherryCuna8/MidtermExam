import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gallery=[
    {'id':1,'image':'../../assets/Cherry.jpg'},
    {'id':2,'image':'../../assets/pic1.jpg'},
    {'id':3,'image':'../../assets/pic2.jpg'},
    {'id':4,'image':'../../assets/pic3.jpg'},
    {'id':5,'image':'../../assets/pic4.jpg'},
    {'id':6,'image':'../../assets/pic5.jpg'},
    {'id':7,'image':'../../assets/pic6.jpg'},
    {'id':8,'image':'../../assets/pic1.jpg'},
    {'id':9,'image':'../../assets/Cherry.jpg'},
    {'id':10,'image':'../../assets/pic2.jpg'},
    {'id':11,'image':'../../assets/pic3.jpg'},
    {'id':12,'image':'../../assets/pic4.jpg'},
    {'id':13,'image':'../../assets/pic5.jpg'},
    {'id':14,'image':'../../assets/pic6.jpg'},
    

  ]

}
