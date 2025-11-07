export default {
    id: "btn-16",
    category: "holographic",
    message: "🪩 Brilha em HD.",
    name: "Button 16",
    html: `<button class="btn-16">Button 16</button>`,
    css: `.btn-16 {
    width: 120px;
    height: 40px;
    border: none;
    color: white;
    background-image: url('./assets/images/bgd-btn-01.webp');
    background-size: 400% 400%;
    border-radius: 5px;
    animation: gradientBG 5s ease infinite;
}
@keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}`,
    js: `// Nenhum JS usado neste botão`
}