let cuadro = document.querySelectorAll('.dekstop__img');
let num = true;

cuadro.forEach((panel) => {
    panel.addEventListener("click", () => {
        if(num){
            panel.classList.add('zoom');
            num = false;
        }else if(num == false){
            panel.classList.remove('zoom');
            num= true;
            }
    })
});