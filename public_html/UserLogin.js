/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//array för att testa rätt/fel login input
//Kommer befinna sig i en databas senare
var objPeople=[
    {
        email:"vigge@hotmail.com",
        password:"pilot"
    },
    {
        email:"viktor@hotmail.com",
        password:"bean"
    },
    {
        email:"preecha@hotmail.com",
        password:"ween"
    },
    {
        email:"preecha@hotmail.com",
        password:"windfew"
    }
    
];

var ifLoginSucceed = false;

function getInfo(){
    //hämtar värdet på inputen av användaren under login fältet
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //info ifall elemnten hämtas eller inte, hittas i console
    console.log("if the test passed the user name is " + username + " and the password is " +password);
    
    for(i = 0; i < objPeople.length; i++){
        if(username == objPeople[i].username && password == objPeople[i].password)
        {
            console.log(username + "is logged in");
            ifLoginSucceed = true;
            return;
            
        }
        
    }
    console.log("username or password didn't match");
}




