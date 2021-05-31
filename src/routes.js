import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importar as páginas
import Home from './pages/home'
import Login from './pages/login'

//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = { Login } />
                <Route path="/home" component = { Home } />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;
