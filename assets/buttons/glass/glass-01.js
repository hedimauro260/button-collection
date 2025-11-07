export default {
    id: "btn-08",
    category: "glass",
    message: "🧊 Transparente… tipo crush te ignorando.",
    name: "Button 08",
    html: `<button class="btn-08">Button 08</button>`,
    css: `.btn-08 {
    all: unset;
    background: #e74c3c;
    color: white;
    position: relative;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    text-align: center;
    overflow: hidden;
}
.btn-08:hover::after {
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