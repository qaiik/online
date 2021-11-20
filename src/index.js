function online(no) {
  let xhr = new XMLHttpRequest();
  xhr.timeout = 2000;
  xhr.onTimeout=no;
  xhr.onError=no;
 }

