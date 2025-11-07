export default {
    id: "btn-07",
    category: "slide",
    message: "👉 Desliza suave.",
    name: "Button 07",
    html: `<button class="btn-07" id="btn-07">Button 07</button>`,
    css: `.btn-07 {
    width: 120px;
    height: 40px;
    background: #34495e;
    color: white;
    position: relative;
    overflow: hidden;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;
}

.btn-07::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(52, 152, 219, 0.5);
    transition: left 0.3s ease;
}

.btn-07.active::before {
    left: 0;
}`,
    js: `let toggleState = false;

const toggleBtn = document.querySelector("#button-preview button");

if (!toggleBtn) return;

toggleBtn.addEventListener("click", () => {
    toggleState = !toggleState;

    if (toggleState) {
        toggleBtn.classList.add("active");
        toggleBtn.textContent = "Ativado";
    } else {
        toggleBtn.classList.remove("active");
        toggleBtn.textContent = "Desativado";
    }
});
    `
};
