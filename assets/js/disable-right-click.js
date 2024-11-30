// Disabilita il tasto destro del mouse
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Disabilita le scorciatoie da tastiera per l'ispezione e visualizzazione sorgente
document.addEventListener('keydown', function (e) {
    // Disabilita F12 (ispezione)
    if (e.key === 'F12') {
        e.preventDefault();
    }

    // Disabilita Ctrl+U (visualizza sorgente)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }

    // Disabilita Ctrl+Shift+I (ispezione)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }

    // Disabilita Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
    }
});

// Blocca l'uso di "view-source:" nelle URL
window.addEventListener('beforeunload', function (e) {
    if (window.location.href.indexOf('view-source:') === 0) {
        alert("Non è consentito visualizzare il sorgente della pagina.");
        e.preventDefault();
    }
});
