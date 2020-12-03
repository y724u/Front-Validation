$(function () {
  // 必須項目に値が入ってない場合スタイルとエラーの表示をする
  $('.js-textCheck').on('blur', function () {
    const $this = $(this);
    // もし値が入ってない場合は、is-errorを付ける
    if ($this.val() === '') {
      $this.addClass('is-error');
      // inputの下にnoticeを追加する
      $this.after('<p class="validation__notice">入力必須項目です</p>')
    }
    else {
      // 値が入っている場合はis-errorを外す
      $this.removeClass('is-error');
      // inputの下にnoticeを削除
      $this.next('.validation__notice').remove();
    }
  });

  // 必須項目に値が入ってたらボタンを活性化させる
  const $targets = $('.js-form input:required');
  //input:requiredがはずれた時
  $($targets).on('blur', function () {
    // 空白のelを定数に代入
    const $invalidInputs = $targets.filter((i, el) => {
      return $(el).val() === '';
    })
    // $invalidInputs が空白（lengthが０）じゃないかったらdisabledを外す
    $('.js-registration').prop('disabled', $invalidInputs.length !== 0);
  });
});
