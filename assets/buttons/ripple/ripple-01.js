export default {
    id: "btn-09",
    category: "ripple",
    message: "🌊 Fez onda.",
    name: "Button 09",
    html: `<button class="btn-09">Button 09</button>`,
    css: `.btn-09 {
    width: 120px;
    height: 40px;
    position: relative;
    overflow: hidden;
    background: #0984e3;
    border: none;
    color: #fff;
    cursor: pointer;
    border-radius: 6px;
}
.btn-09 .ripple-circle {
    position: absolute;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    background: rgba(255,255,255,0.5);
    pointer-events: none;
    will-change: transform, opacity;
    animation: ripple 600ms ease-out forwards;
    z-index: 2;
}

@keyframes ripple {
    to {
        transform: translate(-50%, -50%) scale(4);
        opacity: 0;
    }
}`,
    js: `document.querySelectorAll(".btn-09").forEach(btn => {
            btn.addEventListener("click", function (e) {
                const rect = this.getBoundingClientRect();
                const circle = document.createElement("span");
                circle.className = "ripple-circle";

                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const size = Math.max(rect.width, rect.height);
                circle.style.width = size + "px";
                circle.style.height = size + "px";

                circle.style.left = x + "px";
                circle.style.top = y + "px";

                this.appendChild(circle);
                setTimeout(() => {
                    circle.remove();
                }, 650);
            });
        });`
};