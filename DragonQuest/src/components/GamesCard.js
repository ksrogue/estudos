class GamesCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(this.build());
    this.shadowRoot.appendChild(this.style());
  }

  build() {
    const card = document.createElement("div");

    let gameSrc =
      this.getAttribute("game-src") || "assets/images/placeholder.png";
    let gameAlt = this.getAttribute("game-alt") || "imagem_placeholder";
    let gameName = this.getAttribute("game-name") || "nome_jogo";

    card.innerHTML = `
        <a href="" class="games-container">
              <img src="${gameSrc}" alt="${gameAlt}" class="game-img">
              <span class="game-name">${gameName}</span>
            </a>
        `;

    return card;
  }

  style() {
    const style = document.createElement("style");

    style.textContent = `
    :host {
    display: block;
    }
    .games-container{
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  gap: 6px;

  scroll-snap-align: start;
}
 a {
 text-decoration: none;} 
.game-img {
  width: 100%;
  border: 1px solid var(--border-div);
  border-radius: 10px;
}
.game-name {
  font-size: .8em;
  color: var(--sec-text);
}
    `;

    return style;
  }
}

customElements.define("games-card", GamesCard);
