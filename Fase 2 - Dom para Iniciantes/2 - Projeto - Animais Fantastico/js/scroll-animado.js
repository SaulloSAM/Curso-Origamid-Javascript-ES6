/**
 * Ativar Animação no Scroll
 * ---
 * 
 * Iniciar Evento de animação do Scroll.
 */
function initAnimateScroll () {

    const sections = document.querySelectorAll('.js-scroll');
    const value = window.innerHeight * 0.6;

    window.addEventListener('scroll', animaScroll);
    animaScroll();
    
    function animaScroll () {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top - value;
            if (sectionTop < 0) section.classList.add("ativo");
        })
    }

}