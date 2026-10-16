/* Assistente Personalizamos — roteiro guiado sobre o catálogo do site */
(function () {
  var msgs = document.querySelector("#guia-msgs");
  var opcoes = document.querySelector("#guia-opcoes");
  var painel = document.querySelector("#guia");
  var video = document.querySelector("#guia-video");
  if (!msgs || !opcoes || !painel) return;

  var WA =
    "https://api.whatsapp.com/send?phone=5551985435231&text=" +
    encodeURIComponent("Olá! Falei com a assistente do site e quero um orçamento.");

  var pessoa = {
    nome: "Lu.ia",
    abertura:
      "Oi! Eu sou a <strong>Lu.ia</strong>, assistente da Personalizamos. Vou te ajudar a escolher o produto certo — canecas, camisetas, PVC, brindes, festa e muito mais. Atendemos <strong>Porto Alegre e Canoas - RS</strong>."
  };

  /* Para um pouco antes do fim (últimos frames falhados) */
  var VIDEO_CORTE_ANTES = 1.1;
  var videoFinalizado = false;

  var catalogo = {
    festa: {
      rotulo: "Festa e lembrancinhas",
      intro: "Para festa, a gente personaliza lembrancinhas, balas, topo de bolo, convites e mais.",
      itens: [
        { id: "bala", nome: "Balas personalizadas", url: "personalizado_bala_personalizada.html", tip: "Balas com logo ou foto: ótimas para festa infantil, aniversário e brindes em volume." },
        { id: "topo", nome: "Topo de bolo", url: "personalizado_topo_de_bolo.html", tip: "Topo de bolo personalizado com nome, idade ou tema da festa." },
        { id: "lembranca", nome: "Lembrancinhas", url: "personalizado_lembrancinhas.html", tip: "Lembrancinhas variadas para convidados — combine com balas ou chaveiros." },
        { id: "convite", nome: "Convites", url: "personalizado_convites.html", tip: "Convites impressos com a arte do evento." },
        { id: "body", nome: "Body infantil", url: "personalizado_body_infantil.html", tip: "Body personalizado para bebê — presente ou lembrança especial." },
        { id: "colorir", nome: "Para colorir", url: "personalizado_para_colorir.html", tip: "Kits para colorir personalizados — sucesso com crianças." }
      ]
    },
    empresa: {
      rotulo: "Empresa e brindes",
      intro: "Para empresa, trabalhamos brindes, uniformes leves e identificação em PVC.",
      itens: [
        { id: "caneca", nome: "Canecas", url: "personalizado_canecas.html", tip: "Canecas com logo ou foto — clássico de brinde corporativo." },
        { id: "chopp", nome: "Caneca / caneco chopp", url: "personalizado_caneca_chopp.html", tip: "Caneco de chopp em alumínio personalizado para eventos e times." },
        { id: "camiseta", nome: "Camisetas", url: "personalizado_camisetas.html", tip: "Camisetas com logo da empresa, evento ou equipe." },
        { id: "ecobag", nome: "Ecobag", url: "personalizado_ecobag.html", tip: "Ecobags personalizadas — brinde útil e com a marca em evidência." },
        { id: "avental", nome: "Avental", url: "personalizado_avental.html", tip: "Aventais com logo para cozinha, café ou equipe." },
        { id: "agenda", nome: "Agenda", url: "personalizado_agenda.html", tip: "Agendas com capa personalizada para clientes e colaboradores." },
        { id: "caderno", nome: "Caderno", url: "personalizado_caderno.html", tip: "Cadernos personalizados — brinde útil e com a marca." },
        { id: "garrafa", nome: "Garrafa", url: "personalizado_garrafa.html", tip: "Garrafas personalizadas — brinde prático no dia a dia." },
        { id: "longdrink", nome: "Copo long drink", url: "personalizado_copo_long_drink.html", tip: "Copos long drink com logo para festas corporativas e bares." }
      ]
    },
    pvc: {
      rotulo: "Identificação PVC",
      intro: "Em PVC fazemos crachá, cartão, credencial, cordão e cartão presente — tudo em Porto Alegre.",
      itens: [
        { id: "cracha", nome: "Crachá PVC", url: "cracha-pvc-porto-alegre.html", tip: "Crachá CR80 com foto, nome e logo. Ideal para colaboradores." },
        { id: "cartao", nome: "Cartão PVC", url: "cartao-pvc-porto-alegre.html", tip: "Cartão PVC para identificação, clube, academia ou campanhas." },
        { id: "aproximacao", nome: "Cartão aproximação", url: "cartao-aproximacao-pvc-porto-alegre.html", tip: "Cartão de aproximação personalizado (sob consulta do sistema)." },
        { id: "credencial", nome: "Credencial para eventos", url: "credencial-pvc-eventos-porto-alegre.html", tip: "Credenciais por categoria (staff, VIP, imprensa) para eventos." },
        { id: "cordao", nome: "Cordão para crachá", url: "cordao-cracha-porto-alegre.html", tip: "Cordão personalizado com a marca — combina com o crachá." },
        { id: "presente", nome: "Cartão presente / vale", url: "cartao-presente-vale-presente-porto-alegre.html", tip: "Cartão presente em PVC para campanhas e vale-presente." },
        { id: "hub", nome: "Ver todos os PVC", url: "identificacao-pvc-porto-alegre.html", tip: "Hub completo de identificação em PVC em Porto Alegre e Canoas." }
      ]
    },
    papelaria: {
      rotulo: "Papelaria e gráfica",
      intro: "Papelaria e materiais gráficos personalizados para divulgação e organização.",
      itens: [
        { id: "visita", nome: "Cartão de visita", url: "personalizado_cartao_visita.html", tip: "Cartões de visita com a identidade da sua marca." },
        { id: "adesivo", nome: "Adesivos", url: "personalizado_adesivos.html", tip: "Adesivos e etiquetas personalizados em vários formatos." },
        { id: "banner", nome: "Banner", url: "personalizado_banner.html", tip: "Banners para eventos, lojas e divulgação." },
        { id: "panfleto", nome: "Panfletos", url: "personalizado_panfletos.html", tip: "Panfletos para campanhas e divulgação local." },
        { id: "papelaria", nome: "Papelaria", url: "personalizado_papelaria.html", tip: "Itens de papelaria personalizados." },
        { id: "lapis", nome: "Lápis", url: "personalizado_lapis.html", tip: "Lápis personalizados — brinde barato e útil para escolas e eventos." }
      ]
    },
    casa: {
      rotulo: "Casa, presente e uso diário",
      intro: "Presentes e itens do dia a dia com foto ou logo.",
      itens: [
        { id: "almofada", nome: "Almofadas", url: "personalizado_almofadas.html", tip: "Almofadas (incluindo de pescoço) com foto ou arte." },
        { id: "toalha", nome: "Toalhas", url: "personalizado_toalhas.html", tip: "Toalhas personalizadas para presente ou kit." },
        { id: "taca", nome: "Taças", url: "personalizado_tacas.html", tip: "Taças de gin ou champagne personalizadas." },
        { id: "chaveiro", nome: "Chaveiros", url: "personalizado_chaveiros.html", tip: "Chaveiros em acrílico personalizados." },
        { id: "almochaveiro", nome: "Almochaveiro", url: "personalizado_almochaveiro.html", tip: "Almochaveiro personalizado — lembrança divertida." },
        { id: "cofre", nome: "Cofrinhos", url: "personalizado_cofrinhos.html", tip: "Cofrinhos personalizados para festa ou presente." },
        { id: "quadro", nome: "Quadros e molduras", url: "personalizado_quadro_moldura.html", tip: "Quadros e molduras personalizados." },
        { id: "necessaire", nome: "Necessaire", url: "personalizado_necessaire.html", tip: "Necessaires personalizadas para kits e brindes." },
        { id: "outros", nome: "Outros personalizados", url: "personalizado_outros.html", tip: "Outras opções personalizadas — vale consultar para ideias especiais." }
      ]
    },
    datas: {
      rotulo: "Datas especiais",
      intro: "Temos páginas prontas para datas e campanhas sazonais.",
      itens: [
        { id: "amigo", nome: "Amigo secreto", url: "amigo-secreto-presente-porto-alegre.html", tip: "Ideias e produtos para amigo secreto em Porto Alegre." },
        { id: "criancas", nome: "Dia das crianças", url: "dia-das-criancas-porto-alegre.html", tip: "Presentes e brindes para o Dia das Crianças." },
        { id: "professores", nome: "Dia dos professores", url: "dia-dos-professores-porto-alegre.html", tip: "Lembranças para o Dia dos Professores." },
        { id: "natal", nome: "Natal", url: "natal-porto-alegre.html", tip: "Brindes e presentes de Natal personalizados." },
        { id: "sipat", nome: "SIPAT", url: "sipat-porto-alegre.html", tip: "Brindes e kits para SIPAT na empresa." },
        { id: "datas", nome: "Ver datas especiais", url: "datas-especiais-porto-alegre.html", tip: "Hub de datas especiais da Personalizamos." }
      ]
    }
  };

  var respostas = {};
  var passo = "inicio";

  function fala(texto, autor, html) {
    var p = document.createElement("p");
    p.className = "fala fala-" + (autor === "voce" ? "voce" : "guia");
    if (autor !== "voce") {
      var nome = document.createElement("span");
      nome.className = "fala-quem";
      nome.textContent = pessoa.nome;
      p.appendChild(nome);
    }
    if (html) {
      var corpo = document.createElement("span");
      corpo.innerHTML = texto;
      p.appendChild(corpo);
    } else {
      p.appendChild(document.createTextNode(texto));
    }
    msgs.appendChild(p);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function limparOpcoes() {
    opcoes.innerHTML = "";
  }

  function botao(rotulo, onClick) {
    var b = document.createElement("button");
    b.type = "button";
    b.textContent = rotulo;
    b.addEventListener("click", onClick);
    opcoes.appendChild(b);
    return b;
  }

  function linkWhats(textoExtra) {
    var href =
      "https://api.whatsapp.com/send?phone=5551985435231&text=" +
      encodeURIComponent(textoExtra || "Olá! Falei com a Lu.ia no site e quero um orçamento.");
    return (
      '<a class="guia-wa" href="' +
      href +
      '" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>'
    );
  }

  function finalizarVideo() {
    if (!video || videoFinalizado) return;
    videoFinalizado = true;
    try {
      video.pause();
      if (video.duration && isFinite(video.duration)) {
        var fim = Math.max(0, video.duration - VIDEO_CORTE_ANTES);
        video.currentTime = fim;
      }
    } catch (e) {}
    painel.classList.add("compacta");
  }

  function tocarVideo() {
    if (!video) return;
    try {
      video.loop = false;
      video.removeAttribute("loop");
      videoFinalizado = false;
      video.currentTime = 0;
      painel.classList.remove("compacta");
      var playPromise = video.play();
      if (playPromise && playPromise.catch) playPromise.catch(function () {});
    } catch (e) {}
  }

  function perguntarObjetivo() {
    passo = "objetivo";
    limparOpcoes();
    fala("Me conta: o que você precisa agora?");
    Object.keys(catalogo).forEach(function (key) {
      botao(catalogo[key].rotulo, function () {
        respostas.cat = key;
        fala(catalogo[key].rotulo, "voce");
        mostrarCategoria(key);
      });
    });
    botao("Me indica o que mais pedem", function () {
      fala("Me indica o que mais pedem", "voce");
      fala(
        'Os mais pedidos: <a href="personalizado_canecas.html">canecas</a>, <a href="personalizado_camisetas.html">camisetas</a>, <a href="personalizado_bala_personalizada.html">balas</a>, <a href="cracha-pvc-porto-alegre.html">crachá PVC</a> e <a href="personalizado_almofadas.html">almofadas</a>. Escolha uma categoria acima ou peça orçamento. ' +
          linkWhats("Olá! Quero indicação dos produtos mais pedidos."),
        "guia",
        true
      );
      limparOpcoes();
      botao("Canecas", function () {
        respostas.cat = "empresa";
        fala("Canecas", "voce");
        fluxoCaneca();
      });
      botao("Camisetas", function () {
        respostas.cat = "empresa";
        fala("Camisetas", "voce");
        detalharProduto(catalogo.empresa.itens[2], catalogo.empresa);
      });
      botao("Balas personalizadas", function () {
        respostas.cat = "festa";
        fala("Balas personalizadas", "voce");
        detalharProduto(catalogo.festa.itens[0], catalogo.festa);
      });
      botao("Crachá PVC", function () {
        respostas.cat = "pvc";
        fala("Crachá PVC", "voce");
        detalharProduto(catalogo.pvc.itens[0], catalogo.pvc);
      });
      botao("Voltar às categorias", function () {
        fala("Voltar às categorias", "voce");
        perguntarObjetivo();
      });
    });
    botao("Quero ver todos os produtos", function () {
      fala("Quero ver todos os produtos", "voce");
      fala(
        'Pode ver a vitrine completa em <a href="personalizado_produtos.html">Produtos</a> ou falar direto com a gente. ' +
          linkWhats("Olá! Quero ver opções de produtos personalizados."),
        "guia",
        true
      );
      finais();
    });
  }

  function mostrarCategoria(key) {
    var cat = catalogo[key];
    passo = "produto";
    limparOpcoes();
    fala(cat.intro, "guia");
    fala("Qual desses te interessa mais?");
    cat.itens.forEach(function (item) {
      botao(item.nome, function () {
        respostas.item = item;
        fala(item.nome, "voce");
        if (item.id === "caneca") {
          fluxoCaneca();
        } else {
          detalharProduto(item, cat);
        }
      });
    });
    botao("Voltar", function () {
      fala("Voltar", "voce");
      perguntarObjetivo();
    });
  }

  function detalharProduto(item, cat) {
    passo = "detalhe";
    limparOpcoes();
    fala(
      item.tip +
        ' Confira a página: <a href="' +
        item.url +
        '">' +
        item.nome +
        "</a>. Produzimos em Porto Alegre e Canoas - RS; prazo e valor dependem da quantidade e da arte.",
      "guia",
      true
    );
    fala("Quer que eu te ajude com mais alguma coisa?");
    botao("Pedir orçamento no WhatsApp", function () {
      fala("Pedir orçamento no WhatsApp", "voce");
      fala(
        "Perfeito! Clique e já mando você com a mensagem pronta. " +
          linkWhats("Olá! Tenho interesse em " + item.nome + " (Personalizamos)."),
        "guia",
        true
      );
      finais();
    });
    botao("Ver outro produto desta categoria", function () {
      fala("Ver outro produto desta categoria", "voce");
      mostrarCategoria(respostas.cat);
    });
    botao("Escolher outra categoria", function () {
      fala("Escolher outra categoria", "voce");
      perguntarObjetivo();
    });
    botao("Dicas rápidas (prazo, arte, local)", function () {
      fala("Dicas rápidas", "voce");
      fala(
        "Prazo: depende da quantidade e se a arte já está pronta. Arte: envie logo/foto em boa qualidade pelo WhatsApp. Local: atendemos <strong>Porto Alegre e Canoas - RS</strong>. Pedido flexível para PME e eventos. " +
          linkWhats("Olá! Quero tirar dúvidas de prazo e arte."),
        "guia",
        true
      );
      finais();
    });
  }

  function falaMockup(dataUrl) {
    var p = document.createElement("p");
    p.className = "fala fala-guia fala-mockup";
    var nome = document.createElement("span");
    nome.className = "fala-quem";
    nome.textContent = pessoa.nome;
    p.appendChild(nome);
    var img = document.createElement("img");
    img.src = dataUrl;
    img.alt = "Prévia ilustrativa da caneca personalizada";
    p.appendChild(img);
    var nota = document.createElement("span");
    nota.style.display = "block";
    nota.style.marginTop = "0.4rem";
    nota.style.fontSize = "0.92rem";
    nota.innerHTML =
      "Essa é uma <strong>prévia ilustrativa</strong> — a arte final fica ainda melhor na produção.";
    p.appendChild(nota);
    msgs.appendChild(p);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function roundRect(ctx, x, y, w, h, r) {
    var rr = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + w, y, x + w, y + h, rr);
    ctx.arcTo(x + w, y + h, x, y + h, rr);
    ctx.arcTo(x, y + h, x, y, rr);
    ctx.arcTo(x, y, x + w, y, rr);
    ctx.closePath();
  }

  function montarMockupCaneca(userImg, opts, done) {
    var W = 480;
    var H = 500;
    var canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#f7eef2";
    ctx.fillRect(0, 0, W, H);

    var mug =
      opts.cor === "preta"
        ? "#2a2a2a"
        : opts.cor === "magica"
          ? "#1b1b2e"
          : "#f8f8f8";
    var rim =
      opts.cor === "branca" ? "#e4e4e4" : "#111";
    var printBg = opts.cor === "branca" ? "#ffffff" : "#333";

    var bx = 105;
    var by = 70;
    var bw = 230;
    var bh = 300;

    // handle
    ctx.strokeStyle = mug;
    ctx.lineWidth = 30;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.arc(bx + bw + 8, by + bh * 0.48, 58, -1.1, 1.1);
    ctx.stroke();
    ctx.strokeStyle = "#f7eef2";
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.arc(bx + bw + 8, by + bh * 0.48, 58, -1.1, 1.1);
    ctx.stroke();

    // body
    roundRect(ctx, bx, by, bw, bh, 28);
    ctx.fillStyle = mug;
    ctx.fill();
    ctx.strokeStyle = rim;
    ctx.lineWidth = 2;
    ctx.stroke();

    // inner rim
    roundRect(ctx, bx + 14, by + 10, bw - 28, 18, 8);
    ctx.fillStyle = rim;
    ctx.fill();

    // print area
    var px = bx + 34;
    var py = by + 55;
    var pw = bw - 68;
    var ph = bh - 120;
    roundRect(ctx, px, py, pw, ph, 10);
    ctx.fillStyle = printBg;
    ctx.fill();
    ctx.save();
    roundRect(ctx, px, py, pw, ph, 10);
    ctx.clip();

    if (userImg) {
      var scale = Math.max(pw / userImg.width, ph / userImg.height);
      var iw = userImg.width * scale;
      var ih = userImg.height * scale;
      ctx.drawImage(userImg, px + (pw - iw) / 2, py + (ph - ih) / 2, iw, ih);
    }

    if (opts.texto) {
      ctx.fillStyle = opts.cor === "branca" ? "#9d426b" : "#ffffff";
      ctx.font = "bold 22px Trebuchet MS, Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      var ty = userImg ? py + ph - 28 : py + ph / 2;
      if (userImg) {
        ctx.fillStyle = "rgba(0,0,0,0.35)";
        ctx.fillRect(px, py + ph - 52, pw, 52);
        ctx.fillStyle = "#fff";
      }
      ctx.fillText(String(opts.texto).slice(0, 28), px + pw / 2, ty);
    } else if (!userImg) {
      ctx.fillStyle = opts.cor === "branca" ? "#9d426b" : "#fff";
      ctx.font = "bold 20px Trebuchet MS, Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Sua arte aqui", px + pw / 2, py + ph / 2);
    }
    ctx.restore();

    ctx.fillStyle = "#9d426b";
    ctx.font = "bold 15px Trebuchet MS, Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Prévia ilustrativa · Personalizamos", W / 2, H - 28);

    done(canvas.toDataURL("image/jpeg", 0.9));
  }

  function pedirUploadCaneca() {
    limparOpcoes();
    fala(
      "Se desejar, me envia uma <strong>foto</strong> ou o <strong>logotipo</strong> que quer na caneca — eu monto um modelo prévio aqui na conversa.",
      "guia",
      true
    );

    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    var label = document.createElement("label");
    label.className = "guia-upload";
    label.appendChild(document.createTextNode("Enviar foto ou logo"));
    label.appendChild(input);
    opcoes.appendChild(label);

    input.addEventListener("change", function () {
      var file = input.files && input.files[0];
      if (!file) return;
      fala("Enviei minha arte", "voce");
      fala("Perfeito — montando sua prévia…");
      limparOpcoes();

      var reader = new FileReader();
      reader.onload = function (ev) {
        var img = new Image();
        img.onload = function () {
          respostas.caneca.arte = img;
          montarMockupCaneca(img, respostas.caneca, function (url) {
            falaMockup(url);
            respostas.caneca.mockup = url;
            fecharCaneca();
          });
        };
        img.onerror = function () {
          fala("Não consegui ler essa imagem. Tente outro arquivo (JPG ou PNG).");
          pedirUploadCaneca();
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    });

    botao("Prefiro sem arte agora", function () {
      fala("Prefiro sem arte agora", "voce");
      montarMockupCaneca(null, respostas.caneca, function (url) {
        falaMockup(url);
        respostas.caneca.mockup = url;
        fecharCaneca();
      });
    });
  }

  function fecharCaneca() {
    var c = respostas.caneca || {};
    var resumo =
      "Caneca " +
      (c.corRotulo || "") +
      ", uso: " +
      (c.usoRotulo || "") +
      ", arte: " +
      (c.arteTipoRotulo || "") +
      ", qtd: " +
      (c.qtdRotulo || "");
    fala(
      "Gostou da ideia? Posso te ajudar a fechar o pedido. " +
        linkWhats(
          "Olá! Falei com a Lu.ia sobre canecas. " +
            resumo +
            ". Quero orçamento."
        ),
      "guia",
      true
    );
    limparOpcoes();
    botao("Pedir orçamento no WhatsApp", function () {
      window.open(
        "https://api.whatsapp.com/send?phone=5551985435231&text=" +
          encodeURIComponent(
            "Olá! Falei com a Lu.ia sobre canecas. " + resumo + ". Quero orçamento."
          ),
        "_blank",
        "noopener,noreferrer"
      );
    });
    botao("Montar outra prévia", function () {
      fala("Montar outra prévia", "voce");
      fluxoCaneca();
    });
    botao("Escolher outra categoria", function () {
      fala("Escolher outra categoria", "voce");
      perguntarObjetivo();
    });
    botao("Começar de novo", function () {
      comecar();
    });
  }

  function fluxoCaneca() {
    respostas.item = catalogo.empresa.itens[0];
    respostas.caneca = { cor: "branca", corRotulo: "branca" };
    passo = "caneca";
    limparOpcoes();
    fala(
      'Ótimo! Vamos montar sua <strong>caneca personalizada</strong>. <a href="personalizado_canecas.html">Ver página de canecas</a>',
      "guia",
      true
    );
    fala("Para que você precisa da caneca?");
    [
      { id: "presente", rotulo: "Presente" },
      { id: "empresa", rotulo: "Empresa / brinde" },
      { id: "festa", rotulo: "Festa / evento" }
    ].forEach(function (op) {
      botao(op.rotulo, function () {
        respostas.caneca.uso = op.id;
        respostas.caneca.usoRotulo = op.rotulo;
        fala(op.rotulo, "voce");
        canecaPerguntaArte();
      });
    });
  }

  function canecaPerguntaArte() {
    limparOpcoes();
    fala("O que você quer colocar na caneca?");
    [
      { id: "foto", rotulo: "Foto" },
      { id: "logo", rotulo: "Logotipo" },
      { id: "foto_texto", rotulo: "Foto + texto" },
      { id: "texto", rotulo: "Só texto / nome" }
    ].forEach(function (op) {
      botao(op.rotulo, function () {
        respostas.caneca.arteTipo = op.id;
        respostas.caneca.arteTipoRotulo = op.rotulo;
        fala(op.rotulo, "voce");
        if (op.id === "texto" || op.id === "foto_texto") {
          canecaPerguntaTexto();
        } else {
          canecaPerguntaCor();
        }
      });
    });
  }

  function canecaPerguntaTexto() {
    limparOpcoes();
    fala("Qual texto ou nome quer na caneca? Escolha uma opção rápida:");
    ["Te amo", "Melhor equipe", "Personalizamos", "Feliz aniversário"].forEach(
      function (t) {
        botao(t, function () {
          respostas.caneca.texto = t;
          fala(t, "voce");
          canecaPerguntaCor();
        });
      }
    );
    botao("Sem texto", function () {
      respostas.caneca.texto = "";
      fala("Sem texto", "voce");
      canecaPerguntaCor();
    });
  }

  function canecaPerguntaCor() {
    limparOpcoes();
    fala("Qual cor da caneca?");
    [
      { id: "branca", rotulo: "Branca" },
      { id: "preta", rotulo: "Preta" },
      { id: "magica", rotulo: "Mágica (aparece com calor)" }
    ].forEach(function (op) {
      botao(op.rotulo, function () {
        respostas.caneca.cor = op.id;
        respostas.caneca.corRotulo = op.rotulo;
        fala(op.rotulo, "voce");
        canecaPerguntaQtd();
      });
    });
  }

  function canecaPerguntaQtd() {
    limparOpcoes();
    fala("Quantidade aproximada?");
    [
      { id: "1-5", rotulo: "1 a 5" },
      { id: "6-20", rotulo: "6 a 20" },
      { id: "21+", rotulo: "21 ou mais" }
    ].forEach(function (op) {
      botao(op.rotulo, function () {
        respostas.caneca.qtd = op.id;
        respostas.caneca.qtdRotulo = op.rotulo;
        fala(op.rotulo, "voce");
        pedirUploadCaneca();
      });
    });
  }

  function finais() {
    limparOpcoes();
    botao("Começar de novo", function () {
      comecar();
    });
    botao("Abrir WhatsApp", function () {
      window.open(WA, "_blank", "noopener,noreferrer");
    });
  }

  function comecar() {
    respostas = {};
    passo = "inicio";
    msgs.innerHTML = "";
    limparOpcoes();
    painel.classList.remove("compacta");
    tocarVideo();
    fala(pessoa.abertura, "guia", true);
    perguntarObjetivo();
  }

  if (video) {
    video.loop = false;
    video.controls = false;
    video.removeAttribute("loop");
    video.removeAttribute("controls");
    video.addEventListener("timeupdate", function () {
      if (!video.duration || !isFinite(video.duration)) return;
      if (video.currentTime >= video.duration - VIDEO_CORTE_ANTES) {
        finalizarVideo();
      }
    });
    video.addEventListener("ended", function () {
      finalizarVideo();
    });
  }

  comecar();
})();
