const readline = require('readline/promises');
const { stdin: input, stdout: output } = require ('process');
const database = require('./db');
const {
    createProduto, 
    consultarProdutos,
    consultarCodProdutos,
    atualizarProduto,
    deletarProduto
} = require('./produto');
const usuario = require('./usuario')

(async () => {
    try {
        await database 
    }
}
)

(async () => {
    const database = require('./db');
    const Usuario = require('./usuario');
    const Produto = require('./produto');
    

    try {
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreateProduto = await Produto.create ({
            nome: 'tablet',
            preco: 0,
            descricao: 'Um tablet bonito'
        });
           console.log(resultadoCreateProduto.toJSON());
    
           const cadastrarUsuario = await Usuario.create ({
            nome: 'Gabriela',
            email: 'gaga@gmail.com',
            senha: '123456'
           });

         console.log(cadastrarUsuario.toJSON());
/*
          const produtos = await Produto.findAll();
          console.log(produtos);
          
          const produto = await Produto.findByPk(1);
          console.log(produto);
*/
          const produto = await Produto.findByPk(1);
          //console.log(produto);
          produto.nome = "Tablet Top";

          const resultadoSave = await produto.save();
          console.log(resultadoSave);

          //assim
           Produto.destroy({ where: { id: 1 }});
       
    } catch (error) {
        console.log(error);
    }

})();