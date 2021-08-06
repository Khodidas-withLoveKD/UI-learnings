import { Component, Injectable, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

let draggables = null,
  container
@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {

  constructor() { 
    draggables = document.querySelectorAll('.draggable-item')
    container = document.querySelectorAll('.carousel-container')
    console.log('container:', container)
    console.log('draggables:', draggables)
  }

  ngOnInit(): void {}
  // ==============
  carousel = [{
    image_url: '',
    title: '',
    subtitle: '',
    default_action: {
        url: '',
        type: 'web_url'
    },
    buttons: [{
        type: '',
        title: '',
        payload: '',
    }]
  }];

  // =================
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
