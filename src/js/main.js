require('bootstrap');
require('../less/main.less');


function perfumeColor() {
    var colorList = require('./color/perfumeColor');
    var defaultColor = require('./color/defaultColor');

    $('.choice').on('mouseover', function () {
        $(this).css({width: '500px', height: '500px'});
        $('.choice').not($(this)).css('width', '70px');

        for (var i=0; i<colorList.length; i++) {
            var mainBoxID = colorList[i].mainColorID;
            var boxID = $(this).attr('id');

            if (mainBoxID === boxID) {
                $(this).find('.keyword').show();
                $(this).css('background-color', colorList[i].mainColor);
                $('.main-word').attr('style', 'color:' + colorList[i].mainColor);

                var subBoxColorList = colorList[i].subColor;
                for(var j=0; j<subBoxColorList.length; j++) {
                    var otherBox = $('.choice').not($(this));
                    $(otherBox[j]).css('background-color', subBoxColorList[j].color);
                }
            }
        }
    });

    $('.choice').on('mouseout', function () {
        $(this).find('.keyword').hide();
        $('.choice').css({width: '125px', height: '480px'});
        $('.main-word').attr('style', 'color:#9e9e9e');

        for (var i=0; i<colorList.length; i++) {
            var mainBoxID = colorList[i].mainColorID;
            $('#' + mainBoxID).css('background-color', defaultColor[mainBoxID]);
        }
    });
}

perfumeColor();
var perfumeListImg = require('../js/list/listIMG');

$('.choice').on('click', function () {
   var boxId = $(this).attr('id');

   if (boxId === 'warm') {
       require('../js/recommend');
       require('../less/recommend.less');
       var sample = require('../sample/warmSample.hbs');
       $('.main-box').empty();
       $('.main-sentence').after(sample);
       $('.detail-condition').empty();

       $('.perfume-info').on('click', function () {
           var clickIndex = $(this).index();

           $('.detail-view').addClass('info-detail-view');

           var perfumeIntro = require('../template/introduce.hbs');
           var color = perfumeListImg[clickIndex + 12].color;
           var detail = perfumeIntro(perfumeListImg[clickIndex + 12]);

           $('.detail-view').append(detail);

           $('.select-detail-view').css('background-color', color);
           $('.perfume-list').css('opacity', '0.5');
       });

       $('.detail-view').on('click', function () {
           $(this).removeClass('info-detail-view');
           var perfumeIntro = require('../template/introduce.hbs');
           $('.detail-view').empty();

           $('.perfume-list').css('opacity', '1.0');
       });
   }
   else if (boxId === 'citrus') {
       require('../js/recommend');
       require('../less/recommend.less');
       var sample = require('../sample/citrusSample.hbs');
       $('.main-box').empty();
       $('.main-sentence').after(sample);
       $('.detail-condition').empty();

       $('.perfume-info').on('click', function () {
           var clickIndex = $(this).index();

           $('.detail-view').addClass('info-detail-view');

           var perfumeIntro = require('../template/introduce.hbs');
           var color = perfumeListImg[clickIndex + 15].color;
           var detail = perfumeIntro(perfumeListImg[clickIndex + 15]);

           $('.detail-view').append(detail);

           $('.select-detail-view').css('background-color', color);
           $('.perfume-list').css('opacity', '0.5');
       });

       $('.detail-view').on('click', function () {
           $(this).removeClass('info-detail-view');
           var perfumeIntro = require('../template/introduce.hbs');
           $('.detail-view').empty();

           $('.perfume-list').css('opacity', '1.0');
       });
   }
   else if (boxId === 'sweet') {
       require('../js/recommend');
       require('../less/recommend.less');
       var sample = require('../sample/sweetSample.hbs');
       $('.main-box').empty();
       $('.main-sentence').after(sample);
       $('.detail-condition').empty();

       $('.perfume-info').on('click', function () {
           var clickIndex = $(this).index();

           $('.detail-view').addClass('info-detail-view');

           var perfumeIntro = require('../template/introduce.hbs');
           var color = perfumeListImg[clickIndex + 18].color;
           var detail = perfumeIntro(perfumeListImg[clickIndex + 18]);

           $('.detail-view').append(detail);

           $('.select-detail-view').css('background-color', color);
           $('.perfume-list').css('opacity', '0.5');
       });

       $('.detail-view').on('click', function () {
           $(this).removeClass('info-detail-view');
           var perfumeIntro = require('../template/introduce.hbs');
           $('.detail-view').empty();

           $('.perfume-list').css('opacity', '1.0');
       });

   }
   else {
       location.href = './recommend.html';
   }
});


$('.board').on('click', function () {
   location.href = './board.html';
});

$('.logo').on('click', function () {
    location.href = './';
});

$('.recommend').on('click', function () {
    location.href = './recommend.html';
});

$('.about').on('click', function () {
    location.href = './info.html';
});

$('.login').on('click', function () {
    location.href = './login.html';
});


