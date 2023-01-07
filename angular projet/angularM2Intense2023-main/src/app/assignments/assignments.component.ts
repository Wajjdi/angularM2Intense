import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre="Liste des devoirs";
  assignmentSelectionne!:Assignment;
  element = true;
  dateDeRendu = true;
  searchText = '';
  assignments:Assignment[] = [];
  constructor(private assignmentsService:AssignmentsService) {  
  }
   
   ngOnInit(): void {
    console.log("appelé à l'initialisation du composant");
    this.assignmentsService.getAssignments()
    .subscribe(assignments  => {
      this.assignments = assignments
     
    });
      
  }

  

  hideData() {
    this.assignmentsService.getAssignments()
    .subscribe(assignments  => {
      this.assignments = assignments
        for (let i = 0; i < assignments.length; i++) {
          console.log(assignments[i],this.element)
          if(assignments[i].rendu == true){
            this.element = false;
            console.log("acc",assignments[i], this.element)
          }
        }
    });
   
  }
/*
  showData(assignment:Assignment){
      if(assignment.rendu == true){
        this.element = true;
        console.log("acc")
      
    }
  }
*/
  assignmentClique(assignment:Assignment){
    console.log("assignmentClique : " + assignment.nom);
    this.assignmentSelectionne = assignment;
  }

  
}
