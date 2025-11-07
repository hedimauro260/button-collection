export default {
    id: "btn-23",
    category: "cyberpunk",
    message: "🔮 Futuro caótico e neon.",
    name: "Button 23",
    html: `<button class="btn-23">Button 23 <span class="glitch"></span></button>`,
    css: `.btn-23 {
    width: 120px;
    height: 40px;
    position: relative;
    color: #0ff;
    background: #0a0f1f;
    border: 2px solid #0ff;
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
    isolation: isolate;
}
    
.btn-23::before {
    content: "";
    position: absolute;
    inset: -30px;
    background: radial-gradient(circle, rgba(0,255,255,0.4) 0%, transparent 70%);
    filter: blur(25px);
    opacity: 0.3;
    transition: 0.2s ease-out;
    z-index: -1;
}
    
.btn-23::after {
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
    
.btn-23 .glitch {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #0ff 0%, #a000f0 50%, #0ff 100%);
    mix-blend-mode: screen;
    opacity: 0;
    transform: skewX(0deg);
    pointer-events: none;
    animation: glitchMove 0.5s steps(2) infinite;
}

@keyframes glitchMove {
    0% { opacity: 0; transform: translateX(0) skewX(0deg); }
    20% { opacity: 0.4; transform: translateX(-4px) skewX(-15deg); }
    40% { opacity: 0.2; transform: translateX(3px) skewX(15deg); }
    60% { opacity: 0.4; transform: translateX(-2px) skewX(-10deg); }
    100% { opacity: 0; transform: translateX(0) skewX(0deg); }
}
    
.btn-23:hover {
    color: #fff;
    box-shadow: 0 0 25px #0ff;
}`,
    js: `document.querySelectorAll('.btn-23').forEach(function(btn){
    btn.addEventListener('click', function() {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.value = 420;
    gain.gain.value = 0.08;

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.12);
});
});`
};
