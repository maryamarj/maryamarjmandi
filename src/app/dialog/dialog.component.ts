import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProjectService } from '../services/project.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  @Input() message!: string;
  projectDialog: any[] = [];
  description: string = '';
  constructor(public projectService: ProjectService) {}

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.message);
      if (this.message === 'Memorial') {
        this.projectDialog = this.projectService.getMemorial();
        this.description = this.projectService.getMdescription();
      } else if (this.message === 'Pease Resort') {
        this.projectDialog = this.projectService.getPeaseResort();
        this.description = this.projectService.getPDescription();
      } else if (this.message === 'Trussardi Shop') {
        this.projectDialog = this.projectService.getTrussardiShop();
        this.description = this.projectService.getTDescription();
      } else if (this.message === 'Wonderland') {
        this.projectDialog = this.projectService.getWondelandProject();
        this.description = this.projectService.getWDescription();
      }
    });
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['Prev', 'Next'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };
}
