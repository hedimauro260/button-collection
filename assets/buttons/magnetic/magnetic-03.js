export default {
    id: "btn-17",
    category: "magnetic",
    message: "🧲 Puxa você.",
    name: "Button 17",
    html: `<button class="btn-17">Button 17</button>`,
    css: `.btn-17 {
    width: 120px;
    height: 40px;
    position: relative;
    color: #333;
    background: #f1f1f1ff;
    border: 2px solid #0ff;
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
    isolation: isolate;
}
    
.btn-17::before {
    content: "";
    position: absolute;
    inset: -30px;
    background: radial-gradient(circle, rgba(0,255,255,0.4) 0%, transparent 70%);
    filter: blur(25px);
    opacity: 0.3;
    transition: 0.2s ease-out;
    z-index: -1;
}
    
.btn-17::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    border: 2px solid transparent;
    background: linear-gradient(120deg, #0ff, #a000f0, #ff00ff);
    background-size: 300%;
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: borderFlow 5s linear infinite;
}
    
@keyframes borderFlow {
    0% { background-position: 0% }
    100% { background-position: 300% }
}
    
.btn-17:hover {
    color: #333;
    box-shadow: 0 0 25px #0ff;
}`,
    js: `document.querySelectorAll('.btn-17').forEach(function(btn){
    btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = "translate(" + (x * 0.25) + "px, " + (y * 0.25) + "px)";
    btn.style.boxShadow = '0 0 25px #0ff, ' + (x * 0.1) + 'px ' + (y * 0.1) + 'px 35px #a000f0';
});

btn.addEventListener("mouseleave", () => {
    btn.style.transform = "";
    btn.style.boxShadow = "";
});
});`
};
