import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
titre='liste des devoirs'
assignement = [
  {
    nom: 'devoir angular de Mr Buffa',
    dateDeRendu:'2021-11-30',
    rendu:false
  },
  {
    nom: 'devoir web component de Mr Buffa',
    dateDeRendu:'2021-11-30',
    rendu:true
  },
  {
    nom: 'devoir ND de Mr Mopole',
    dateDeRendu:'2021-11-30',
    rendu:true
  }
]
  constructor() { }

  ngOnInit(): void {
    console.log("appelé a l'initialisation du composant");
  }

}
