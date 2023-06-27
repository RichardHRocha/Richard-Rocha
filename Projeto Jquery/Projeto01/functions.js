$(function(){
    /*
^(.*?)@(.*?)$
vai pegar todos os caracteres até o sinal de arroba  (.*?)
osinal de ^ é para indicar para procurar no inicio e o sinal de $ é para delimitar o final
*/
//expressao regular ^ é usado para referir ao primeiro caracter [A-Z], ele terá q ser maicusculo {1} numero de caracter
//[a-z] é para minusculo {1,} do primeiro caracter ao infinito pois está aberto sem numero

        var verifica = 'Teste';
         apuracao = verifica.match(/[A-Za-z0-9]/);//verifica se contem maiuscula ou minusculo ou numero
         console.log(apuracao);

        abrirJanela();
        verificarCliqueFechar();

    function abrirJanela(){
        $(".btn").click(function(e){
            e.stopPropagation();
            $(".bg").fadeIn();
        });
    }

    function verificarCliqueFechar(){

        var el = $("body");

        el.click(function(){
            $('.bg').fadeOut();
        });

        $("form").click(function(e){
           e.stopPropagation();
        });
    }

    $('.form1').submit(function(){
        var nome = $('input[name=nome]').val();
        var email = $("input[name=e-mail]").val();
        var telefone = $("input[name=telefone]").val();
        //variavel para contar o numero de espaços no nome
        var nomeComprimento = nome.split(" ").length; 
        var splitNome = nome.split(" ");
        var emailComprimento = email.split(" ").length; 
        var splitEmail = email.split(" ");
        var telefoneComprimento = telefone.split(" ").length; 
        var splitTelefone = telefone.split(" ");

        if(verificarNome(x) == false){
            aplicarCampoInvalido($('input[name=nome'));
        }
        
        function verificarNome(x){
        if(nome == ""){
            return false;
        }
        if(nomeComprimento >= 2){
            for( var i = 0; i < nomeComprimento; i++){
                
                if(splitNome[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                    
                  
                }else{
                    
                    return false;
                }
            }
        }else{
                
                return false;
        
        }

    }


        if(emailComprimento >= 2){
            for( var i = 0; i < emailComprimento; i++){
                
                if(splitEmail[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                    
                  
                }else{
                    
                    return false;
                }
            }
        }else{
                
                return false;
        
        }
        if(telefoneComprimento == 11){
            for( var i = 0; i < telefoneComprimento; i++){
                /*
^(.*?)@(.*?)$
vai pegar todos os caracteres até o sinal de arroba  (.*?)
osinal de ^ é para indicar para procurar no inicio e o sinal de $ é para delimitar o final
*/
//expressao regular ^ é usado para referir ao primeiro caracter [A-Z], ele terá q ser maicusculo {1} numero de caracter
//[a-z] é para minusculo {1,} do primeiro caracter ao infinito pois está aberto sem numero
                if(splitTelefone[i].match(/[0-9]{1,11}$/)){
                    
                  
                }else{
                    
                    return false;
                }
            }
        }else{
            
                return false;
        
        }

        
        function aplcarCampoinvalido(el){
            el.css('border','2px spçod red');
            el.val('Campo Inválido!');
            el.css('color', 'red');
            //el.data('invalido', 'true');
        }
    });
})
