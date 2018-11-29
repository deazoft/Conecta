import { Component,AfterViewInit,ElementRef} from '@angular/core';
import DataSharingService from '../../services/data-sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements AfterViewInit {

  constructor(public dataSharingService: DataSharingService, private elementRef : ElementRef) { }
  
  ngAfterViewInit()
 {
  var s=document.createElement("script");
  s.type="text/javascript";
  s.id="hs-script-loader";
  s.async;
  s.defer;
  s.src="//js.hs-scripts.com/5173100.js"; //external script

  this.elementRef.nativeElement.appendChild(s);
 }
 

 

}
