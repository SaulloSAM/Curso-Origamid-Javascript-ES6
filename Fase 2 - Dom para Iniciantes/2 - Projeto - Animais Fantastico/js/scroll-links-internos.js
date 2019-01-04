/**
 * Ativar Scroll Interno
 * ---
 * 
 * Iniciar Evento de Scroll para cada link interno da página - Efeito Suave.
 */
function initScrollLinks () {

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    linksInternos.forEach(link => link.addEventListener('click', scrollToSection));

    function scrollToSection (event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

        // Opção Alternativa
        // window.scrollTo({
        //     top: section.offsetTop,
        //     behavior: 'smooth'
        // });
    }

}