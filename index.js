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
        await database.sync();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        //criando a interface do readline
        const rl = readline.createInterface({ input, output });

        let executando = true;
        while (executando) {
            const menu = '\nEscolha uma opção:\n' +
                         '1. Criar Produto\n' +
                         '2. Consultar Produtos\n' +
                         '3. Consultar Produto por ID\n' +
                         '4. Atualizar Produto\n' +
                         '5. Deletar Produto\n' +
                         '6. Sair\n' +
                         'Opção: ';

            //Usar o await para pausar e esperar o usuário digitar algo no terminal
            const opcao = await rl.question(menu);

            switch (opcao.trim()) {}        }
                case '1': {
                    const nome = await rl.question('Digite o nome do produto: ');
                    
                }
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
           Produto.destroy({ where: { id: 1 }})
       
    } catch (error) {
        console.log(error);
    }

})();