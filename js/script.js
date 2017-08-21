(function(){

let imgs = document.querySelectorAll("header img"),
    gridContainer = document.querySelector("main");


for(let img of imgs){
    img.addEventListener("click", function(e){
        let target = e.target,
            classNew = (target.alt).slice(7);
            
            if( !(gridContainer.classList.value).includes(`grid-${classNew}`) ){

                gridContainer.className = `container grid-${classNew}`;
            }
         
    },false)
}    

console.log(gridContainer.classList.value );


})();