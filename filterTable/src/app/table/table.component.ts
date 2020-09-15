import { Component, OnInit } from '@angular/core';
import { Student } from '../Models/Student';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public filteredStudent: Student[] = [];
  
  allStudents: Student[] = [
    {
      "id": 2,
      "name": "Welch Cooke",
      "age": 32,
      "email": "welchcooke@moreganic.com",
      "phone": "+1 (812) 574-2704",
      "address": "568 Evergreen Avenue, Yardville, Minnesota, 2420", "avg_grade": 96
    },
    {
      "id": 3,
      "name": "Hickman Petersen",
      "age": 33,
      "email": "hickmanpetersen@moreganic.com",
      "phone": "+1 (933) 422-3102",
      "address": "854 Preston Court, Lutsen, Washington, 5807", "avg_grade": 91
    }
    , {
      "id": 4,
      "name": "Lilly Ochoa",
      "age": 22,
      "email": "lillyochoa@moreganic.com",
      "phone": "+1 (861) 479-2248",
      "address": "443 Greene Avenue, Idamay, Virgin Islands, 6364", "avg_grade": 93
    }, {
      "id": 5,
      "name": "Bampbell Calhoun",
      "age": 26,
      "email": "campbellcalhoun@moreganic.com",
      "phone": "+1 (875) 419-3783",
      "address": "578 Aitken Place, Valle, Oregon, 8222", "avg_grade": 89
    }

  ]

  constructor() { }

  ngOnInit() {
    this.filteredStudent = this.allStudents;
  }



  filterStudentList(_num: string = "0") {
    var num = parseInt(_num);
    
    switch (num) {
      case 0: this.filteredStudent = this.allStudents;
        break;
      case 1: this.filteredStudent = this.allStudents.filter((x) => 1 <= x.id && x.id <= 6);
        break;
      case 2: this.filteredStudent = this.allStudents.filter((x) => 30 < x.age);
        break;
      case 3: this.filteredStudent = this.allStudents.filter((x) => 90 < x.avg_grade);
        break;
      case 4: this.filteredStudent = this.allStudents.filter((x) => x.phone.endsWith('4'));
        break;
      case 5: this.filteredStudent = this.allStudents.filter((x) => x.name.startsWith('B'));
        break;
    }
  }
}



