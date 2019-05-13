'use strict'

window.addEventListener('load', () => {
    
    Vue.component('header-contacts', {
        props: ['contacts'],
        template: `
        <div class="grid-header">
                <div class="item-header item-header-1">{{contacts.name}}</div>
                <div class="item-header item-header-2" v-bind:class=contacts.fixed>
                    <a v-bind:href=contacts.link_phone_compact><i class="fa fa-mobile header-phone" v-bind:class=contacts.change></i></a>
                    <a v-bind:href=contacts.link_phone_compact v-bind:class=contacts.seen>{{contacts.link_phone}}</a>
                </div>
                <div class="item-header item-header-3" v-bind:class=contacts.fixed>
                <a v-bind:href=contacts.link_mail_compact><i class="fa fa-envelope-o header-mail" v-bind:class=contacts.change></i></a>
                    <a v-bind:href=contacts.link_mail_compact v-bind:class=contacts.seen>{{contacts.link_mail}}</a>
                </div>
        </div>
        `
      })

    let header = new Vue({
        el: '.main',
        data: {
            height: 'height:1000px',
            contacts: {
                name: 'Метелкин Фёдор',
                link_phone: '+7 (916) 136-16-71',
                link_phone_compact: 'tel:+79161361671', 
                link_mail: 'fredswork@list.ru',
                link_mail_compact: 'mailto:fredswork@list.ru',
                fixed: 'active',
                seen: 'active',
                change: 'active'
            }
        }
     })


    Vue.component('about-block', {
        props: ['settings'],
        template: `
        <div class="about-site">
            <div class="about-zagolovok">
                <p>{{settings.link}}</p>
            </div>
            <div class="about-opisanie">
                <p>{{settings.text}}</p>
            </div>
            <div class="about-close">
                <a v-bind:href=createLink() target="_blank" class="about-link">Перейти</a>
            </div>
            <div class="about-arrow">
                <img src="img/arrow-left.svg">
            </div>
        </div>
        `,
        methods: {
            createLink: function(){
                if (this.settings.link == 'antivor.ru') {
                    return `https://antivor.ru/store/rstat/rstat-real-2d.html`;  
                }
                return `https://${this.settings.link}/`;
              }
        }
      })


      let section_settings =  {};

    let about_v_section =  new Vue({
        el: '.about-site-section',
        data: {
            settings: section_settings
        }
    })

    let obj_settings =  [
        {
            link: 'kuhni-mytishi.ru',
            text: `
            Kuhni-mytishi.ru - лендинг для компании, предоставляющей услуги, связанные с покупкой новой кухни.
            Примечательно, что тут я выступил в том числе в качестве дизайнера, поскольку макет также разрабатывал я.
            Для создания анимированных эффектов в данном проэкте использовал jquery. Подключал как сторонние плагины (slick, lightbox),
            так и многие элементы (выезжающие блоки с разных сторон, мобильное меню) делал сам. Отправка форм осуществляется посредствам
            стандартного Ajax запроса. 
            `
        },
        {
            link: 'fitoestetika.ru',
            text: `
            Fitoestetika.ru - одностраничный лендинг. Написан с использованием JQUery и сторонних плагинов, таких как lightbox 
            для создания галереи. Форма отправки сделана без помощи плагинов. Тут инетресно, что эксперементировал с фиксацией 
            заднего фона блокак посредством background-attachment. Дизайн разрабатывался совместно с заказчиком, я вносил правки 
            преимущественно при разработке адаптации сайта.
            `
        },
        {
            link: 'vandeco.ru',
            text: `
            Vandeco.ru - интернет-магазин по продаже зеркал. Здесь реализована система региональности для покупателей по всей России.
            Скрипт автоматически определяет местоположение покупателя по ip, а если покупатель не согласен, то благодаря умному поиску
            (самописному) он может выбрать другой город. Vandeco разработан на webasyst и за счет этого, реализована целая система статусов
             заказов. Так же настроена интеграция с личным кабинетом службы доставки СДЭК, благодаря самописному скрипту на php.
            `
        },
        {
            link: 'antivor.ru',
            text: `
            Antivor.ru - сайт-презентация компании. Сам сайт написан на Yii, так что тут у меня появился опыт работы
            с данным фремворком  в частности и с MVC в общем. На странице контактов я работал с API яндекс карт и менял визуальное
            отображение интерфейса карты и маркеров. Сама старница презентации товара написана с использованием Vue.js, 
            а так же используя преимущества ES6.  
            `
        },

    ];

    let dots_section  = new Vue ({
        el: '.dots-section',
        data: {
            dots: [
            ]
        }
       


    })

    let images_obj = [
        {img:[
            {item_img:'img/img-achivment-15.png'},
         ]
        },
        {img:[
            {item_img:'img/img-achivment-13.png'},
            {item_img:'img/img-achivment-14.png'},
         ]},
        {img:[
            {item_img:'img/img-achivment-10.png'},
            {item_img:'img/img-achivment-11.png'},
            {item_img:'img/img-achivment-12.png'},
         ]},
         {img:[
            {item_img:'img/img-achivment-6.png'},
            {item_img:'img/img-achivment-7.png'},
            {item_img:'img/img-achivment-8.png'},
            {item_img:'img/img-achivment-9.png'},
         ]},
         {img:[
            {item_img:'img/img-achivment-1.png'},
            {item_img:'img/img-achivment-2.png'},
            {item_img:'img/img-achivment-3.png'},
            {item_img:'img/img-achivment-4.png'},
            {item_img:'img/img-achivment-5.png'},
         ]},
    ];
 

    new Vue ({
        el: '.last',
        data: {
            images: images_obj
        }

    })

   


    

    

        
  
 

     let first_flag = false;   // вспомогательный флаг номер 1  (чтобы понять стоит ли переносить контакты)
     let height_header = document.querySelector('.header').getBoundingClientRect().bottom;  // высота блока шапки
     let last_scroll = window.pageYOffset;  // в данную переменную заносим начальное значение скрола на момент открытия страницы
     let current_scroll = 0; // выносим переменную с текущим скролом
     let second_flag = false;  // вспомогательный флаг для того, чтобы скролился один раз а потом ждал
     let current_section = 0;  // номер текущяей секции на экране
     let current_top = 0;   // начальная позиция скролла, совпадает с верхней позицией скролла
     let ScrollTo = 0;  // позиция на которую надо прокрутить, совпадает с верхней позицией блока до или после текущего
     let obj_section = [];  // массив в котором будут находиться наши секции
     let about_section = document.querySelector('.about-site-section'); // наша секция с описанием
     let about_block = about_section.querySelector('.about-site');  // наш блок, который выдвигается
     let about_link = about_block.querySelector('.about-close  a'); // кнопка перейти в нем
     let about_arrow = about_block.querySelector('.about-arrow'); // стрелка для скрытия блока
     let obj_all_section = document.querySelectorAll('section'); // все секции в одном объекте
     let show_flag = false;   // вспомогательный флаг, который показывает нужно ли выдвигать блок
     let current_settings = {};  // переменная в которой хранится нужный объект для блока с описанием
     let obj_dots = [];  // массив всех элементов dot
     let last_items = document.querySelectorAll('.last-item');
     let only_items = document.querySelector('.last-item');


     obj_all_section.forEach(function(item,i){  // пробегаемся по всем секциям
        dots_section.dots.push({div:i});    // и заполняем экземпляр vue количеством точек равным количеству секций
     });



      document.querySelectorAll('.section').forEach(function(item,i){ // пробегаемся пов сем секциям
        obj_section[i] = item.getBoundingClientRect().top;  // и заносим в массив все верхнии позиции всех секций
     });
 
    window.addEventListener('scroll', function() {   // при прокрутке страницы 
        document.querySelector('.dots-section').style.opacity = '1';  
        if (window.pageYOffset>height_header) {  // если вверх экрана опустился ниже шапки
            if (!first_flag){   // то проверяем если переменной false
                change_location('.item-header .fa');  // то вызываем функцию которая меняет положение элементов
                first_flag = true;   // и присваиваем переменной true
            }
        } else {   // если поднялись наверх
            if (first_flag){    // то проверяем если перменная true 
            change_location('.item-header .fa');   // то вызываем функцию смены положения
            first_flag = false;   // а переменную переводим в false
            }
        }

      

        current_scroll = window.pageYOffset;  // заносим в переменную текущию позицию скрола

        if (current_scroll >= last_scroll) {  // если текущяя позиция скролла больше предыдущей (значит скролим вниз)
            if (!second_flag){  // проверяем если флаг равен false
                show_about_block('unshow');
                let help_section = 0;  // вспомогательная переменная которая позволит хранить нужный номер не перебивая его в цикле
                obj_section.forEach(function(item,i){  // пробегаемся по созданному выше массиву
                    if (current_section == i) {  // когда нашли номер нашей секции в массиве
                        help_section = i+1;  // то присваиваем номер следующей секции (потому что листаем вниз)
                                            // в вспомгательную переменную  
                    }
                });
                current_section = help_section;  // номер текущей позиции теперь присваиваем следующию позицию
                ScrollTo = obj_section[current_section]; // в переменную куда нам надо пролистать заносим верхнию 
                                         //позицию уже следующей секции
                obj_settings.forEach(function(item,i){  // пробегаемся по созданному выше массиву
                     if (current_section == i+1) {  // когда нашли номер нашей секции в массиве
                             current_settings = item; // то в переменную с объектом описания секции заносим нужное описание
                          }
                   });
                
                change_show_about();

               
               // if (show_flag) {
                    easyScroll(ScrollTo, 'down',show_flag); // вызываем функцию пролистывания до нужной секции,                                         // передавая позицию этой секции и направление
              //  }
                  
               
                second_flag = true;  // меняем флаг, чтобы он дальше не вызывал эту функцию
            }
        } else {  // если мы крутим вверх
            if (!second_flag){  // опять проверяем флаг
                show_about_block('unshow');
                let help_section = 0;   // опять присваиваем дополнительную переменную, в которой
                                            // вне цикла будем хранить позицию секции
                obj_section.forEach(function(item,i){  // пробегаемся по массиву секций
                    if (current_section == i) {  // когда нашли нужную секцию
                        help_section = i-1;   // то присваивае мномер предыдущей секции (поскольку листаем вверх)
                    }
                });
                current_section = help_section;  // номер текущей позиции теперь присваиваем предыдущию позицию
                ScrollTo = obj_section[current_section];   // в переменную куда нам надо пролистать заносим верхнию
                                                            //позицию уже предыдущей секции

                  obj_settings.forEach(function(item,i){  // пробегаемся по созданному выше массиву
                      if (current_section == i+1) {  // когда нашли номер нашей секции в массиве
                              current_settings = item; // то в переменную с объектом описания секции заносим нужное описание
                           }
                    });

                        change_show_about();  // функция которая понимает нужно ли выдвигать блок
                                              // на основе того, есть ли этот блок у секции вообще
                        
                      
                        easyScroll(ScrollTo, 'up',show_flag); // вызываем функцию пролистывания до нужной секции,
                                                // передавая позицию этой секции и направление и нужно ли выдвигать блок
                                                       
                    
                second_flag = true;   // меняем флаг, чтобы он дальше не вызывал эту функцию
            }
        }

        last_scroll = current_scroll;  // обновляем позицию текущего скрола, чтобы вновь потом понять куда листает пользователь
    });

    function easyScroll(scrollTo,direction,show_flag) {  // функция пролистывания страницы до нужноной секции
        let  i = current_top;   // начальное значение скролла присваиваем текущее верхнее положение секции
        
        let start = setInterval(() => {  // запускаем setInterval
          window.scrollTo(0, i);  // сперва пролистываем, выравниваем позицию скролла и экрана
          if (direction == 'up') {   // если движемся вверх
            i -= 10;  // то уменьшаем нашу позицию вверхнию на десять как бы двигая всю страницу на десять пикселей вверх
            if (i <= scrollTo){   // если уже дошли до того момента куда нам надо пролистать
                window.scrollTo(0, scrollTo);   // еще разок пролистываем, что блок встал ровно
                clearInterval(start);  // и прекращаем выполнения setinterval
                setTimeout(()=>{  // дожидаемся когда окончательно доработает скроллинг
                    second_flag = false;   // и меняем флаг, давай понять, что можно снова скролить
                    if (only_items.classList.contains('last-item-show')) {
                        last_items.forEach(function(item,i){
                            item.classList.remove('last-item-show');
                        });
                    }
                    paint_dot();              // закрашиваем текущию точку
                    if (show_flag) {    // если нужно выдвигать блок
                    about_v_section.settings = current_settings;
                    show_about_block('show');  // выдвигаем блок
                    }
                },300)  
                current_top =  scrollTo;  // и начлаьную позицию скролла присваиваем текущию позицию секции
              }
          } else {   // все тоже самое только прибавим значение на десять пискелей к старнице, потому что листает пользователь вниз
            i += 10;
            if (i >= scrollTo){ 
                window.scrollTo(0, scrollTo);
               
                clearInterval(start);
                setTimeout(()=>{
                    second_flag = false; 
                   // console.log(obj_all_section[3]);
                    if (obj_all_section[current_section].classList.contains('last')) {
                        last_items.forEach(function(item,i){
                            item.classList.add('last-item-show');
                        });
                    }
                    paint_dot();
                    if (show_flag) {
                    about_v_section.settings = current_settings;
                    show_about_block('show');
                    }
                },300)
                current_top =  scrollTo;
              }
            
          }
           
        }, 5);
    }   
    

    setTimeout(() =>{
        document.querySelector('.grid-one').classList.add('header-vissible');  // спустя одну секунду выедут блоки
    }, 1000);
 
      function change_location(element) { // функция смены положения контактных данных 
        let headers= document.querySelectorAll(element);  // получаем наши контакты
        if (header.contacts.seen == 'active') {   // если класс стоит по умолчанию
            headers.forEach((item)=>{    // то пробегаемся по каждому элементу
                item.style.opacity = '0'; //  то сперва пусть все исчезнут
            });
            setTimeout(() => {   // а затем через нескоторое время (после анимации)
                header.contacts.fixed = 'item-fixed';  // зафиксировать блок справа
                header.contacts.seen = 'disable';  // исчезнет телефон сверху
                header.contacts.change = 'change'   // измениться значок справа
            }, 400);  
        } else {           // если уже изменилось, то 
            header.contacts.change = 'active';  // то меняем класс элемнета по умолчанию
            headers.forEach((item)=>{   // пробегаемся по всем элементам 
                item.style.opacity = '0';  // и скрываем их
            });
            setTimeout(() => {   // а через некоторое время после анимации
                header.contacts.fixed = 'active';  // возвращаем на место элемнеты
                header.contacts.seen = 'active';  // появляется телефон
                headers.forEach((item)=>{   // и для каждого элемнета 
                    item.style.opacity = '1';   // отображаем его
                });
            }, 400);
        }
      };


      function show_about_block(show) {   // функция которая выдвигает блок
          switch (show) {     // передаем сюда параметр нужно ли выдвигать
              case 'show' :    // если нужно
                about_section.style.opacity = '1';
                about_block.classList.add('about-show');    // добавляем разные классы для выдвигания блока
                about_block.classList.add('about-content-show');
                about_link.classList.add('link-pulse');   // пульсация кнопки перейти
                about_block.style.visibility = 'visible'; 
                break;

              case 'unshow' :             // если не нужно, то убираем эти классы
                about_block.classList.remove('about-content-show');
                about_block.classList.remove('about-show'); 
                about_link.classList.remove('link-pulse');
                break;

          }
      }

      about_arrow.addEventListener('click', () => {   // при нажатии стрелочек в выдвижном блоке
           let show = 'show';    // говорим что нужно выдвигать по умолчанию
         if (about_block.classList.contains('about-show')) {   // если секция выдвинута
              show = 'unshow';  // то   убираем ее
         } 
          show_about_block(show);  // функция которая выдвигает блок
      });

      function change_show_about() {   // функция которая понмиает стоит ли выдвигать блок
        show_flag = true;     // по умолчанию выдвигаем
        obj_all_section.forEach(function(item,i){   // пробегаемся по всем секциям
            if (i == current_section) {             // ищем секцию на которую будем пролистывать
                    if (item.classList.contains('show-none')) {   // если секция не содержит блок для выдвижения
                     about_section.style.opacity = '0'; 
                     about_block.style.visibility = 'hidden'; 
                     show_flag = false;   // то не выдвигаем
                    }
                }
                                                
        }); 
      }

      function paint_dot() {   // функция закрашивания точек при скролле
        obj_dots = document.querySelectorAll('.dot');
        obj_dots.forEach(function(item,i){ // пробегаемся по всем сформированным точкам
            if (current_section == i) {   // если нашли нужную нам точку которая соответствует текущей секции
                item.classList.add('dot-active');  // то добавляем класс, который закрасит точку
            } else {                                // для всех остальных 
                item.classList.remove('dot-active');  //  убираем акрашивание
            }
        });
      }

     document.querySelector('.dots-section').addEventListener('click', function(event){
        let index = event.target.getAttribute('data-index');
        if (current_section != index) {

            let direction = '';

            if (current_section > index) {
                direction =  'up';
            } else {
                direction = 'down';
            }
            current_section = index;


            if (!second_flag){
            show_about_block('unshow');

            ScrollTo = obj_section[current_section];   // в переменную куда нам надо пролистать заносим верхнию
            //позицию уже предыдущей секции
    
            obj_settings.forEach(function(item,i){  // пробегаемся по созданному выше массиву
            if (current_section == i+1) {  // когда нашли номер нашей секции в массиве
            current_settings = item; // то в переменную с объектом описания секции заносим нужное описание
            }
            });
            
            change_show_about();  // функция которая понимает нужно ли выдвигать блок
            // на основе того, есть ли этот блок у секции вообще

            
            
            easyScroll(ScrollTo, direction ,show_flag); // вызываем функцию пролистывания до нужной секции,
            // передавая позицию этой секции и направление и нужно ли выдвигать блок

            second_flag = true;
                
            }

        }

     });


    











});