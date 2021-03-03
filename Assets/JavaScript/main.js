window.addEventListener('load',Events);
function Events(){
    bars = document.getElementById("sp");
    bars.addEventListener('click', navDisplay);
    lists = document.getElementById("lists");
}
function navDisplay(){
    console.log("hi");
    if(lists.style.display === 'none'){

        lists.style.display = 'inline-block';
        sp.innerHTML = '<i class="fas fa-times"></i>';
    }
    else{
        lists.style.display = 'none';
        sp.innerHTML = '<i class="fas fa-bars"></i>';
    }
}

