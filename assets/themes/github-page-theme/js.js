var count;
function BackgroundChange(){
  $(function(){
    var color = Math.floor(Math.random() * 0xFFFFFF).toString(16);  //#RRGGBBを取得
      for(count = color.length; count < 6; count++){
            color = "0" + color;            //上位に0を補完する
      }
      color = "#" + color;                    //最上位に#を付ける
      var $logo=$('img#logo');
      $logo.css('background-color',color);       //背景色変
      $logo.css('visibility','visible');       //背景色変
  });
}
window.onload = BackgroundChange;
