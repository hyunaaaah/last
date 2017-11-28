require('../less/recommend.less');
require('../js/main');

var perfumeListTemplate = require('../template/list.hbs');
var perfumeListImg = require('../js/list/listIMG');

var selectTemplate = require('../template/detailSelect.hbs');
var brandList = require('./list/listDetail');
function detailSearch() {
    $('.detail-button').on('click', function () {
        $('.detail-box').css('display', 'inline-block');
        $('.detail-layer').addClass('layer');

        for (var i=0; i<brandList.brand.length; i++) {
            var brandSelect = selectTemplate(brandList.brand[i]);

            $('.detail-select.brand').append(brandSelect)
        }

        for (var i=0; i<brandList.image.length; i++) {
            var imageSelect = selectTemplate(brandList.image[i]);

            $('.detail-select.image').append(imageSelect);
        }

        for (var i=0; i<brandList.season.length; i++) {
            var seasonSelect = selectTemplate(brandList.season[i]);

            $('.detail-select.season').append(seasonSelect);
        }

        for (var i=0; i<brandList.gender.length; i++) {
            var genderSelect = selectTemplate(brandList.gender[i]);

            $('.detail-select.gender').append(genderSelect);
        }

        for (var i=0; i<brandList.type.length; i++) {
            var typeSelect = selectTemplate(brandList.type[i]);

            $('.detail-select.perfume-type').append(typeSelect);
        }

        for (var i=0; i<brandList.age.length; i++) {
            var ageSelect = selectTemplate(brandList.age[i]);

            $('.detail-select.age').append(ageSelect);
        }
    });

    $('.detail-layer').on('click', function () {
        $('.detail-box').css('display', 'none');
        $('.detail-select').empty();
        $('.detail-layer').removeClass('layer');
    });
}
detailSearch();


function imgList() {
    for(var i=0; i<perfumeListImg.length; i++) {
        var perfumeList = perfumeListTemplate(perfumeListImg[i]);

        $('.perfume-list').append(perfumeList);
    }

    $('.perfume-info #jo_nut').css('width', '180px');
    $('.perfume-info #jo_nut').css('height', '250px');
}
imgList();

function detailView() {
    $('.perfume-info').on('click', function () {
        if ($(this).find('.like').hasClass('fa-star')) {
            $(this).find('.like').removeClass('fa-star');
            $(this).find('.like').addClass('fa-star-o');
        }
        else {
            $(this).find('.like').removeClass('fa-star-o');
            $(this).find('.like').addClass('fa-star');
        }

        var clickIndex = $(this).index();

        $('.detail-view').addClass('info-detail-view');

        var perfumeIntro = require('../template/introduce.hbs');
        var color = perfumeListImg[clickIndex].color;
        var detail = perfumeIntro(perfumeListImg[clickIndex]);

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
detailView();


//...
$('.search-button').on('click', function () {
    var listSample = require('../sample/listSample.hbs');
    $('.perfume-list').empty();
    $('.perfume-list').append(listSample);
    $('.detail-box').css('display', 'none');

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
});

