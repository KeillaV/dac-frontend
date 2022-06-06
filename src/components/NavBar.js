import React from "react";

import NavBarItem from "./NavBarItem";

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Biblioteca</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav me-auto">
                <NavBarItem href="/" label="Home" />
                <NavBarItem href="/login" label="Login" />
                <NavBarItem href="/book/all" label="Listar livros"/>
                <NavBarItem href="/book/create" label="Cadastrar livro"/>
                <NavBarItem href="/author/all" label="Listar autores"/>
                <NavBarItem href="/author/create" label="Cadastrar autor"/>
            </ul>
            </div>
        </div>
    </nav>
    )
}

export default NavBar;