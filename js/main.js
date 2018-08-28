// DOM Content Loaded
$(function(){


    console.log('読み込んだよ');

    // スライドショー
    $('.slider').slick({
        arrows:false, /* 次への矢印 */
        autoplay:true, /* 自動更新 */
        //adaptiveHeight: true, /* 高さの自動調整 */
        dots: true, /* 小さい丸をだすかどうか */
        autoplaySpeed : 2000, /* 切り替えの速さ */
        fade:true,
        pauseOnHover: false /* 最後の行はカンマいらない */
    });

    //   // モーダル
    //   var modalImg = ['img/works01.png','img/works02.png','img/works03.png'];
    //   // プリロード
    //   for(var i=0; i<modalImg.length; i++){
    //     $('<img>').attr('src' ,modalImg[i]);
    //   }
    //
    //   $('#works').find('section').on('click', function(){
    //
    //       // sectionのなんばんめを押したか
    //       var index = $('#works').find('section').index(this);
    //       var modal = $('<div class="modal"><img src="'+ modalImg[index] +'" alt=""></div>')
    //       $('#overlay').html(modal);
    //
    //       console.log(index);
    //       $('#overlay').css('display','block').addClass('fade-in')
    //       $('#overlay').on('click',function(){
    //          $(this).css('display','none').removeClass('fade-in');
    //       });
    //   });


    $(window).on('scroll',function(){
        // 上からのスクロール値
        var dy = $(this).scrollTop();
        // console.log(dy);

// index.htmlのjs ---------------------
        // #works .containerの高さを取得
        var worksContainerTop = $('#alltext').offset().top;
        // console.log(worksContainerTop);

        // スクロールが#works .containerのY座標を超えらたら
        if(dy >= worksContainerTop - $(window).height()){
            // sectionに.fade-inのクラスを追加する
            $('#alltext').find('h2').addClass('fade-in');
        }

        if(dy >= worksContainerTop - $(window).height()){
            // sectionに.fade-inのクラスを追加する
            $('#alltext').find('.text01').addClass('fade-in2');
        }

        if(dy >= worksContainerTop - $(window).height()){
            // sectionに.fade-inのクラスを追加する
            $('#alltext').find('.btn').addClass('fade-in2');
        }

// .titleのjs ---------------------
        // #concept_containarの高さを取得
        var worksContainerTop = $('.title').offset().top;
        // console.log(worksContainerTop);

        // スクロールが#works .containerのY座標を超えらたら
        if(dy >= worksContainerTop - $(window).height()){
        // sectionに.fade-inのクラスを追加する
        $('title').addClass('fade-in');
        }

// history.htmlのjs ---------------------
        // #concept_containarの高さを取得
        var worksContainerTop = $('#history').find('h2').offset().top;
        // console.log(worksContainerTop);

        // スクロールが#works .containerのY座標を超えらたら
        if(dy >= worksContainerTop - $(window).height()){
        // sectionに.fade-inのクラスを追加する
        $('#history').addClass('fade-in');
        }

    });



});
