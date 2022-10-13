import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
titre='liste des devoirs'
nomDevoir="";
dateDeRendu!: Date;
boutonDesactiver=true;
assignementSelectionne!: Assignment;

assignment :Assignment[]= [
  {
    nom: 'devoir angular de Mr Buffa',
    dateDeRendu: new Date('2021-02-14'),
    rendu:false
  },
  {
    nom: 'devoir web component de Mr Buffa',
    dateDeRendu:new Date('2021-02-14'),
    rendu:true
  },
  {
    nom: 'devoir ND de Mr Mopole',
    dateDeRendu:new Date('2021-02-14'),
    rendu:true
  }
]
  constructor() { }

  ngOnInit(): void {
    console.log("appelé a l'initialisation du composant");
    setTimeout(() => {
    this.boutonDesactiver=false;
    }, 2000);
    
  }
  onSubmit() {
    console.log("onSubmit : "+ this.nomDevoir + "date de rendu :" + this.dateDeRendu);
    let nouveAssignement = new Assignment();
    nouveAssignement.nom=this.nomDevoir;
    nouveAssignement.dateDeRendu=this.dateDeRendu;
    nouveAssignement.rendu=false;
    this.assignment.push(nouveAssignement);
    console.log(this.assignment);
  }
  assignmentClique(assignment:Assignment) {
    this.assignementSelectionne = assignment;
    console.log(this.assignementSelectionne.nom);
  }


}
