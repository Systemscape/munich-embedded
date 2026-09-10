// Pirsch's pa.js checks localStorage for `disable_pirsch` before sending
// anything, so setting that key is a working per-visitor opt-out. This wires
// the button on the privacy page to it. Labels come from data attributes so
// the same script serves the German and the English page.
(function () {
    "use strict";
    var KEY = "disable_pirsch";

    function isOptedOut() {
        try {
            return window.localStorage.getItem(KEY) !== null;
        } catch (e) {
            // private mode, or the browser blocks site data
            return null;
        }
    }

    function render(box, button, status, optedOut) {
        var d = box.dataset;
        if (optedOut === null) {
            button.hidden = true;
            status.textContent = d.errorText;
            return;
        }
        button.textContent = optedOut ? d.enableLabel : d.disableLabel;
        status.textContent = optedOut ? d.offText : d.onText;
    }

    document.querySelectorAll("[data-pirsch-optout]").forEach(function (box) {
        var button = box.querySelector("button");
        var status = box.querySelector("p");
        var optedOut = isOptedOut();
        render(box, button, status, optedOut);

        button.addEventListener("click", function () {
            try {
                if (optedOut) {
                    window.localStorage.removeItem(KEY);
                } else {
                    window.localStorage.setItem(KEY, "true");
                }
                optedOut = !optedOut;
            } catch (e) {
                optedOut = null;
            }
            render(box, button, status, optedOut);
        });
    });
})();
