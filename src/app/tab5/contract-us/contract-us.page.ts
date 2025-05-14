import { Component, OnInit } from '@angular/core';
import {AnimationController} from "@ionic/angular";

@Component({
  selector: 'app-contract-us',
  templateUrl: './contract-us.page.html',
  styleUrls: ['./contract-us.page.scss'],
  standalone: false
})
export class ContractUsPage{
  constructor(private animationCtrl: AnimationController) {}

  /**
   * Handles pull-to-refresh logic.
   * Use this method to reload or refresh data.
   */
  handleRefresh(event: any) {
    setTimeout(() => {
      // Simulate async operation (e.g., fetching data)
      event.target.complete();
    }, 2000); // Delay for 2 seconds
  }

  /**
   * Custom enter animation for modals.
   * Grows the modal from scale(0) to scale(1) with fade-in.
   */
  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root!.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root!.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };
  /**
   * Custom leave animation — just reverses the enter animation.
   */
  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

}
