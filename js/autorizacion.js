const formaingresar = document.getElementById("formaingresar");

formaingresar.addEventListener('submit', (e) => {
    e.preventDefault();
    let correo = formaingresar['correo'].value;
    let contrasena = formaingresar['contrasena'].value;

    auth.signInWithEmailAndPassword(correo, contrasena).then(() => {
        console.log("Entró");
        formaingresar.reset();
        formaingresar.querySelector('.error').innerHTML = '';
    }).catch(err => {
        console.log(err);
        formaingresar.querySelector('.error').innerHTML = messageError(err.code);
    });
});

function messageError(codigo) {
    let message = '';
    switch (codigo) {
        case 'auth/wrong-password':
            message = "Contraseña Incorrecta";
            break;
        case 'auth/user-not-found':
            message = "Usuario no encontrado";
            break;
        case 'auth/weak-password':
            message = "Contraseña débil";
            break;
        default:
            message = "Hubo un error";
    }
    return message;
}

/*const salir = document.getElementById("salir");
salir.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        alert('Se ha cerrado sesión');
    });
}); */

const formaregistrate = document.getElementById('formaregistrar');

formaregistrate.addEventListener('submit', (e) => {
    e.preventDefault();

    const correo = formaregistrate['rcorreo'].value;
    const contrasena = formaregistrate['rcontrasena'].value;

    auth.createUserWithEmailAndPassword(correo, contrasena).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
            nombre: formaregistrate['rnombre'].value,
            telefono: formaregistrate['restado'].value
        });
    }).then(() => {
        $('#registrarmodal').modal('hide');
        formaregistrate.reset();
        formaregistrate.querySelector('.error').innerHTML = '';
    }).catch(err => {
        formaregistrate.querySelector('.error').innerHTML = messageError(err.code);
    });
}); 

entrarGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function (result) {
        var token = result.credential.accessToken;

        console.log(token);

        var user = result.user;

        formaingresar.reset();
        formaingresar.querySelector('.error').innerHTML = '';

    }).catch(function (error) {
        console.log(error);
    })
}