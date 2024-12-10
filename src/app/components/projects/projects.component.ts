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
      detail: 'Angular 18 + CSS & TypeScript + Angular Material',
      github: 'https://github.com/TorNanthawat/my-portfolio',
      demo: '#',
      logos: [
        'logo/Angular-logo.webp',
        'logo/CSS-logo.webp',
        'https://cdn.worldvectorlogo.com/logos/typescript.svg',
        'logo/Angular-Mat-logo.webp',
      ],
    },
    {
      src: 'projects/mock-nike.png',
      title: 'Nike Clone',
      detail: 'Angular 16 + CSS & TypeScript + Angular Material',
      github: 'https://github.com/TorNanthawat/nike-clone',
      demo: 'https://nike-clone-tordev.netlify.app',
      logos: [
        'logo/Angular-logo.webp',
        'logo/CSS-logo.webp',
        'https://cdn.worldvectorlogo.com/logos/typescript.svg',
        'logo/Angular-Mat-logo.webp',
      ],
    },
    {
      src: 'projects/mock-todo.jpg',
      title: 'Todo List App',
      detail: 'SvelteKit + CSS & TypeScript',
      github: 'https://github.com/TorNanthawat/todo-list',
      demo: 'https://todolist-app-tordev.netlify.app/',
      logos: [
        'logo/Svelte-logo.webp',
        'logo/CSS-logo.webp',
        'https://cdn.worldvectorlogo.com/logos/typescript.svg',
      ],
    },
    {
      src: 'projects/mock-auth.png',
      title: 'AuthSystem App',
      detail: 'Angular 16 + CSS & TypeScript + Firebase',
      github: 'https://github.com/TorNanthawat/auth-app',
      demo: 'https://auth-app-tordev.netlify.app',
      logos: [
        'logo/Angular-logo.webp',
        'logo/CSS-logo.webp',
        'https://cdn.worldvectorlogo.com/logos/typescript.svg',
        'https://cdn-images-1.medium.com/max/1200/1*CgDvBqQ4AJczq1ov_AgkYA.png',
      ],
    },
    {
      src: 'projects/mockup-money-manager.webp',
      title: 'แอปบัญชี รายรับ-รายจ่าย',
      detail: 'React + CSS & JavaScript',
      github: 'https://github.com/TorNanthawat/react-basic',
      demo: 'https://money-manager-tordev.netlify.app',
      logos: [
        'logo/React-logo.webp',
        'logo/CSS-logo.webp',
        'logo/JavaScript-logo.webp',
      ],
    },
  ];
}
