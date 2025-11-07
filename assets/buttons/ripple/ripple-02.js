export default {
    id: "btn-14",
    category: "ripple",
    message: "🌊 Fez onda.",
    name: "Button 14",
    html: `<button class="btn-14">Button 14</button>`,
    css: `.btn-14 {
    width: 120px;
    height: 40px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(90deg, #6616d0, #ac34e7);
    border-radius: 45px;
    border: none;
    box-shadow: 3px 5px rgba(0, 0, 0, 0.1);
    border-top: 1px solid rgba(0,0,0,0.1);
    color: #fff;
    cursor: pointer;
}
.btn-14 .overlay {
    position: absolute;
    background: #fff;
    top: 0;
    left: 0;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    animation: blink 0.5s linear;
}

@keyframes blink {
    0%{
        height: 0px;
        width: 0px;
        opacity: 0.3;
    }
    100%{
        height: 400px;
        width: 400px;
        opacity: 0;
    }
}`,
    js: `var btnRipple = document.querySelectorAll(".btn-14");

btnRipple.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        e.preventDefault();

        var overlay = document.createElement("span");
        overlay.classList.add("overlay");

        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        overlay.style.left = x + "px";
        overlay.style.top = y + "px";

        btn.appendChild(overlay);

        setTimeout(function() {
            overlay.remove();
        }, 500);
    });
});`
};