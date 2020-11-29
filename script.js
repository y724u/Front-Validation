$(function () {
  // 必須項目のテキストフォーカスが外れたときに、そこに値が入っているかチェックする
  $('.js-textCheck').on('blur', function () {
    const $this = $(this);
    const $noticeClass = $this.next('.js-notice');
    // もし値が入ってない場合は、alertClassを付ける
    if ($this.val() === '') {
      $($this).attr('class', 'validation__alert');
      // inputの下にnoticeを表示する
      $($noticeClass).addClass('show__notice');
    }
    else {
      // 値が入っている場合はtextClassをつける
      $($this).attr('class', 'validation__text');
      // inputの下にnoticeを表示しない
      $($noticeClass).removeClass('show__notice');
    }
  });

  // テキストのフォーカスが外れた時
  $('.js-list input').on('blur', function () {
    // もし必須項目のテキストがどちらも空白じゃない場合
    if (
      $('#js-inputText1').val() !== '' &&
      $('#js-inputText2').val() !== ''
    ) {
      // ボタン活性化のクラスをつける
      $('.js-registration').addClass('button__allow');
    } else {
      // 空白がある場合はクラスを外す
      $('.js-registration').removeClass('button__allow');
    }
  });
});