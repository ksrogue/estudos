class CardNews extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(this.build());
    this.shadowRoot.appendChild(this.styles());
  }

  build() {
    const card = document.createElement("div");
    let newsSrc =
      this.getAttribute("news-src") || "assets/images/placeholder.png";
    let newsAlt = this.getAttribute("news-alt") || "imagem_placeholder";
    let newsLink = this.getAttribute("news-link") || "#";
    let newsTitle = this.getAttribute("news-title") || "título da notícia";
    let newsTime = this.getAttribute("news-time") || "postado em...";
    card.innerHTML = `
          <div class="news-card">
            <img src="${newsSrc}" alt="${newsAlt}">
            <div>
              <a href="${newsLink}"><h3>${newsTitle}</h3></a>
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
    width: 100px;
    height: 100px;
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
  & a {
    text-decoration: none;
  } 
  & h3 {
    color: var(--main-text);
    font-size: .9em;
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
}
  h3:hover {color: var(--main-golden);}
  `;

    return style;
  }
}

customElements.define("card-news", CardNews);
