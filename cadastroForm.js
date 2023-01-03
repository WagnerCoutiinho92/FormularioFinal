
    $(document).ready(function(){

 

        //Esconde todos os passos e exibe o primeiro ao carregar a página 
        $('.step').hide();
        $('.step').first().show();

        var passoexibido = function(){
            var index = parseInt($(".step:visible").index());
            if(index == 0){
                //Se for o primeiro passo desabilita o botão de voltar e oculta o botão de Confirmar
                $("#prev").prop('hidden',true);
                $("#next").prop('enable',true);
                $("#button").prop('hidden',true);
                $("#can").prop('hidden',false);


            }else if(index == (parseInt($(".step").length)-1)){
                //Se for o último passo, ocultará o botão de avançar e exibe o botão de Confirmar
                $("#next").prop('hidden',true);
                $("#button").prop('hidden',false);
                $("#can").prop('hidden',true);
                $("#prev").prop('hidden',false);

            }else{
                //Em outras situações os dois serão habilitados, ocultando o Confirmar e exibindo o Proximo
                $("#next").prop('disabled',false);            
                $("#prev").prop('hidden',false);
                $("#button").prop('hidden',true);
                $("#next").prop('hidden',false);

                $("#can").prop('hidden',true);
            }
            

        };
        
        //Executa a função ao carregar a página
        passoexibido();

        //avança para o próximo passo
        $("#next").click(function(){
            $(".step:visible").hide().next().show();
            passoexibido();
        });

        //retrocede para o passo anterior
        $("#prev").click(function(){
            $(".step:visible").hide().prev().show();
            passoexibido();
        });
        


        

        function showCPF()
        {
            $("#divcpf").show();    
            $("#divcnpj").hide();    
        }
        function showCNPJ()
        {
            $("#divcnpj").show();    
            $("#divcpf").hide();
        }

        $(document).ready(function()
        {
            
            $("#radiocpf").click(function(){
                showCPF();
            }); 
            
            $("#radiocnpj").click(function(){
                
                showCNPJ();
            }); 

            showCPF();
    
        });



    function showDEF()
    {
        $("#divcpfn").show();    
        $("#divcnpjn").hide();    
    }
    function showNDEF()
    {
        $("#divcnpjn").show();    
        $("#divcpfn").hide();
    }

    $(document).ready(function()
    {
        
        $("#radiodeficiente").click(function(){
            showDEF();
        }); 
        
        $("#radiondeficiente").click(function(){
            
            showNDEF();
        }); 
      
        
    });

});
