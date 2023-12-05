import { Component } from '@angular/core';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  constructor(private patientService: PatientService){}
  
  displayedColumns: string[] = ['id','firstName','lastName','dni','actions'];
  dataSource: MatTableDataSource<Patient>;

  ngOnInit(): void{
    this.patientService.findAll().subscribe(data => {
      this.createTable(data);
    });
  }

  createTable(data: Patient[]){
    this.dataSource = new MatTableDataSource(data);
  }
  
}
