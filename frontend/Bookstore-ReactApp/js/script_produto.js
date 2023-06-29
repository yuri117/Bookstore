function id( el ){
    return document.getElementById( el );
}
window.onload = function(){
    id('mais').onclick = function(){
            id('qtd').value = parseInt( id('qtd').value )+1;
            
    }
    id('menos').onclick = function(){
            if( id('qtd').value>1 )
                    id('qtd').value = parseInt( id('qtd').value )-1;
            
    }
}