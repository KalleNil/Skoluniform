/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var objPeople=[
    {
        username:"vigge",
        password:"Pilot"
    },
    {
        username:"viktor",
        password:"bean"
    },
    {
        username:"preecha",
        password:"ween"
    },
    {
        username:"preecha",
        password:"windfew"
    }
    
]

function getInfo(){
    //hämtar värdet på inputen av användaren under login fältet
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    //info ifall elemnten hämtas eller inte, hittas i console
    console.log("if the test passed the user name is " + username + " and the password is " +password)
    
    for(i = 0; i < objPeople.length; i++){
        if(username == objPeople[i].username && password == objPeople[i].password)
        {
            console.log(username + "is logged in")
        }
        else{
            console.log("username or password didn't match")
        }
        
    }
}




