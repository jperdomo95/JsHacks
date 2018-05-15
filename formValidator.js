function validaForm(e){
    var elements = e.elements;
    //alert(elements.length);
    for(var i = 0; i < elements.length; i++) {
        //alert(elements[4].tagName);
        if(elements[i].tagName === "INPUT" || elements[i].tagName === "SELECT"){
            if(elements[i].value.trim() === "" && elements[i].required === true) {
                var title = elements[i].getAttribute('title');
                alert("Por favor complete el campo " + title);
                elements[i].focus();
                elements[i].style.borderColor = "red";
                elements[i].style.borderStyle = "dashed";
                return false;
            }
        }
    }
}
