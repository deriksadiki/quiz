import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QuizPage} from '../quiz/quiz';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  questions = [];
  answers = [];
  constructor(public navCtrl: NavController) {


  }
  start(){

    this.questions = ["How many legs does a Man have?", "Which instrument has forty-seven strings and seven pedals?", 
    "How many bones does an adult human have? ", "Which sea creature has three hearts?","In the traditional rhyme, how many mice were blind?",
    "What is the smallest planet in the Solar System?", "What planet is closest to the Sun?", "What planet is closest in size to Earth?",
    "Now that Pluto is no longer included, how many planets are there in the Solar System?","What planet is nicknamed the ‘Red Planet’?",
    "What are female elephants called?", "How many legs does a spider have?"," Bees are found on every continent of earth except for one, which is it?",
    "Is a shark a fish or a mammal?","What are baby goats called?","What is the name of a scientist who studies weather?",
    "What is the driest desert on Earth, the Sahara, the Kalahari or the Atacama?",
    " What is the name of a weather instrument used to measure atmospheric pressure?",
    "Stratus, cirrus, cumulus and nimbus are types of what?","Earth’s recent temperature rises which have been linked to human activity is known as global?",
    "True or false? McDonald’s has restaurants in over 100 countries around the world.","The range of vegetables, fruits, meats, nuts, grains, herbs and spices used in cooking are known as what?",
    "Dairy products are generally made from what common liquid?","Foods rich in starch such as pasta and bread are often known by what word starting with the letter C?",
    "Lures, reels, rods, hooks, baits and nets are common equipment used in what food gathering method?"];

    this.answers = ["Two", "Harp", "Two hundred and six", "Octopus", "Three", "Mercury","Mercury","Venus","8","Mars","Cows",
    "8", "Antarctica", "Fish","Kids","A Meteorologist","The Atacama Desert","A barometer","Clouds", "Warming","True","Ingredients","Milk","Carbohydrates","Fishing"];


    for (var x = 0; x < 25; x++){

    let a = new quiz(this.questions[x], this.answers[x]);
    quizArray.push(a);
  }
    this.navCtrl.push(QuizPage);
  }
  score(){
    
  }
}

export class quiz{
  question:string;
  answer:string;

  constructor(question:string,answer:string ){
    this.question =  question;
    this.answer =  answer;
  }
}

var quizArray = [];
export default quizArray;