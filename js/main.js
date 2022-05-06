
$(function () {
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {
      /*
        2回目以降アクセス時の処理
      */
      $(".loading").addClass('is-active');
    } else {
      /*
        初回アクセス時の処理
      */
      sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
      $(".loading-animation").addClass('is-active'); // loadingアニメーションを表示
      setTimeout(function () {
        // ローディングを数秒後に非表示にする
        $(".loading").addClass('is-active');
        $(".loading-animation").removeClass('is-active');
      }, 3000); // ローディングを表示する時間
    }
  }
  webStorage();
});


/*
ページトップへ戻る
ボタン
*/
$(function() {
  var topBtn = $('#page_top');    
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });
  //スクロールしてトップ
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});

/*
チーズ画像パララックス
*/
jQuery( window ).bind( 'scroll', function() {
	scrolled = jQuery( window ).scrollTop();
	weight1 = 0.5;
	weight2 = 0.10;
  weight3 = 0.25;
	jQuery( '#cheese1' ).css( 'top', 1200 - scrolled * weight1 + 'px' );
	jQuery( '#cheese2' ).css( 'top', 700 - scrolled * weight2 + 'px' );
  jQuery( '#cheese3' ).css( 'top', 1700 - scrolled * weight3 + 'px' );
});



/*
メインビジュアル
文字のスクロール出現
*/
// スクロール出現用関数（.offs ⇄ .ons）
function scr_ani(scr, offs_max) {
  var window_h = $(window).height(),
    offs_length = $(".offs").length,
    ons_length = $(".ons").length,
    wh_pos = 30; // 対象コンテンツの上端が画面下からどれくらい入ったら反応するか。画面高さに対する割合（%）
  if (offs_length) {
    var first_item = offs_max - offs_length;
    for (var i = 0; i < offs_length; i++) {
      var data_scr = first_item + i;
      var offs = $('.offs[data-scr="' + data_scr + '"]');
      var target = offs.offset().top;
      var trigger = target - (window_h + scr - (window_h * wh_pos) / 100);
      if (trigger < 0) {
        offs.removeClass("offs").addClass("ons");
      } else {
        break;
      }
    }
  }
  if (ons_length) {
    var last_item = ons_length - 1;
    for (var i = 0; i < ons_length; i++) {
      var data_scr = last_item - i;
      var ons = $('.ons[data-scr="' + data_scr + '"]');
      var target = ons.offset().top;
      var trigger = target - (window_h + scr);
      if (trigger > 0) {
        ons.removeClass("ons").addClass("offs");
      } else {
        break;
      }
    }
  }
}

$(function () {
  // スクロール出現アイテムにナンバリング
  var offs_max = $(".offs").length;
  for (var i = 0; i < offs_max; i++) {
    $(".offs").eq(i).attr("data-scr", i);
  }
  // ディレイを設定
  var fadeIn_item = $(".fadeIn_item");
  for (var i = 0; i < fadeIn_item.length; i++) {
    let delay = fadeIn_item.eq(i).data("delay");
    if (delay) {
      fadeIn_item.eq(i).css("transition-delay", delay + "s");
    }
  }

  // （リロード時など）ロード時にすでにスクロールされている場合に対応
  var scr = $(window).scrollTop();
  scr_ani(scr, offs_max);

  /************
  スクロール時
  ************/
  $(window).on("scroll", function () {
    var scr = $(window).scrollTop();
    scr_ani(scr, offs_max);
  }); // end scroll
});



/*
スライドショー
*/
$(function(){
	$('.slide__image').infiniteslide({
    speed: 50
	});
});



/* 
moreボタン押下
もっとみれる
*/
$(function(){
  $("#more").on("click", function() {
    $(this).toggleClass("on-click");
    $(".hidden").slideToggle(1000);
    $(this).html('<a href="javascript:void(0);">More</a>').attr('id', 'more');
    
    if ($(this).hasClass("on-click")) {
      $(this).html('<a href="javascript:void(0);">Close</a>').attr('id', 'close');
    }
  });
}); 


jQuery(function($){
  var items = ['モッツアレラチーズ','カマンベールチーズ','クリームチーズ','ラクレットチーズ','チェダーチーズ'];
  rand = items[Math.floor(Math.random()*items.length)];
  if (rand == 'モッツアレラチーズ') {
    $('.random').html('<img src="img/uranai01.jpg" alt=""><p>' + rand + '</p>');
  } else if (rand == 'カマンベールチーズ') {
    $('.random').html('<img src="img/uranai02.jpg" alt=""><p>' + rand + '</p>');
  } else if (rand == 'クリームチーズ') {
    $('.random').html('<img src="img/uranai03.jpg" alt=""><p>' + rand + '</p>');
  } else if (rand == 'ラクレットチーズ') {
    $('.random').html('<img src="img/uranai04.jpg" alt=""><p>' + rand + '</p>');
  } else if (rand == 'チェダーチーズ') {
    $('.random').html('<img src="img/uranai05.jpg" alt=""><p>' + rand + '</p>');
  } else {
    return;
  }
});
