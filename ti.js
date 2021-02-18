function send() {
    player1 = document.getElementById("nu1").value;
    player2 = document.getElementById("nu2").value;
    ans = nu1*nu2;
}
question ="nu1";
answer ="nu2";
function check(){
    input= document.getElementById("dig").value;
    if (input=ans)
    {
        if (answer="nu1"){
        document.getElementById("a").innerHTML= "a"+1}
        else{
        document.getElementById("q").innerHTML= "q"+1}
    }
    if (question="nu1"){
        document.getElementById("q").innerHTML= "q"+1}
        else{
        document.getElementById("a").innerHTML= "a"+1}
}