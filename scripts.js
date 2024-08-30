// Adicionando animações para fluidez do botão na pagina Sobre Mim
document.addEventListener("DOMContentLoaded", function() {
    const mostrarHobbiesBtn = document.getElementById('mostrar-hobbies');
    const hobbiesParagrafos = document.querySelectorAll('.hobbies');

    if (mostrarHobbiesBtn && hobbiesParagrafos.length > 0) {
        mostrarHobbiesBtn.addEventListener('click', function() {
            hobbiesParagrafos.forEach(paragrafo => {
                paragrafo.classList.toggle('hidden');
            });
            mostrarHobbiesBtn.textContent = hobbiesParagrafos[0].classList.contains('hidden') ? 'Mostrar Hobbies' : 'Esconder Hobbies';
        });
    }
});
