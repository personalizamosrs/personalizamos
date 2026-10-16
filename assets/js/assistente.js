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
    abertura: "Oi! Sou a <strong>Lu.ia</strong>. O que você precisa?"
  };

  /* Prévia — caneca branca com arte envolvida */

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
    botao("Canecas personalizadas", function () {
      respostas.cat = "empresa";
      fala("Canecas personalizadas", "voce");
      fluxoCaneca();
    });
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
      "Prévia ilustrativa — a arte final é ajustada na produção.";
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

  /** Prepara arte (foto/logo + texto) em canvas quadrado. */
  function prepararArteCaneca(userImg, opts, tw, th, done) {
    var c = document.createElement("canvas");
    c.width = tw;
    c.height = th;
    var g = c.getContext("2d");
    g.fillStyle = "#ffffff";
    g.fillRect(0, 0, tw, th);

    if (userImg) {
      var scale = Math.max(tw / userImg.width, th / userImg.height);
      var iw = userImg.width * scale;
      var ih = userImg.height * scale;
      g.drawImage(userImg, (tw - iw) / 2, (th - ih) / 2, iw, ih);
    }

    if (opts && opts.texto) {
      var bandH = userImg ? Math.round(th * 0.24) : th;
      var by = userImg ? th - bandH : 0;
      if (userImg) {
        g.fillStyle = "rgba(0,0,0,0.45)";
        g.fillRect(0, by, tw, bandH);
      }
      g.fillStyle = userImg ? "#ffffff" : "#9d426b";
      g.font =
        "bold " +
        Math.max(26, Math.round(th * 0.12)) +
        "px Trebuchet MS, Arial, sans-serif";
      g.textAlign = "center";
      g.textBaseline = "middle";
      g.fillText(String(opts.texto).slice(0, 28), tw / 2, by + bandH / 2);
    } else if (!userImg) {
      g.fillStyle = "#9d426b";
      g.font =
        "bold " +
        Math.max(26, Math.round(th * 0.14)) +
        "px Trebuchet MS, Arial, sans-serif";
      g.textAlign = "center";
      g.textBaseline = "middle";
      g.fillText("Sua arte aqui", tw / 2, th / 2);
    }

    var out = new Image();
    out.onload = function () {
      done(out);
    };
    out.src = c.toDataURL("image/png");
  }

  /**
   * Arte em volta do cilindro da caneca.
   * Mapeia a frente (~180°) com asin e escurece as bordas.
   */
  function desenharArteCilindro(ctx, art, zx, zy, zw, zh) {
    var cols = Math.max(120, Math.floor(zw * 1.5));
    for (var i = 0; i < cols; i++) {
      var t0 = i / cols;
      var t1 = (i + 1) / cols;
      var mid = (t0 + t1) / 2;
      var nx = mid * 2 - 1;
      if (nx < -0.995 || nx > 0.995) continue;

      var angle = Math.asin(nx);
      var u = 0.5 + angle / Math.PI;
      var sliceW = Math.max(1.2, (1 / cols) * art.width * 1.35);
      var su = u * art.width - sliceW / 2;
      if (su < 0) su = 0;
      if (su + sliceW > art.width) su = art.width - sliceW;

      var cosA = Math.cos(angle);
      var hScale = 0.82 + 0.18 * cosA;
      var sh = zh * hScale;
      var sy = zy + (zh - sh) / 2;
      var dx = zx + t0 * zw;
      var dw = Math.ceil((t1 - t0) * zw) + 1.5;

      ctx.globalAlpha = 0.62 + 0.38 * cosA;
      ctx.drawImage(art, su, 0, sliceW, art.height, dx, sy, dw, sh);
    }
    ctx.globalAlpha = 1;
  }

  function sombrearArteCaneca(ctx, px, py, pw, ph) {
    var g = ctx.createLinearGradient(px, py, px + pw, py);
    g.addColorStop(0, "rgba(0,0,0,0.42)");
    g.addColorStop(0.14, "rgba(0,0,0,0.12)");
    g.addColorStop(0.5, "rgba(255,255,255,0.1)");
    g.addColorStop(0.86, "rgba(0,0,0,0.12)");
    g.addColorStop(1, "rgba(0,0,0,0.42)");
    ctx.fillStyle = g;
    ctx.fillRect(px, py, pw, ph);

    var vg = ctx.createLinearGradient(px, py, px, py + ph);
    vg.addColorStop(0, "rgba(255,255,255,0.22)");
    vg.addColorStop(0.35, "rgba(255,255,255,0)");
    vg.addColorStop(1, "rgba(0,0,0,0.18)");
    ctx.fillStyle = vg;
    ctx.fillRect(px, py, pw, ph);
  }

  /** Caneca branca realista + arte envolvida no corpo. */
  function montarMockupCaneca(userImg, opts, done) {
    prepararArteCaneca(userImg, opts || {}, 900, 900, function (art) {
      var W = 720;
      var H = 820;
      var canvas = document.createElement("canvas");
      canvas.width = W;
      canvas.height = H;
      var ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      /* fundo */
      var bg = ctx.createLinearGradient(0, 0, W, H);
      bg.addColorStop(0, "#f7eef2");
      bg.addColorStop(0.55, "#ffffff");
      bg.addColorStop(1, "#e8eef5");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      /* sombra no chão */
      ctx.fillStyle = "rgba(0,0,0,0.12)";
      ctx.beginPath();
      ctx.ellipse(W * 0.48, H * 0.88, 150, 22, 0, 0, Math.PI * 2);
      ctx.fill();

      var bx = 175;
      var by = 95;
      var bw = 300;
      var bh = 420;

      /* alça */
      ctx.strokeStyle = "#f2f2f2";
      ctx.lineWidth = 36;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.arc(bx + bw + 6, by + bh * 0.45, 68, -1.15, 1.15);
      ctx.stroke();
      ctx.strokeStyle = "#dedede";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(bx + bw + 6, by + bh * 0.45, 68 + 16, -1.15, 1.15);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(bx + bw + 6, by + bh * 0.45, 68 - 16, -1.15, 1.15);
      ctx.stroke();
      ctx.strokeStyle = "#f7eef2";
      ctx.lineWidth = 18;
      ctx.beginPath();
      ctx.arc(bx + bw + 6, by + bh * 0.45, 68, -1.15, 1.15);
      ctx.stroke();

      /* corpo */
      var bodyGrad = ctx.createLinearGradient(bx, by, bx + bw, by);
      bodyGrad.addColorStop(0, "#e8e8e8");
      bodyGrad.addColorStop(0.22, "#ffffff");
      bodyGrad.addColorStop(0.55, "#fafafa");
      bodyGrad.addColorStop(0.82, "#ffffff");
      bodyGrad.addColorStop(1, "#e4e4e4");
      roundRect(ctx, bx, by, bw, bh, 36);
      ctx.fillStyle = bodyGrad;
      ctx.fill();
      ctx.strokeStyle = "#d8d8d8";
      ctx.lineWidth = 2;
      ctx.stroke();

      /* boca / interior */
      ctx.fillStyle = "#dfe7ef";
      roundRect(ctx, bx + 18, by + 12, bw - 36, 34, 14);
      ctx.fill();
      ctx.fillStyle = "#c8d2dc";
      roundRect(ctx, bx + 28, by + 18, bw - 56, 18, 9);
      ctx.fill();

      /* área de impressão (quase toda a face, em volta) */
      var px = bx + 28;
      var py = by + 70;
      var pw = bw - 56;
      var ph = bh - 130;

      ctx.save();
      roundRect(ctx, px, py, pw, ph, 18);
      ctx.clip();
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(px, py, pw, ph);
      desenharArteCilindro(ctx, art, px, py, pw, ph);
      sombrearArteCaneca(ctx, px, py, pw, ph);
      ctx.restore();

      /* brilho lateral da porcelana por cima da arte */
      ctx.save();
      roundRect(ctx, bx, by, bw, bh, 36);
      ctx.clip();
      var shine = ctx.createLinearGradient(bx, by, bx + bw * 0.45, by);
      shine.addColorStop(0, "rgba(255,255,255,0)");
      shine.addColorStop(0.45, "rgba(255,255,255,0.18)");
      shine.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = shine;
      ctx.fillRect(bx, by, bw * 0.5, bh);
      ctx.restore();

      /* base sutil */
      ctx.strokeStyle = "rgba(0,0,0,0.08)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.ellipse(bx + bw / 2, by + bh - 6, bw * 0.42, 10, 0, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = "#9d426b";
      ctx.font = "bold 20px Trebuchet MS, Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Prévia ilustrativa · Personalizamos", W / 2, H - 36);

      done(canvas.toDataURL("image/jpeg", 0.92));
    });
  }

  function pedirUploadCaneca() {
    limparOpcoes();
    fala(
      "Se desejar, me envia uma <strong>foto</strong> ou o <strong>logotipo</strong> — eu monto uma <strong>prévia</strong> da caneca aqui no chat.",
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

  function resumoCaneca() {
    var c = respostas.caneca || {};
    return (
      "Caneca " +
      (c.corRotulo || "Branca") +
      ", uso: " +
      (c.usoRotulo || "") +
      ", arte: " +
      (c.arteTipoRotulo || "") +
      ", qtd: " +
      (c.qtdRotulo || "")
    );
  }

  /** Comprime a prévia (JPEG leve) — não grava no GitHub, só envia por e-mail. */
  function comprimirMockup(dataUrl, maxW, quality, done) {
    if (!dataUrl) {
      done(null);
      return;
    }
    var img = new Image();
    img.onload = function () {
      var w = img.width;
      var h = img.height;
      if (w > maxW) {
        h = Math.round((h * maxW) / w);
        w = maxW;
      }
      var c = document.createElement("canvas");
      c.width = w;
      c.height = h;
      c.getContext("2d").drawImage(img, 0, 0, w, h);
      if (c.toBlob) {
        c.toBlob(
          function (blob) {
            done(blob);
          },
          "image/jpeg",
          quality
        );
      } else {
        var url = c.toDataURL("image/jpeg", quality);
        var bin = atob(url.split(",")[1] || "");
        var arr = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
        done(new Blob([arr], { type: "image/jpeg" }));
      }
    };
    img.onerror = function () {
      done(null);
    };
    img.src = dataUrl;
  }

  function enviarLeadCaneca(whatsRaw, btnEl) {
    var whats = (whatsRaw || "").trim();
    var digits = whats.replace(/\D/g, "");
    if (digits.length < 10) {
      fala("Me informa um WhatsApp válido com DDD, por favor.");
      return;
    }

    window.__lgpdOk = true;
    fala(whats, "voce");
    fala("Enviando sua prévia para a Luana…");
    if (btnEl) btnEl.disabled = true;

    var resumo = resumoCaneca();
    var mockup = respostas.caneca && respostas.caneca.mockup;

    /* JPEG bem leve (~400px) para anexo no e-mail sem pesar */
    comprimirMockup(mockup, 400, 0.25, function (blob) {
      var fd = new FormData();
      fd.append("_subject", "Lu.ia — prévia de caneca (Personalizamos)");
      fd.append("_captcha", "false");
      fd.append("_template", "table");
      fd.append("origem", "https://personalizamos.com.br/ (Lu.ia)");
      fd.append("whatsapp", whats);
      fd.append("whatsapp_digitos", digits);
      fd.append("resumo", resumo);
      if (blob) {
        /* FormSubmit reconhece melhor o nome "attachment" */
        fd.append("attachment", blob, "previa-caneca.jpg");
        fd.append(
          "aviso_anexo",
          "A prévia da caneca vai em anexo (previa-caneca.jpg)."
        );
      } else {
        fd.append(
          "aviso_anexo",
          "Prévia não gerada — peça ao cliente para reenviar no site."
        );
      }

      /*
       * Endpoint anônimo do FormSubmit (não expõe e-mail no site).
       * Ativar uma vez pelo botão ACTIVATE FORM no e-mail do FormSubmit.
       */
      fetch("https://formsubmit.co/ajax/bd6dd2e7219cafb28cbd932ad40a2b2a", {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" }
      })
        .then(function (r) {
          if (!r.ok) throw new Error("fail");
          return r.json().catch(function () {
            return {};
          });
        })
        .then(function () {
          fala(
            "Pronto! A <strong>Luana Collatto</strong> recebeu sua prévia e o WhatsApp. Ela vai melhorar o modelo e te passar o orçamento.",
            "guia",
            true
          );
          limparOpcoes();
          botao("Escolher outra categoria", function () {
            fala("Escolher outra categoria", "voce");
            perguntarObjetivo();
          });
          botao("Começar de novo", function () {
            comecar();
          });
        })
        .catch(function () {
          if (btnEl) btnEl.disabled = false;
          fala(
            "Não consegui enviar agora. Você pode falar direto com a gente: " +
              linkWhats(
                "Olá! Montei uma prévia de caneca com a Lu.ia. Meu WhatsApp: " +
                  whats +
                  ". " +
                  resumo
              ),
            "guia",
            true
          );
        });
    });
  }

  function fecharCaneca() {
    fala(
      "Gostou da ideia? Se sim, informe seu WhatsApp abaixo que a <strong>Luana Collatto</strong>, minha chefe, vai melhorar este modelo e orçar o valor para você.",
      "guia",
      true
    );
    limparOpcoes();

    var bloco = document.createElement("div");
    bloco.className = "guia-wa-bloco";

    var input = document.createElement("input");
    input.type = "tel";
    input.className = "guia-wa-input";
    input.placeholder = "Seu WhatsApp (DDD + número)";
    input.setAttribute("inputmode", "tel");
    input.setAttribute("autocomplete", "tel");
    input.setAttribute("aria-label", "Seu WhatsApp");

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "guia-wa-enviar";
    btn.textContent = "Autorizo o contato, enviar";

    bloco.appendChild(input);
    bloco.appendChild(btn);
    opcoes.appendChild(bloco);

    var acoes = document.createElement("div");
    acoes.className = "guia-wa-acoes";
    opcoes.appendChild(acoes);

    function botaoAcao(rotulo, onClick) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = rotulo;
      b.addEventListener("click", onClick);
      acoes.appendChild(b);
      return b;
    }

    btn.addEventListener("click", function () {
      enviarLeadCaneca(input.value, btn);
    });
    input.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter") {
        ev.preventDefault();
        enviarLeadCaneca(input.value, btn);
      }
    });

    botaoAcao("Refazer modelo", function () {
      fala("Refazer modelo", "voce");
      pedirUploadCaneca();
    });
    botaoAcao("Escolher outra categoria", function () {
      fala("Escolher outra categoria", "voce");
      perguntarObjetivo();
    });
  }

  function fluxoCaneca() {
    respostas.item = catalogo.empresa.itens[0];
    respostas.caneca = { cor: "branca", corRotulo: "Branca" };
    passo = "caneca";
    limparOpcoes();
    fala(
      "Ótimo! Vamos montar sua <strong>caneca</strong> com foto ou logo.",
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
          canecaPerguntaQtd();
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
          canecaPerguntaQtd();
        });
      }
    );
    botao("Sem texto", function () {
      respostas.caneca.texto = "";
      fala("Sem texto", "voce");
      canecaPerguntaQtd();
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
