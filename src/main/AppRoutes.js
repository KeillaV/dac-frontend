import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "../screens/login/Login";
import Home from "../screens/home/Home";
import CreateAuthor from "../screens/author/CreateAuthor";
import UpdateAuthor from "../screens/author/UpdateAuthor";
import DeleteAuthor from "../screens/author/DeleteAuthor";
import CreateBook from "../screens/book/CreateBook";
import UpdateBook from "../screens/book/UpdateBook";
import DeleteBook from "../screens/book/DeleteBook";
import FindAllAuthor from "../screens/author/FindAllAuthor";
import FindAllBook from "../screens/book/FindAllBook";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Route component = { Home } path = "/" exact />
            <Route component = { Login } path = "/login"  />
            <Route component = { CreateAuthor } path="/author/create" />
            <Route component = { UpdateAuthor } path="/author/update/:id" />
            <Route component = { DeleteAuthor } path="/author/delete" />
            <Route component = { CreateBook } path="/book/create" />
            <Route component = { UpdateBook } path="/book/update/:id" />
            <Route component = { DeleteBook } path="/book/delete" />
            <Route component = { FindAllAuthor } path="/author/all" />
            <Route component = { FindAllBook } path="/book/all" />
        </BrowserRouter>
    );
}

export default AppRoutes;