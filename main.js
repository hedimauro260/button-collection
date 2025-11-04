// --- Coleção de botões ---
import { buttonCollection } from "./assets/buttons/all-buttons.js";

// variável global para rastrear o botão atual
let currentButton = null;

// --- Injeta todos os estilos dos botões na página ---
const globalStyle = document.createElement("style");
globalStyle.textContent = buttonCollection.map(btn => btn.css).join("\n\n");
document.head.appendChild(globalStyle);

// --- Função para mostrar o código ---
function showCodeById(id) {
    openCodePanel();

    const btn = buttonCollection.find(b => b.id === id);
    if (!btn) {
        console.warn(`Botão com id "${id}" não encontrado em buttonCollection.`);
        return;
    }

    currentButton = id;

    // Atualiza o preview do botão
    const preview = document.getElementById("button-preview");
    preview.innerHTML = btn.html;

    // Atualiza os blocos de código
    const htmlCodeEL = document.querySelector(".block-html");
    const cssCodeEL = document.querySelector(".block-css");
    const jsCodeEL = document.querySelector(".block-js");

    htmlCodeEL.textContent = btn.html;
    cssCodeEL.textContent = btn.css;
    jsCodeEL.textContent = btn.js;

    // Realça o código (Prism.js)
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
        button.innerHTML = "✔️ Copied!";
        setTimeout(() => {
            button.classList.remove("copied");
            button.innerHTML = originalHTML;
        }, 1500);
    });
}

// --- Inicialização automática ---
document.addEventListener("DOMContentLoaded", () => {
    // 🔹 Adiciona listener a todos os botões da coleção usando data-btn
    document.querySelectorAll(".btn-collection button").forEach(btn => {
        const id = btn.dataset.btn; // deve corresponder ao id dentro do buttonCollection
        if (id) {
            btn.addEventListener("click", () => showCodeById(id));
        } else {
            console.warn("Botão sem atributo data-btn detectado:", btn);
        }
    });

    // 🔹 Adiciona listener aos botões de copiar
    document.querySelectorAll(".btn-copy").forEach(button => {
        button.addEventListener("click", copyCode);
    });

    // 🔹 Exibe o primeiro botão automaticamente ao carregar (se existir)
    if (buttonCollection.length > 0) {
        showCodeById(buttonCollection[0].id);
    }
});

// --- Detecta se a tela é mobile ou tablet ---
const isMobileOrTablet = window.matchMedia("(max-width: 1024px)");

// --- Abre o painel de código ---
function openCodePanel() {
    if (!isMobileOrTablet.matches) return; // evita execução em telas grandes

    const codePanel = document.querySelector(".btn-code");
    const btnPanel = document.querySelector(".btn-container");
    if (!codePanel) return;

    codePanel.classList.add("open");
    btnPanel.classList.add("open");

    codePanel.style.height = "70vh";
    codePanel.style.overflowY = "auto";
}

// --- Fecha o painel de código ---
function closeCodePanel() {
    if (!isMobileOrTablet.matches) return;

    const codePanel = document.querySelector(".btn-code");
    const btnPanel = document.querySelector(".btn-container");
    if (!codePanel) return;

    codePanel.classList.remove("open");
    btnPanel.classList.remove("open");
    codePanel.style.height = "60px";
    codePanel.style.overflowY = "hidden";
}

// --- Fecha o painel ao clicar fora (mobile/tablet) ---
document.addEventListener("click", (e) => {
    if (!isMobileOrTablet.matches) return;

    const path = e.composedPath ? e.composedPath() : (e.path || []);
    const clickedInsideCode = path.some(node => node?.classList?.contains?.("btn-code"));
    const clickedInsideButtons = path.some(node => node?.classList?.contains?.("btn-collection"));

    const codePanel = document.querySelector(".btn-code");
    if (codePanel && codePanel.classList.contains("open") && !clickedInsideCode && !clickedInsideButtons) {
        closeCodePanel();
    }
});

// Adiciona listener para abrir e fechar o painel com todas as categorias
const btnAllCategories = document.querySelector(".btnAllCategories");

