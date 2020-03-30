// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("../sw_fetchall.js")
//     .then(function(registration) {
//       console.log("Service Worker registered with scope:", registration.scope);
//     })
//     .catch(function(err) {
//       console.log("Service Worker registration failed:", err);
//     });
// }

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../sw_fetchall.js")
      .then(reg => console.log("Service Worker: Registered"))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}
