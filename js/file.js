var divtabla = document.getElementById('cuadro')
var divOffers = document.getElementById('columOffers');
var i = 1;
var botonAgregar = document.getElementById('btnagregar')
var botonEditar = document.getElementById('btneditar')
var botonAyuda = document.getElementById('btnAyuda')
var botonEditarContact = document.getElementById('btnEditarContact')
var botonEnviarContact = document.getElementById('btnEnviarContact')
var divForm = document.getElementById('divForm')




var infoForm = {};


function agregar() {

    var nombre = document.getElementById('txtNombre').value
    var apellido = document.getElementById('txtApellido').value
    var salon = document.getElementById('selectSalon').value
    var correo = document.getElementById('txtCorreo').value
    var telefono = document.getElementById('txtTelefono').value


    if (nombre == "" || apellido == "" || salon == "0" || correo == "") {

        alert("Por favor, llenar cada uno de los campos solicitados.")

    } else {

        /*  infoForm["id"] = i++;
        infoForm["nombre"] = nombre;
        infoForm["apellido"] = apellido;
        infoForm["salon"] = salon;
        infoForm["correo"] = correo;*/

        localStorage.setItem("name", nombre);
        localStorage.setItem("secondName", apellido);
        localStorage.setItem("selection", selectSalon.value);
        localStorage.setItem("mail", correo);
        localStorage.setItem("phone", telefono)





        infoForm["id"] = i++;
        infoForm["nombre"] = localStorage.getItem('name');
        infoForm["apellido"] = localStorage.getItem('secondName');
        infoForm["salon"] = localStorage.getItem('selection');
        infoForm["correo"] = localStorage.getItem('mail');
        infoForm["telefono"] = localStorage.getItem('phone')


        //Insertar en la tabla
        var tabla = document.getElementById("mitabla")
        var nuevaFila = tabla.insertRow(tabla.lenght);

        cell1 = nuevaFila.insertCell(0)
        cell1.innerHTML = infoForm.id;

        cell2 = nuevaFila.insertCell(1)
        cell2.innerHTML = infoForm.nombre;

        cell3 = nuevaFila.insertCell(2)
        cell3.innerHTML = infoForm.apellido;

        cell4 = nuevaFila.insertCell(3)
        cell4.innerHTML = infoForm.salon;

        cell5 = nuevaFila.insertCell(4)
        cell5.innerHTML = infoForm.correo;

        cell6 = nuevaFila.insertCell(5)
        cell6.innerHTML = infoForm.telefono;

        cell7 = nuevaFila.insertCell(6)
        cell7.innerHTML = `<a class="btn btn-warning mx-5 " onClick="onEdit(this)">Edit</a>
            <a class= "btn btn-danger " onClick="onDelete(this)">Delete</a>`;
        document.getElementById("miForm").reset()
        divtabla.style.display = '';



    }
}//fin agregar



function onEdit(td) {
    ///cambio de botones
    botonEditar.disabled = false;
    botonAgregar.disabled = true;
    selectedRow = td.parentElement.parentElement;
    document.getElementById("txtNombre").value = selectedRow.cells[1].innerHTML;
    document.getElementById("txtApellido").value = selectedRow.cells[2].innerHTML;
    document.getElementById("selectSalon").value = selectedRow.cells[3].innerHTML;
    document.getElementById("txtCorreo").value = selectedRow.cells[4].innerHTML;
    document.getElementById("txtTelefono").value = selectedRow.cells[5].innerHTML;
}

