document.getElementById('hamburger-btn').addEventListener('click',() =>{
    let nav = document.querySelector('nav');
    nav.classList.toggle('sidebar')
})



let navlink = document.querySelectorAll('nav ul li a');

navlink.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        navlink.forEach(nav => nav.classList.remove('active'));

        this.classList.add('active');
    });
});


let toastbox = document.getElementById('toastBox');
let button = document.querySelectorAll('.btn');
button.forEach(button =>{
    button.addEventListener('click',()=>{
        let toast = document.createElement('div');
        toast.classList.add('toast');
        toast.innerHTML='<i class="fa-solid fa-circle-check icon"></i> Successfully Added';
        toastbox.appendChild(toast);
    
        setTimeout(()=>
            toast.remove()
        ,5000);
    });
});