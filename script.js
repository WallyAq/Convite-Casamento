// Altere os dados e os links aqui para personalizar o convite.
// Os dois links sem destino também não estavam vinculados na referência.
const convite = {
  noiva: "Maria Bianca Rodrigues Barreto",
  noivo: "Enderson Nunes de Oliveira",
  paisDaNoiva: ["xxxxx", "xxxxx"],
  paisDoNoivo: ["xxxxx", "xxxxx"],
  dia: "18",
  mes: "03",
  ano: "2027",
  horario: "QUINTA-FEIRA ÀS 18H",
  local: "MOSTEIRO DE SÃO BENTO",
  endereco: "RUA MARIA FERREIRA DOS SANTOS, 324",
  cidade: "SÃO BENTO - FORTALEZA CE",
  links: {
    localizacao: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Mosteiro de São Bento, Rua Maria Ferreira dos Santos, 324, São Bento, Fortaleza, CE")}`,
    sitio: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Chácara Encanto das Anas, Rua Paisagística, 530, Paupina, Messejana, Fortaleza, CE")}`,
    confirmacao: "",
    presentes: "",
  },
};

const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[char]);

const nomes = () => `<span>${escapeHTML(convite.noiva)} <span class="and">e</span></span><span class="second">${escapeHTML(convite.noivo)}</span>`;
const pin = '<svg viewBox="0 0 32 40" aria-hidden="true"><path fill="currentColor" d="M16 1C7.7 1 2 7.1 2 14.5 2 24 16 39 16 39s14-15 14-24.5C30 7.1 24.3 1 16 1Zm0 19a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z"/></svg>';
const check = '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="m3 21 11 10L38 7" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="square"/></svg>';
const gift = '<svg viewBox="0 0 40 40" aria-hidden="true"><path fill="currentColor" d="M4 17h14v7H4zm18 0h14v7H22zM6 26h12v13H6zm16 0h12v13H22z"/><path d="M19 17C5 15 5 4 10 4c5 0 9 9 10 12C21 13 25 4 30 4c5 0 5 11-9 13" fill="none" stroke="currentColor" stroke-width="2.6"/><path d="M20 17v22" stroke="currentColor" stroke-width="2.8"/></svg>';

function acao(tipo, label, icon) {
  const url = convite.links[tipo];
  const content = `${icon}<span>${label}</span>`;
  if (url && /^https?:\/\//i.test(url)) {
    return `<a class="action" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${content}</a>`;
  }
  return `<button class="action" type="button" data-information="${tipo}">${content}</button>`;
}

document.querySelector("#app").innerHTML = `
  <article class="invitation" aria-labelledby="couple-title">
    <div class="hero layer"><img class="photo" src="assets/frente.jpg" width="1800" height="2400" alt="Maria Bianca e Enderson juntos nas pedras à beira-mar." fetchpriority="high"></div>
    <div class="monogram" aria-hidden="true"><span class="initial-a">B</span><span class="initial-b">${escapeHTML(convite.noivo.charAt(0))}</span></div>

    <blockquote class="verse layer">
      <p>“Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém o separe.”</p>
      <cite>– Mateus 19:6</cite>
    </blockquote>

    <p class="blessing layer">COM A BENÇÃO DE DEUS E DE SEUS PAIS</p>
    <div class="families layer"><p>${convite.paisDaNoiva.map(escapeHTML).join("<br>")}</p><p>${convite.paisDoNoivo.map(escapeHTML).join("<br>")}</p></div>
    <h1 class="couple-names layer" id="couple-title">${nomes()}</h1>
    <p class="invitation-line layer">CONVIDAM PARA O SEU CASAMENTO</p>

    <div class="portrait layer"><img class="photo" src="assets/pb.jpg" width="1800" height="2400" alt="Maria Bianca abraçando Enderson em uma foto em preto e branco." loading="lazy"></div>
    <p class="date-intro layer">A REALIZAR-SE NO DIA</p>
    <div class="date-card layer">
      <div class="date-numbers" aria-label="${escapeHTML(`${convite.dia}/${convite.mes}/${convite.ano}`)}"><span>${escapeHTML(convite.dia)}</span><span class="date-divider" aria-hidden="true">|</span><span>${escapeHTML(convite.mes)}</span><span class="date-divider" aria-hidden="true">|</span><span>${escapeHTML(convite.ano)}</span></div>
      <p class="weekday">${escapeHTML(convite.horario)}</p>
    </div>

    <div class="venue layer"><p class="venue-name">${escapeHTML(convite.local)}</p><address>${escapeHTML(convite.endereco)}<br>${escapeHTML(convite.cidade)}</address></div>
    <p class="instructions layer">CLIQUE NOS BOTÕES ABAIXO:</p>
    <nav class="actions layer" aria-label="Informações do casamento">
      ${acao("localizacao", "LOCALIZAÇÃO DO MOSTEIRO", pin)}
      ${acao("sitio", "LOCALIZAÇÃO DA CHÁCARA", pin)}
      ${acao("confirmacao", "CONFIRMAÇÃO DE PRESENÇA", check)}
      ${acao("presentes", "LISTA DE PRESENTES", gift)}
    </nav>

    <div class="closing-photo layer"><img class="photo" src="assets/costa.jpg" width="1800" height="2400" alt="Maria Bianca e Enderson abraçados diante do mar." loading="lazy"></div>
    <footer class="signature layer"><p>COM CARINHO,</p><div class="couple-names" aria-label="${escapeHTML(`${convite.noiva} e ${convite.noivo}`)}">${nomes()}</div></footer>
  </article>
  <dialog class="information" aria-labelledby="information-title" aria-describedby="information-description">
    <h2 id="information-title"></h2><p id="information-description"></p>
    <form method="dialog"><button class="dialog-close" autofocus>Fechar</button></form>
  </dialog>
  <audio id="background-music" src="assets/Eu%20e%20Minha%20Casa_spotdown.org.mp3" loop preload="metadata" aria-hidden="true"></audio>
  <button class="music-toggle" type="button" aria-controls="background-music" aria-label="Reproduzir música" aria-pressed="false" title="Reproduzir música" data-playing="false">
    <svg class="music-play" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 11 7-11 7Z" fill="currentColor"/></svg>
    <svg class="music-pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7zm6 0h4v14h-4z" fill="currentColor"/></svg>
  </button>
`;

