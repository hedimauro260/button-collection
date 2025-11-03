// --- Coleção de botões ---
const buttonCollection = [
  {
    name: "Button 01",
    html: `<button class="btn-01">Button 01</button>`,
    css: `.btn-01 {
    background: linear-gradient(90deg, #00ffff, #0088ff);
    border: none;
    color: white;
    padding: 10px 25px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
  }
  .btn-01:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px #00ffff;
  }`,
    js: `// Nenhum JS usado neste botão`
  },
  {
    name: "Button 02",
    html: `<button class="btn-02">Button 02</button>`,
    css: `.btn-02 {
    background: #000;
    color: #0ff;
    border: 2px solid #0ff;
    padding: 10px 25px;
    border-radius: 6px;
    text-transform: uppercase;
    transition: 0.3s;
  }
  .btn-02:hover {
    background: #0ff;
    color: #000;
    box-shadow: 0 0 15px #0ff;
  }`,
    js: `// Nenhum JS usado neste botão`
  },
  {
    name: "Button 03",
    html: `<button class="btn-03">Button 03</button>`,
    css: `.btn-03 {
  background: #ff0066;
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 6px;
  box-shadow: 0 4px #b30047;
  transition: all 0.1s ease;
}
.btn-03:active {
  transform: translateY(4px);
  box-shadow: 0 1px #b30047;
}`,
    js: `// Nenhum JS usado neste botão`
  },
  {
    name: "Button 04",
    html: `<button class="btn-04">Button 04</button>`,
    css: `.btn-04 {
  background: transparent;
  border: 2px solid #ff6600;
  color: #ff6600;
  padding: 10px 25px;
  border-radius: 5px;
  transition: 0.3s;
}
.btn-04:hover {
  background: #ff6600;
  color: white;
}`,
    js: `// Nenhum JS usado neste botão`
  },
  {
    name: "Button 05",
    html: `<button class="btn-05">Button 05</button>`,
    css: `.btn-05 {
  background: linear-gradient(45deg, #00f, #0ff, #0f0);
  border: none;
  color: white;
  padding: 10px 25px;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.4s;
}
.btn-05:hover {
  filter: brightness(1.2);
}`,
    js: `// Nenhum JS usado neste botão`
  }
];

// --- Injeta todos os estilos dos botões na página ---
const globalStyle = document.createElement("style");
globalStyle.id = "all-buttons-style";
globalStyle.textContent = buttonCollection.map(btn => btn.css).join("\n\n");
document.head.appendChild(globalStyle);

// --- Função para mostrar o código ---
function showCode(index) {
  openCodePanel();

  currentButton = index;
  const btn = buttonCollection[index];

  // Atualiza o preview do botão
  const preview = document.getElementById("button-preview");
  preview.innerHTML = btn.html;

  // Atualiza os códigos
  const htmlCodeEL = document.querySelector(".block-html");
  const cssCodeEL = document.querySelector(".block-css");
  const jsCodeEL = document.querySelector(".block-js");

  htmlCodeEL.textContent = btn.html;
  cssCodeEL.textContent = btn.css;
  jsCodeEL.textContent = btn.js;

  // Usando o Prism.js para realçar o código
  Prism.highlightElement(htmlCodeEL);
  Prism.highlightElement(cssCodeEL);
  Prism.highlightElement(jsCodeEL);
}

// --- Copiar código com feedback ---
function copyCode(event) {
  const button = event.currentTarget;
  const codeEl = button.closest(".code-box").querySelector("code");
  const text = codeEl.textContent.trim();

  navigator.clipboard.writeText(text).then(() => {
    // Feedback visual com animação e ícone
    button.classList.add("copied");
    const originalHTML = button.innerHTML;
    button.innerHTML = "✔️ Copiado!";
    setTimeout(() => {
      button.classList.remove("copied");
      button.innerHTML = originalHTML;
    }, 1500);
  });
}

// --- Inicialização automática ---
document.addEventListener("DOMContentLoaded", () => {
  // Adiciona listener a todos os botões da coleção
  document.querySelectorAll(".btn-coleection button").forEach((btn, i) => {
    btn.addEventListener("click", () => showCode(i));
  });

  // Adiciona listener aos botões de copiar
  document.querySelectorAll(".btn-copy").forEach(button => {
    button.addEventListener("click", copyCode);
  });

  // Exibe o primeiro botão ao carregar
  showCode(0);
});

// Abre o painel de código
function openCodePanel() {
  const codePanel = document.querySelector(".btn-code");
  const btnPanel = document.querySelector(".btn-container");
  if (!codePanel) return;
  codePanel.classList.add("open");
  btnPanel.classList.add("open");
  // altura desejada quando aberto (ajuste se quiser)
  codePanel.style.height = "70vh";
  // garante overflow para rolagem interna
  codePanel.style.overflowY = "auto";
}

// Fecha o painel de código
function closeCodePanel() {
  const codePanel = document.querySelector(".btn-code");
  const btnPanel = document.querySelector(".btn-container");
  if (!codePanel) return;
  codePanel.classList.remove("open");
  btnPanel.classList.remove("open");
  codePanel.style.height = "60px";
  // opcional: remover overflow para manter comportamento inicial
  codePanel.style.overflowY = "hidden";
}

/* Fecha o painel ao clicar fora (mobile/tablet).
   Usamos composedPath() para cobrir cliques em SVGs/children. */
document.addEventListener("click", (e) => {
  const path = e.composedPath ? e.composedPath() : (e.path || []);
  const clickedInsideCode = path.some(node => node && node.classList && node.classList.contains && node.classList.contains("btn-code"));
  const clickedInsideButtons = path.some(node => node && node.classList && node.classList.contains && node.classList.contains("btn-coleection"));
  // se painel aberto e clique foi fora das duas áreas, fecha
  const codePanel = document.querySelector(".btn-code");
  if (codePanel && codePanel.classList.contains("open") && !clickedInsideCode && !clickedInsideButtons) {
    closeCodePanel();
  }
});