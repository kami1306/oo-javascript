const cliente = {
    nome :"João",
    idade: 24,
    email:"joao@firma.com",
    telefone:["(41) 9999-0000","(41) 9988-0000"],
};

cliente.endereco = [
    {
    rua: "R. Joseph Climber",
    numero :true,
    complemento : "Ap 984",

},
];

cliente.endereco.push({
    rua :"R. joseph ladder",
    numero: 404,
    apartamento:false,
});

const listaApenasApartamentos = cliente.endereco.filter(
    (endereco) => endereco.apartamento === true 
);
console.log(listaApenasApartamentos);