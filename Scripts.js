function generateNunber(){

    const min =  Math.ceil (document.querySelector('.Principal').value)
    const max =  Math.floor (document.querySelector('.Secudario').value)

    const result =  Math.floor(Math.random() * (max - min + 1)) + min;
        
    alert(result)
     }