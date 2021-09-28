console.log ( "______________________________________________________" );
console.log (            "Atividade: Desafio da Samena 6"               );
console.log ( "______________________________________________________" );

/*Desafio 1: FILMES - incluindo genero e ator*/
let lista = [ 
    {
        name: "13 Going on 30",
        Genre: "Comedy",
        Actors: "Jennifer Garner",
    },
    {
        name: "The Blues Brothers",
        Genre: "Comedy",
        Actors: "Dan Aykroyd, Aretha Franklin, John Belushi, James Brown",
    },
    {
        name: "A Walk to Remember",
        Genre: "Romance/Drama",
        Actors: "Mandy Moore, Shane West",
    },
    {
        name: "A Walk to Remember",
        Genre: "Romance/Drama",
        Actors: "Mandy Moore, Shane West,",
    },
]


 for (let j = 0; j < obj.length-1; j++)
 {
    const procurar = obj[j];

       lista.push (procurar.Genre);
       lista.push (procurar.Actors);

}
console.log(lista);
/*Exibindo Lista de Filmes no Console*/ 



//Desafio 2: Cor e Código das Cores em string:
const Collor = [
    {
        "jeniPink": [ 255, 192, 203 ],
        "nicedark": [ 139 ,  0 ,  139 ,  1 ] ,
        "drigogreen": [ 85 ,  107 ,  47 ,  1 ] ,
        "darkorange": [ 255 ,  140 ,  0 ,  1 ] ,
        "darkorchid": [ 153 ,  50 ,  204 ,  1 ] ,
        "vermelho escuro": [ 139 ,  0 ,  0 ,  1 ] ,
        "darksalmon": [ 233 ,  150 ,  122 ,  1 ] ,
        "darkseagreen": [ 143 ,  188 ,  143 ,  1 ] ,
        "darkslateblue": [ 72 ,  61 ,  139 ,  1 ] ,
        "darkslategray": [ 47 ,  79 ,  79 ,  1 ] ,
        "darkslategrey": [ 47 ,  79 ,  79 ,  1 ] ,
        "turquesa escura": [ 0 ,  206 ,  209 ,  1 ] ,
        "darkviolet": [ 148 ,  0 ,  211 ,  1 ] ,
        "deeppink": [ 255 ,  20 ,  147 ,  1 ] ,
    }
]
for (let i = 0; i <= Collor.length-1; i++){
    let Collor = Collor[i];
    console.log(Collor);

    for (cor in cores[0]) {
        console.log('$ {cor} - rgb: ${cores[0] [cor]}') 
    }   
}

//Desafio 3: Estado e Cidades

let estadoCidade = data[o].estados
console.log(estadoCidade)
for (let i = 0; i<= estadoCidade.length-1; i++){

    let listaEstados = estadoCidade[i]
    console.log(listaEstados.cidades.toString())  
}