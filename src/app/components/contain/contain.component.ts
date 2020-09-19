import {
  Component,
  OnInit,
  Input,
  Output,
  HostListener,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-contain',
  templateUrl: './contain.component.html',
  styleUrls: ['./contain.component.css'],
})
export class ContainComponent implements OnInit {
  quizArray: any;
  questionIndex = 0;
  totalQuestions = 6;
  selectedValue: string;
  correctAnswer: boolean;
  isClickedVar: boolean;
  clicked: boolean;
  correctanswerCount: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    public el: ElementRef<HTMLElement>,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.http
      .get('https://nodequizbackend.herokuapp.com/quiz')
      .subscribe((data) => {
        this.quizArray = data;
      });
    this.correctanswerCount = 0;
  }
  answerClick(event: Event) {
    const element = event.target as HTMLInputElement;
    const value = element.innerText;
    this.selectedValue = value;
    this.clicked = true;

    if (this.isCorrectAnswer()) {
      this.correctanswerCount++;
    }
    console.log(this.correctanswerCount);

    setTimeout(() => this.ref.detectChanges(), 1000);
  }

  isCorrectAnswer() {
    const n = this.quizArray[this.questionIndex].answerIndex;
    if (this.quizArray[this.questionIndex].choices[n] === this.selectedValue) {
      this.correctAnswer = true;
      this.isClickedVar = true;
      setTimeout(() => this.nextQuestion(), 1500);
      return true;
    } else {
      console.log('Wrong');
      this.isClickedVar = true;
      setTimeout(() => this.nextQuestion(), 1500);
      return false;
    }
  }

  nextQuestion() {
    this.isClickedVar = false;
    console.log(this.quizArray);
    this.correctAnswer = false;
    this.questionIndex = this.questionIndex + 1;

    if (
      document.getElementById('question') !== undefined &&
      this.getQuestionID() < this.totalQuestions
    ) {
      document.getElementById('question').innerHTML = this.quizArray[
        this.questionIndex
      ].question;
      this.correctAnswer = false;
      console.log(document.getElementById('question'));
    } else {
      alert('Your Score is : ' + this.correctanswerCount);
      this.router.navigateByUrl('/begin');
    }
  }

  isClicked() {
    if (this.clicked == true) return true;
    else return false;
  }
  getQuestionID() {
    return this.questionIndex;
  }
}
