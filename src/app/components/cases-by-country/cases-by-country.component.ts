import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

interface ICases {
  country: string;
  percentage: number;
  qtd: string
}

@Component({
  selector: 'app-cases-by-country',
  templateUrl: './cases-by-country.component.html',
  styleUrls: ['./cases-by-country.component.scss']
})

export class CasesByCountryComponent {

  cases: ICases[] = [
    { country: 'Usa', percentage: 80, qtd: "1,816,820" },
    { country: 'Brz', percentage: 20, qtd: "498,440" },
    { country: 'Rus', percentage: 50, qtd: "396,575" },
    { country: 'Spa', percentage: 10, qtd: "286,308" },
    { country: 'UK', percentage: 5, qtd: "272,826" },
    { country: 'Ita', percentage: 50, qtd: "232,664" },
    { country: 'Fra', percentage: 90, qtd: "188,625" },
    { country: 'Ger', percentage: 10, qtd: "183,294" },
    { country: 'Ind', percentage: 20, qtd: "181,827" },
  ]

  transform() {
    this.cases = this.cases.sort((a, b) => b.percentage - a.percentage);
  }

  ngOnInit(): void {
    this.transform()
  }



}
