import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // Função para armazenar as posições atuais dos campos
function salvarPosicoes(cadastro: HTMLElement, login: HTMLElement, btnColor: HTMLElement) {
  localStorage.setItem('posicaoCadastro', cadastro.style.left);
  localStorage.setItem('posicaoLogin', login.style.left);
  localStorage.setItem('posicaoBtnColor', btnColor.style.left);
}

// Função para restaurar as posições salvas dos campos
function restaurarPosicoes(cadastro: HTMLElement, login: HTMLElement, btnColor: HTMLElement) {
  cadastro.style.left = localStorage.getItem('posicaoCadastro') || "0px";
  login.style.left = localStorage.getItem('posicaoLogin') || "450px";
  btnColor.style.left = localStorage.getItem('posicaoBtnColor') || "0px";
}

// Evento que será executado após o carregamento completo da página
document.addEventListener('DOMContentLoaded', () => {
  // Selecionar os elementos relevantes
  const cadastro = document.querySelector<HTMLElement>('#Cadastrar');
  const login = document.querySelector<HTMLElement>('#Logar');
  const btnColor = document.querySelector<HTMLElement>('.btnColor');

  // Verificar se os elementos foram encontrados
  if (!cadastro || !login || !btnColor) {
      console.error('Um ou mais elementos não foram encontrados.');
      return;
  }

  // Chamar a função para restaurar as posições quando a página for carregada
  restaurarPosicoes(cadastro, login, btnColor);

  // Animation
  const btnSignin = document.querySelector<HTMLElement>('#btnSignin');
  if (btnSignin) {
    btnSignin.addEventListener('click', () => {
      cadastro.style.left = "25px";
      login.style.left = "450px";
      btnColor.style.left = "0px";
      salvarPosicoes(cadastro, login, btnColor); // Salvar as posições após a animação
    });
  }

  const btnSignup = document.querySelector<HTMLElement>('#btnSignup');
  if (btnSignup) {
    btnSignup.addEventListener('click', () => {
      cadastro.style.left = "-450px";
      login.style.left = "25px";
      btnColor.style.left = "125px";
      salvarPosicoes(cadastro, login, btnColor); // Salvar as posições após a animação
    });
  }

  // Botão funcional
  const submitButtons = document.querySelectorAll<HTMLElement>('.submit');
  submitButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      // Verificar se os campos de cadastro estão vazios
      const camposCadastro = document.querySelectorAll<HTMLInputElement>('#Cadastrar .campoCadastro');
      const camposPreenchidos = Array.from(camposCadastro).every(campo => campo.value.trim() !== "");

      if (!camposPreenchidos) {
        // Se algum campo estiver vazio, não prosseguir
        alert("Por favor, preencha todos os campos de cadastro.");
        event.preventDefault(); // Impedir a submissão do formulário
        return; // Impedir a execução do código abaixo
      }
      
      // Se os campos não estiverem vazios, continuar com a ação do botão
      cadastro.style.left = "-450px";
      login.style.left = "25px";
      btnColor.style.left = "125px";
      salvarPosicoes(cadastro, login, btnColor); // Salvar as posições após a ação do botão
    });
  });
});