const musica = document.querySelector("#background-music");
const botaoMusica = document.querySelector(".music-toggle");
musica.volume = 0.35;

// Uma única tentativa pode estar em andamento. Perder foco invalida até um play pendente.
let tentativaMusica = 0;
let desejaTocar = false;
let iniciandoMusica = false;
let tentativaAutomaticaPendente = false;
let paginaAtiva = !document.hidden;
let inicioAutomaticoTentado = false;
let musicaJaIniciou = false;
let pausaManual = false;

const podeTocarMusica = () => paginaAtiva && !document.hidden;

function atualizarBotaoMusica() {
  const ativo = !musica.paused || iniciandoMusica;
  const descricao = ativo ? "Pausar música" : "Reproduzir música";
  botaoMusica.dataset.playing = String(ativo);
  botaoMusica.setAttribute("aria-pressed", String(ativo));
  botaoMusica.setAttribute("aria-busy", String(iniciandoMusica));
  botaoMusica.setAttribute("aria-label", descricao);
  botaoMusica.title = descricao;
}

function pausarMusica() {
  tentativaMusica += 1;
  desejaTocar = false;
  iniciandoMusica = false;
  tentativaAutomaticaPendente = false;
  musica.pause();
  atualizarBotaoMusica();
}

async function tocarMusica({ porInteracao = false } = {}) {
  if (!podeTocarMusica()) return;
  if (iniciandoMusica) {
    // O toque real precisa chamar play diretamente, mesmo se o autoplay ainda aguarda dados.
    if (!porInteracao || !tentativaAutomaticaPendente) return;
    pausarMusica();
  }
  if (desejaTocar) return;
  const tentativaAtual = ++tentativaMusica;
  desejaTocar = true;
  iniciandoMusica = true;
  tentativaAutomaticaPendente = !porInteracao;
  atualizarBotaoMusica();
  try {
    if (musica.error) musica.load();
    await musica.play();
    if (tentativaAtual !== tentativaMusica) return;
    if (!podeTocarMusica() || !desejaTocar) {
      pausarMusica();
      return;
    }
    iniciandoMusica = false;
    tentativaAutomaticaPendente = false;
    atualizarBotaoMusica();
  } catch {
    if (tentativaAtual !== tentativaMusica) return;
    desejaTocar = false;
    iniciandoMusica = false;
    tentativaAutomaticaPendente = false;
    atualizarBotaoMusica();
    // Se o autoplay for bloqueado, aguarde uma interação real do visitante.
  }
}

function iniciarMusicaAoInteragir(event) {
  if (!event.isTrusted || document.hidden || pausaManual || botaoMusica.contains(event.target)) return;
  if (event.type === "keydown" && !["Enter", " ", "ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End"].includes(event.key)) return;
  paginaAtiva = true;
  inicioAutomaticoTentado = true;
  void tocarMusica({ porInteracao: true });
}

// Use o gesto real do Android diretamente, inclusive quando ele não gera um click.
// O estado de carregamento impede que touchend + click iniciem tentativas duplicadas.
document.addEventListener("touchend", iniciarMusicaAoInteragir, { capture: true, passive: true });
document.addEventListener("click", iniciarMusicaAoInteragir, true);
document.addEventListener("keydown", iniciarMusicaAoInteragir, true);

