// ionic-toast.service.ts
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonicToastService {

  private myToast: any;

  constructor(
    private toast: ToastController
  ) { }

  showToast() {
    this.myToast = this.toast.create({
      message: 'No data found, Please check email address',
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  HideToast() {
    this.myToast = this.toast.dismiss();
  }

}