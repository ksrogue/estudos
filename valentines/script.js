// Efeito interativo: Cria corações caindo pela tela suavemente
      function criarCoracao() {
        const coracao = document.createElement("div");
        coracao.classList.add("coracao-js");
        coracao.innerText = "❤️";


        coracao.style.left = Math.random() * 100 + "vw";

        coracao.style.fontSize = Math.random() * 15 + 10 + "px";

        const duracao = Math.random() * 3 + 3;
        coracao.style.animationDuration = duracao + "s";

        const desvioX = Math.random() * 100 - 50 + "px";
        coracao.style.setProperty("--desvio-x", desvioX);

        coracao.style.opacity = Math.random() * 0.5 + 0.5;

        document.body.appendChild(coracao);

        setTimeout(() => {
          coracao.remove();
        }, duracao * 1000);
      }

      setInterval(criarCoracao, 400);