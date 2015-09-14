var simpleExtend = function (base, data) {
    var Extended = function (data) {
        base.call(this, data);
    };

    Extended.prototype = Object.create(base.prototype);
    Extended.prototype.constructor = Extended;

    return Extended;
};
var TodoModel = simpleExtend(Model);
var todo = new TodoModel({
    title: 'Hello World',
    done: false
});
console.log(todo);


// $( function() {
//     console.log("Hai");
//     $(' .add ').click(function(){
//         // console.log("sdgfs");
//         var title = $('.title').val();
//         var new_add = new Model({
//             data : { }
//         });
//     });
// });





// var TodoModel = Model.extend({
//     defaults : {
//         'done' : false,
//     }
// });
//
// var todo = new TodoModel({
//     title: 'Hello World'
// });
//
//
//
// var Collection = function(model_id){
//
// };
