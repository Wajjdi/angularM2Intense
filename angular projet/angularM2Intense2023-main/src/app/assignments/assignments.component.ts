import { Component, OnInit, ViewChild } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as e from 'express';



@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})

export class AssignmentsComponent implements OnInit {

  hide = true;
  currentItemsToShow = [];
  titre = "Liste des devoirs";
  assignmentSelectionne!: Assignment;
  element = true;
  dateDeRendu = true;
  searchText = '';
  assignments: Assignment[] = [];
 
  pageEvent: PageEvent;
  pageSlice = this.assignments.slice(0, 10)
  displayedColumns: string[] = ['id', 'nom', 'dateDeRendu', 'rendu', 'nomAuteur', 'nomMatiere',"note","remarque","imgProf","imgMatiere"];


  constructor(private assignmentsService: AssignmentsService) {

  }
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('paginatorPageSize') paginatorPageSize: MatPaginator;




  ngOnInit(): void {

   
    console.log("appelé à l'initialisation du composant");
    //this.assignmentsService.peuplerBD();
    this.assignmentsService.getAssignments()
      .subscribe(assignments => {
        this.assignments = assignments

        this.pageSlice = this.assignments.slice(0, 10)


      });


  }

  OnPageChange(event: PageEvent) {

    const startIndex = event.pageIndex * event.pageSize
    let endIndex = startIndex + event.pageSize;
    this.pageSlice = this.assignments.slice(startIndex, endIndex)
    this.getAssignment();
  }

  getAssignment() {
    // on récupère l'id dans l'url
    // Le + force la conversion en number
    this.assignmentsService.getAssignments()
      .subscribe((assignment) => {
        if (!assignment) return;

        this.assignments = assignment;

      });
  }


  hideData() {
    this.hide = !this.hide;
    this.assignmentsService.getAssignments()
  }

  assignmentClique(assignment: Assignment) {
    console.log("assignmentClique : " + assignment.nom);
    this.assignmentSelectionne = assignment;
  }



}
