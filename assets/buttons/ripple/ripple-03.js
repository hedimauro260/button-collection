export default {
    id: "btn-18",
    category: "ripple",
    message: "🌊 Fez onda.",
    name: "Button 08",
    html: `<button class="btn-18">Button 18</button>`,
    css: `.btn-18 {
    all: unset;
    background: #34495e;
    color: white;
    position: relative;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    text-align: center;
    overflow: hidden;
}
.btn-18:hover::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: loading 1.5s infinite;
}
    
@keyframes loading {
    0% {
        left: -100%;
    }
    100% {
        left: 100%;
    }
}`,
    js: `// Nenhum JS usado neste botão`,
};