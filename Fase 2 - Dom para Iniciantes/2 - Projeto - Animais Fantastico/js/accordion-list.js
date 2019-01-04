/**
 * Ativar Accordion
 * ---
 * 
 * Iniciar Evento para Ativar ou Desativar Texto das FAQs.
 */
function initAccordionList () {

    const accordionList = document.querySelectorAll('.js-accordion dt');

    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);
    });

    function activeAccordion () {
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
    }
    
}