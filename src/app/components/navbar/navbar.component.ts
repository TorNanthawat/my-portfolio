import { Component, HostListener } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isScrolled = false;

  showSidebar(): void {
    const sidebar = document.querySelector('.sidebar') as HTMLElement | null;
    if (sidebar) {
      sidebar.classList.add('show');
    }
  }

  hideSidebar(): void {
    const sidebar = document.querySelector('.sidebar') as HTMLElement | null;
    if (sidebar) {
      sidebar.classList.remove('show');
    }
  }

  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollY > 20;
  }

  onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  toHome(): void {
    this.scrollToSection('home');
  }

  toSkills(): void {
    this.scrollToSection('skills');
  }

  toProjects(): void {
    this.scrollToSection('projects');
  }

  toExperience(): void {
    this.scrollToSection('experience');
  }

  toContact(): void {
    this.scrollToSection('contact');
  }

  private scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = window.innerWidth <= 1020 ? 70 : 0; // กำหนด offset สำหรับอุปกรณ์มือถือ
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });

      this.hideSidebar(); // ซ่อน sidebar เมื่อคลิกในมือถือ
    }
  }

  // toHome() {
  //   const element = document.getElementById('home');
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

  // toSkills() {
  //   const element = document.getElementById('skills');
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

  // toProjects() {
  //   const element = document.getElementById('projects');
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

  // toExperience() {
  //   const element = document.getElementById('experience');
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

  // toContact() {
  //   const element = document.getElementById('contact');
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }
}
