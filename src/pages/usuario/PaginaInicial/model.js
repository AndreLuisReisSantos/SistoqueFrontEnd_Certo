export const inputs = [
    {
      name: "nome",
      id: "nome",
      label: "Nome Completo",
      placeholder: "Digite seu nome Completo",
      value: "",
      type: "text",
      required: true,
      classe: "input_tamanho5",
      valid : true,
      disabled : true,
    },
    {
      name: "cargo",
      id: "cargo",
      label: "Cargo",
      placeholder: "Digite o Cargo",
      value: "",
      type: "select",
      required: true,
      classe: "input_tamanho3",
      valid : true,
      disabled : true,
      options: [
        {
          value: "-",
          text: "Selecione um cargo"
        },
        {
          value: "funcionario",
          text: "Funcionário"
        },
        {
          value: "cozinheiro",
          text: "Cozinheiro"
        },
        {
          value: "gestor",
          text: "Gestor"
        },
      ]
    },
    {
      name: "dataNascimento",
      id: "dataNascimento",
      label: "Data Nascimento",
      placeholder: "Data Nascimento",
      value: "",
      type: "date",
      required: true,
      classe: "input_tamanho3",
      valid : true,
      disabled : true,
    },
    {
      name: "CPF",
      id: "CPF",
      label: "CPF",
      placeholder: "CPF",
      value: "",
      type: "text",
      required: true,
      classe: "input_tamanho3",
      valid : true,
      disabled : true,
    },
    {
      name: "celular",
      id: "celular",
      label: "Celular",
      placeholder: "Celular",
      value: "",
      type: "tel",
      required: true,
      classe: "input_tamanho3",
      valid : true,
      disabled : true,
    },];


  export const buscarUsuario = [
    {
      name: "BuscarUsuario",
      id: "BuscarUsuario",
      label: "Selecione um Usuario",
      placeholder: "Selecione um Usuario",
      value: "",
      required: true,
      tamanho: 120,
      valid : true,
      disabled : false,
      classe: "input_tamanho1",

    },
  ];