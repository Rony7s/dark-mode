let mode_changer = document.querySelector('#mode_changer');

mode_changer.onclick = () =>{
    mode_changer.classList.toggle('fa-sun');
    if(mode_changer.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}