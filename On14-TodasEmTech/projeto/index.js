console.log('--------------------------------------')
console.log('            Projeto Livraria          ')
console.log('             Elcilene Aragão      ')
console.log('--------------------------------------')


console.log('Veja abaixo os livros disponível na nossa livraria ')

//vamos instanciar, o nosso banco de dados

const livros = require('./database')
console.table(livros);

//Importando realine
const entrada = require('readline-sync')
const consultarLivro = entrada.question("Deseja consultar livros? (Y/N)").toLocaleUpperCase();
//Se a resposta for SIM
if(consultarLivro === "Y"){
    console.table(livros);
    const filterTableCategory = entrada.question ('Qual categoria você deseja escolher? \n Auto Ajuda \n Terror \n Conto \n').toLocaleUpperCase();
    
    //Filtrar por categoria
    const category = (livros) => livros.categoria.toLocaleUpperCase() === filterTableCategory;
    const findCategory = livros.filter(category);
    console.table(findCategory);

}
const recomendouLivros = entrada.question('Deseja ver os livros que eu recomendo? (Y/N)').toLocaleUpperCase();
if(recomendouLivros === "Y"){
    const recomendouLivros = (livros) =>livros.recomenda === true;
    const findrecomendouLivros = livros.filter(recomendouLivros);
    console.table(findrecomendouLivros);
}
// //Houve um erro na linha 35, não con
// if(wishlivros === "Y"){
//     const wish = (livros) => livros.leu === false;
//     const findWish = livros.filter(wish);
//     console.table(findWish);
// }

console.log('Esses são os livros que quero ler');
console.table(livros);








