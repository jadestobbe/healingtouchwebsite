import { Component, OnInit } from '@angular/core';
//Declare jquery. Script is called in index.html
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Healing Touch';

  ngOnInit() {

    let menubtn = $('#menubtn');
    let nav = $('nav');
    let windowWidth = $(window).width();
    if (menubtn.is(':visible')) {
      nav.css('display', 'none');
    }
    menubtn.on('click', () => {
      window.scrollTo(0, 1);
      if (nav.css('display') == 'none') {
        nav.css('display', 'grid');
      }
      else {
        nav.css('display', 'none');
      }
    });
    nav.on('a click', () => {
      if (menubtn.is(':visible')) {
        nav.css('display', 'none');
      }
    });
    $(window).resize(function() {
      if (menubtn.is(':visible')) {
        if ($(window).width() != windowWidth) {
          windowWidth = $(window).width();
          nav.css('display', 'none');
        }
        //else do nothing
      }
      else {
        nav.css('display', 'grid');
      }
    });
  }
}
