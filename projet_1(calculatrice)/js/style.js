function btn0() {
    var x = document.getElementById("btn2").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
}
function btn1() {
    var x = document.getElementById("btn1").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value=valeur + x;
}
function btn2() {
    var x = document.getElementById("btn2").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
}
function btn3() {
    var x = document.getElementById("btn3").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
}
function btn4() {
    var x = document.getElementById("btn4").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
}
function btn5() {
    var x = document.getElementById("btn5").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
}
function btn6() {
    var x = document.getElementById("btn6").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
}
function btn7() {
    var x = document.getElementById("btn7").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
}
function btn8() {
    var x = document.getElementById("btn8").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
}
function btn9() {
    var x = document.getElementById("btn9").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
}
function btndiv() {
    var x = document.getElementById("btndiv").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
}
function btnmul() {
    var x = document.getElementById("btnmul").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
}
function btnmoin() {
    var x = document.getElementById("btnmoin").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
}
function btnplus() {
    var x = document.getElementById("btnplus").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
}
function btnpoint() {
    var x = document.getElementById("btnpoint").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
}
function btnplusmoin() {
    var x = document.getElementById("btnplusmoin").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value =  x+valeur;
}
function btnsin() {
    var x = document.getElementById("btnsin").value;
    var valeur = document.getElementById("resultat").value;
    var sin = Math.sin(valeur);
    document.getElementById("resultat").value = sin;
}
function btncos() {
    var x = document.getElementById("btncos").value;
    var valeur = document.getElementById("resultat").value;
    var cos = Math.cos(valeur);
    document.getElementById("resultat").value = cos;
}
function btntan() {
    var x = document.getElementById("btntan").value;
    var valeur = document.getElementById("resultat").value;
    var tan = Math.tan(valeur);
    document.getElementById("resultat").value = tan;
}
function btnexp() {
    var x = document.getElementById("btnexp").value;
    var valeur = document.getElementById("resultat").value;
    var exp = Math.exp(valeur);
    document.getElementById("resultat").value = exp;
}
function btnln() {
    var x = document.getElementById("btnln").value;
    var valeur = document.getElementById("resultat").value;
    var ln = Math.ln(valeur);
    document.getElementById("resultat").value = ln;
}
function btnlog() {
    var x = document.getElementById("btnlog").value;
    var valeur = document.getElementById("resultat").value;
    var log = Math.log(valeur);
    document.getElementById("resultat").value = log;
}
function btnegal() {
    var valeur  = document.getElementById("resultat").value;
    var resultatfinal = eval(valeur);
    document.getElementById("resultat").value = resultatfinal;
}
function supp(){
    var valeur = document.getElementById("resultat").value;
    var longueur = valeur.length;
    var fin = longueur - 1;
    valeur = valeur.substring(0,fin);
    document.getElementById("resultat").valeur=valeur;
}
