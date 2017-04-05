import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class AppLoader {

    private loader;

    constructor(public loadingCtrl: LoadingController) { }

    startLoader(content: string) {
        this.loader = this.loadingCtrl.create({
            content: content || 'loading...'
        });

        this.loader.present();

    }

    stopLoader() {
        this.loader.dismiss();
    }

}