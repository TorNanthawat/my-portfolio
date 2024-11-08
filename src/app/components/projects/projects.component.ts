import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      src: 'projects/mock-port.png',
      title: 'My Portfolio Website',
      detail: 'Angular 18 + CSS & JavaScript + Angular Material',
      github: 'https://github.com/TorNanthawat/my-portfolio',
      demo: '#',
    },
    {
      src: 'projects/mock-nike.png',
      title: 'Nike Clone',
      detail: 'Angular 16 + CSS & JavaScript + Angular Material',
      github: 'https://github.com/TorNanthawat/nike-clone',
      demo: 'https://nike-clone-tordev.netlify.app',
    },
    {
      src: 'projects/mock-auth.png',
      title: 'AuthSystem App',
      detail: 'Angular 16 + CSS & TypeScript + Firebase',
      github: 'https://github.com/TorNanthawat/auth-app',
      demo: 'https://auth-app-tordev.netlify.app',
    },
    {
      src: 'projects/mock-2b.png',
      title: '2BHealthy (Bmi Calculator)',
      detail: 'HTML + CSS & JavaScript + Bootstrap',
      github: 'https://github.com/TorNanthawat/2BHealthy-Project',
      demo: 'https://2bhealthy-tordev.netlify.app',
    },
  ];
}
