 // 3D scroll

let zSpacing = -1000,
    lastPos = zSpacing / 5,
    zVals = [],
    framesElements = document.getElementsByClassName('frame'),
    frames = Array.from(framesElements);

window.addEventListener('scroll', () => {
   let top = document.documentElement.scrollTop,
       delta = lastPos - top;

   lastPos = top;

   frames.forEach((n, i) => {
      zVals.push((zSpacing * i) + zSpacing);
      zVals[i] += delta * -3;

      let frame = frames[i],
          transform = `translateZ(${zVals[i]}px)`,
          opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;

      frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
   });
});

window.scrollTo(0, 1);

// Audio

const audioBtn = document.querySelector('.audio-btn'),
      audio = document.querySelector('.audio');

audioBtn.addEventListener('click', () => {
   audioBtn.classList.toggle('paused');
   audio.paused ? audio.play() : audio.pause();
});

window.onfocus = function() { // другая вкладка
	audioBtn.classList.contains('paused') ? audio.pause() : audio.play();
   audioBtn.classList.add('paused');
}

window.onblur = function() { 
	audio.pause();
   audioBtn.classList.add('paused');
}