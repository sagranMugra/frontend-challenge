$(document).ready(function(){

var first_name_change = false;
var	second_name_change = false;
var	birthday_change = false;
var	gender_chande = false;

  $('.panel').hide();
  $('.add_user_button').click(function(){
  
  $('.list').append('<div class="card"><div class="pict"><div class="progress"></div><img src="#"></div><div class="text"><p>Title</p>      <p>Description</p><div class="tegs"></div></div></div>');
    /*добавить сброс формы на дефолт*/
    $('.panel').show();
    });

  $('.close').click(function(){
  	/*добавить алерт на несохраненные данные*/
    $('.panel').hide();
  });

  $('.first_name').change(function(){
  	first_name_change = true;
  });

  $('.second_name').change(function(){
  	second_name_change = true;
  });

  $('.birthday').change(function(){
  	birthday_change = true;
  });

  $('.gender').change(function(){
  	gender_change = true;
  });

 $('.save').click(function(){

 	/*
 	проверяем заполнение обязательных полей
 	формируем объект
 	отправляем JSON
 	переделываем уровень заполнения
 	*/
 })
});