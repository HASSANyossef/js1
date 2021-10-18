

var users= [];
document.getElementById("add").onclick= function(){
    var inptname = document.getElementById("name").value;
    users.push(inptname);
    document.getElementById("res").innerText = "this calc:  " +users.length;
    console.log(users);
}