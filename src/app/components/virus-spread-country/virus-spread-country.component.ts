import { Component } from '@angular/core';
interface ICases {
  country: string;
  percentage: number;
  qtd: string
}

@Component({
  selector: 'app-virus-spread-country',
  templateUrl: './virus-spread-country.component.html',
  styleUrls: ['./virus-spread-country.component.scss']
})
export class VirusSpreadCountryComponent {
  typeCases: boolean = true

  cases: ICases[] = [
    { country: 'USA', percentage: 56, qtd: "286,308" },
    { country: 'Brasil', percentage: 24, qtd: "498,440" },
    { country: 'Russia', percentage: 24, qtd: "181,827" },
    { country: 'Spain', percentage: 27, qtd: "396,575" },
    { country: 'UK', percentage:61, qtd: "1,816,820" },
    { country: 'Italy', percentage: 41, qtd: "272,826" },
    { country: 'France', percentage: 39, qtd: "232,664" },
    { country: 'Germany', percentage: 29, qtd: "183,294" },
    { country: 'India', percentage: 22, qtd: "188,625" },
    { country: 'Turkey', percentage: 1, qtd: "188,625" },
    { country: 'Peru', percentage: 2, qtd: "188,625" },
    { country: 'Iran', percentage: 49, qtd: "188,625" },
    { country: 'Chile', percentage: 18, qtd: "188,625" },
    { country: 'Canada', percentage: 5, qtd: "188,625" },
    { country: 'Mexico', percentage: 5, qtd: "188,625" },
    { country: 'Saudi Arabia', percentage: 25, qtd: "188,625" },
  ]

  sortArray() {
    this.cases = this.cases.sort((a, b) => b.percentage - a.percentage);
  }


  handlerTotalCases(value: boolean) {
    this.typeCases = value
  }

  ngOnInit(): void {
    this.sortArray()
  }

}
