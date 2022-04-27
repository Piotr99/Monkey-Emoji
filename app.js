let closedFace = document.querySelector('.closed');
let openFace = document.querySelector('.open');



    const toggler = ()=>{
        openFace.classList.toggle('active')
        closedFace.classList.toggle('active')
    }
    
    this.addEventListener('click', toggler)
