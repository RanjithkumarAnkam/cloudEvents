import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent implements OnInit {
  public dashboardbody = true;
  public calendarbody = false;
  public customerbody = false;
  public vendorbody = false;
  public managebody = false;
  public gallerybody = false;
  public my_Class = '';

  onClick(event){
    var id = event.currentTarget.id;
    if(id=='dashboardid'){
      this.dashboardbody = true;
      this.calendarbody = false;
      this.customerbody = false;
      this.vendorbody = false;
      this.managebody = false;
      this.gallerybody=false;
    }
    else if(id=='calendarid'){
      this.dashboardbody = false;
      this.calendarbody = true;
      this.customerbody = false;
      this.vendorbody = false;
      this.managebody = false;
      this.gallerybody=false;
    }
    else if(id=='galleryid'){
      this.gallerybody=true;
      this.dashboardbody = false;
      this.calendarbody = false;
      this.customerbody = false;
      this.vendorbody = false;
      this.managebody = false;
    }
    else if(id=='customerid'){
      this.gallerybody=false;
      this.dashboardbody = false;
      this.calendarbody = false;
      this.customerbody = true;
      this.vendorbody = false;
      this.managebody = false;
    }
    else if(id=='vendorid'){
      this.gallerybody=false;
      this.dashboardbody = false;
      this.calendarbody = false;
      this.customerbody = false;
      this.vendorbody = true;
      this.managebody = false;
    }
    else if(id=='manageid'){
      this.gallerybody=false;
      this.dashboardbody = false;
      this.calendarbody = false;
      this.customerbody = false;
      this.vendorbody = false;
      this.managebody = true;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
