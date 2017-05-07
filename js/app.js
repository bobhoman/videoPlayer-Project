const video = document.getElementById('myVideo');
const capContainer = document.querySelector('.captions-div');
const captions = document.querySelectorAll('p span');

video.addEventListener('timeupdate', function(){
  for (let i = 0; i < captions.length; i += 1) {
    let time = video.currentTime;
    let start = captions[i].getAttribute('data-start');
    let end = captions[i].getAttribute('data-end');

    if (time >= start && time <= end) {
        captions[i].className = "highlighted";
    } else {
    	captions[i].className = "";
    }
  }
});

capContainer.addEventListener('click', function(event) {
  if (event.target.tagName == 'SPAN') {
  	let curTime = event.target.getAttribute('data-start');
  	video.currentTime = curTime;
  }
});

