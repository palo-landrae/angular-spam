import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spam-printer',
  templateUrl: './spam-printer.component.html',
  styleUrls: ['./spam-printer.component.css']
})
export class SpamPrinterComponent implements OnInit {
  @Input() article: string;
  constructor() { }

  ngOnInit(): void {
  }

}
