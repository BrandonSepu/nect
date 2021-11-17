import { Component, AfterViewInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private animationCtrl:AnimationController) {localStorage.clear();}

  ngAfterViewInit(){
    const animation = this.animationCtrl
    .create()
    .addElement(document.querySelector('.square',))
    .duration(2000)
    .iterations(2)
    .keyframes([
      { offset: 0, transform: 'scale(0.8))' },
      { offset: 0.5, transform: 'scale(0.1)' },
      { offset: 1, transform: 'scale(1)'  }
    ])
    .fromTo('transform', 'trabslateX(200px)', 'translateX(0px)')
    .fromTo('opacity', '0.1', '1');

    animation.play()

  }

}
