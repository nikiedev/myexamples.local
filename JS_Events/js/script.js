/*global $*/

$(function () {
    'use strict';
    
    var alfa = 0.9, nums = 0;
    
    $('.img1 .image').on('click', function (e) {
        $(this).toggleClass('imgactive');
    });
    
    $('.img2 .image').on('click', function (e) {
        $(this).css('opacity', alfa);
        nums += 1;
        if (alfa > 0) {
            alfa -= 0.1;
        } else {
            alfa = 0.9;
        }
    });
    
    $('.img3 .image').on('mousemove', function (e) {
        $(this).css('opacity', alfa);
        if (alfa > 0) {
            alfa -= 0.01;
        } else {
            alfa = 1;
        }
    });
    
    $('.img4 .image-task2').on('mouseover', function (e) {
        $(this).css(
            'background-image',
            'url(images/Cosmos_Reflection_1600x1000.jpg)'
        );
    }).on('mouseout', function (e) {
        $(this).css(
            'background-image',
            'url(images/Serenity_1600x1000.jpg)'
        );
    });
    
    $('.img5 .image-task2').on('mouseover', function (e) {
        $(this).css({
            width: '800px',
            height: '500px',
            margin: 'auto',
            boxShadow: '0 0 10px 10px #000000'
        });
    }).on('mouseout', function (e) {
        $(this).css({
            width: '400px',
            height: '250px',
            margin: '0',
            boxShadow: 'none'
        });
    });
    
});
