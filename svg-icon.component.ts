import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {


  @HostBinding('style.-webkit-mask-image')
  private _path!: string;

  @Input()
  public set path(filePath: string) {
    this._path = `url("${filePath}")`;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

 

}

// example of using a component
//  <app-svg-icon class="menu_btn_icon" [path]="'assets/icon.svg'"></app-svg-icon>
