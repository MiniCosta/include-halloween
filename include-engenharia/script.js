// Exemplo de animação simples para o menu ao passar o mouse
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff6347';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#fff';
    });
});
