var startx
//获得角度
function getAngle(angx, angy) {
  return Math.atan2(angy, angx) * 180 / Math.PI
}
//判断滑动方向
function getDirection(startx, starty, endx, endy) {
  var angx = endx - startx;
  var angy = endy - starty;
  var result = 0;
  //如果滑动距离太短
  if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
    return result;
  }
  var angle = getAngle(angx, angy);
  if (angle >= -135 && angle <= -45) {
    result = 1;
  } else if (angle > 45 && angle < 135) {
    result = 2;
  } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
    result = 3;
  } else if (angle >= -45 && angle <= 45) {
    result = 4;
  }
  return result;
}
//手指接触屏幕
document.addEventListener("touchstart", function(e) {
  startx = e.touches[0].pageX;
  starty = e.touches[0].pageY;
}, false);
//手指离开屏幕
document.addEventListener("touchend", function(e) {
  var endx, endy;
  endx = e.changedTouches[0].pageX;
  endy = e.changedTouches[0].pageY;
  var direction = getDirection(startx, starty, endx, endy);
  switch (direction) {
    case 0:
      alert("未滑动！");
      break;
    case 1:
      if(endy >= 100){
        console.log(this.$refs.myParhead)
      }
      break;
    case 2:
      alert('向下')
      break;
    case 3:
      alert("向左！")
      break;
    case 4:
      alert("向右！")
      break;
    default:
  }
}, false);