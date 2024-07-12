document.getElementById("boton1").addEventListener("click", function() {
    var likes = document.getElementById("like1")
    var numlikes = parseInt(likes.innerText) 
    numlikes++
    likes.innerText = numlikes
});

document.getElementById("boton2").addEventListener("click", function() {
    var likes = document.getElementById("like2")
    var numlikes = parseInt(likes.innerText) 
    numlikes++
    likes.innerText = numlikes
});

document.getElementById("boton3").addEventListener("click", function() {
    var likes = document.getElementById("like3")
    var numlikes = parseInt(likes.innerText) 
    numlikes++
    likes.innerText = numlikes
});