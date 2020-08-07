var a;
var i =0 ;
    var images=['chiffre/incone-0-97.jpg','chiffre/incone-1-97.jpg','chiffre/incone-2-97.jpg','chiffre/incone-3-97.jpg',
    'chiffre/incone-4-97.jpg','chiffre/incone-5-97.jpg','chiffre/incone-6-97.jpg','chiffre/incone-7-97.jpg',
    'chiffre/incone-8-97.jpg','chiffre/incone-9-97.jpg','chiffre/incone-10-97.jpg','chiffre/incone-11-97.jpg',
    'chiffre/incone-12-97.jpg','chiffre/incone-13-97.jpg','chiffre/incone-14-97.jpg','chiffre/incone-15-97.jpg',
    'chiffre/incone-16-97.jpg','chiffre/incone-17-97.jpg','chiffre/incone-18-97.jpg','chiffre/incone-19-97.jpg',
    'chiffre/incone-20-97.jpg','chiffre/incone-21-97.jpg', 'chiffre/incone-22-97.jpg','chiffre/incone-23-97.jpg',
    'chiffre/incone-24-97.jpg','chiffre/incone-25-97.jpg','chiffre/incone-26-97.jpg','chiffre/incone-27-97.jpg',
    'chiffre/incone-28-97.jpg','chiffre/incone-29-97.jpg','chiffre/incone-30-97.jpg','chiffre/incone-31-97.jpg',
    'chiffre/incone-32-97.jpg','chiffre/incone-33-97.jpg','chiffre/incone-34-97.jpg','chiffre/incone-35-97.jpg',
    'chiffre/incone-36-97.jpg'];
    
    function nb_aleatoire()
    
{
    var nombreroulette=Math.random();
    return Math.floor(nombreroulette*36);
}  
  var nombreroulette = nb_aleatoire(nombreroulette) ;



  
  function diapo()
  {    
   document.images.slide.src=images[i]; 
   var a;
   
   if(i<images.length-1)
   {
       i++;
   }
   else 
   {
       i=0;
   }
  
   a = setTimeout("diapo()",100);
   
   if(document.images.slide.src=="https://dou-nba.github.io/Projet-JS/chiffre/incone-" + nombreroulette +"-97.png")
   {  
       clearTimeout(a);
       i=0;
       setTimeout("roulette()",1000);
   }
   
  
   
  }
  



function roulette()

{
    var b = document.querySelector("#gain").value ;
    var c = document.querySelector("#perte").value ;
    
    var a = document.querySelector(".pari:checked").value;
    var d = document.querySelector("#number").value ;
    if(1*d>1*b)
    {
        d=b;
        alert("Mise supérieure à la valeur du porte monnaie, la mise sera donc maximale !")
    }
    if (a==nombreroulette)
    {
        alert("Vous avez gagné "+36*d+" mille francs !");
        b=1*b+36*d;
        c=1*c-1*d;
        document.querySelector("#gain").value = b ;
        document.querySelector("#perte").value = c;
    }
    
    else if ((a=="pair" && nombreroulette%2==0 ) || (a=="impair" && nombreroulette%2==1)) 
    {
        alert("Vous avez gagné "+d+" mille francs !");
        b=1*b+1*d;
        c=1*c-1*d;
        document.querySelector("#gain").value = b ;
        document.querySelector("#perte").value = c;
    }
    else
    {
        alert("Mise perdue");
        b=1*b-1*d;
        c=1*c+1*d;
        document.querySelector("#gain").value = b ;
        document.querySelector("#perte").value = c;
    }
    
    if(b==0)
        {
            alert("Game Over ! Rafraîchissez la page pour rejouer .");
            document.querySelector("#number").disabled=true;
            document.querySelector("#number").value=0;
            
        }
    nombreroulette=nb_aleatoire(nombreroulette);



}



