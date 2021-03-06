import { inputs } from "./model";
import Botoes from "../../../components/Botoes";
import { useState } from "react";

const ConsultarEstoque = () =>{

  const botoes = [
    {
      nome: "Nova Consulta",
      classe: "botaoCadastrar",
      //onClick: (e) => confirmarCamposReact(e),
    } /*
  {
    nome:"Excluir",
    classe:"botaoExcluir",
    onClick: () => excluirCampos(),
  },,
    {
      nome: "Limpar",
      classe: "botaoLimpar",
      onClick: (e) => limparCamposReact(e),
    },*/
  ];

    const [inputsReact, setInputReact] = useState(inputs);

    const mudarValueInput = (e, input) => {
        const htmlInputs = e.target;
        input.value = htmlInputs.value;
        const inputsAtualizados = inputsReact.map((inputsReactAtual) => {
          if (inputsReactAtual.id === input.id) return input;
          else return inputsReactAtual;
        });
        setInputReact(inputsAtualizados)
      };

    const renderizarCamposReact = () =>
      inputsReact.map((inputAtual) => (
          <div className="itemFormulario">
              <label for={inputAtual.name}>{inputAtual.label}:</label>
              <br/>
              {
                <input
                placeholder={inputAtual.placeholder}
                name={inputAtual.name}
                id={inputAtual.id}
                type={inputAtual.type}
                required={inputAtual.required}
                value={inputAtual.value}
                disabled={inputAtual.disabled}
                className={inputAtual.classe}
                onChange={(e) => {
                  mudarValueInput(e, inputAtual)
                }}
                style={{ border: !inputAtual.valid ? '1px solid red' : '', backgroundColor:!inputAtual.valid ? '#FFC0CB' : ''}}
              />  
              }
          </div>
      ));
const renderizarProdutosNoEstoqueReact = () => 
<div className="itemFormulario">
        <table>
        <tr>
            
              <th>Nome Produto</th>
              <th>Quantidade</th>
              <th>Volume</th>
              <th>Validade</th>
              <th>Pre??o</th>
              <th>Local Armazenamento</th>
              <th>Vencido</th>

        </tr>
        <tr>
              <td>Nome do Produto</td>
              <td>Quantidade</td>
              <td>Volume</td>
              <td>Validade</td>
              <td>Pre??o</td>
              <td>Local Armazenamento</td>
              <td>Vencido</td>
        </tr>
        </table>
</div>

    return(
        <div className="Formulario">
            <fieldset>
                {renderizarCamposReact()}
            </fieldset>
            <fieldset>
                {renderizarProdutosNoEstoqueReact()}
            </fieldset>
            <Botoes botoes={botoes} />
        </div>
    )
}

export default ConsultarEstoque;