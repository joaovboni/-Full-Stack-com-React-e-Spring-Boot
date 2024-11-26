import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {}
      <header className="header-bar">
        <h1 className="header-title">Sistema de Gestão</h1>
        <nav className="nav-links">
          <a href="/clientes">Clientes</a>
          <a href="/produtos">Produtos</a>
          <a href="/pedidos">Pedidos</a>
        </nav>
      </header>

      {}
      <div className="hero-image">
        <div className="hero-overlay">
          <h2 className="hero-text">Bem-vindo ao Sistema de Gestão Empresarial</h2>
          <p>
            Simplifique o gerenciamento de clientes, produtos e pedidos com nossa solução.
          </p>
        </div>
      </div>

      {}
      <main className="main-content">
        <section className="section-cliente">
          <div className="image-container">
            <img
              src="https://www.meupositivo.com.br/panoramapositivo/wp-content/uploads/2017/11/experi%C3%AAncia-do-cliente.jpg"
              alt="Imagem ilustrativa de clientes"
            />
            <div className="overlay">
              <p>Gerencie informações sobre seus clientes.</p>
              <button onClick={() => window.location.href = '/clientes'}>Acessar Clientes</button>
            </div>
          </div>
        </section>

        {}
        <section className="section-produto">
          <div className="image-container">
            <img
              src="https://neilpatel.com/wp-content/uploads/2019/07/mini-caixas-de-produtos-em-cima-de-laptop.jpeg"
              alt="Imagem ilustrativa de produtos"
            />
            <div className="overlay">
              <p>Gerencie seus produtos com facilidade.</p>
              <button onClick={() => window.location.href = '/produtos'}>Acessar Produtos</button>
            </div>
          </div>
        </section>

        <section className="section-pedido">
          <div className="image-container">
            <img
              src="https://media.gettyimages.com/id/1366651659/pt/v%C3%ADdeo/financial-advisor-with-couple-looking-through-figures-and-information.jpg?s=640x640&k=20&c=TTanbF2-MG49n0ESGkdA-vkh3mHmrbZErIqWGR4x8Jc="
              alt="Imagem ilustrativa de pedidos"
            />
            <div className="overlay">
              <p>Controle e visualize os pedidos realizados.</p>
              <button onClick={() => window.location.href = '/pedidos'}>Acessar Pedidos</button>
            </div>
          </div>
        </section>
      </main>

      {}
      <footer className="footer">
        <p>Desenvolvido por João Vitor Bonifácio</p>
        <p>Contato: <a href="mailto:joaovitorbonifacio.dev@gmail.com">joaovitorbonifacio.dev@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default Home;
