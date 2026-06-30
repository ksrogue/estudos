fetch("src/data/data.json")
  .then((response) => response.json())
  .then((data) => {
    const newsContainer = document.querySelector(".news");
    const gamesContainer = document.querySelector(".games-wrapper");
    const time = new Date();
    const formateDate = new Intl.DateTimeFormat("pt-br", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit"
    }).format(time);

    data.news.forEach((news) => {
      const newCard = document.createElement("card-news");

      newCard.setAttribute("src", `assets/images/${news.src}`);
    //   link (a ser adicionado); 
      newCard.setAttribute("alt", news.alt);
      newCard.setAttribute("title", news.title);
      newCard.setAttribute("time", formateDate);

      newsContainer.appendChild(newCard);
    });
    data.games.forEach((game) => {
        const newGame = document.createElement("games-card");
        newGame.setAttribute("src", `assets/images/games/${game.src}`);
        newGame.setAttribute("alt", `imagem do jogo ${game.title}`);
        // link (a ser adicionado);
        newGame.setAttribute("name", game.title);

        gamesContainer.appendChild(newGame);
    });
  })
  .catch((error) => console.error("Erro ao carregar Banco de Dados: " + error));

//    src alt link name