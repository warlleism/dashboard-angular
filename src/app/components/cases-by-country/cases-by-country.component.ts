import { Component } from '@angular/core';

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
    { country: 'Spa', percentage: 40, qtd: "286,308" },
    { country: 'Brz', percentage: 70, qtd: "498,440" },
    { country: 'Ind', percentage: 20, qtd: "181,827" },
    { country: 'Rus', percentage: 60, qtd: "396,575" },
    { country: 'Usa', percentage: 80, qtd: "1,816,820" },
    { country: 'UK', percentage: 35, qtd: "272,826" },
    { country: 'Ita', percentage: 30, qtd: "232,664" },
    { country: 'Ger', percentage: 20, qtd: "183,294" },
    { country: 'Fra', percentage: 25, qtd: "188,625" },
  ]

  transform() {
    this.cases = this.cases.sort((a, b) => b.percentage - a.percentage);
  }

  ngOnInit(): void {
    this.transform()
  }

}
