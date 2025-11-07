export default {
    id: "btn-20",
    category: "glass",
    message: "🧊 Transparente… tipo crush te ignorando.",
    name: "Button 20",
    html: `<button class="btn-20">Button 20</button>`,
    css: `.btn-20 {
    all: unset;
    background: linear-gradient(45deg, #ff6b6b, #ee5a24);
    color: white;
    position: relative;
    width: 120px;
    height: 40px;
    border-radius: 50px;
    text-align: center;
    overflow: hidden;
}
.btn-20::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
    transform: rotate(45deg);
    transition: 0.8s;
}
    
.btn-20:hover::before {
    left: 150%;
}`,
    js: `// Nenhum JS usado neste botão`,
};