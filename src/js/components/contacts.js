ymaps.ready(init);
function init() {
const mapElem = document.querySelector('#map');
const myMap = new ymaps.Map(
  "map",
  {
    center: [55.755034, 37.626726],
    zoom: 18,
    controls: []
  },
  {
    suppressMapOpenBlock: true,
  }
);

const myPlacemark = new ymaps.Placemark(
  [55.755034, 37.626726],
  {},
  {
    iconLayout: "default#image",
    iconImageHref: '../img/svg/location.svg',
    iconImageSize: [12, 12],
    iconImageOffset: [-20, -40],
  }
);

myMap.geoObjects.add(myPlacemark);
myMap.container.fitToViewport();
}