function actualizarInfo() {

    nombre = document.getElementById('txtNombre').value
    apellido = document.getElementById('txtApellido').value
    salon = document.getElementById('selectSalon').value
    correo = document.getElementById('txtCorreo').value
    telefono = document.getElementById('txtTelefono').value

    if (nombre == "" || apellido == "" || salon == "0" || correo == "") {

        alert("Por favor, llenar cada uno de los campos solicitados.")

    } else {

        localStorage.setItem("name", nombre);
        localStorage.setItem("secondName", apellido);
        localStorage.setItem("selection", selectSalon.value);
        localStorage.setItem("mail", correo);
        localStorage.setItem("phone", telefono);





        infoForm["id"] = i++;
        infoForm["nombre"] = localStorage.getItem('name');
        infoForm["apellido"] = localStorage.getItem('secondName');
        infoForm["salon"] = localStorage.getItem('selection');
        infoForm["correo"] = localStorage.getItem('mail');
        infoForm["telefono"] = localStorage.getItem('phone');

        selectedRow.cells[1].innerHTML = infoForm.nombre;
        selectedRow.cells[2].innerHTML = infoForm.apellido;
        selectedRow.cells[3].innerHTML = infoForm.salon;
        selectedRow.cells[4].innerHTML = infoForm.correo;
        selectedRow.cells[5].innerHTML = infoForm.telefono;

        botonEditar.disabled = true;
        botonAgregar.disabled = false;
        alert("Fila editada exitosamente");
        document.getElementById("miForm").reset();

    }
}

function onDelete(td) {

    if (confirm('¿Estás seguro de esto? Al borrarlo, perderás la información')) {

        row = td.parentElement.parentElement;
        document.getElementById('mitabla').deleteRow(row.Index);


        localStorage.removeItem('name');
        localStorage.removeItem('secondName');
        localStorage.removeItem('selection');
        localStorage.removeItem('mail');
        localStorage.removeItem('phone');

        var num = document.getElementById('mitabla').rows.length;
        // alert(num)
        if (num == 1) {
            divtabla.style.display = 'none'; // ocultar
        }

    }

}

function ayudaPersonalizada() {
    botonEditarContact.disabled = true;
    if (localStorage.getItem('name') ||
        localStorage.getItem('secondName') ||
        localStorage.getItem('selection') ||
        localStorage.getItem('mail') ||
        localStorage.getItem('phone')) {

        var infoForm = {};
        infoForm["id"] = i++;
        infoForm["nombre"] = localStorage.getItem('name');
        infoForm["apellido"] = localStorage.getItem('secondName');
        infoForm["correo"] = localStorage.getItem('mail');
        infoForm["telefono"] = localStorage.getItem('phone')
        infoForm["problema"] = localStorage.getItem('problem')

        var divDatosrRecuperados = document.getElementById('datosRecuperados')
        divDatosrRecuperados.style.display = '';
        //Insertar en la tabla
        var tabla = document.getElementById("mitabla")
        var nuevaFila = tabla.insertRow(tabla.lenght);

        cell1 = nuevaFila.insertCell(0)
        cell1.innerHTML = infoForm.id;

        cell2 = nuevaFila.insertCell(1)
        cell2.innerHTML = infoForm.nombre;

        cell3 = nuevaFila.insertCell(2)
        cell3.innerHTML = infoForm.apellido;

        cell4 = nuevaFila.insertCell(3)
        cell4.innerHTML = infoForm.correo;

        cell5 = nuevaFila.insertCell(4)
        cell5.innerHTML = infoForm.telefono;

        cell6 = nuevaFila.insertCell(5)
        cell6.innerHTML = infoForm.problema;

        cell7 = nuevaFila.insertCell(6)
        cell7.innerHTML = `<a class="btn btn-warning mx-5 " onClick="onEditContact(this)">Edit</a>
            <a class= "btn btn-danger " onClick="onDeleteContact(this)">Delete</a>`;
        document.getElementById("miForm").reset()
        divtabla.style.display = '';
    }
    var divFormAyuda = document.getElementById('formAyuda')
    console.log('holi')
    divFormAyuda.style.display = '';
    botonAyuda.disabled = true;

    if (localStorage.getItem('name') || localStorage.getItem('secondName') || localStorage.getItem('mail')) {
        var divDatosrRecuperados = document.getElementById('datosRecuperados')
        divDatosrRecuperados.style.display = '';
        document.getElementById('txtNombre').value = localStorage.getItem('name');
        document.getElementById('txtApellido').value = localStorage.getItem('secondName');
        document.getElementById('txtCorreo').value = localStorage.getItem('mail');
        //probablemente no estén estos datos, por eso no se colocan en el if
        document.getElementById('txtTelefono').value = localStorage.getItem('phone');
        document.getElementById('txtProblema').value = localStorage.getItem('problem');


    }

}

