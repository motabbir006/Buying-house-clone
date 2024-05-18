document.querySelectorAll('.toggle-icon').forEach(function(icon) {
    icon.addEventListener('click', function() {
      var additionalText = this.nextElementSibling;
      var title = this.parentElement.querySelector('.toggle-icon'); 
  
      if (additionalText.style.display === 'none') {
        additionalText.style.display = 'block';
      } else {
        additionalText.style.display = 'none';
      }
    });
  });
  
  $(document).ready(function(){
    $('#slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: 'linear' 
    });
});

function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 24.3745, lng: 88.6042}, // Rajshahi city coordinates
      zoom: 12 // Adjust the zoom level as needed
  });
}