class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.Styles());
  }
  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card-left");

    const span = document.createElement("span");
    span.setAttribute("class", "autor");

    const autorImg = document.createElement("img");
    autorImg.setAttribute("class", "autor-img");
    autorImg.src = this.getAttribute("autor-image") || "assets/image-placeholder.png";
   

    const autorName = document.createElement("h3");
    autorName.setAttribute("class", "autorName");
    autorName.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const newsTitle = document.createElement("h1");
    newsTitle.setAttribute("class", "news-title");
    newsTitle.textContent = this.getAttribute("title");

    const newsText = document.createElement("p");
    newsText.setAttribute("class", "news-text");
    newsText.textContent = this.getAttribute("content");

    span.appendChild(autorImg);
    span.appendChild(autorName);
    cardLeft.appendChild(span);
    cardLeft.appendChild(newsTitle);
    cardLeft.appendChild(newsText);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card-right");

    const newsImage = document.createElement("img");
    newsImage.setAttribute("class", "news-img");
    newsImage.src = this.getAttribute("news-image");
    newsImage.alt = this.getAttribute("image-alt");

    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }
  Styles() {
    const style = document.createElement("style");

    style.textContent = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.card {
    width: 800px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
    
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
}

.card-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    padding-left: 8px;
}

.autor {
    display: flex;
    align-items: center;
    gap: 8px;
}
.autor-img {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    border: 1px solid gray;
}
.autor-name {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: normal;
    font-size: 1em;
    color: gray;
}
.news-title {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1.6em;
    line-height: .8;
}
.news-text {
    color: gray;
}
.news-date {
    font-size: .8em;
}

.card-right {
    display: flex;
}
.news-img {
    width: 100%;
}


@media screen and (max-width: 720px) {
    .card {
        max-width: 100%;
        flex-direction: column;
    }
    .card-left {
        gap: 16px;
    }
    .card-right {
        padding: 8px;
    }
}`


    return style;
  }
}

customElements.define("card-news", CardNews);
