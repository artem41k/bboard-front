import { Component, OnInit } from '@angular/core';
import { BbService } from '../bb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-by-rubric',
  templateUrl: './by-rubric.component.html',
  styleUrls: ['./by-rubric.component.css']
})
export class ByRubricComponent{
  protected rubric_pk: any = undefined;
  protected bbs: any[] = [];
  protected rubric: any = {};
  protected placeholder_img_url: String;

  constructor(private bbservice: BbService,
    private ar: ActivatedRoute) {
      this.placeholder_img_url = bbservice.placeholder_img_url;
      this.ar.params.subscribe(
        params => {
          this.rubric_pk = params['pk'];
          this.getRubric();
          this.getBbs();
        }
      );
    }

  getBbs() {
    this.bbservice.getBbsByRubric(this.rubric_pk).subscribe(
      (bbs: Object[]) => {
        this.bbs = bbs;
      }
    );
  }

  getRubric() {
    this.bbservice.getRubricInfo(this.rubric_pk).subscribe(
      (rubric: Object[]) => {
        this.rubric = rubric;
      }
    );
  }
}
