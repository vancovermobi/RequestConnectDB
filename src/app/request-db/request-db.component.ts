import { ConndatabaseService } from './../ServicesConnectDB/conndatabase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-db',
  templateUrl: './request-db.component.html',
  styleUrls: ['./request-db.component.css']
})
export class RequestDBComponent implements OnInit {
  title = 'Angular PHP adminDatabse' ;
  public data : [];
  constructor(private ConnServices: ConndatabaseService) { }

  ngOnInit(): void {
    this.ConnServices.getDB().subscribe( data => {
      console.log(data);
      this.data = data ;
    })
    this.ConnServices.PutDB("SELECT * FROM BACDAOTAO").subscribe(data =>{
      console.log(data);
    })
  }

}
