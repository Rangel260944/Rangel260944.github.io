class Nodo{
    constructor(mes){
        this.mes = mes;
        this.siguiente = null;
        this.anterior = null;
    }
}

class ListaMeses{
    constructor(){
    this.raiz = null;
    }

    insertar(mes){
        let nodo_nuevo = new Nodo(mes)
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
            nodos+= "n"+raiz_actual.mes+"[label=\"" + "Id: "+raiz_actual.mes+"\"]\n"
      
        }
        return nodos
    }

    enlazar(raiz_actual){
        let cadena=""
        if(raiz_actual != null){
            cadena += this.enlazar(raiz_actual.siguiente)
            if(raiz_actual.siguiente != null){
                cadena+="n"+raiz_actual.mes + "-> n"+raiz_actual.siguiente.mes+"\n"
            }
            if(raiz_actual.anterior != null){
                cadena+= "n"+raiz_actual.siguiente.mes+"-> n"+raiz_actual.mes +"\n"
            }
        

            
        }
        return cadena
    }

}
Meses = new ListaMeses()
Meses.insertar(1)
Meses.insertar(8)
Meses.insertar(7)
Meses.insertar(6)
Meses.generarDot()
