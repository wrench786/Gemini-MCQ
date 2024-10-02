import { Component, OnInit } from '@angular/core';
import { McqService } from '../../service/mcq.service';
import { Router } from '@angular/router';

export interface Question{
  question:String;
  optionA:String;
  optionB:String;
  optionC:String;
  optionD:String;
  ans:number;
}

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.scss'
})
export class QuizPageComponent implements OnInit{
  questions: Question[] = [];
  topic:string = 'topic';
  topicName:any;

  selectedAnswers: number[] = [];
  timer: number = 300; // 5 minutes in seconds
  score: number = 0;
  interval: any;
  submitted: boolean = false; // To check if the quiz is submitted
  dataLoaded: boolean = false

  constructor(
    private mcqService: McqService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loadQuestions();
    // this.startTimer();
  }

  loadQuestions():void{
    this.topicName = localStorage.getItem(this.topic);
    console.log(this.topicName);
    
    this.mcqService.getQuestionList(this.topicName).subscribe({
      next: (response) => {
        this.questions = response;
        this.dataLoaded = true; // Mark data as loaded
        this.startTimer(); 
      },
      error: (response) => {
        alert("Error In Quiz Page while Calling MCQ service");
      }
    });
  }
  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.submitQuiz(); // Auto-submit when time runs out
      }
    }, 1000);
  }

  formatTime(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds: number = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }

  selectAnswer(index: number, answer: number): void {
    this.selectedAnswers[index] = answer;
  }

  submitQuiz(): void {
    clearInterval(this.interval); // Stop the timer
    this.submitted = true; // Mark as submitted

    // Calculate score based on selected answers
    this.score = this.questions.reduce((acc, question, index) => {
      return acc + (question.ans === this.selectedAnswers[index] ? 1 : 0);
    }, 0);

    alert(`You scored ${this.score} out of ${this.questions.length}`);
  }

  isCorrectAnswer(question: Question, selectedAnswer: number): boolean {
    return question.ans === selectedAnswer;
  }
}
