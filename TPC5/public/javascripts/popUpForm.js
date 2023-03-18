openForm = (objeto) => {
    var formElement = document.getElementById("myForm");
    var idEntry = objeto.closest("tr").id;
    var rowElement = document.getElementById(idEntry);
    formElement.style.display = "block";
    var id = formElement.getElementsByClassName("Id");
    console.log(rowElement);
    formElement.getElementsByClassName("Id")[0].value = idEntry;
    formElement.getElementsByClassName("Nome")[0].value = rowElement.getElementsByClassName("Nome")[0].innerText;
    formElement.getElementsByClassName("Descricao")[0].value = rowElement.getElementsByClassName("Descricao")[0].innerText;
    formElement.getElementsByClassName("Tipo")[0].value = rowElement.getElementsByClassName("Tipo")[0].innerText;
    formElement.getElementsByClassName("Inicio")[0].value = rowElement.getElementsByClassName("Inicio")[0].innerText;
    formElement.getElementsByClassName("Fim")[0].value = rowElement.getElementsByClassName("Fim")[0].innerText;
}

closeForm = () => {
    document.getElementById("myForm").style.display = "none";
}
