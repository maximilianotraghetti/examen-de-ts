interface Equipo {
    detalles(): string; 
}


class Notebook implements Equipo {
    constructor(private nombre: string, private ram: string, private procesador: string) {}
    detalles(): string {
        return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class Desktop implements Equipo {
    constructor(private nombre: string, private ram: string, private procesador: string) {}
    detalles(): string { 
        return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class Servidor implements Equipo {
    constructor(private nombre: string, private ram: string, private procesador: string) {}
    detalles(): string { 
        return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

// Fábrica de equipos
class EquipoFactory {
    crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Equipo {
        switch (tipo.toLowerCase()) {
            case "notebook":
                return new Notebook(nombre, ram, procesador);
            case "desktop":
                return new Desktop(nombre, ram, procesador);
            case "servidor":
                return new Servidor(nombre, ram, procesador);
            default:
                throw new Error("Error: tipo de equipo no reconocido");
        }
    }
}


const factory = new EquipoFactory(); 
const server = factory.crearEquipo("Servidor", "Dell PowerEdge", "32GB", "Xeon");
console.log(server.detalles());