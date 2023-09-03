import { Component, OnInit } from '@angular/core';
import { BbService } from '../bb.service';

@Component({
  selector: 'app-rubrics-list',
  templateUrl: './rubrics-list.component.html',
  styleUrls: ['./rubrics-list.component.css']
})
export class RubricsListComponent implements OnInit {
  protected super_rubrics: any[] = [];

  constructor(private bbservice: BbService) { }

  ngOnInit(): void {
    this.bbservice.getRubricsList().subscribe(
      (srl: Object[]) => {this.super_rubrics = srl;}
    )      
  }
}
