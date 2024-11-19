var x = 100;
function escopo() {
    var x = 50;
    console.log("Valor de x dentro da função:", x);}
    if (true){
        var x = 30;
        console.log("valor de x dentro do bloco if:",x);
    }
escopo();
console.log("valor de x no escopo global:",x)