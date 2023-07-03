
const listaDeVeiculos = [
  {
    id: 1,
    marca: "VW",
    modelo: "Fusca",
    ano: 1978,
    preco: 12000,
    cor: "Preto",
  }
];
alert(
  "Bem vindo ao sistema de cadastro de veículos. Atualmente você possui " +
    listaDeVeiculos.length +
    " veículos cadastrados."
);
let comando = "";
let contadorId = 2;
let veiculo = {};

do {
  comando = prompt(
    "Digite a opção a seguir:\n 1 - Cadastrar veículo. \n 2 - Listar todos os veículos. \n 3 - Filtrar veículos por marca.\n 4 - Atualizar veículo.\n 5 - Remover veículo.\n 6 - Sair do sistema.\n"
  );
  console.log(comando);

  switch (comando) {

    case "1": 
      veiculo = {};
      veiculo.modelo = prompt("Digite o modelo do veículo: ");
      veiculo.marca = prompt("Digite o marca do veículo: ");
      veiculo.ano = prompt("Digite o ano do veículo: ");
      veiculo.preco = prompt("Digite o preco do veículo: ");
      veiculo.cor = prompt("Digite a cor do veículo: ");
      veiculo.id = contadorId;

      listaDeVeiculos.push(veiculo);
      contadorId += 1;

      console.log("1 - Cadastrar veículo");
      break;
    
    case "2":
      listaDeVeiculos.map(function(veiculo){
        console.log(
          `ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Marca: ${veiculo.marca} | ${veiculo.ano} |
           Cor: ${veiculo.cor} | Preço: ${veiculo.preco}`
        );
      });
    
    console.log("2 - Listar todos os veículos");
      break;

    case "3":
      const marca = prompt('Digite a marca do veículo: ');

      const listaFiltrada = listaDeVeiculos.map(function(veiculo) {
          if (marca === veiculo.marca) {
              console.log(
                  `ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Marca: ${veiculo.marca} | ${veiculo.ano} |
                  Cor: ${veiculo.cor} | Preço: ${veiculo.preco}`
                );
          };
       });
      console.log("3 - Filtrar veículos por marca");
      break;
    
    case "4":
      const id = prompt('Digite o ID do veiculo a ser atualizado: ')

      const veiculoFind = listaDeVeiculos.find((veiculo) => id == veiculo.id);
     
      if (!veiculoFind) {
        console.log('Veiculo não encontrado!');
      };
      const cor = prompt('Digite a cor: ');
      const preco = prompt('Digite o preco: ');

      veiculoFind.cor = cor;
      veiculoFind.preco = preco;

      console.log("4 - Atualizar veículo");
      break;
    
    case "5":
     
      const idDelete = prompt('Digite o ID do veículo a ser atualizado: ');
      const veiculoIndex = listaDeVeiculos.findIndex((veiculo) => idDelete == veiculo.id);

      if (veiculo == -1) {
        console.log('Veículo não encontrado! ');
      };

      listaDeVeiculos.splice(veiculoIndex, 1);

      console.log("5 - Remover veículo");
      break;

    case "6":
      console.log("sair do programa");
      break;

    default:
      console.log("comando invalido");
      break;
  }
} while (comando !== "6");


/*2 - Listar todos os veículos
-> Ao entrar nesta opção o sistema deve listar os veículos
com o seguinte layout:
ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
Preço: R$40.000
ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
Preço: R$40.000*/

/*3 - Filtrar veículos por marca
-> Ao entrar nesta opção o sistema deve pedir para o
usuário digitar a marca que quer filtrar
-> Deve ser listado os veículos que forem da mesma marca
-> A lista deve ter o seguinte layout:
ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000*/

/*4 - Atualizar veículo
-> Ao entrar nesta opção o sistema deve pedir para o
usuário digitar o IDENTIFICADOR do veículo
-> O Sistema deve verificar se o veículo existe ou não e
mostrar a seguinte mensagem caso o veículo não exista:
"Veículo, não encontrado. O usuário deve voltar para o menu
inicial depois"
-> Se o veículo existir, o sistema deve permitir que o usuário
atualize somente a cor e o preço.*/

/*5 - Remover veículo
-> Ao entrar nesta opção o sistema deve pedir para o
usuário digitar o IDENTIFICADOR do veículo
-> O Sistema deve verificar se o veículo existe ou não e
mostrar a seguinte mensagem caso o veículo não exista:
"Veículo, não encontrado. O usuário deve voltar para o menu
inicial depois"
-> Se o veículo existir, o sistema deve remover o veículo*/

/*6 - Sair do sistema
Regras:
- Os dados de um veículo são: identificador, modelo, marca,
ano, cor, preco

- A opção de filtro deve ser por marca e ordenada pelo preco
- A lista de veículos deve estar ordenada pelo preco.
- Só deve ser possível atualizar a cor e o preço do veículo.
*/

 