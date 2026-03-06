(function () {

    if (document.getElementById("ls-tool-panel")) return;

    const panel = document.createElement("div");
    panel.id = "ls-tool-panel";

    panel.style.position = "fixed";
    panel.style.top = "20px";
    panel.style.right = "20px";
    panel.style.zIndex = "999999";
    panel.style.background = "#1e1e1e";
    panel.style.color = "#fff";
    panel.style.padding = "12px";
    panel.style.borderRadius = "8px";
    panel.style.fontFamily = "Arial";
    panel.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    panel.style.display = "flex";
    panel.style.gap = "8px";
    panel.style.alignItems = "center";

    const exportBtn = document.createElement("button");
    exportBtn.textContent = "Export";

    const importBtn = document.createElement("button");
    importBtn.textContent = "Import";

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "✕";

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "application/json";
    fileInput.style.display = "none";

    const buttons = [exportBtn, importBtn, closeBtn];

    buttons.forEach(btn => {
        btn.style.padding = "6px 10px";
        btn.style.border = "none";
        btn.style.borderRadius = "5px";
        btn.style.cursor = "pointer";
        btn.style.background = "#007bff";
        btn.style.color = "#fff";
        btn.style.fontSize = "13px";
    });

    closeBtn.style.background = "#444";

    panel.appendChild(exportBtn);
    panel.appendChild(importBtn);
    panel.appendChild(closeBtn);
    panel.appendChild(fileInput);

    document.body.appendChild(panel);

    // EXPORT
    exportBtn.onclick = () => {

        const data = {};

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            data[key] = localStorage.getItem(key);
        }

        const json = JSON.stringify(data, null, 2);

        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "localStorage-backup.json";
        a.click();

        URL.revokeObjectURL(url);
    };

    // IMPORT
    importBtn.onclick = () => fileInput.click();

    fileInput.onchange = (e) => {

        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (ev) {

            try {
                const data = JSON.parse(ev.target.result);

                for (const key in data) {
                    localStorage.setItem(key, data[key]);
                }

                alert("LocalStorage imported successfully");
            } catch (err) {
                alert("Invalid JSON file");
            }

        };

        reader.readAsText(file);
    };

    // CLOSE
    closeBtn.onclick = () => panel.remove();

})();
