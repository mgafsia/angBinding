# angBinding  : Using all the angular Data binding ways.

# 1- {{L'interpolation}}


# 2- [Property Binding] :

[Property Binding] - example : <div [ngClass] ="…"> 

- Property Binding on DOM element :
   
   	By interplation - example : <div align="{{alignement}}"  >
   
   	By Property Binding - example : <div [align]="alignement" >
   
- Property Binding on attribute directive  - example :  [ngStyle]="{color:couleur}"

# 3- Property Binding on component property :

Property Binding on component property. Using :  @Input() - example  <app-comp1 [monAdresse]="address"></app-comp1>

# 4- (L'Event Binding) :

 (L'Event Binding) example : <button (click)="modifierPersonne()">Modifier adresse</button>

# 5- (L'Event Binding) with custom event :

(L'Event Binding) with custom event using @Output() & EventEmitter class

# 6- [(Le two-way Data Binding)] :

[(Le two-way Data Binding)]  "banana in a box" - example : <ma-taille [(taille)] ></ma-taille>

  





 
	



    
