import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { style } from '@angular/animations';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skillsList = [
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png',
      title: 'HTML',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
      title: 'CSS',
    },
    {
      src: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
      title: 'Javascript',
      style: 'border-radius: 20px;',
    },
    {
      src: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
      title: 'Typescript',
      style: 'border-radius: 20px;',
    },
    {
      src: 'logo/Angular-logo.png',
      title: 'Angular',
    },
    {
      src: 'logo/Angular-Mat-logo.png',
      title: 'Angular Material',
    },
    {
      src: 'logo/PrimeNG-logo.png',
      title: 'PrimeNG',
    },
    {
      src: 'logo/Bootstrap-logo.png',
      title: 'Bootstrap',
    },
    {
      src: 'logo/Svelte-logo.png',
      title: 'Svelte',
    },
    {
      src: 'logo/Tailwind-logo.png',
      title: 'TailwindCSS',
    },
  ];

  otherskills = [
    {
      src: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
      title: 'Git',
    },
    {
      src: 'https://www.svgrepo.com/show/354202/postman-icon.svg',
      title: 'Postman',
    },
    {
      src: 'https://cdn-images-1.medium.com/max/1200/1*CgDvBqQ4AJczq1ov_AgkYA.png',
      title: 'Firebase',
    },
    {
      src: 'https://cdn.sanity.io/images/599r6htc/regionalized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format',
      title: 'Figma',
      style: 'transform: scale(1.15)',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/800px-Adobe_XD_CC_icon.svg.png',
      title: 'Adobe XD',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png',
      title: 'Photoshop',
    },
  ];
}
