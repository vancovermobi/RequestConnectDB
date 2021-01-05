import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ketquadt',
  templateUrl: './ketquadt.component.html',
  styleUrls: ['./ketquadt.component.css']
})
export class KetquadtComponent implements OnInit {
  public TableInfo : any [];
  public TableContent : any [];
  public status = 'Do you want...?';
  public SOTBMT: number;
  public pathUrl: number;
  public TTCHUDAUTU = '';
  public MOTASP :string = "";
  public isChecked : boolean = false ;
  public TableInfoSaveDB : any [];
  public TableContentSaveDB : any [] ;
  constructor() { }

  ngOnInit(): void {
  }
  getStatus(status) {
    this.status = status;
  }

  getSOTBMT(SOTBMT) {

  }

  getPathUrl(pathUrl) {

  }

  getChuDauTu(SOTBMT) {
    let url = 'http://muasamcong.mpi.gov.vn/goi-thau?bid_nm=&bid_no=' + SOTBMT;
    console.log(url);
    
  }
  SaveDataBase(TTCHUDAUTU:string , MOTASP:string){
    this.status = MOTASP + TTCHUDAUTU;
    this.TableInfo[0].CHUDAUTU = TTCHUDAUTU+'';

    var TableInfoSaveDB = JSON.stringify(this.TableInfo[0]) ; // Object convert to Json
     // console.log(TableInfoSaveDB);
    var TableContentSaveDB = JSON.stringify(this.TableContent) ;
      //console.log(TableContentSaveDB);
    
  }
  onSubmit(event){
    
    console.log(event.value.CHUDAUTU);
    this.status = event.value.CHUDAUTU;
    this.TableInfo[0].CHUDAUTU = this.status +'';
    var KQ = [];
    for(let i = 1 ; i < (event._directives.length); i++){
        KQ.push(event._directives[i]["model"]);
        this.TableContent[(i-1)]["MOTA"] = KQ[(i-1)] ; 
        //console.log(this.TableContent[(i-1)]["MOTA"]);
    }
    // console.log(event);
    var InfoSaveDB = JSON.stringify(this.TableInfo[0]) ; // Object convert to Json
    this.TableInfoSaveDB = JSON.parse(InfoSaveDB);
    //this.TableInfoSaveDB = JSON.stringify(this.TableInfo[0])
    console.log(this.TableInfoSaveDB);
    var ContentSaveDB = JSON.stringify(this.TableContent) ;
    this.TableContentSaveDB = JSON.parse(ContentSaveDB);
    console.log(this.TableContentSaveDB);
  }
}
