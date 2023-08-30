const menuBtn = document.querySelector('.menu');
const sideBar = document.querySelector('.sidebar');

// Adding event listener to menu btn
menuBtn.addEventListener('click', ()=>{
    sideBar.classList.add('showSidebar');
})

// Adding event listener to document
document.addEventListener('mouseup', (e)=>{
    if(!sideBar.contains(e.target)){
        sideBar.classList.remove('showSidebar');
    }
})