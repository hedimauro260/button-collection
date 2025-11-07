export default {
    id: "btn-22",
    type: "slide",
    category: "slide",
    message: "👉 Desliza suave.",
    name: "Button 22",
    html: `<button class="btn-22">Button 22 <span class="left"></span><span class="right"></span></button>`,
    css: `.btn-22 {
    width: 120px;
    height: 40px;
    position: relative;
    background: #111;
    color: #fff;
    border: 2px solid #5e17eb;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;
    transition: color 0.3s ease;
}

.btn-22 span {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background: #5e17eb;
    transition: transform 0.35s ease;
}

.btn-22 .left {
    left: 0;
    transform: translateX(-100%);
}

.btn-22 .right {
    right: 0;
    transform: translateX(100%);
}

.btn-22:hover span {
    color: #000;
}

.btn-22:hover .left {
    transform: translateY(0%);
}

.btn-22:hover .right {
    transform: translateY(0%);
}`,
    js: `// Nenhum JS usado neste botão`
};
