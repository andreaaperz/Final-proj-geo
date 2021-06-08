class Registro {
    constructor(id, uid, titulo, contenido, check1, check2, check3) {
        this.id = id;
        this.uid = uid;
        this.titulo = titulo;
        this.contenido = contenido;
        this.check1 = check1;
        this.check2 = check2;
        this.check3 = check3;
    };

    agregar() {
        db.collection('pendientes').add({
            titulo: this.titulo,
            uid: this.uid,
            contenido: this.contenido,
            check1: this.check1,
            check2: this.check2,
            check3: this.check3
        });
    }

    borrar(id){                
        db.collection('pendientes').doc(id).delete();
    };
}