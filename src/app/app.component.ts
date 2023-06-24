import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SplashScreen } from '@capacitor/splash-screen';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [
    './side-menu/styles/side-menu.scss',
    './side-menu/styles/side-menu.shell.scss',
    './side-menu/styles/side-menu.responsive.scss'
  ]
})
export class AppComponent {
  country = [
    {
      title: 'New Zealand Overview',
      url: '/app/categories/country/',
      ionicIcon: 'notifications-outline'
    },
    {
      title: 'New Zealand Education System',
      url: '/app/categories/edusystem/',
      ionicIcon: 'notifications-outline'
    }
  ];
  schools = [
    {
      title: 'Universities',
      url: '/app/categories/university/',
      customIcon: './assets/custom-icons/side-menu/contact-card.svg'
    },
    {
      title: 'Polytechnics',
      url: '/app/categories/polytech',
      ionicIcon: 'notifications-outline'
    },
    {
      title: 'Colleges',
      url: '/app/categories/college',
      ionicIcon: 'notifications-outline'
    },
    {
      title: 'New Zealand University Rankings',
      url: '/app/categories/ranking/',
      ionicIcon: 'notifications-outline'
    }
  ];
  coop = [

/*     {
      title: 'Partner Organizations',
      url: '/app/notifications',
      ionicIcon: 'notifications-outline'
    } */
  ];
  study = [
    {
      title: 'Cooperation Programmes',
      url: '/app/categories/coopmenu/',
      ionicIcon: 'notifications-outline'
    },
    {
      title: 'Qualification Upgrade',
      url: '/app/categories/upgrade/',
      ionicIcon: 'notifications-outline'
    },
    {
      title: 'Study Life Assistance',
      url: '/app/categories/studlife/',
      ionicIcon: 'notifications-outline'
    }
  ];
  other = [

    {
      title: 'Frequently Asked Questions',
      url: '/app/notifications',
      ionicIcon: 'notifications-outline'
    },    
    {
      title: 'Application Portal',
      url: '/app/notifications',
      ionicIcon: 'notifications-outline'
    },    
    {
      title: 'Contact Us',
      url: '/app/notifications',
      ionicIcon: 'notifications-outline'
    }
  ]

/*   accountPages = [
    {
      title: 'Log In',
      url: '/auth/login',
      ionicIcon: 'log-in-outline'
    },
    {
      title: 'Sign Up',
      url: '/auth/signup',
      ionicIcon: 'person-add-outline'
    },
    {
      title: 'Getting Started',
      url: '/getting-started',
      ionicIcon: 'rocket-outline'
    },
    {
      title: '404 page',
      url: '/page-not-found',
      ionicIcon: 'alert-circle-outline'
    }
  ]; */

  constructor(private router: Router) {
    this.initializeApp();
  }

  async initializeApp() {
    try {
      await SplashScreen.hide();
    } catch (err) {
      console.log('This is normal in a browser', err);
    }
  }

  public openTutorial(): void {
    // save key to mark the walkthrough as NOT visited because the user wants to check it out
    Preferences.set({
      key: 'visitedWalkthrough',
      value: 'false'
    });
    this.router.navigateByUrl('walkthrough');
  }
}
