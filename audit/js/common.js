$(function() {

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$('#my-menu').mmenu({
		"extensions": [
		"fx-menu-zoom",
		"pagedim-black"
		],
		navbar: {
			title: '<h1>Zakazat<br><span class="padding">Audit</span></h1>',
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:start', function(){
		$('.hamburger').addClass('is-active');
	}).bind('close:start', function(){
		$('.hamburger').removeClass('is-active');
	});

	$(".menu").on("click","a", function (event) {
					//отменяем стандартную обработку нажатия по ссылке
					event.preventDefault();
					
					//забираем идентификатор бока с атрибута href
					var id  = $(this).attr('href'),
					//узнаем высоту от начала страницы до блока на который ссылается якорь
					top = $(id).offset().top;
					
					//анимируем переход на расстояние - top за 1500 мс
					$('body,html').animate({scrollTop: top}, 1500);
				});

	$('.kinds .kinds-list').equalHeights();
	$('.kinds h3').equalHeights();

	$(".mask").mask("+7(999) 999-9999");

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		// focus: '#name',
		removalDelay: 300,
		mainClass: 'mfp-fade',
		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});


	$(".owl-carousel").owlCarousel({
		loop: true,
		// items: 4,
		// margin: 50,
		responsiveClass: true,
		// navElement: div,
		nav: true,
		navText: ['<img src="img/angle-left.svg">', '<img src="img/angle-right.svg">'],
		responsive:{
			0:{
				items:1,
				// nav:true,
				// loop:true,
			},
			480:{
				items:2,
				// nav:true,
				// loop:true,
			},
			768:{
				items:3,
				// loop:true,
				// nav:true,
			},
			1000:{
				items:4,
				// nav:true,
				// loop:true,
			},
			1200:{
				items:4,
				nav:true,
				// loop:true,
			},
			// 1900:{
			// 	items:5,
			// 	// nav:true,
			// 	// loop:true,
			// }

		}
	});

	$('.owl-carousel').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});



	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