function enviarInfo() {




    nombre = document.getElementById('txtNombre').value
    apellido = document.getElementById('txtApellido').value
    telefono = document.getElementById('txtTelefono').value
    correo = document.getElementById('txtCorreo').value
    var problema = document.getElementById('txtProblema').value


    localStorage.setItem("name", nombre);
    localStorage.setItem("secondName", apellido);
    localStorage.setItem("phone", telefono);
    localStorage.setItem("mail", correo);
    localStorage.setItem("problem", problema)






    if (nombre == "" || apellido == "" || correo == "" || telefono == "" || problema == "") {

        alert("Por favor, llenar cada uno de los campos solicitados.")

    } else {

        alert('Su información ha sido suministrada')

        localStorage.setItem("name", nombre);
        localStorage.setItem("secondName", apellido);
        localStorage.setItem("mail", correo);
        localStorage.setItem("phone", telefono);
        localStorage.setItem("problem", problema);

        var infoForm = {};



        infoForm["id"] = i++;
        infoForm["nombre"] = localStorage.getItem('name');
        infoForm["apellido"] = localStorage.getItem('secondName');
        infoForm["correo"] = localStorage.getItem('mail');
        infoForm["telefono"] = localStorage.getItem('phone')
        infoForm["problema"] = localStorage.getItem('problem')


        //Insertar en la tabla
        var tabla = document.getElementById("mitabla")
        var nuevaFila = tabla.insertRow(tabla.lenght);

        cell1 = nuevaFila.insertCell(0)
        cell1.innerHTML = infoForm.id;

        cell2 = nuevaFila.insertCell(1)
        cell2.innerHTML = infoForm.nombre;

        cell3 = nuevaFila.insertCell(2)
        cell3.innerHTML = infoForm.apellido;

        cell4 = nuevaFila.insertCell(3)
        cell4.innerHTML = infoForm.correo;

        cell5 = nuevaFila.insertCell(4)
        cell5.innerHTML = infoForm.telefono;

        cell6 = nuevaFila.insertCell(5)
        cell6.innerHTML = infoForm.problema;

        cell7 = nuevaFila.insertCell(6)
        cell7.innerHTML = `<a class="btn btn-warning mx-5 " onClick="onEditContact(this)">Edit</a>
            <a class= "btn btn-danger " onClick="onDeleteContact(this)">Delete</a>`;
        document.getElementById("miForm").reset()
        divtabla.style.display = '';


    }


}
//AQUÍ ES DONDE SE ESTÁ PRESENTANDO EL ERROR, NO ENTEINDO EL PORQUÉ, SOLO COPIÉ Y PEGUÉ CÓDIGO, DEBERÍA FUNCIONAR
function onEditContact(td) {
    botonEditarContact.disabled = false;
    botonEnviarContact.disabled = true;

    selectedRow = td.parentElement.parentElement;
    alert('holi')
    document.getElementById('txtNombre').value = selectedRow.cells[1].innerHTML;
    document.getElementById('txtApellido').value = selectedRow.cells[2].innerHTML;
    document.getElementById('txtCorreo').value = selectedRow.cells[3].innerHTML;
    document.getElementById('txtTelefono').value = selectedRow.cells[4].innerHTML;
    document.getElementById('txtProblema').value = selectedRow.cells[5].innerHTML;
}

