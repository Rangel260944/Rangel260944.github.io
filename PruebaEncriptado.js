


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

0 -> node1:n14;

1 -> node2:a1;

2 -> node3:i9;

3 -> node4:e5;

4 -> node5:t20;

node2:p -> node6:o15;

node4:p -> node7:s19;

}

*/


class Prueba{


    graficar(dato){
        let cadena="digraph arbolB{\n";
        cadena+="rankr=LR;\n";
        cadena+="nodesep=.05;\n";
        cadena+="node [shape=record,width=.1,height=.1];";
        //metodos para graficar el arbol
        cadena+= this.graficar_nodos(dato);
        //cadena+=  this.graficar_enlaces(dato);
        cadena+="}\n"

        return cadena;
    }

    graficar_nodos(dato){
        var count = 1
        let cadena="";
        cadena+= "node [width = 1.5];";
        cadena+="node"+count+"[label = {" +dato+ "| 719 | }];";


    }
    //graficar_enlaces(){
   //     let cadena= ""
   //     var count = 0
  //      cadena+= count+'->'+node1:n14;

 //   }

    

  
}

var Pruebaa = new Prueba()
console.log(Pruebaa.graficar(5))