document.addEventListener("DOMContentLoaded", function(){

  var movementBase     = 5;
  var movementVariance = 15;
  var durationBase     = 1500;
  var durationVariance = 2000;
  var stagger          = 30;
  var easing           = 'easeInOutQuad';

  anime({
    targets: 'rect.m',

    translateX: function(el) {
      var top    = el.classList.contains("t");
      var bottom = el.classList.contains("b");

      if (top || bottom) {return 0};

      var left  = el.classList.contains("l");
      var right = el.classList.contains("r");

      var sign = (left) ? -1 : 1;

      return sign * (movementBase + Math.random() * movementVariance);
    },

    translateY: function(el) {
      var left  = el.classList.contains("l");
      var right = el.classList.contains("r");

      if (left || right) {return 0};

      var top    = el.classList.contains("t");
      var bottom = el.classList.contains("b");

      var sign = (top) ? -1 : 1;

      return sign * (movementBase + Math.random() * movementVariance);
    },

    loop: true,
    direction: 'alternate',
    easing: easing,
    delay: anime.stagger(stagger),
    duration: function(){return durationBase + Math.random() * durationVariance;}
  });

});
