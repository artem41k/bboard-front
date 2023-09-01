import { Component, OnInit } from '@angular/core';

import { BbService } from '../bb.service';

@Component({
  selector: 'app-bb-list',
  templateUrl: './bb-list.component.html',
  styleUrls: ['./bb-list.component.css']
})
export class BbListComponent implements OnInit {
  protected bbs: any[] = [];
  protected placeholder_img_url: String;

  constructor(private bbservice: BbService) {
    this.placeholder_img_url = bbservice.placeholder_img_url;
  }

  ngOnInit(): void {
      this.bbservice.getBbs().subscribe(
        (bbs: Object[]) => {this.bbs = bbs;}
      )
  }
}
