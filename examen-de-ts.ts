
class InventarioViejo {
    private items: { nombre: string }[] = [];

    addItem(nombre: string): void {
        this.items.push({ nombre: nombre });
        console.log(`[ ${JSON.stringify(this.items[this.items.length - 1])} ]`); 
    }

    getItems(): { nombre: string }[] {
        return this.items;
    }
}


interface NuevoInventario {
    agregarEquipo(nombre: string, tipo: string, estado: string): void;
}


class AdaptadorInventario implements NuevoInventario {
    private inventarioViejo: InventarioViejo;

    constructor(inventarioViejo: InventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }

    agregarEquipo(nombre: string, tipo: string, estado: string): void {
  
        this.inventarioViejo.addItem(nombre);
    }
}


const viejoInventario = new InventarioViejo();
const adaptador = new AdaptadorInventario(viejoInventario);


adaptador.agregarEquipo("Router Cisco", "Red", "disponible");

