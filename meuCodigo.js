function somar() {

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    // converte para numero e soma
    let resultado1 =
        parseInt(num1) + parseInt(num2);
    let resultado2 =
        parseInt(num1) - parseInt(num2);
    let resultado3 =
        parseInt(num1) * parseInt(num2);
    let resultado4 =
        parseInt(num1) / parseInt(num2);

    document.getElementById("resultado1").textContent = `${num1} + ${num2} = ` + resultado1;
    document.getElementById("resultado2").textContent = `${num1} - ${num2} = ` + resultado2;
    document.getElementById("resultado3").textContent = `${num1} * ${num2} = ` + resultado3;
    document.getElementById("resultado4").textContent = `${num1} / ${num2} = ` + resultado4;
    // Limpa os campos após resultado
    document.getElementById("num1").value = ""
    document.getElementById("num2").value = ""
}
