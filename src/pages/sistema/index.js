import {
    Switch,
    Route,
    useRouteMatch,
    useHistory
} from 'react-router-dom'
import MenuPrincipal from "../../components/MenuPrincipal";
import { Fornecedor } from '../fornecedor';
import { Usuario } from '../usuario';
import { Estoque } from '../estoque';
import { Produto } from '../produto';
import { Receita } from '../receita';
import { Relatorio } from '../relatorio';
import { Login } from '../login';
import { useEffect } from 'react';

export const Sistema = () => {
    const history = useHistory();

    const { path } = useRouteMatch();

    useEffect(() => {
        console.log(localStorage.getItem("token"))
        if(localStorage.getItem("token") == null) {
            history.push("/")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <main>
            <MenuPrincipal/>
                <Switch>
                    <Route path={`${path}/fornecedor`} >
                        <Fornecedor />
                    </Route>
                    <Route path={`${path}/usuario`} >
                        <Usuario />
                    </Route>
                    <Route path={`${path}/estoque`} >
                        <Estoque />
                    </Route>
                    <Route path={`${path}/produto`} >
                        <Produto />
                    </Route>
                    <Route path={`${path}/receita`} >
                        <Receita />
                    </Route>
                    <Route path={`${path}/relatorio`} >
                        <Relatorio />
                    </Route>
                    <Route path={`${path}/login`} >
                        <Login />
                    </Route>
                </Switch>
        </main>
    )
}
