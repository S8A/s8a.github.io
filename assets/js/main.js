import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.store("darkMode", {
    on: false,
    init() {
        if ("theme" in localStorage) {
            this.on = localStorage.theme === "dark";
        } else {
            this.on = window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
    },
    toggle() {
        this.on = !this.on;
        localStorage.theme = this.on ? "dark" : "light";
    },
});

Alpine.start();
