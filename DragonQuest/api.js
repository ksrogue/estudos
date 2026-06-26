fetch("src/data/data.json")
  .then((response) => response.json())
  .then((data) => {
    const newsContainer = document.querySelector(".news");
    const gamesContainer = document.querySelector(".games-wrapper");

    data.news.forEach((news) => {
      const newCard = document.createElement("card-news");

      newCard.setAttribute("src", `assets/images/${news.src}`);
    //   link (a ser adicionado); 
      newCard.setAttribute("alt", news.alt);
      newCard.setAttribute("title", news.title);
      newsContainer.appendChild(newCard);
    });
    data.games.forEach((games) => {
        const newGame = document.createElement("games-card");
        // imagem do jogo (a ser adicionado);
        // alt do jogo (a ser adicionado);
        // link (a ser adicionado);
        newGame.setAttribute("name", games.title);

        gamesContainer.appendChild(newGame);
    });
  })
  .catch((error) => console.error("Erro ao carregar Banco de Dados"));

//    src alt link name