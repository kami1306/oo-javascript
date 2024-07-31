const cliente = {
    nome:"João",
    idade:24,
    email:"joão@hotmail.com",
    telefone:["(41) 9999-0000","(41) 9988-0000"],
};

cliente.enderecos = [
 {
    rua : "R. Joseph Climber",
    numero : 1337,
    apartamento : true,
    complemento : "Ap 934",
},
];

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
};