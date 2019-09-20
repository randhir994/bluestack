import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTabData: any;
  campaignData = {
    'upcoming': [
      {
        'date': 1567673960474,
        'campaign': 'Upcoming Test Whatsapp',
        'location': 'US',
        'id':1
      },
      {
        'date': 1567673960474,
        'campaign': 'Test Whatsapp',
        'location': 'US',
        'id':2
      },
      {
        'date': 1567673960474,
        'campaign': 'Test Whatsapp',
        'location': 'US',
        'id':3
      },
      {
        'date': 1567673960474,
        'campaign': 'Test Whatsapp',
        'location': 'US',
        'id':4
      },
      {
        'date': 1568267454782,
        'campaign': 'Test Whatsapp',
        'location': 'US',
        'id':5
      }
    ],
    'live': [
      {
        'date': 1568267454782,
        'campaign': 'Live Test Whatsapp',
        'location': 'US',
        'id':1
      },
      {
        'date': 1567673960474,
        'campaign': 'Test Whatsapp',
        'location': 'US',
        'id':2
      },
      {
        'date': 1567673960474,
        'campaign': 'Test Whatsapp',
        'location': 'US',
        'id':3
      },
      {
        'date': 1567673960474,
        'campaign': 'Test Whatsapp',
        'location': 'US',
        'id':4
      },
      {
        'date': 1568267454782,
        'campaign': 'Test Whatsapp',
        'location': 'US',
        'id':5
      }
    ],
    'past': [
      {
        'date': 1568267454782,
        'campaign': 'Past Test Whatsapp',
        'location': 'US',
        'id':1
      },
      {
        'date': 1567673960474,
        'campaign': 'Test Whatsapp',
        'location': 'US',
        'id':2
      },
      {
        'date': 1567673960474,
        'campaign': 'Test Whatsapp',
        'location': 'US',
        'id':3
      },
      {
        'date': 1567673960474,
        'campaign': 'Test Whatsapp',
        'location': 'US',
        'id':4
      },
      {
        'date': 1567673960474,
        'campaign': 'Test Whatsapp',
        'location': 'US',
        'id':5
      }
    ]
  }

  constructor(private modalService: NgbModal) { }


  ngOnInit() {
    this.currentTabData = this.campaignData.upcoming;
    this.setCurrentLink('UPCOMING');

  }

  setData(type) {
    this.removeActiveClass(type);
    switch (type) {
      case 'UPCOMING':
        this.currentTabData = this.campaignData.upcoming;
        break;

      case 'LIVE':
        this.currentTabData = this.campaignData.live;
        break;
      case 'PAST':
        this.currentTabData = this.campaignData.past;
        break;

      default:
    }
  }

  setCurrentLink(type){
    let el = document.getElementById(type);
    el.classList.add('active');
  }

  removeActiveClass(type){
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
    });
    this.setCurrentLink(type);
  }

  openModal(data) {
    const modalRef = this.modalService.open(ModalComponent, { centered: true });
    modalRef.componentInstance.inputData = data;
  }

  returnDateDiffernce(resDate){
    let currentdate = new Date();
    let objdate = new Date(resDate);
    let timeDiff = objdate.getTime() - currentdate.getTime();
    let DaysDiff = timeDiff / (1000 * 3600 * 24);
    if(DaysDiff < 0){
      return `${Math.round(DaysDiff) * -1} days ago`
    }
    return `${Math.round(DaysDiff)} days to go`
  }

  modifyDate(ev,data){
    data.date = ev.target.value,data;
  }

  openDatePicker(id){
    document.getElementById(id).focus();
  }
}
