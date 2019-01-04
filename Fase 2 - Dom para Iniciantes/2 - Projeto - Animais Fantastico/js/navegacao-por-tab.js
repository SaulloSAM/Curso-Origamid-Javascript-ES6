/**
 * Ativar TAB
 * ---
 * 
 * Iniciar Evento para Ativar ou Desativar Texto Sobre os animais.
 */
function initTabNav () {
    const tabMenu = document.querySelectorAll('.js-tabMenu li');
    const tabContent = document.querySelectorAll('.js-tabContent section');

    if (tabMenu.lengt && tabContent.length) {

        function activeTab (index) {
            tabContent.forEach( e => e.classList.remove('ativo'));
            tabContent[index].classList.add('ativo');
        }
        
        tabMenu.forEach((e, i) => {
            e.addEventListener('click', () => {
                activeTab(i);
            })
        });

    }
}