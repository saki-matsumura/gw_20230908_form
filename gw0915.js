$(function() {
    // var contents = $('.input');
    // console.log(contents);
    // $('.input').load();
    // contents.on('load', function(){
    //     contents.fadeIn();
    //     console.log("読み込みが完了しました");
    // });

    var openImgBtn = $('.send'); //「画像を見る」
    var openImgTarget = $('.pop'); //画像
    openImgBtn.on('click', function() { //「画像を見る」ボタンを押すと
        openImgTarget.fadeIn(); //画像がフワッと（fadeIn）現れて
        console.log("送信ボタンを押しました");
    });

    var openImgTarget = $('.pop'); //画像
    openImgTarget.on('click', function() { //「画像を見る」ボタンを押すと
        openImgTarget.fadeOut(); //画像がフワッと（fadeIn）現れて
        console.log("画像を押しました");
    });
    // var sendBtn = $('.send'); //送信ボタンを指定
    // sendBtn.addEventListener('mouseover', () => {
    //     // ここに処理
    //     target.style.background = 'white';
    //     console.log("オンマウス状態")

    // }, false);

    // sendBtn.addEventListener('mouseleave', () => {
    //     // ここに処理
    //     target.style.background = 'red';
    //     console.log("マウスからカーソルを離しました")

    // }, false);
});
