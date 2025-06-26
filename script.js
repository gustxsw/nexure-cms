fetch('/content/home.md')
  .then((res) => res.text())
  .then((text) => {
    const content = matter(text).data;

    document.getElementById('headline').textContent = content.headline;
    document.getElementById('subheadline').textContent = content.subheadline;

    const benefitsList = document.getElementById('benefits-list');
    content.benefits.forEach((b) => {
      const li = document.createElement('li');
      li.textContent = b;
      benefitsList.appendChild(li);
    });

    const planosContainer = document.getElementById('planos-container');
    content.planos.forEach((plano) => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${plano.nome}</h3><p>${plano.descricao}</p>`;
      planosContainer.appendChild(div);
    });
  });