// Espera o documento carregar completamente antes de executar
document.addEventListener("DOMContentLoaded", function() {
  // Obtém todos os links do menu
  const menuLinks = document.querySelectorAll('.menu a');
  
  // Obtém todas as seções (páginas)
  const pages = document.querySelectorAll('.page');

  // Função para ocultar todas as páginas
  function hidePages() {
    pages.forEach(page => {
      page.style.display = 'none';
    });
  }

  // Função para mostrar a página correspondente
  function showPage(pageId) {
    hidePages();
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.style.display = 'block';
    }
  }

  // Adiciona o evento de clique para cada link do menu
  menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();  // Previne o comportamento padrão do link
      const pageId = link.getAttribute('data-target');  // Obtém o valor de data-target
      showPage(pageId);  // Exibe a página correspondente
    });
  });

  // Exibe a página de Classes por padrão quando o site carrega
  showPage('classes');
});
