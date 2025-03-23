

//Toggle lunch-info
const btn = document.querySelector(".toggle");
const text = document.querySelector(".lunch-info");
const image = document.querySelector(".lunch-image-container");

btn.addEventListener('click', function(){
  text.classList.toggle("hide");
  image.classList.toggle("hide");
  btn.classList.toggle("showText");
  
  if(btn.classList.contains("showText")){
    btn.innerHTML = "SHOW INFO";
  } else{
    btn.innerHTML= "HIDE INFO";
  }

});
//toggle lunch-info


//menu-filters
const filterButtons = document.querySelectorAll(".filter-btn");
const categories = document.querySelectorAll(".category");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        const filter = button.id; // button id är dens mat-kategori

        // Ta bort "active" från alla knappar och lägg till på den klickade
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Loopa igenom alla mat-kategorier och lägg till/ta bort klassen "hide"
        categories.forEach(category => {
            if (filter === "showall") {
                category.classList.remove("hide"); 
            } else if (category.classList.contains(filter)) {
                category.classList.remove("hide"); 
            } else {
                category.classList.add("hide");
            }
        });
    });
});
//menu-filters


