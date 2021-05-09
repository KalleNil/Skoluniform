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
        description: "här ska bgc beroende på användarens roll läggas till",
        color:{
            backgroundColor: "#30ffff"
        }

    }
  })




