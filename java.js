
let bloco = document.getElementById('bloco')
let res= document.getElementById('res')



 function  numeroAleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)) + min
}
let aleat = numeroAleatorio (1,100)


bloco.addEventListener('click', function Caixa(){
    let caixa =  document.createElement ('input')
    caixa.type = 'number'
    document.body.appendChild(caixa)
    let confirmar = document.createElement('button')
    confirmar.textContent= 'Confirmar'
    document.body.appendChild(confirmar)
    res.innerHTML=''
     caixa.classList.add('caixa')
     confirmar.classList.add('confirmar')

     confirmar.addEventListener('click',function(){
        let num = Number(caixa.value)
        if ( num >= 1&& num<=100){
            adivinhar(num)
        }else{
           window.alert('Número inválido')
        } })
        caixa.value=''
        bloco.removeEventListener('click',Caixa)  
        
        
         })
        function adivinhar (num){
            if ( num >aleat){
                res.innerHTML='Seu chute foi um pouco alto , tente novamente'
               

            }else if (num< aleat ){
                res.innerHTML='Seu chute foi um pouco baixo , tente novamente '
                
            } else{
                res.innerHTML = ' Parabéns , você acertou!!🎉'
            


                 
            }
        }
    
        