btnAllCategories.addEventListener("click", () => {
    const allCategories = document.querySelector(".allCategories");

    if (allCategories.classList.contains("open")) {
        // anima para fechar
        allCategories.style.height = allCategories.scrollHeight + "px"; // força o height para que o scroll seja animado
        requestAnimationFrame(() => {
            allCategories.style.height = "0px";
        });
        allCategories.classList.remove("open");
    } else {
        // anima para abrir
        allCategories.style.height = allCategories.scrollHeight + "px"; // força o height para que o scroll seja animado
        allCategories.classList.add("open");
        allCategories.addEventListener("transitionend", function handler() {
            allCategories.style.height = "auto"; // libera altura após animação
            allCategories.removeEventListener("transitionend", handler);
        });
    }
});



/*
// --- Coleção de botões ---
// importar todos os botões
import { buttonCollection } from "./assets/buttons/all-buttons.js";

// variável global para rastrear o botão atual
let currentButton = 0;

// --- Injeta todos os estilos dos botões na página ---
const globalStyle = document.createElement("style");
// globalStyle.id = "all-buttons-style";
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
        button.innerHTML = "✔️ Copied!";
        setTimeout(() => {
            button.classList.remove("copied");
            button.innerHTML = originalHTML;
        }, 1500);
    });
}

// --- Inicialização automática ---
document.addEventListener("DOMContentLoaded", () => {
    // Adiciona listener a todos os botões da coleção
    document.querySelectorAll(".btn-collection button").forEach((btn, i) => {
        btn.addEventListener("click", () => showCode(i));
    });

    // Adiciona listener aos botões de copiar
    document.querySelectorAll(".btn-copy").forEach(button => {
        button.addEventListener("click", copyCode);
    });

    // Exibe o primeiro botão ao carregar
    showCode(0);
});

// Detecta se a tela é mobile ou tablet
const isMobileOrTablet = window.matchMedia("(max-width: 1024px)");

// Abre o painel de código
function openCodePanel() {
    if (!isMobileOrTablet.matches) return; // evita execução em telas grandes

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
    if (!isMobileOrTablet.matches) return; // evita execução em telas grandes

    const codePanel = document.querySelector(".btn-code");
    const btnPanel = document.querySelector(".btn-container");
    if (!codePanel) return;
    codePanel.classList.remove("open");
    btnPanel.classList.remove("open");
    codePanel.style.height = "60px";
    // opcional: remover overflow para manter comportamento inicial
    codePanel.style.overflowY = "hidden";
}

// Fecha o painel ao clicar fora (mobile/tablet). Usamos composedPath() para cobrir cliques em SVGs/children.
document.addEventListener("click", (e) => {
    if (!isMobileOrTablet.matches) return; // não executa em desktop

    const path = e.composedPath ? e.composedPath() : (e.path || []);
    const clickedInsideCode = path.some(node => node && node.classList && node.classList.contains && node.classList.contains("btn-code"));
    const clickedInsideButtons = path.some(node => node && node.classList && node.classList.contains && node.classList.contains("btn-collection"));
    // se painel aberto e clique foi fora das duas áreas, fecha
    const codePanel = document.querySelector(".btn-code");
    if (codePanel && codePanel.classList.contains("open") && !clickedInsideCode && !clickedInsideButtons) {
        closeCodePanel();
    }
});

const btnAllCategories = document.querySelector(".btnAllCategories");
btnAllCategories.addEventListener("click", () => {
    const allCategories = document.querySelector(".all-categories");

    if (allCategories.classList.contains("open")) {
        // anima para fechar
        allCategories.style.height = allCategories.scrollHeight + "px"; // força valor atual
        requestAnimationFrame(() => {
            allCategories.style.height = "0px";
        });
        allCategories.classList.remove("open");
    } else {
        // anima para abrir
        allCategories.style.height = allCategories.scrollHeight + "px";
        allCategories.classList.add("open");
        allCategories.addEventListener("transitionend", function handler() {
            allCategories.style.height = "auto"; // libera altura após animação
            allCategories.removeEventListener("transitionend", handler);
        });
    }
}); */