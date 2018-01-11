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
  toggleNav(): void {
    $('nav').slideToggle();
  }

  ngOnInit() {
    if ($('#menubtn').is(':visible')) {
      $('nav').css('display', 'none');
    }
    $('#menubtn').on('click', () => {
      $("#menubtn").scrollTop(0);
      if ($('nav').css('display') == 'none') {
        $('nav').css('display', 'grid');
      }
      else {
        $('nav').css('display', 'none');
      }
    });
    $('nav').on('a click', () => {
      if ($('#menubtn').is(':visible')) {
        $('nav').css('display', 'none');
      }
    });
    $(window).resize(function() {
      if ($('#menubtn').is(':visible')) {
        $('nav').css('display', 'none');
      }
      else {
        $('nav').css('display', 'grid');
      }
    });
  }
}
