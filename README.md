# angBinding  : To test Angular binding methods, Material for Angular 2+ & RxJS Observable/Observer 

# To install & run :
  - install node 
  - install angular CLI
  - to run :  
      * cd cd angBinding-web/src/main/angBinding-web/
      * npm install 
      * npm start


# angBinding  : Part I : Using all the angular Data binding ways.

# 1- {{interpolation}}


# 2- [Property Binding] :

[Property Binding] - example : <div [ngClass] ="…"> 

a- Property Binding on DOM element :
   
   	By interpellation - example : <div align="{{alignment}}"  >
   
   	By Property Binding - example : <div [align]="alignment" >
   
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
      
      NgModel est une directive qui permet de réaliser du data-binding sur les éléments de formulaire de type Input et textarea.
      
      [(Le two-way Data Binding avec NgModel)] ==> exemple :  <input [(ngModel)]="prenom">  
      
      cela pu également s'écrire : 
      
      <input  [ngModel]="currentHero.firstName"
              (ngModelChange)="currentHero.firstName=$event">
      

# angBinding  : Part II : Using Material for Angular 2+ 

# angBinding  : Part III : Using RxJS Observable/Observer  Methods 

Quick over view : 

    - [ data flow ] = can be converted to [observable]
    
    - observable = "push" [data flow] to [observable] via methode [next] of [observable]
    
    - observer = "subscribe" to [observable]. The [observable] use [next] methode to [push] data to [observor]. eg : observable.subscribe(observer)
         = Object which has these three methodes : [next], [error] & complete.

    - opertors =    Observable.from()
	                Observable.map()
                    Observable.mapTo()
                    Observable.interval()
                    Observable.take()
                    Observable.fromEvent()
                    Observable.do()
                    Observable.filter()
                    Observable.concat()
                    Observable.merge()
                    Observable.from()




 
	



    
