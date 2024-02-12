import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pipe';
  currentDate: Date = new Date();
  x: string = "MY NAME IS VAISHNAVI.";
  y: string = "myself vaishnavi.";
  z = 0.567;
  a: { [s: string]: number } = {
    b: 1,
    c: 2,
    d: 3,
  }

  students: any = {
    ID: 'std 01',
    Name: 'Vaishnavi',
    DOB: '12/02/2024',
    Gender: 'Female',
    Fees: 200,
  }
};