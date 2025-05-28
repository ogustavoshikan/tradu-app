async function traduzir() {
  const texto = document.getElementById("inputText").value;

  const resposta = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      q: texto,
      source: "auto",
      target: "pt",
      format: "text"
    })
  });

  const dados = await resposta.json();
  document.getElementById("output").innerText = dados.translatedText;
}