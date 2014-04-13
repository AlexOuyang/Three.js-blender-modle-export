var rotateSpeed = 0.0;
$(document).ready(function(){

	  document.addEventListener('gest', function(gesture) {
      if (gesture.left) {
		rotateSpeed = 0.001;

      } else if (gesture.right) {
        rotateSpeed = 0.001;

      } else if (gesture.up){
        rotateSpeed = 0.0;

      } else if (gesture.down) {
        rotateSpeed = 0.0;
      }

	  }, false);

  gest.start();
 });