
//recomendar livros para ler, listando os livros que foram lidos e recomendados 

const recomenda = pegarEntrada.question('Você deseja verificar se há livros recomendados para sua leitura?(S/N)').toLocaleUpperCase()
console.log(recomenda)

//verificando a partir da entrada

if (recomenda === 'S') {
    console.log('Os livros lidos e recomendados que possuímos são: ')
    //\nAcordando para a vida, \nEm busca do sentido da vida, \nMarley e Eu, \nMenino Brilhante, \nEu odeio meu chefe')
 
// caso haja escolha de recomendação utilizar filtro

 
 //const qualRecomenda = pegarEntrada.livrosRecomenda
//&& pegarEntrada.livrosLeu.toLocaleUpperCase()
//console.table(qualRecomenda)

function recomenda(livros) {
   return livros.recomenda === livros.leu
 
}


//recomenda = livros.filter(recomenda)
//console.table(livrosRecomenda)


}else{

    console.log('Agradecemos pelo seu interesse em nossos livros.\nA seguir você encontrará todos os livros do acervo:')
    console.table(livros)}