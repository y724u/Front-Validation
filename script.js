$(function() {
  // フロントバリデーション
  // - 入力の必須チェックを行う

  // ・フォームからフォーカスが外れた時に、値があるかチェックする(必須項目の場合のみ)
  // ・値が入力されていなければ「入力必須項目です」とフォームの下に表示する
  // ・フォームからフォーカスが外れた時に、値が入力されてたらエラー表示しない
  // ・必須項目が全て入力されたらボタンを活性化する
  // 　・必須項目が全て入力されるまでは活性化させず送信できないようにする



// 必須項目のテキストフォーカスが外れたときに、そこに値が入っているかチェックする

$('.js-textCheck').on('blur',function() {
  ($(this).val() === '')
  $('input').addClass('.form__alert');
  alert('名前を入力してください！');

  });

  // $('.js-checkbox').on('change', function () {
  //   if ($(this).prop('checked'))
  //     $('.js-button').addClass('box__checked');
  //   else
  //     $('.js-button').removeClass('box__checked');
  // });



// 値が入力されていなければaddClsass「入力必須項目です」とフォームの下に表示する

// 値が入力されていれば何もしない



// ２つの、必須項目にテキストが入っていればaddクラス、pointer-eventを付与する

// １つでも入っていない場合は、removeClass





});