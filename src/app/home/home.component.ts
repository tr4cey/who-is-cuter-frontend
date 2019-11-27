import { Component, OnInit } from '@angular/core';
import { PairService } from '../shared/pair.service';
import { PictureService } from '../shared/picture.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pair: any=[];
  picture1: any=[];
  picture2: any=[];

  constructor(
    public pairService: PairService,
    public pictureService: PictureService,
  ) { }

  ngOnInit() 
  {
    this.getPair();
  }

  getPair()
  {
    let pairId = Math.floor(Math.random() * 5) + 1; 

    this.pairService.GetPair(pairId).subscribe((data: any) => {
      this.pair = data;
      this.getPicture1();
    })
  }
  
  getPicture1()
  {
    this.pictureService.GetPicture(this.pair.pic1_id).subscribe((data: any) => {
      this.picture1 = data;
      this.getPicture2();
    })
  }
  getPicture2()
  {
    this.pictureService.GetPicture(this.pair.pic2_id).subscribe((data: any) => {
      this.picture2 = data;
    })
  }
  
  votePic1()
  {
    this.pairService.VotePic1(this.pair.id).subscribe((data: any) => {
      this.pair = data;
      this.printResults();
    })
  }
  votePic2()
  {
    this.pairService.VotePic2(this.pair.id).subscribe((data: any) => {
      this.pair = data;
      this.printResults();
    })
  }

  printResults()
  {
    var p1Votes = this.pair.pic1_votes;
    var p2Votes = this.pair.pic2_votes;
    var p1percent = Math.floor(p1Votes/(p1Votes+p2Votes)*100);
    var p2percent = Math.floor(p2Votes/(p1Votes+p2Votes)*100);

    var p1Image = <HTMLInputElement>document.getElementById("pic1");
    var p2Image = <HTMLInputElement>document.getElementById("pic2");
    p1Image.remove();
    p2Image.remove();
    var p1Desc = <HTMLInputElement>document.getElementById("para1");
    var p2Desc = <HTMLInputElement>document.getElementById("para2");
    p1Desc.remove();
    p2Desc.remove();

    var percent1Element = document.createElement("p");
    var totalVotes1Element = document.createElement("p");
    var percent2Element = document.createElement("p");
    var totalVotes2Element = document.createElement("p");

    percent1Element.innerHTML = p1percent + "%";
    percent2Element.innerHTML = p2percent + "%";
    totalVotes1Element.innerHTML = "Total Votes: " + p1Votes;
    totalVotes2Element.innerHTML = "Total Votes: " + p2Votes;

    var button1 = <HTMLInputElement>document.getElementById("button1");
    var button2 = <HTMLInputElement>document.getElementById("button2");

    button1.disabled =true;
    button2.disabled =true;

    button1.appendChild(percent1Element);
    button1.appendChild(totalVotes1Element);
    button2.appendChild(percent2Element);
    button2.appendChild(totalVotes2Element);

    var resetDiv = <HTMLInputElement>document.getElementById('resetButton');
    var reset = <HTMLInputElement>document.createElement('button');
    reset.id = 'reset';
    reset.innerHTML = 'Next Pair';
    // TO EDIT THE CSS OF THE RESET BUTTON WRITE LINES OF CODE LIKE THIS
    reset.style.backgroundColor = 'yellow';
    reset.style.textAlign = 'center';
    // ---------------------------------------------------------------
    reset.onclick = function()
    {
      window.location.reload();
    }
    resetDiv.appendChild(reset);
  }
}
