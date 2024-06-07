

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src=pic;

}
function closeFullImg(){
    fullImgBox.style.display = "none";


}

document.addEventListener('DOMContentLoaded', function() {
    // Select all containers
    const containers = document.querySelectorAll('.container');
  
    // Loop through each container
    containers.forEach(container => {
      // Select the relevant elements inside each container
      const info = container.querySelector('.info');
      const knowMore = container.querySelector('.know-more');
  
      // Add mouseover event listener
      container.addEventListener('mouseover', function() {
        info.classList.add('active');
        knowMore.classList.add('active');
      });
  
      // Add mouseout event listener
      container.addEventListener('mouseout', function() {
        info.classList.remove('active');
        knowMore.classList.remove('active');
      });
    });
  });
