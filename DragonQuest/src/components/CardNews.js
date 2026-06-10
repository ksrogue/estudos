class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  connectedCallback() {
    if (!this.hasAttribute("src")) {
      this.setAttribute("news-src", "assets/images/placeholder.png");
    }
    if (!this.hasAttribute("news-title")) {
      this.setAttribute("title", "título da notícia");
    }
    if (!this.hasAttribute("news-time")) {
      this.setAttribute("time", "postado em...");
    }
  }
  build() {
    const card = document.createElement("div");
    let newsSrc = this.getAttribute("news-src") || 'assets/images/placeholder.png';
    let newsTitle = this.getAttribute("news-title") || 'título da notícia';
    let newsTime = this.getAttribute("news-time") || 'postado em...';
    card.innerHTML = `
          <div class="news-card">
            <img src="${newsSrc}" alt="imagem da noticia">
            <div>
              <h3>${newsTitle}</h3>
              <span>${newsTime}</span>
            </div>
          </div>
        `;

    return card;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    * {
    margin: 0;
    padding: 0;
    box-sizing:  border-box;
    }
    :host {
      display: block;
      width: 100%;
    }
    .news-card {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 12px;
  & img {
    width: 75px;
    height: 75px;
    object-fit: cover;
    align-self: center;
    border: 1px solid var(--border-div);
    border-radius: 10px;
  }
  & div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    
    gap: 12px;
    border-bottom: 1px solid #6b728059;
  }
  & h3 {
    color: var(--main-text);
    font-size: .8em;
    font-family: var(--marcellus);
    font-weight: normal;
  }
  & span {
    color: var(--disabled-text);
    font-size: .8em;
  }
    .news-card img {
    width: 75px;
    border: 1px solid var(--border-div);
    border-radius: 10px;
  }
}`;

    return style;
  }
}

customElements.define("card-news", CardNews);
