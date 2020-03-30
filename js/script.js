//дожидаемся полной загрузки страницы
window.onload = function() {
  //получаем идентификатор элемента

  var b = document.getElementById("modal_window");
  var c = document.getElementById("bg_modal_window");
  var x = document.getElementById("close_modal");

   var button1 = document.getElementById("button1");
  var img1 = document.getElementById("img1");

  var check = 1;
  button1.onmouseover = function() {
    if (check == 1) {
      $("#img1").toggleClass("zoom");
    }
    check = 2;
  };
  button1.onmouseout = function() {
    if (check == 2) {
      $("#img1").toggleClass("zoomout");
    }
    check = 1;
  };

  c.onclick = function() {
    $("#modal_window").animate({
      width: 10 + "%",
      height: 10 + "%"
    });
    var millisecondsToWait = 300;
    setTimeout(function() {
      b.style.left = "-150%";
      c.style.left = "-150%";
    }, millisecondsToWait);
    $("body").removeClass("stop-scrolling");
  };

  x.onclick = function() {
    $("#modal_window").animate({
      width: 10 + "%",
      height: 10 + "%"
    });

    var millisecondsToWait = 300;
    setTimeout(function() {
      b.style.left = "-150%";
      c.style.left = "-150%";
    }, millisecondsToWait);
    $("body").removeClass("stop-scrolling");
  };
};