import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from '../interfaces/place';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  segValue = "health";
  type: string;
  center = { lat: 35.758419, lng: 51.404115 };

  markers = [{ lat: 35.758419, lng: 51.404115 },
  { lat: 35.758321, lng: 51.404232 },
  { lat: 35.758527, lng: 51.404235 },
  { lat: 35.758519, lng: 51.440215 },
  { lat: 35.753419, lng: 51.406115 },
  { lat: 35.758419, lng: 51.404115 }

  ]

  searchResult: Place[] = [
    { id: 1, title: 'بانک ملی شعبه بازار', adderss: 'addersssadfasd sdf asf as ', tel: 'asdasd' },
    { id: 2, title: 'فروشگاه کوروش', adderss: 'addersssadfasd sdf asf as ', tel: 'asdasd' },
    { id: 3, title: 'دانشگاه تهران', adderss: 'addersssadfasd sdf asf as ', tel: 'asdasd' },
    { id: 4, title: 'فروشگاه رفاه', adderss: 'addersssadfasd sdf asf as ', tel: 'asdasd' }
    ,
    { id: 4, title: 'فروشگاه رفاه', adderss: 'addersssadfasd sdf asf as ', tel: 'asdasd' }
    ,
    { id: 4, title: 'فروشگاه رفاه', adderss: 'addersssadfasd sdf asf as ', tel: 'asdasd' }

  ];


  constructor(private router: Router) { }

  ngOnInit() {
    this.type = 'list';
  }
  onClickItem() {
    this.router.navigate(['place-details'])
  }
  gotoAddPlace() {
    this.router.navigate(['add-place'])
  }

}
