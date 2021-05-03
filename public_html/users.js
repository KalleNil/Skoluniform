/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Student klass
class student {
    static count = 0; //Börjar på hundra så får första eleven ID nummer 101
    constructor(firstName, lastName, birthDay, klass) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        this.klass = klass;
        count += 1;
        this.ID = firstName.substring(0,3) + "." + lastName.substring(0,3) + (count + 100); //Första studenten som registreras får ID nr 101
    }
    
}

//Lärarklass som bygger vidare på student. Lägger till en boolean som inloggningen kan kolla efter 
class teacher extends student{
    static teacherCount = 0;
    constructor(firstName, lastName, birthDay, klass) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        this.klass = klass;
        this.isTeacher = true;
        teacherCount += 1;
        this.ID = firstName.substring(0,3) + "." + lastName.substring(0,3) + (teacherCount + 900); //Första läraren som registreras får ID nr 901
    }
}


