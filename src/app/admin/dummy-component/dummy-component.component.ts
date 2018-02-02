import { Input, Component, OnInit, OnChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { WebService } from './../../services/web-service.service';

@Component({
  selector: 'dummy-component',
  templateUrl: './dummy-component.component.html',
  styleUrls: ['./dummy-component.component.css']
})
export class DummyComponent implements OnInit {

  isLoading: boolean = false;

  constructor(private webService: WebService) {
  }

  ngOnInit() {
  }

  dummyCallToAPI() {
    this.webService.getSweets()//dummy call
      .subscribe(response => {
        var sweetsFromDB = JSON.parse(response._body).result.sweets //this should hold the sweets received from the Database
      }, (error: string) => {
        //'error' SHOULD HAVE A DISPLAY ERROR TO SHOW THE USER. DO NOT DO ANYTHING HERE. LEAVE IT EMPTY. I WILL ADD THE NOTIFICATION MYSELF. 
      });
  };
}


