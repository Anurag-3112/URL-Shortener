const urlMap = JSON.parse(localStorage.getItem("urlMap")) || {};

    function shortenURL() {
      const input = document.getElementById("urlInput").value;
      const result = document.getElementById("result");

      if (!input) {
        result.textContent = "Enter a URL";
        return;
      }

      const shortCode = Math.random().toString(36).substring(2, 7);
      urlMap[shortCode] = input;

      localStorage.setItem("urlMap", JSON.stringify(urlMap));

      const shortURL = `${window.location.origin}${window.location.pathname}?code=${shortCode}`;

      result.innerHTML = `<a href="${shortURL}" target="_blank">${shortURL}</a>`;
    }

    window.onload = function () {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      const storedMap = JSON.parse(localStorage.getItem("urlMap")) || {};

      if (code && storedMap[code]) {
        window.location.href = storedMap[code];
      }
    };