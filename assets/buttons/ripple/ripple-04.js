export default {
    id: "btn-24",
    category: "ripple",
    message: "🌊 Fez onda.",
    name: "Button 24",
    html: `<button class="btn-24">Button 24</button>`,
    css: `.btn-24 {
    position: relative;
    width: 120px;
    height: 40px;
    background: #ff9f43;
    color: white;
    overflow: hidden;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}
    
.btn-24::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255,255,255,0.7);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.btn-24:active::after {
    width: 100px;
    height: 100px;
}`,
    js: `// Nenhum JS usado neste botão`,
};