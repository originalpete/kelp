function randomSign() {
  return Math.random() < 0.5 ? '-' : '+';
}

document.addEventListener("DOMContentLoaded", function(){

  var movementBase     = 5;
  var movementVariance = 15;
  var durationBase     = 1000;
  var durationVariance = 3000;
  var delayBase        = 500;
  var delayVariance    = 1000;

  anime({
    targets: 'g.horizontal rect.m.l',
    translateX: function() {return - movementBase - Math.random() * movementVariance},
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutQuad',
    // offset: function(){var o = randomSign() + '=' + Math.round(Math.random() * 10000); console.log(o); return o;},
    delay: function(){return delayBase + Math.random() * delayVariance;},
    duration: function(){return durationBase + Math.random() * durationVariance;}
  });

  anime({
    targets: 'g.vertical rect.m.t',
    translateY: function() {return - movementBase - Math.random() * movementVariance},
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutQuad',
    // offset: function(){var o = randomSign() + '=' + Math.round(Math.random() * 10000); console.log(o); return o;},
    delay: function(){return delayBase + Math.random() * delayVariance;},
    duration: function(){return durationBase + Math.random() * durationVariance;}
  });

  anime({
    targets: 'g.vertical rect.m.b',
    translateY: function() {return + movementBase + Math.random() * movementVariance},
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutQuad',
    // offset: function(){var o = randomSign() + '=' + Math.round(Math.random() * 10000); console.log(o); return o;},
    delay: function(){return delayBase + Math.random() * delayVariance;},
    duration: function(){return durationBase + Math.random() * durationVariance;}
  });

});
