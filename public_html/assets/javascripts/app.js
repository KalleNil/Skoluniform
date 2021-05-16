var userInfo = new Vue({ 
        template: '<h1>hej {{firstName}} </h1>',
        data(){
            return{
                firstName: "Olle",
                lastName: "Bornebusch"
                
                
            }
        }

});
userInfo.$mount("#userInfo")