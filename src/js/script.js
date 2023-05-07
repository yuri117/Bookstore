function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'block';
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'inline-block';
        burguer.style.display = 'none';
    } else {
        itens.style.display = 'none';
        burguer.style.display = 'inline-block';
    }
}