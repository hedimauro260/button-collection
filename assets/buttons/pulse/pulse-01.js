export default {
    id: "btn-10",
    category: "pulse",
    message: "❤️‍🔥 Coraçãozinho batendo.",
    name: "Button 10",
    html: `<button class="btn-10">Button 10</button>`,
    css: `.btn-10 {
    width: 120px;
    height: 40px;
    border: none;
    background: #d63031;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    animation: pulse 1.5s infinite;
}
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}`,
    js: `// Nenhum JS usado neste botão`
}