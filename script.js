document.getElementById('ternas-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const a = parseInt(document.getElementById('a').value);
  const b = parseInt(document.getElementById('b').value);
  const c = parseInt(document.getElementById('c').value);

  const resultadoDiv = document.getElementById('resultado');

  if (isPythagoreanTriple(a, b, c)) {
    resultadoDiv.textContent = `(${a}, ${b}, ${c}) formam uma terna pitagórica!`;
    resultadoDiv.style.color = "green";
  } else {
    resultadoDiv.textContent = `(${a}, ${b}, ${c}) não formam uma terna pitagórica.`;
    resultadoDiv.style.color = "red";
  }
});

function isPythagoreanTriple(a, b, c) {
  // Verifica todas as permutações de a, b, c
  return (
    a * a + b * b === c * c ||
    a * a + c * c === b * b ||
    b * b + c * c === a * a
  );
}
