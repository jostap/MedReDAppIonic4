
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { User } from './../../shared/user';
import { UserService } from  './../../services/user/user.service';

import { LogsamplePage } from './../logsample/logsample.page';
import { MainmenuPage } from './../mainmenu/mainmenu.page';
import { SurveyPage } from './../survey/survey.page';
import { CrmPage } from './../crm/crm.page';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  loginForm: FormGroup;
  user: User;
  errMess: string;
  alertTitle: string;
  alertMessage: string;
  token: string;

  constructor(public navCtrl: NavController, 
    private formBuilder: FormBuilder,
    public userService: UserService,
    public storage: Storage,
    private alertCtrl: AlertController,
    public navParams: NavParams) {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    storage.get('token').then(token => {
      if(token) {
        this.token = token;
        this.goToLoginSample(this.token)
        console.log('[INFO] ...... Token: ', token)
      }
      else {
        console.log('[INFO] ...... No logged');
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  ngOnInit() {

  }

  login() {
    let inputUser = this.loginForm.value;
    let username = inputUser.username;
    let password = inputUser.password;
    
    //var headerArgumentBasic = "Basic " + btoa(username + ":" + password);

    //this.userService.loginUser(headerArgumentBasic)
    this.userService.loginUser(username, password)
      .subscribe((res) => {
        console.log('[INFO] ...... Login OK', res);
        this.goToLoginSample(res.token);
      },(errmess) => {
        this.errMess = <any>errmess; 
        console.log('[ERROR] ...... WelcomePage.login()', this.errMess);
        if ((this.errMess).indexOf('Forbidden') !== -1){
          this.alertTitle = 'Felaktiga inloggningsuppgifter';
          this.alertMessage = 'Var vänlig försök igen';
        }       
        else {
          this.alertTitle = 'Tekniskt fel';
          this.alertMessage = 'Tjänsten är ej tillgänglig, var vänlig försök igen senare'
        }

        let alert = this.alertCtrl.create({
          title: this.alertTitle,
          message: this.alertMessage,
          buttons: [
            {
              text: 'OK', 
              cssClass: 'alertButtonYes',
            }]
        });
        alert.present();
      });     
  }

  goToLoginSample(token: string) {
    /* let headerArgument = "Bearer " + token;
    this.userService.getStudyMainMenuPage(headerArgument)
    .subscribe(studyId => { 
      this.studyId = studyId; 
      for (let page of this.pages) {
        if(page.study === this.studyId) {
          this.mainMenu = page.component;
          break;
        } 
      } 
      this.openPage(this.mainMenu);
    }); */

    this.openPage(MainmenuPage);
  }

  openPage(page) {
    this.navCtrl.setRoot(page);
  }


}
