import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../Home";
import Author from "../screens/author/Author";
import Book from "../screens/book/Book";
import CreateAuthor from "../screens/author/CreateAuthor";
import UpdateAuthor from "../screens/author/UpdateAuthor";
import CreateBook from "../screens/book/CreateBook";
import UpdateBook from "../screens/book/UpdateBook";
import FindAllAuthor from "../screens/author/FindAllAuthor";
import FindAllBook from "../screens/book/FindAllBook";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Route component = { Home } path = "/" exact />
            <Route component = { Author } path = "/author/find" />
            <Route component = { CreateAuthor } path="/author/create" />
            <Route component = { UpdateAuthor } path="/author/update" />
            <Route component = { Book } path = "/book/find" />
            <Route component = { CreateBook } path="/book/create" />
            <Route component = { UpdateBook } path="/book/update" />
            <Route component = { FindAllAuthor } path="/author/all" />
            <Route component = { FindAllBook } path="/book/all" />
        </BrowserRouter>
    );
}

export default AppRoutes;