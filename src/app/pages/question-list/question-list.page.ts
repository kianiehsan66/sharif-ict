import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.page.html',
  styleUrls: ['./question-list.page.scss'],
})
export class QuestionListPage implements OnInit {

  id: number
  allQuestions: Question[] = [];
  disableForm: boolean = false
  constructor(
    private qstService: QuestionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

    if (this.activatedRoute.snapshot.params['disabled']) {
      this.disableForm = this.activatedRoute.snapshot.params['disabled']
    }

    this.allQuestions = this.qstService.getDailyQuestions()
    console.warn(this.allQuestions);
  }

  goToindividual() {
    this.router.navigate(['/tabs/tab2'])
  }
}