botaoMusica.addEventListener("click", () => {
  inicioAutomaticoTentado = true;
  if (!musica.paused || iniciandoMusica || desejaTocar) {
    pausaManual = true;
    pausarMusica();
  } else {
    pausaManual = false;
    paginaAtiva = !document.hidden;
    void tocarMusica({ porInteracao: true });
  }
});

let ultimaInteracaoDeRolagem = -Infinity;

function iniciarMusicaAoRolar(event) {
  if (!event.isTrusted || document.hidden || !document.hasFocus()) return;
  const intervalo = event.timeStamp - ultimaInteracaoDeRolagem;
  ultimaInteracaoDeRolagem = event.timeStamp;
  // Uma tentativa por gesto, sem chamar play a cada quadro da rolagem.
  if (intervalo < 300) return;
  iniciarMusicaAoInteragir(event);
}

document.addEventListener("touchstart", (event) => {
  if (event.isTrusted) ultimaInteracaoDeRolagem = -Infinity;
}, { capture: true, passive: true });
document.addEventListener("touchmove", iniciarMusicaAoRolar, { capture: true, passive: true });
document.addEventListener("wheel", iniciarMusicaAoRolar, { capture: true, passive: true });
// O scroll de scripts e a restauração de posição não devem iniciar áudio sozinhos.

musica.addEventListener("play", () => {
  if (!desejaTocar || !podeTocarMusica()) pausarMusica();
  else atualizarBotaoMusica();
});

musica.addEventListener("playing", () => {
  if (!desejaTocar || !podeTocarMusica()) {
    pausarMusica();
    return;
  }
  iniciandoMusica = false;
  tentativaAutomaticaPendente = false;
  musicaJaIniciou = true;
  atualizarBotaoMusica();
});

musica.addEventListener("pause", () => {
  if (musica.paused) pausarMusica();
});

musica.addEventListener("error", pausarMusica);

function interromperMusica() {
  paginaAtiva = false;
  ultimaInteracaoDeRolagem = -Infinity;
  pausarMusica();
}

function tentarInicioAutomatico() {
  if (pausaManual || inicioAutomaticoTentado || musicaJaIniciou || !podeTocarMusica() || !document.hasFocus()) return;
  inicioAutomaticoTentado = true;
  void tocarMusica();
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) interromperMusica();
  else {
    paginaAtiva = document.hasFocus();
    tentarInicioAutomatico();
  }
});
window.addEventListener("blur", interromperMusica);
window.addEventListener("pagehide", interromperMusica);
// Só a primeira abertura pode iniciar automaticamente; voltar após uma pausa não retoma.
window.addEventListener("focus", () => {
  paginaAtiva = !document.hidden;
  tentarInicioAutomatico();
});
window.addEventListener("pageshow", () => {
  paginaAtiva = !document.hidden && document.hasFocus();
  tentarInicioAutomatico();
});

// O elemento começa em zero; esta é a única tentativa automática por carregamento.
tentarInicioAutomatico();

function configurarAnimacoes() {
  const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduzirMovimento.matches || !("IntersectionObserver" in window)) return;

  const elementos = document.querySelectorAll(
    ".hero, .monogram, .verse, .blessing, .families, .couple-names > span, .invitation-line, .portrait, .date-intro, .date-card, .venue, .instructions, .actions > .action, .closing-photo, .signature > p"
  );
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      target.classList.add("is-visible");
      observador.unobserve(target);
    });
  }, { threshold: 0.08, rootMargin: "0px 0px 24px 0px" });

  elementos.forEach((elemento) => {
    elemento.classList.add("reveal");
    if (elemento.matches(".hero, .monogram, .portrait, .closing-photo")) elemento.classList.add("reveal-fade");
    if (elemento.parentElement.matches(".couple-names, .actions")) {
      const ordem = Array.from(elemento.parentElement.children).indexOf(elemento);
      elemento.style.setProperty("--reveal-delay", `${ordem * 90}ms`);
    }
    observador.observe(elemento);
  });

  reduzirMovimento.addEventListener("change", (event) => {
    if (!event.matches) return;
    observador.disconnect();
    elementos.forEach((elemento) => elemento.classList.add("is-visible"));
  });
}

configurarAnimacoes();

const information = document.querySelector(".information");
const descriptions = {
  confirmacao: ["Confirmação de presença", "Para confirmar sua presença, entre em contato com os noivos."],
  presentes: ["Lista de presentes", "Entre em contato com os noivos para consultar a lista de presentes."],
};

document.querySelectorAll("[data-information]").forEach((button) => {
  button.addEventListener("click", () => {
    const [title, description] = descriptions[button.dataset.information];
    document.querySelector("#information-title").textContent = title;
    document.querySelector("#information-description").textContent = description;
    information.showModal();
  });
});

information.addEventListener("click", (event) => {
  if (event.target !== information) return;
  const bounds = information.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) information.close();
});
