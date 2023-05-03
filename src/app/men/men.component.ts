import { Component } from '@angular/core';

export interface Size {
  size: string;
  chest: string;
  waist: string;
  hips: string;
}

const SIZES: Size[] = [
  {size: 'XS', chest: '34', waist: '28', hips: '35'},
  {size: 'S', chest: '36', waist: '30', hips: '37'},
  {size: 'M', chest: '38', waist: '32', hips: '39'},
  {size: 'L', chest: '40', waist: '34', hips: '41'},
  {size: 'XL', chest: '42', waist: '36', hips: '43'},
  {size: 'XXL', chest: '44', waist: '38', hips: '45'},
  {size: 'XXXL', chest: '46', waist: '40', hips: '47'}
];

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  displayedColumns: string[] = ['size', 'chest', 'waist', 'hips'];
  dataSource = SIZES;


}
