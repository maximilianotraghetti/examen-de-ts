class Configuracion {
    private static instance: Configuracion;
    private entorno: string;

    private constructor() {

        this.entorno = "producción"; 
    }

    public static getInstance(): Configuracion {
        if (!Configuracion.instance) {
            Configuracion.instance = new Configuracion();
        }
        return Configuracion.instance;
    }

    public getEntorno(): string {
        return this.entorno;
    }

    public setEntorno(nuevoEntorno: string): void {
        this.entorno = nuevoEntorno;
    }
}


const config1 = Configuracion.getInstance();
console.log(config1.getEntorno());

const config2 = Configuracion.getInstance();
config2.setEntorno("desarrollo"); 

const config3 = Configuracion.getInstance(); 
console.log(config3.getEntorno()); 