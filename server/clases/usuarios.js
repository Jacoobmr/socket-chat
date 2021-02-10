class Usuarios { // clase usuarios que se va encargar de todos los usuarios conectados
    constructor() {
        this.personas = []; //se crea el arreglo vacio y para que siempre sea un arreglo
    }

    agregarPersonas(id, nombre, sala) { //se agregan las personas por id y nombre
        let persona = {
            id,
            nombre,
            sala
        };

        this.personas.push(persona);

        return this.personas;
    }

    getPersona(id) { //obtener persona por id
        // let persona = this.personas.filter(personaa => { // esta seria la forma normal de hacer la fncion de getPersona
        //     return persona.id === id
        // })[0];

        let persona = this.personas.filter(persona => persona.id === id)[0]; //funcion resumida

        return persona;

    }

    getPersonas() { // obtener todas las personas
        return this.personas;
    }

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    borrarPersona(id) { // se borra la persona y retorna la persona que se borro.
        // this.personas = this.personas.filter(persona => { // esta seria la normal de hacer esta funcion.
        //     return persona.id != id
        // })

        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(persona => persona.id != id); // esta seria la forma resumida

        return personaBorrada;
    }
}


module.exports = {
    Usuarios
};