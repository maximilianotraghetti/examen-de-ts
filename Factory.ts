interface Equipo {
    getDescripcion(): string;
}

class Notebook implements Equipo {
    constructor(private nombre: string, private ram: string, private procesador: string) {}
    getDescripcion(): string {
        return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class Desktop implements Equipo {
    constructor(private nombre: string, private ram: string, private procesador: string) {}
    getDescripcion(): string {
        return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class Servidor implements Equipo {
    constructor(private nombre: string, private ram: string, private procesador: string) {}
    getDescripcion(): string {
        return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class EquipoFactory {
    static crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Equipo {
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

const miServidor = EquipoFactory.crearEquipo("Servidor", "Dell PowerEdge", "32GB", "Xenon");
console.log(miServidor.getDescripcion());