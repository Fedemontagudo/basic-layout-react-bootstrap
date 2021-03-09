

import "./estilos.css";

function App() {
  return (
    <body>
      <header>
        <h1 class="titulo">Título</h1>
      </header>

      <main>
        <article class="contenido">
          <h2 class="titular">Titular de la noticia</h2>
          <p class="textos">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quidem voluptatem voluptatibus corrupti, cum quam aliquid
            explicabo omnis iusto consectetur, nihil aspernatur,
            nisi ipsam quae cumque commodi nemo! Nihil, iure error!
      </p>
          <p class="textos">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quidem voluptatem voluptatibus corrupti, cum quam aliquid
            explicabo omnis iusto consectetur, nihil aspernatur,
            nisi ipsam quae cumque commodi nemo! Nihil, iure error!
      </p>
        </article>

        <aside>
          <h3 class="titular">Categorías</h3>
          <ul>
            <li>Noticias de deporte</li>
            <li>Noticias de ocio</li>
            <li>Noticias de política</li>
            <li>Noticias de espectáculos</li>
          </ul>
          <h3 class="titular">Otras cosas</h3>
          <ul>
            <li>Nosequé</li>
            <li>Nosecuanto</li>
            <li>Talycual</li>
          </ul>
        </aside>
      </main>
      <footer>
        <p class="texto-footer">Texto del footer</p>
      </footer>
    </body>


  );
}

export default App;
