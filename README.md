# angBinding  : Using all the angular Data binding ways.

# 1- {{interpolation}}


# 2- [Property Binding] :

[Property Binding] - example : <div [ngClass] ="…"> 

a- Property Binding on DOM element :
   
   	By interplation - example : <div align="{{alignement}}"  >
   
   	By Property Binding - example : <div [align]="alignement" >
   
b- Property Binding on attribute directive  - example :  [ngStyle]="{color:couleur}"

# 3- Property Binding on component property :

Property Binding on component property. Using :  @Input() - example  <app-comp1 [monAdresse]="address"></app-comp1>

# 4- (Event Binding) :

 (Event Binding) example : <button (click)="modifierPersonne()">Modifier adresse</button>

# 5- (Event Binding) with custom event :

(Event Binding) with custom event using @Output() & EventEmitter class

# 6- [(two-way Data Binding)] :

    a- [(two-way Data Binding)]  "banana in a box" - example : <ma-taille [(taille)] ></ma-taille>
    
    b- [(ngModel)] : Data Binding 2-way with ngModel (for Input & textarea) - example : <input [(ngModel)]="prenom">





 
	



    
