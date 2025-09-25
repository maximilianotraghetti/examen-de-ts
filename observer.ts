class Equipo { 
    private estado: string;
    private observadores: Observador[] = [];
    private nombre: string;
    private tipo: string; 

    constructor(nombre: string, tipo: string, estadoInicial: string) { 
        this.nombre = nombre;
        this.tipo = tipo; 
        this.estado = estadoInicial;
    }

    public agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    public eliminarObservador(observador: Observador): void {
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    public cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }

    private notificarObservadores(): void {
        for (const obs of this.observadores) {
            obs.actualizar(this.nombre, this.estado); 
        }
    }
}


interface Observador {
    actualizar(nombreEquipo: string, nuevoEstado: string): void;
}


class Soporte { 
    actualizar(nombreEquipo: string, nuevoEstado: string): void {
        console.log(`Soporte notificado: ${nombreEquipo} ha cambiado su estado a ${nuevoEstado}`);
    }
}


const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible"); 
equipo.cambiarEstado("en reparación");