function actualizarInfoContact() {

    botonEditarContact.disabled = false;
    botonEnviarContact.disabled = true;

    nombre = document.getElementById('txtNombre').value
    apellido = document.getElementById('txtApellido').value
    correo = document.getElementById('txtCorreo').value
    telefono = document.getElementById('txtTelefono').value
    problema = document.getElementById('txtProblema').value

    if (nombre == "" || apellido == "" || correo == "" || telefono == "" || problema == "") {

        alert("Por favor, llenar cada uno de los campos solicitados.")

    } else {

        alert('Su información ha sido suministrada')

        localStorage.setItem("name", nombre);
        localStorage.setItem("secondName", apellido);
        localStorage.setItem("mail", correo);
        localStorage.setItem("phone", telefono);
        localStorage.setItem("problem", problema);

        var infoForm = {};



        infoForm["id"] = i++;
        infoForm["nombre"] = localStorage.getItem('name');
        infoForm["apellido"] = localStorage.getItem('secondName');
        infoForm["correo"] = localStorage.getItem('mail');
        infoForm["telefono"] = localStorage.getItem('phone')
        infoForm["problema"] = localStorage.getItem('problem')

        selectedRow.cells[1].innerHTML = infoForm.nombre;
        selectedRow.cells[2].innerHTML = infoForm.apellido;
        selectedRow.cells[3].innerHTML = infoForm.correo;
        selectedRow.cells[4].innerHTML = infoForm.telefono;
        selectedRow.cells[5].innerHTML = infoForm.problema;

        alert("Fila editada exitosamente");
        document.getElementById("miForm").reset()




    }





}

function onDeleteContact(td) {

    if (confirm('¿Estás seguro de esto? Al borrarlo, perderás la información')) {

        row = td.parentElement.parentElement;
        document.getElementById('mitabla').deleteRow(row.Index);


        localStorage.removeItem('name');
        localStorage.removeItem('secondName');
        localStorage.removeItem('selection');
        localStorage.removeItem('mail');
        localStorage.removeItem('phone');
        localStorage.removeItem('problem')

        var num = document.getElementById('mitabla').rows.length;
        // alert(num)
        if (num == 1) {
            divtabla.style.display = 'none'; // ocultar
        }

    }

}


function enviarCorreo() {
    document.getElementById("txtCorreo").value = localStorage.getItem('mail');
    correo = document.getElementById('txtCorreo').value
    localStorage.setItem("mail", correo);
    divOffers.style.display = '';


}
function versalones() {

    var salonesJSON
    var salonesOBJ
    var infoForm = {};
    fetch('http://localhost:3001/api')
        .then(response => response.json())
        .then(data => salonesJSON = data)
        .then(() => console.log(salonesJSON))


    setTimeout(() => {
        alert('Obteniendo lista de salones...')
        salonesOBJ = JSON.parse(JSON.stringify(salonesJSON))
        var tabla = document.getElementById("tablaSalones")
            

        for (let i = 0; i <= 6; i++) {

            infoForm["id"] = salonesOBJ[i].id_salonn
            infoForm["nombre"] = salonesOBJ[i].nombre
            infoForm["dirrecion"] = salonesOBJ[i].dirrecion
            infoForm["precio"] = salonesOBJ[i].precio



            //Insertar en la tabla
            
            var nuevaFila = tabla.insertRow(tabla.lenght);
            cell1 = nuevaFila.insertCell(0)
            cell1.innerHTML = infoForm.id;

            cell2 = nuevaFila.insertCell(1)
            cell2.innerHTML = infoForm.nombre;

            cell3 = nuevaFila.insertCell(2)
            cell3.innerHTML = infoForm.dirrecion;

            cell4 = nuevaFila.insertCell(3)
            cell4.innerHTML = infoForm.precio;




        }
    }, 1500)
}
function vertablaAlquiler(){
    divForm.style.display = ''

}
function sendAPI(){

   


    const params = {
        nombrecompleto: localStorage.getItem('name') + " " +localStorage.getItem('secondName'),
        correo: localStorage.getItem('selection'),
        salon: localStorage.getItem('mail'),
        telefono: localStorage.getItem('phone')
        

    }
    console.log(params)
    const options = {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json'


        }
    }
    fetch('http://localhost:3001/api', options)

        .then(response => response.json())
        alert('Salón apartado correctamente')






}
function iniciosesion(){

    var txtusuario = document.getElementById('txtusuario').value
    var txtcontraseña = document.getElementById('txtcontraseña').value

    console.log(txtusuario, txtcontraseña)

    if (txtusuario == "admin" && txtcontraseña == "admin") {
        alert("Inicio de sesion correcto")

        window.location.replace('../html/alquiler.html')
    }else{
        alert('Datos incorrectos')
    }

}