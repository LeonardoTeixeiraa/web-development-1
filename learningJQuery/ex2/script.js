$(document).ready(function() {
    const $body = $('body');
    const $caixas = $('.caixa');
    const $previewTexto = $('#preview-texto');
    const $btnReset = $('#btnReset');
    const $mensagemDiv = $('#mensagem');

    const corOriginal = $body.css('background-color') || 'rgb(255, 255, 255)';
    
    $body.data('corBase', corOriginal); 

    function mostrarMensagem(htmlTexto) {
        $mensagemDiv
            .html(htmlTexto)
            .css('visibility', 'visible')
            .delay(3000)
            .queue(function(next) {
                $(this).css('visibility', 'hidden');
                next();
            });
    }

    $caixas.each(function() {
        const $caixa = $(this);
        const corDaCaixa = $caixa.css('background-color');

        $caixa.on('click', function() {
            $body.css('background-color', corDaCaixa);
            
            $body.data('corBase', corDaCaixa); 
            
           
        });

        $caixa.on('mouseenter', function() {
            $body.css('background-color', corDaCaixa);
            $previewTexto.css('visibility', 'visible');
        });
        $caixa.on('mouseleave', function() {
            const corBase = $body.data('corBase');
            $body.css('background-color', corBase);
            $previewTexto.css('visibility', 'hidden');
        });
    });

    $btnReset.on('click', function() {
        $body.css('background-color', corOriginal);
        
        $body.data('corBase', corOriginal);
        
        mostrarMensagem('Cor base resetada para a cor original.');
    });
});