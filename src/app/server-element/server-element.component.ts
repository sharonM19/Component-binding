import { ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck,
             AfterContentInit ,AfterContentChecked,
             AfterViewInit ,AfterViewChecked ,OnDestroy{
  
  @Input() element:{type: string,name: string,content: string};
  @Input() name : string;
  @ViewChild('heading') header :ElementRef;

  constructor() {
    console.log("constructor called !!");
   }
  ngOnDestroy(){
    console.log("ngOnDestroy called !!");
   
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called !!");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called !!");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called !!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called !!");
  }

  ngDoCheck() {
    console.log("ngDo Check  called !!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called !!");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnint called !!");
  
  }

}
