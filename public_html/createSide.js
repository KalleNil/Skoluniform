/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Skriver automatiskt ut en tom sida.
class tomsida {
    constructor() {
        //Skriver ut meta info
        document.write('<!DOCTYPE html>');
        document.write('<html>');
        document.write('<head>');
        document.write('<meta name="viewport" content="width=device-width, initial-scale=1" >');
        document.write('<link rel="stylesheet" href="w3.css">');
        document.write('<link rel=icon href=SuF.png sizes="any" type="image/svg+xml">');
        document.write('<script src="users.js"></script');
        document.write('<title>SUF</title>'); //Här kan man lägg in metod som automatiskt genererar titel
        document.write('</head>');
        //Sriver ut menyn högst upp och inkluderar logga
        document.write('<body style="background-color: #041414">');
        document.write('<header class="w3-container " style="background-color: " >');
        document.write('<a href="Home.html"> <img src="SuF.png" height="70"></a>');
        document.write('</header>');
        //Inväntar metod för att generera iFrame antar jag?
        
        document.write('</body>');
        
        //Skapar footer
        document.write('<footer class="w3-container " style="background-color: #041414">');
        document.write('<div class="logo ">');
        document.write('<img  class="w3-left" src="SuF.png" alt="alt" height="138"/>');
        document.write('<p class="w3-right" style="color: white">&copy; 2021 skoluniform </p>');
        document.write('</div');
        document.write('</footer>');
        document.write('</html>');
    }
}
    
     
   


  
 
