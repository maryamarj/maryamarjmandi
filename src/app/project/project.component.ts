import { Component } from '@angular/core';
import { Project } from '../models/Project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  project: Project[] = [];
  projectName: string = '';
  isLoaded = false;

  constructor(public projectService: ProjectService) {
    this.project = this.projectService.getAll();
  }
  ngOnInit(): void {
    this.isLoaded = true;
  }

  getVal(event: any) {
    this.projectName = event.target.value;
    // console.log(this.projectName);
  }
}
