$('.tlt').textillate({
	loop: true,
	minDisplayTime: 2000,
	initialDelay: 0,
	autoStart: true,
	in: {
  	// set the effect name
    effect: 'fadeInUp',
    // set the delay factor applied to each consecutive character
    delayScale: 1.5,
    // set the delay between each character
    delay: 350,
    sequence: true
  },
  // out animation settings.
  out: {
    effect: 'fadeOutDown',
    delayScale: 1.5,
    delay: 150,
    shuffle: true,
  }
});