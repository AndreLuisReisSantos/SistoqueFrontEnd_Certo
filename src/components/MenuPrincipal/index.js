import { Link, useHistory } from 'react-router-dom'

const MenuPrincipal = () => {
  const history = useHistory()

  const logout = () => {

    localStorage.clear()
    history.push("/")
  }


  return (
    <div id="menu">
      <div>
        <figure className="logotipo"><img src='/img/logo1.png' alt='Logotipo Kokimbos'/></figure>
        <nav>
          <ul>
            <li>
            <Link to="/sistema/usuario/PaginaInicial">
            <span className="icon-Usuário">Usuário</span>
            </Link>
            </li>
            <li>
            <Link to="/sistema/produto/PaginaInicial">
            <span className="icon-Produto">Produto</span>
            </Link>
            </li>
            <li>
            <Link to="/sistema/estoque/PaginaInicial">
            <span className="icon-Estoque">Estoque</span>
            </Link>
            </li>
            {/* <li>
            <Link to="/sistema/receita/PaginaInicial">
            <span className="icon-Receitas">Receita</span>
            </Link>
            </li> */}
            <li>
              <Link to="/sistema/fornecedor/PaginaInicial">
              <span className="icon-Fornecedor">Fornecedores</span>
              </Link>
            </li>
            <li>
            <Link to="/sistema/relatorio/PaginaInicial">
            <span className="icon-Relatorios">Relatório</span>
            </Link>
            </li>
        </ul>
        </nav>
      </div>

      <ul className="menuSair">
        <li onClick={logout} style={{ cursor: "pointer"}} >
          
          <span className="icon-sair">Sair</span>
         
        </li>
      </ul>
    </div>
  );
};

export default MenuPrincipal;
