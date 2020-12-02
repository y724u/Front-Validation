$(function () {
  // // 必須項目のテキストフォーカスが外れたときに、そこに値が入っているかチェックする
  // $('.js-textCheck').on('blur', function () {
  //   const $this = $(this);
  //   const $noticeClass = $this.next('.js-notice');
  //   // もし値が入ってない場合は、alertClassを付ける
  //   if ($this.val() === '') {
  //     $($this).attr('class', 'validation__alert');
  //     // inputの下にnoticeを表示する
  //     $($noticeClass).addClass('show__notice');
  //   }
  //   else {
  //     // 値が入っている場合はtextClassをつける
  //     $($this).attr('class', 'validation__text');
  //     // inputの下にnoticeを表示しない
  //     $($noticeClass).removeClass('show__notice');
  //   }
  // });

  // 必須項目のテキストがチェンジした時に、そこに値が入っているかチェックする
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

  //input:requiredがチェンジした時
  const $target = '.js-list input:required';
  $($target).on('change', function () {
    let flag = true;
    // どちらかの値が空白の場合＝false
    $($target).each(function (e) {
      if ($($target).eq(e).val() === "") {
        flag = false;
      }
    });
    if (flag) {
      // もし必須項目のテキストがどちらも空白じゃない場合
      $('#js-registration').prop('disabled', false);
    } else {
      // もし必須項目のテキストに空白がある場合
      $('#js-registration').prop('disabled', true);
    }

    // if (
    //   $('input:required').val() !== ''
    //   // $('#js-inputText2').val() !== ''
    // ) {
    //   // ボタン活性化のクラスをつける
    //   $('#js-registration').prop('disabled', false);
    // } else {
    //   // 空白がある場合はクラスを外す
    //   $('#js-registration').prop('disabled', true);
    // }
  });
  // // テキストのフォーカスが外れた時
  // $('.js-list').on('change blur', function () {
  //   // もし必須項目のテキストがどちらも空白じゃない場合
  //   if (
  //     $('input:required').val() !== ''
  //     // $('#js-inputText2').val() !== ''
  //   ) {
  //     // ボタン活性化のクラスをつける
  //     $('#js-registration').prop('disabled', false);
  //   } else {
  //     // 空白がある場合はクラスを外す
  //     $('#js-registration').prop('disabled', true);
  //   }
  // });
});
