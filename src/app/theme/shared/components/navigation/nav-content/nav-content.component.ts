import { Component, ElementRef, EventEmitter, NgZone, Output, ViewChild } from '@angular/core';
import { BerryConfig } from 'src/app/app-config';
import { Location, LocationStrategy } from '@angular/common';
import { environment } from 'src/environments/environment';
import { NavigationItem } from 'src/app/theme/layout/admin/navigation/navigation';


@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss']
})
export class NavContentComponent {
// public props
@Output() onNavCollapsedMob: EventEmitter<any> = new EventEmitter();

// version
title = 'Demo application for version numbering';
currentApplicationVersion = environment.appVersion;

config: any;
navigation: any;
prevDisabled: string;
nextDisabled: string;
contentWidth: number;
wrapperWidth: any;
scrollWidth: any;
windowWidth: number;
themeLayout: string;

@ViewChild('navbarContent', { static: false }) navbarContent!: ElementRef;
@ViewChild('navbarWrapper', { static: false }) navbarWrapper!: ElementRef;

// Constructor
constructor(public nav: NavigationItem, private zone: NgZone, private location: Location, private locationStrategy: LocationStrategy) {
  this.config = BerryConfig;
  this.windowWidth = window.innerWidth;
  this.themeLayout = BerryConfig.layout;

  this.navigation = this.nav.get();
  this.prevDisabled = 'disabled';
  this.nextDisabled = '';
  this.scrollWidth = 0;
  this.contentWidth = 0;
}

// Life cycle events
ngOnInit() {
  if (this.windowWidth < 1025) {
    setTimeout(() => {
      (document.querySelector('.coded-navbar') as HTMLDivElement).classList.add('menupos-static');
      (document.querySelector('#nav-ps-berry') as HTMLElement).style.maxHeight = '100%';
    }, 500);
  }
}

// public method
ngAfterViewInit() {}

fireOutClick() {
  let current_url = this.location.path();
  const baseHref = this.locationStrategy.getBaseHref();
  if (baseHref) {
    current_url = baseHref + this.location.path();
  }
  const link = "a.nav-link[ href='" + current_url + "' ]";
  const ele = document.querySelector(link);
  if (ele !== null && ele !== undefined) {
    const parent = ele.parentElement;
    const up_parent = parent?.parentElement?.parentElement;
    const last_parent = up_parent?.parentElement;
    if (parent?.classList.contains('coded-hasmenu')) {
      if (BerryConfig.layout === 'vertical') {
        parent.classList.add('coded-trigger');
      }
      parent.classList.add('active');
    } else if (up_parent?.classList.contains('coded-hasmenu')) {
      if (BerryConfig.layout === 'vertical') {
        up_parent.classList.add('coded-trigger');
      }
      up_parent.classList.add('active');
    } else if (last_parent?.classList.contains('coded-hasmenu')) {
      if (BerryConfig.layout === 'vertical') {
        last_parent.classList.add('coded-trigger');
      }
      last_parent.classList.add('active');
    }
  }
}

navMob() {
  if (this.windowWidth < 1025 && document.querySelector('app-navigation.coded-navbar').classList.contains('mob-open')) {
    this.onNavCollapsedMob.emit();
  }
}
}
