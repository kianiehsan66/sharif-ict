import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../interfaces/question';
import { AnswerService } from '../services/answer.service';
import { QuestionService } from '../services/question.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild("lineCanvas") lineCanvas: ElementRef;
  private lineChart: Chart;
  constructor(
    private qstService: QuestionService,
    private ansService: AnswerService,
    private router: Router
  ) {

  }








  last14DaysAnswers = [1, 1, 1, 1, 1]
  dailyQuestions: Question[] = []


  ngAfterViewInit(): void {
    console.log(this.lineCanvas); this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: ["مرداد", "شهریور", "مهر"],
        datasets: [
          {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          }
        ]
      }
    });
  }

  ngOnInit() {

  }

  goToQuestionList(disable) {
    // this.router.navigate(['question-list',{id:1}])
    this.router.navigate(['question-list', { disable: disable }])
  }


}
