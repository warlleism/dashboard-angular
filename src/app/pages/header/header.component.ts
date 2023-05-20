import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  titleStyles: { [element: string]: string } = {}

  ngOnInit(): void {
    setTimeout(() => {
      this.animationTransformChange()
    }, 10)
  }

  private animationTransformChange(): void {
    this.titleStyles = {
      'transform': 'translateY(0px)',
      'opacity': '1'
    }
  }
}
