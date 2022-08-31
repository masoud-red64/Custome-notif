let body = document.body
let dark = document.querySelector('.dark')
let span = document.querySelectorAll('.action')
span.forEach((i)=>{
    i.addEventListener('click', (e)=>{
        console.log(e.target.previousElementSibling);
        let input = e.target.previousElementSibling
            if(input.checked === true){
                input.checked = false
            }else{
                input.checked = true
            }
       
        
    })
})


span[4].addEventListener('click', ()=>{
    if(dark.checked === true){
       body.classList.add('darkMode')
    }else{
        body.classList.remove('darkMode')

    }

})
