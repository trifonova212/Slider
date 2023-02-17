let images = [
  {
  changesCity: 'Rostov&hyphen;on&hyphen;Don<br>LCD admiral',
  changesArea: '81 m2',
  changesTime: '3.5 months',
  linkCities: 'Rostov-on-Don, Admiral',
  url: 'https://i121.fastpic.org/big/2023/0205/94/6611bf55e905aceec43750e359855194.png'
  },
  {
  changesCity: 'Sochi<br>Thieves',
  changesArea: '105 m2',
  changesTime: '4 months',
  linkCities: 'Sochi Thieve',
  url: 'https://i121.fastpic.org/big/2023/0205/cb/5da667b97fdd6ab10c51e64304ac92cb.png'
  },
  {
  changesCity: 'Rostov&hyphen;on&hyphen;Don<br>Patriotic',
  changesArea: '93 m2',
  changesTime: '3 months',
  linkCities: 'Rostov-on-Don Patriotic',
  url: 'https://i121.fastpic.org/big/2023/0205/70/8bdae7c75850789a7a16d3afde325d70.png'
  }
];

function initSlider() {
  if (!images || !images.length) return;

  const sliderWrapper = document.querySelector(".section__slider");
  const sliderImages = sliderWrapper.querySelector(".slider-images");
  const sliderArrows = sliderWrapper.querySelector(".switches");
  const sliderDots = sliderWrapper.querySelector(".slider-dots");
  const changesCity = sliderWrapper.querySelector('.changes-city');
  const changesArea = sliderWrapper.querySelector('.changes-area');
  const changesTime = sliderWrapper.querySelector('.changes-time');
  const linkCities = sliderWrapper.querySelector(".section__slider-right_part-cities");

  initImages();
  initArrows();
  initDots();
  initCities();
  initAreas();
  initTimes();
  initLinks();
  
function initImages() {
  images.forEach((image, index) => {
    let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}"
style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
    sliderImages.innerHTML += imageDiv;
  });
}
  
function initArrows() {
  sliderArrows.querySelectorAll(".slider-arrow").forEach(arrow => {
    arrow.addEventListener("click", function() {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber;
      if (arrow.classList.contains("left")) {
        nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
    } else {
        nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
      moveSlider(nextNumber);
    });
  });
}

function initDots() {
  images.forEach((image, index) => {
    let dot = `<div class="slider-dots-item n${index} ${index === 0? "active" : ""}" 
    data-index="${index}"></div>`;
    sliderDots.innerHTML += dot;
  });
  sliderDots.querySelectorAll(".slider-dots-item").forEach(dot => {
    dot.addEventListener("click", function() {
      moveSlider(this.dataset.index);
    })
  })
} 
  
function initLinks() {
  images.forEach((image, index) => {
    let link = `<a class="yeseva-one uppercase slider_item_a n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].linkCities}</a>`;
    linkCities.innerHTML += link;
  });
  linkCities.querySelectorAll(".slider_item_a").forEach(link => {
    link.addEventListener("click", function() {
      moveSlider(this.dataset.index);
    })
  })   
}
  
function initCities() {
  let cityDiv = `<div class="nunito-sans description_slider_two change-city">${images[0].changesCity}</div>`;
  changesCity.innerHTML += cityDiv;
}
function changeCities(num) {
  if (!images[num].changesCity) return;
  let sliderCities = changesCity.querySelector(".change-city");
  sliderCities.innerHTML = images[num].changesCity;
}

function initAreas() {
  let areaDiv = `<div class="nunito-sans description_slider_two change-area">${images[0].changesArea}</div>`;
  changesArea.innerHTML += areaDiv;
}
function changeAreas(num) {
  if (!images[num].changesArea) return;
  let sliderAreas = changesArea.querySelector(".change-area");
  sliderAreas.innerText = images[num].changesArea;
}  
  
function initTimes() {
  let timeDiv = `<div class="nunito-sans description_slider_two change-time">${images[0].changesTime}</div>`;
  changesTime.innerHTML += timeDiv;
}
function changeTimes(num) {
  if (!images[num].changesTime) return;
  let sliderTimes = changesTime.querySelector(".change-time");
  sliderTimes.innerText = images[num].changesTime;
} 
  
function moveSlider(num) {
  sliderImages.querySelector(".active").classList.remove("active");
  sliderImages.querySelector(".n" + num).classList.add("active");
  sliderDots.querySelector(".active").classList.remove("active");
  sliderDots.querySelector(".n" + num).classList.add("active");
  changeCities(num);
  changeAreas(num);
  changeTimes(num);
  linkCities.querySelector(".active").classList.remove("active");
  linkCities.querySelector(".n" + num).classList.add("active");
  } 
  
}

document.addEventListener("DOMContentLoaded", initSlider);