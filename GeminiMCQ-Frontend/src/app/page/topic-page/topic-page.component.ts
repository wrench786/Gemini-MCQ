import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrl: './topic-page.component.scss'
})
export class TopicPageComponent {
  options: string[] = ['OOP', 'JAVA', 'Spring Boot', 'Networking', 'Database', 'Design Pattern', 'SQL'];
  customTopic: string = '';
  topic:string="topic";

  selectedOption: string | null = null;

  constructor(
    private router:Router
  ){}

  selectOption(option: string) {
    this.selectedOption = option;
  }

  submitOption() {
    if (this.selectedOption) {
      localStorage.setItem(this.topic, this.selectedOption);
      this.router.navigate(['/mcq-test']);
    }
  }

  submitTopic(){
    if(this.customTopic!=''){
      localStorage.setItem(this.topic,this.customTopic);
      this.router.navigate(['/mcq-test']);
    }
  }
}
