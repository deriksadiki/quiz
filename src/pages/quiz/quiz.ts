import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import quizArray, { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {
  counter = 0;
  bar = 25;
  counterQuestions = 1;
  level = 1;
  topic =  "Ice Breaker"
  score = 0;
   ind = 0;
  trackIndex = 4;
  tt = quizArray[this.counter].question;
  question = "";
  mockAnswers2 = ["Two", "Five", "One", "Three", "Harp", "Violin", "Horn", "Trumpet",
                  " eighty-seven", "Two hundred and six", "one hundred", "forty",
                  "Blue Crab","Dolphin","Octopus","Flying Fish",
                  "Seven","Three","Five","Two",
                  "Venus","Jupiter","Earth","Mercury",
                  "Mercury","Earth","Neptune","Mars",
                  "Neptune","Saturn","Venus","Mars",
                  "7","10","9","8",
                  "Earth","Mars","Jupiter","Mercury",
                  "Cows","Females","Elephantess","Seal",
                  "5","12","8","9",
                  "Africa","Antarctica","America","Asia",
                  "Fish","A Mammal","","",
                  "Goatlests","Kids","Babies","A Fish",
                  "A Hydrologist","A Geoscientist","A Meteorologist","Geophysicist",
                  "The Atacama Desert","Sahara","Gobi Desert","Kalahari Desert",
                  "A Pyranometer","A Anemometer","A Thermometer","A barometer",
                  "Atmosphere","Planets","Clouds","Stars",
                  "Warming","Melting","Hydration","Raining",
                  "False","True","","",
                  "Foods","Mixture","Grocery","Ingredients",
                  "Water","Milk","Honey","Alcohol",
                  "Calcium","Chloride","Carbohydrates","Proteins",
                  "Fishing","Hunting","Poaching","foraging"]

  mockAnswers = ["Two", "Five", "One", "Three"];
                              
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  checkAnswer(pr)
  { 
    if (this.mockAnswers[pr] == quizArray[this.counter].answer){
      this.score += 20; 
    }
    this.counterQuestions++;
    this.counter += 1;
    this.mockAnswers.length = 0;
    var i = 0;
  
      if (this.counter != 25 ){
    for (var x =  this.trackIndex; x <= this.trackIndex + 3; x++){
      
        if (this.mockAnswers2[x] != ""){
        this.mockAnswers[i] = this.mockAnswers2[x];
        i++;
        }
        this.ind = x;
  
    }
  }


      if (this.score == 100 && (this.counter == 5 || this.counter == 10 || this.counter == 15|| this.counter == 20)){
        const alert = this.alertCtrl.create({
          title: 'Congratulations!',
          subTitle: 'You Have Completed Level ' + this.level,
          buttons: ['OK']
        });

        alert.present();
      }
      else if (this.score != 100 && (this.counter == 5 || this.counter == 10 || this.counter == 15|| this.counter == 20))
      { 
        const alert = this.alertCtrl.create({
          title: 'Sorry!',
          subTitle: 'You Have Failed Level ' + this.level,
          buttons: ['OK']
          
        });

        alert.present();

      }
      else   if(this.score == 100 && this.counter == 25)
      {
        const alert = this.alertCtrl.create({
          title: 'Congratulations!',
          subTitle: 'You Have Completed All The Levels',
          buttons: ['OK']
          
        });

        alert.present(); 
        this.navCtrl.push(HomePage);  
      }
     
    
     
    if (this.counter == 5){
      if (this.score == 100){
      this.topic = "Planets Quiz";
      this.counterQuestions = 1;
      this.level = 2;
      this.score = 0;

      }
      else{
          this.navCtrl.push(HomePage);
     
      }
    }
  

    else if(this.counter == 10)
    {
      
      if (this.score == 100){
      this.topic = "Animals Quiz";
      this.score = 0;
      this.level = 3;
      this.counterQuestions = 1;
      }
      else{
   
          this.navCtrl.push(HomePage);
        
    }
    }
    else if(this.counter == 15)
    {
      if (this.score == 100){
        this.topic = "Weather Quiz";
        this.score = 0;
        this.level = 4;
        this.counterQuestions = 1;
        }
        else{     
            this.navCtrl.push(HomePage);
        }
      
    }
    else if(this.counter == 20)
    {
      if (this.score == 100){
        this.topic = "Food Quiz";
        this.score = 0;
        this.level = 5;
        this.counterQuestions = 1;
        }
        else{
            this.navCtrl.push(HomePage);
        }
      
    }
    this.trackIndex = this.ind + 1;
  
    this.tt = quizArray[this.counter].question;
  }


}

var mockAnswers2 = [];
export default mockAnswers2;