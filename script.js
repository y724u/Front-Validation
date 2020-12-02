$(function () {
  // 必須項目に値が入ってない場合スタイルとエラーの表示をする
  $('.js-textCheck').on('change', function () {
    const $this = $(this);
    // もし値が入ってない場合は、is-errorを付ける
    if ($this.val() === '') {
      $($this).addClass('is-error');
      // inputの下にnoticeを追加する
      $($this).after('<p class="validation__notice">入力必須項目です</p>')
    }
    else {
      // 値が入っている場合はis-errorを外す
      $($this).removeClass('is-error');
      // inputの下にnoticeを削除
      $($this).next('.validation__notice').remove();
    }
  });

  // 必須項目に値が入ってたらボタンを活性化させる
  const $target = '.js-list input:required';
  //input:requiredがチェンジした時
  $($target).on('change', function () {
    let flag = true;
    // どちらかの値が空白の場合＝false
    $($target).each(function (e) {
      if ($($target).eq(e).val() === "") {
        flag = false;
      }
    });
    if (flag) {
      // もし必須項目のテキストが全て空白じゃない場合
      $('#js-registration').prop('disabled', false);
    } else {
      // もし必須項目のテキストに空白がある場合
      $('#js-registration').prop('disabled', true);
    }
  });
});
