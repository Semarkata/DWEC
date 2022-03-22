class Alumno {

    id
    nombre
    notaMedia

    constructor(id, nombre, notamedia) {
        this.id = id
        this.nombre = nombre
        this.notaMedia = notamedia
    }

    consultarNota(){

        return this.notaMedia;
    }

    cambiarNotaMedia(nota){

        this.notaMedia = nota;
    }
}


class Colegio {

    nombre
    nAlumnos
    alumnos = new Array(this.nAlumnos)

    constructor(nombre, nAlumnos) {
        this.nombre = nombre
        this.nAlumnos = nAlumnos

    }

    genearAlmunos(){
        for (var i = 0; i < this.nAlumnos; i++){
            this.alumnos.push(new Alumno(i,"Alumno"+i,i))
        }
    }

    pedirNotaMedia(alumno){

         return this.alumnos[alumno].consultarNota()
    }

    cambiarNotaMedia(alumno, nota){

        this.alumnos[alumno].cambiarNotaMedia(nota)
    }

}


function main(){
    colegio = new Colegio("Clara",7)

    colegio.genearAlmunos()
    console.log(colegio.alumnos)

    console.log(colegio.pedirNotaMedia(6))
    colegio.cambiarNotaMedia(6,10)
    console.log(colegio.pedirNotaMedia(6))
}

main()