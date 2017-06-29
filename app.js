

// var user = {
// 	firstname:"Esterling",
// 	lastname: "Accime",
// 	age:5,
// 	address:"8809 Terrace Club Drive, Roswell, GA, 30076"
// }


// var arr = ['Accime', 'Esterling', 5, '8809 Terrace Club Drive, Roswell, GA, 30076'];


// // endpoint
// // parameters

// var endpoint = 'http://quotesondesign.com/wp-json/posts?';

// var params = "filter[orderby]=rand&filter[posts_per_page]=1";


// // Promises


// var promise = $.ajax({
// 	url:endpoint + params,
// 	method:'GET'
// });


// // Resolving promises
// promise
// .then(function (data) {
// 	console.log(data);
// })
// .catch(function (err) {
// 	console.log(err)
// });



// // CallBack



// // HTTP

// // GET, POST, PUT, DELETE



// console.log(user);








// Initialize Firebase
var config = {
    apiKey: "AIzaSyA3BW1QEbz8FqXLnFZPaxMYAPLjx6aQz6E",
    authDomain: "javascript-b6f63.firebaseapp.com",
    databaseURL: "https://javascript-b6f63.firebaseio.com",
    projectId: "javascript-b6f63",
    storageBucket: "javascript-b6f63.appspot.com",
    messagingSenderId: "55846227385"
};
firebase.initializeApp(config);


var db = firebase.database();

var ref = db.ref();


$("button").on('click', function (event) {

	event.preventDefault();
	var email = $("#email").val().trim();
	var text = $("#text").val().trim();

	var user = {
		text:text,
		email:email
	}

	ref.push(user);

});





// ref.on('value', function (data) {
// 	console.log(data.val());
// });



// var user = {
// 	firstname:"Patrick",
// 	lastname:"John",
// 	age:5
// };



// // ref.set(user);


// ref.push(user);


































