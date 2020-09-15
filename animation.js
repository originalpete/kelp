document.addEventListener("DOMContentLoaded", function(){
  anime({
    targets: 'g.horizontal rect.m.l',
    translateX: function() {return - 10 - Math.random() * 10},
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutQuad',
    // offset: function(){return '+=' + Math.round(Math.random() * 10000);},
    delay: function(){return Math.random() * 500;},
    duration: function(){return 2000 + Math.random() * 1000;}
  });

  anime({
    targets: 'g.vertical rect.m.t',
    translateY: function() {return - 10 - Math.random() * 10},
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutQuad',
    // offset: function(){return '+=' + Math.round(Math.random() * 10000);},
    delay: function(){return Math.random() * 500;},
    duration: function(){return 2000 + Math.random() * 1000;}
  });

  anime({
    targets: 'g.vertical rect.m.b',
    translateY: function() {return + 10 + Math.random() * 10},
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutQuad',
    // offset: function(){return '+=' + Math.round(Math.random() * 10000);},
    delay: function(){return Math.random() * 500;},
    duration: function(){return 2000 + Math.random() * 1000;}
  });

});
