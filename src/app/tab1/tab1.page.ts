import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { throwError } from 'rxjs';
import { User } from '../interfaces/user';
import { AccountService } from '../services/account.service';
import { ChooseLocationComponent } from '../shared-components/choose-location/choose-location.component';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  gender: boolean = true
  userInLocalStorage: User
  constructor(
    public modalCtrl: ModalController,
    public router: Router,
    private formBuilder: FormBuilder,
    // private route: ActivatedRoute,
    private accountService: AccountService,
    public toastController: ToastController
  ) { }
  user: User = {
    name: '',
    family: '',
    age: 0,
    gender: false,
    id: 0
  }
  // accountForm: FormGroup;
  async ngOnInit() {
    // this.userInLocalStorage = JSON.parse((await Storage.get({ key: 'user' })).value)

  }

  async loadData() {
    await this.getAccount()
    // await this.createForm()
  }

  private createForm() {
    // this.accountForm = this.formBuilder.group({
    //   age: [this.user.age, [Validators.required]],
    //   name: [this.user.name, [Validators.required]],
    //   family: [this.user.family, [Validators.required]],
    //   hasBloodPressure: [this.user.hasBloodPressure, [Validators.required]],
    //   hasDiabet: [this.user.hasDiabet],
    //   hasHeartDisease: [this.user.hasHeartDisease],
    //   hasRespiratoryDisease: [this.user.hasRespiratoryDisease],
    //   mobile: [this.user.mobile, [Validators.required]],
    //   province: [this.user.province, [Validators.required]],
    //   weight: [this.user.weight, [Validators.required]],
    //   gender: [this.user.gender, [Validators.required]],

    // });
  }

  async getAccount() {
    try {
      this.user = (await this.accountService.getAccount(Number(this.userInLocalStorage.id)).toPromise()) as User
    } catch (error) {
      console.log('error caught in getAccount')
      console.error(error);
      return throwError(error);    //Rethrow it back to component
    }
    // pipe(
    //   catchError((err) => {
    //     console.log('error caught in getAccount')
    //     console.error(err);
    //     return throwError(err);    //Rethrow it back to component
    //   })
    // ).subscribe((res: User) => {
    //   this.user = res
    // })

  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  submit() {

    if (this.user.name === '') {
      this.presentToast('لطفا نام خود را وارد کنید.')
      return
    }
    if (this.user.family === '') {
      this.presentToast('لطفا نام خانوادگی را وارد کنید');
      return;
    }
    // if (!user?.age || user.age === 0) {
    //   this.presentToast('لطفا سن خود را وارد کنید.');
    //   return;
    // }
    // if (!user?.weight || user.weight === 0) {

    // }

    this.accountService.updateAccount(this.user)
  }

  async getLocation() {

    const modal = await this.modalCtrl.create({
      component: ChooseLocationComponent
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data);


  }
  back() {
    window.history.back();
  }
  cityActionSheetOptions: any = {
    header: 'شهر'
  };

  provinceActionSheetOptions: any = {
    header: 'استان'
  };

}
