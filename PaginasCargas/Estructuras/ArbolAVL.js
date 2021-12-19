class nodo{
    constructor(dato){
        this.dato = dato;
        this.izquierda = null;
        this.der = null;
        this.altura = 0;
    }
}

class avl{
    constructor(){
        this.raiz = null;
    }

    insertar(valor){
        let nuevo = new nodo(valor);

        if(this.raiz == null){
            this.raiz= nuevo;
        }else{
            this.raiz = this.insertar_nodo(this.raiz,nuevo);
        }
    }

    insertar_nodo(raiz_actual,nuevo){
        if(raiz_actual != null){
            //recorrer hijos
            if(raiz_actual.dato > nuevo.dato){
                raiz_actual.izquierda = this.insertar_nodo(raiz_actual.izquierda,nuevo);
                //validaciones
                
                if(this.altura(raiz_actual.der)-this.altura(raiz_actual.izquierda)==-2){
                    console.log("entra a rotacion IZQUIERDA");
                    //if(this.altura(raiz_actual.izq.der)-this.altura(raiz_actual.izquierda.izquierda))
                    if(nuevo.dato < raiz_actual.izquierda.dato){ //-1 ROTACION IZQUIERDA
                        console.log("entra a rotacion IZQUIERDA IZQUIERDA");
                        raiz_actual = this.r_izquierdauierda(raiz_actual);
                    }else{ //1 ROTACION IZQ-DERECHA
                        console.log("entra a rotacion IZQUIERDA DERECHA");
                        raiz_actual = this.r_izquierda_der(raiz_actual);
                    }
                }
            }else if(raiz_actual.dato < nuevo.dato){
                raiz_actual.der = this.insertar_nodo(raiz_actual.der,nuevo);
                //validaciones
                if(this.altura(raiz_actual.der)-this.altura(raiz_actual.izquierda)==2){
                    console.log("entra a rotacion DERECHA");
                    if(nuevo.dato > raiz_actual.der.dato){ // 1 ROTACION DERECHA
                        console.log("entra a rotacion DERECHA DERECHA");
                        raiz_actual=this.r_derecha(raiz_actual);
                    }else{//-1 ROTACION DERECHA IZQUIERDA
                        console.log("entra a rotacion DERECHA IZQUIERDA");
                        raiz_actual = this.r_der_izquierda(raiz_actual);
                    }
                }

            }else{
                console.log("NO SE PUEDE INSERTAR EL DATO PORQUE YA EXISTE");
            }

            raiz_actual.altura = this.altura_maxima(this.altura(raiz_actual.der),this.altura(raiz_actual.izquierda))+1;
            return raiz_actual;
        }else{
            raiz_actual = nuevo;
            return raiz_actual;
        }
    }

    altura(nodo){
        if(nodo != null){
            return nodo.altura;
        }else{
            return -1;
        }
    }

    altura_maxima(h1,h2){
        if(h2>=h1){ //************************ MAYOR O IGUAL */
            return h2;
        }else{
            return h1;
        }

    }
    //ROTACIONES
    //simple izquerda
    r_izquierda(nodo){
        let aux = nodo.izquierda;
        nodo.izquierda= aux.der;
        aux.der = nodo;
        nodo.altura = this.altura_maxima(this.altura(nodo.der),this.altura(nodo.izquierda)) +1;
        aux.altura = this.altura_maxima(nodo.altura.altura,this.altura(nodo.izquierda))+1;
        return aux;
    }
    //simple derecha
    r_derecha(nodo){
        let aux = nodo.der;
        nodo.der= aux.izquierda;
        aux.izquierda = nodo;
        nodo.altura = this.altura_maxima(this.altura(nodo.izquierda),this.altura(nodo.der)) +1;
        aux.altura = this.altura_maxima(nodo.altura.altura,this.altura(nodo.der))+1;
        return aux;
    }

    //rotacion izq-der
    r_izquierda_der(nodo){
        nodo.izquierda = this.r_derecha(nodo.izquierda);
        let aux = this.r_izquierda(nodo);
        return aux;
    }

    //rotacion der-izq
    r_der_izquierda(nodo){
        nodo.der = this.r_izquierda(nodo.der);
        let aux = this.r_derecha(nodo);
        return aux;
    }

    //****************************************************** */

    preorden(raiz_actual){
        if(raiz_actual != null){
            console.log(raiz_actual.dato);
            this.preorden(raiz_actual.izquierda);
            this.preorden(raiz_actual.der);
        }
    }

    inOrden(raiz_actual){
        if(raiz_actual != null){
            this.inOrden(raiz_actual.izquierda);
            console.log(raiz_actual.dato);
            console.log("altura= "+(this.altura(raiz_actual.der)-this.altura(raiz_actual.iz)))
            this.inOrden(raiz_actual.der);
        }
    }

    postOrden(raiz_actual){
        if(raiz_actual != null){
            this.postOrden(raiz_actual.izquierda);
            this.postOrden(raiz_actual.der);
            console.log(raiz_actual.dato);
        }
    }

    generarDot(){
        let cadena="digraph arbol {\n";
        cadena+= this.generar_nodos(this.raiz);
        cadena+="\n";
        cadena+=this.enlazar(this.raiz);
        cadena+="\n}";

        console.log(cadena);
    }

    generar_nodos(raiz_actual){ //metodo preorden
        let nodos ="";
        if(raiz_actual != null){
            nodos+= "n"+raiz_actual.dato+"[label=\""+raiz_actual.dato+"\"]\n";
            nodos+=this.generar_nodos(raiz_actual.izquierda);
            nodos+=this.generar_nodos(raiz_actual.der);
        }
        return nodos;
    }

    enlazar(raiz_actual){
        let cadena="";
        if(raiz_actual != null){
            cadena += this.enlazar(raiz_actual.izquierda);
            cadena += this.enlazar(raiz_actual.der);
            //validaciones
            if(raiz_actual.izquierda != null){
                cadena+="n"+raiz_actual.dato + "-> n"+raiz_actual.izquierda.dato+"\n";
            }
            if(raiz_actual.der != null){
                cadena+="n"+raiz_actual.dato + "-> n"+raiz_actual.der.dato+"\n";
            }

            
        }
        return cadena;
    }
}

arbol = new avl();

arbol.insertar(30);
arbol.insertar(40);
arbol.insertar(20);
arbol.insertar(10);
arbol.insertar(5);
arbol.insertar(70);
arbol.insertar(7);
arbol.insertar(100);


arbol.inOrden(arbol.raiz);

arbol.generarDot();