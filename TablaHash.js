class nodo{
    constructor(dato){
        this.dato = dato;
    }
}

class hash{
    constructor(){
        this.claves = this.iniciar_arreglo(7);
        this.claves_usadas=0;
        this.size = 7;
    }

    iniciar_arreglo(tamaño){
        let claves=[];
        for(var i =0;i<tamaño,i++;){
            claves[i] = null;
        }
        return claves;
    }

    calcular_hash(dato){
        //metodo de division
        let resultado=0;
        resultado= dato % this.size;
        return resultado;
    }

    solucion_coliciones(indice){ //metodo de exploracion cuadratica
        let nuevo_indice =0;
        let i=0;
        let disponible = false;

        while(disponible == false){
            nuevo_indice = indice + Math.pow(i,2);
            //validar que nuevo_indice sea menor al tañano de la tabla
            if(nuevo_indice>= this.size){
                nuevo_indice = nuevo_indice-this.size;
            }
            //validar que la posicion del nuevo indice este disponible
            if(this.claves[nuevo_indice]==null){
                disponible= true;
            }
            i++;
        }
        return nuevo_indice;
    }

    insertar(nuevo){
        
        let indice = this.calcular_hash(nuevo.dato);

        //validaciones 
        if(this.claves[indice]==null){ //posicion disponible
            this.claves[indice] = nuevo;
            this.claves_usadas++;
        }else{ // existe una colicion
            indice =  this.solucion_coliciones(indice);
            this.claves[indice] = nuevo;
            this.claves_usadas++
        }

        //validacion de tamaño
        let Porcentaje_uso = this.claves_usadas/this.size;
        if(Porcentaje_uso>=0.5){
            this.rehash();
        }
    }

    rehash(){
        //****** Encontrar el siguiente numero primo */
        let primo= false;
        let new_size = this.size;
        while(primo==false){
            new_size++;
            let cont =0;
            for(var i = new_size;i>0; i--){
                if(new_size%i ==0){
                    cont++;
                }
            }
            //validar cuantas veces se dividio exactamente
            if(cont == 2){
                primo= true
            }
        }
        //****** crear nuevo arreglo con el tamaño del siguente numero primo */
        let claves_aux = this.claves;

        this.size = new_size;
        this.claves = this.iniciar_arreglo(new_size);
        this.claves_usadas=0;

        for(var i =0; i<claves_aux.length;i++){
            if(claves_aux[i]!=null){
                this.insertar(claves_aux[i]);
            }
        }
    }

    recorrer(){
        for(var i =0;i<this.size;i++){
            if(this.claves[i]!=null){
                console.log("-->"+this.claves[i].dato);
            }else{
                console.log("------------");
            }
        }
    }
/*
digraph G {

nodesep=.05;

rankdir=LR;

node [shape=record,width=.1,height=.1];

node [width = 1.5];

node1 [label = "{ n14 | 719 | }"];

node2 [label = "{ a1 | 805 | }"];

node3 [label = "{ i9 | 718 | }"];

node4 [label = "{ e5 | 989 | }"];

node5 [label = "{ t20 | 959 | }"] ;

node6 [label = "{ o15 | 794 | }"] ;

node7 [label = "{ s19 | 659 | }"] ;

f6 -> node5:t20; 
f5 -> node4:e5;
f2 -> node3:i9;
f0 -> node1:n14;
f1 -> node2:a1;

node2:p -> node6:o15;

node4:p -> node7:s19;

}
*/
    generar_dot(){
        let cadena="digraph Hash{\n";
        cadena+="rankdir=LR;\n";
        cadena+="node [shape=record,width=.1,height=.1];\n";
        //metodos para graficar los nodos hash
        cadena+= this.graficar_nodos(this.raiz);
        cadena+=  this.graficar_enlaces(this.raiz);
        cadena+="}\n"

        return cadena;

    }
    graficar_nodos(raiz_actual){
        let cadena="";
        cadena+="node [width = 1.5];" + 
        let contador=0;

    }




}

let tabla = new hash();

tabla.insertar(new nodo(10));
tabla.insertar(new nodo(8));
tabla.insertar(new nodo(2));
tabla.insertar(new nodo(9));
tabla.insertar(new nodo(81));
tabla.insertar(new nodo(12));
tabla.insertar(new nodo(90));
tabla.insertar(new nodo(181));
tabla.insertar(new nodo(112));
tabla.insertar(new nodo(190));
tabla.recorrer();