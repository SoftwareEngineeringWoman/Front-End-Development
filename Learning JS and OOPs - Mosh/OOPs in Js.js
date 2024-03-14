// creating a object circle
//object literal is a way to define an object in javascript
//we can also define objects as factories and constructors.
const circle={

    radius: 10,
    location:{
        x:1,
        y:1
    },
    draw:function(){
        console.log('draw');
    
    }
};
circle.draw();

//circle has 3 members i.e. properties
//member draw has function so that is METHOD
//properties hold some value
//methods hold logic

//if objects has more than 1 method, it is called BEHAVIOUR
//factories