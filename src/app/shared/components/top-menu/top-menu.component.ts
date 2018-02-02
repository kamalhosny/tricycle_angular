import { Input, Component, OnInit, OnChanges } from '@angular/core';
import { WebService } from './../../../services/web-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})

export class TopMenuComponent implements OnInit {

  @Input('fixedMenu') fixedMenu:boolean = false;
  @Input('transparentHeader') transparentHeader:boolean = true;

  constructor() { }  

  ngOnInit() {
  }
}
