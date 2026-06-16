class GameCard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.style());
  }

  build() {
    const componentRoot = document.createElement("div");

    const src = this.getAttribute("card-src");
    const alt = this.getAttribute("card-alt");
    const title = this.getAttribute("card-title");
    const span = this.getAttribute("card-span");

    componentRoot.innerHTML = `
            <img src="${src}" alt="${alt}">
            <h4>${title}</h4>
            <span>${span}</span>
            <button>Ver mais</button>
        `;
    componentRoot.className = "card";

    return componentRoot;
  }

  style() {
    const style = document.createElement("style");
    style.textContent = `
    .card {
    width: 100%;
    border: 1px solid var(--border);
    border-radius: 10px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, .5);
    background-color: var(--cards);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    transition: transform .3s ease-in-out;
    }
    .card:hover {
    transform: translateY(-5px);
    }
    .card img {
    width: 100%;
    }
    .card h4 {
    color: var(--title);
    margin: 0 6px;
    }
    .card span {
    color: var(--text);
    margin: 0 8px;

    }
    .card button {
    margin-bottom: 6px;
    }
    button {
    border: 1px solid var(--border);
    border-radius: 5px;
    background-color: var(--button);
    padding: 6px;
    color: var(--text);

    cursor: pointer;
    transition: all .3s ease-in-out;
}
button:hover {
    background-color: var(--button-hvr);
    color: var(--important);
    transform: scale(1.1);
}
    `;

    return style;
  }
}

customElements.define("game-card", GameCard);
