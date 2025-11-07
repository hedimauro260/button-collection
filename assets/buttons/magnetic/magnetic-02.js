export default {
    id: "btn-21",
    category: "magnetic",
    message: "🧲 Puxa você.",
    name: "Button 21",
    html: `<button class="btn-21">Button 21</button>`,
    css: `.btn-21 {
    width: 120px;
    height: 40px;
    background: #222;
    color: #fff;
    border: 2px solid #5e17eb;
    border-radius: 10px;
    transition: transform 0.1s ease-out;
    box-shadow: inset 0 0 10px #5e17eb;
}`,
    js: `let btnMagnetic = document.querySelectorAll(".btn-21");

btnMagnetic.forEach(function(btn) {
    btn.addEventListener("mousemove", function(e) {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = "translate(" + (x * 0.25) + "px, " + (y * 0.25) + "px)";
    });

    btn.addEventListener("mouseleave", function(e) {
        btn.style.transform = "translate(0px, 0px)";
    });
});`
}