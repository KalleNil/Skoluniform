var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

app.message= "hej"

var teacherapp1 = new Vue( {
    el: "#teacher",
    data: {
        seen: true

    }
})

if (this.isTeacher == true){
    teacherapp1.seen = true

}
else{
    teacherapp1.seen = false;
}

new Vue({
    el: '#headerColor',
    data: {
        description: "här ska background color implemteras beroende på användarens roll",
        color:{
            backgroundColor: "#174542"
        }

    }
  })

  new Vue({
    el: '#bodyMenuColor',
    data: {
        description: "bodyColor with user dependency",
        colorbody:{
            backgroundColor: "#041414"
        }

    }
  })




