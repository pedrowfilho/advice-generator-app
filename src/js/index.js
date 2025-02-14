const botaoGerarConselho = document.getElementById("btn-gerar-conselho");

const idDoConselho = document.getElementById("id-conselho");

const descricaoDoConselho = document.getElementById("descricao-conselho");

async function gerarConselhos() {
  const url = "https://api.adviceslip.com/advice";

  const resposta = await fetch(url);

  if (!resposta.ok) {
    throw new Error("Advice Slip API retornou o erro: " + resposta.status);
  }

  const json = await resposta.json();

  console.log("Json:", json);

  return json;
}

async function gerarUmConselho() {
  /* 5. Tratar os erros durante a chamada da API usando o try-catch */
  try {
    const conselho = await gerarConselhos();
    const id = conselho.slip.id;
    const descricao = conselho.slip.advice;

    atualizarConteudo(id, descricao);
  } catch (erro) {
    console.log("Erro:", erro);
  }
}

/* 6. atualizar o conteúdo do id e descrição do conselho que foram atribuídos a variáveis usando o innerText */
function atualizarConteudo(id, descricao) {
  idDoConselho.innerText = `Advice #${id}`;
  descricaoDoConselho.innerText = descricao;
}


/* 7 e 8 */
botaoGerarConselho.addEventListener("click", () => {
    gerarUmConselho();
});
