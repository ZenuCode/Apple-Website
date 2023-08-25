import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  collapse = false;

  headerList: { text: string, router: string}[] = [
    { text: "Store", router: "mac-main" }, 
    { text: "Mac", router: "mac-main"},
    { text: "iPad", router: "mac-main" }, 
    { text: "iPhone", router: "mac-main"},
    { text: "Watch", router: "mac-main" }, 
    { text: "Vision", router: "mac-main"},
    { text: "AirPods", router: "mac-main" }, 
    { text: "TV & Home", router: "mac-main"},
    { text: "Entertainment", router: "mac-main" }, 
    { text: "Accessories", router: "mac-main"},
    { text: "Support", router: "mac-main"},
  ]

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateContainerVisibility();
  }

  ngOnInit() {
    this.updateContainerVisibility();
  }

  private updateContainerVisibility() {
    if(window.innerWidth < 920) {
      this.collapse = true;
    } else {
      this.collapse = false;
    }
    console.log(this.collapse);
  }
}
