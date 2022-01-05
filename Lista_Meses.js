class Nodo{
    constructor(id, nombre, precio, cantidad){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.siguiente = null;
        this.anterior = null;
    }
}

class ListaProductos{
    constructor(){
    this.raiz = null;
    }

    insertar(id, nombre, precio, cantidad){
        let nodo_nuevo = new Nodo(id, nombre, precio, cantidad)
        if (this.raiz == null){
            this.raiz = nodo_nuevo;
        }else{
            let temporal = this.raiz;
            while(temporal.siguiente != null){
                temporal = temporal.siguiente;
            }
            temporal.siguiente = nodo_nuevo;
            temporal.anterior = nodo_nuevo;
        }
    }
    generarDot(){
        let cadena="digraph arbol {\n" + 'graph [rankdir=LR]' + '\n' + 'node [shape = circle, color=black , style=filled, fillcolor=gray93];\n';
        cadena+= this.generar_nodos(this.raiz)
        cadena+="\n"
        cadena+=this.enlazar(this.raiz)
        cadena+="\n}"

        console.log(cadena)
    }

    generar_nodos(raiz_actual){ 
        let nodos =""
        if(raiz_actual != null){
            nodos+= "n"+raiz_actual.id+"[label=\"" + "Id: "+raiz_actual.id+"\"]\n"
      
        }
        return nodos
    }

    enlazar(raiz_actual){
        let cadena=""
        if(raiz_actual != null){
            cadena += this.enlazar(raiz_actual.siguiente)
            if(raiz_actual.siguiente != null){
                cadena+="n"+raiz_actual.id + "-> n"+raiz_actual.siguiente.id+"\n"
            }
            if(raiz_actual.anterior != null){
                cadena+= "n"+raiz_actual.siguiente.id+"-> n"+raiz_actual.id +"\n"
            }
        

            
        }
        return cadena
    }

}
Producto = new ListaProductos()
Producto.insertar(1)
Producto.generarDot()
