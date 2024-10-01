import { Component, OnInit } from '@angular/core';
import { McqService } from '../../service/mcq.service';

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

  constructor(
    private mcqService: McqService,
  ){}

  ngOnInit(): void {
    this.topicName = localStorage.getItem(this.topic);
    console.log(this.topicName);
    
    this.mcqService.getQuestionList(this.topicName).subscribe({
      next: (response) => {
        this.questions = response;
      },
      error: (response) => {
        alert("Error In Quiz Page while Calling MCQ service");
      }
    });
  }
}
