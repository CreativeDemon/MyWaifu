let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault(); // Stop auto prompt
  deferredPrompt = event;

  // Show the bottom pop-up
  document.getElementById("install-popup").style.display = "block";
});

document.getElementById("install-button").addEventListener("click", () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User installed the PWA");
      }
      document.getElementById("install-popup").style.display = "none";
      deferredPrompt = null;
    });
  }
});

document.getElementById("dismiss-button").addEventListener("click", () => {
  document.getElementById("install-popup").style.display = "none";
});