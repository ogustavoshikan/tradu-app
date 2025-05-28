async function traduzir() {
  const texto = document.getElementById("inputText").value;

  const response = await fetch("https://translate.argosopentech.com/translate", {
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