document.write('<link rel="stylesheet" type="text/css" href="Portal/Design_CSS/19.css">');
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var iPhoneAndiPad = /iPhone|iPod/i.test(navigator.userAgent);
var IEbellow9 = !$.support.leadingWhitespace;
var ww;
/*--------------------------------  Common Functions -------------------------------*/
function setVisibility(id, visibility, status) {
    if (status == "over") {
        document.getElementById(id).style.display = visibility;
    } else {
        document.getElementById(id).style.display = visibility;
    }
};

(function($) {
    /*---------------------------------------------------------------------*/
var cssFolder = "Portal/Design_CSS/";	
	//css3 style calling 
document.write('<link rel="stylesheet" type="text/css" href="' + cssFolder +'animate.css">');	
    $(document).ready(function() {		
		$('a.akbarMea').attr('data-widget-id', '262088610055077888');
		$('a.iDayofYoga').attr('data-widget-id', '603473958327820289');	
		$('a.indianDiplomacy').attr('data-widget-id', '310006842661146625');	
        /*---------------------------------------------------------------------*/
        $('body').removeClass("noJS").addClass('has_js has_tabjs');
        dropdown('nav', 'hover', 1);
        $("body").removeClass("desktop").addClass("mobile");
		cloneDiv();
        $(window).on('resize orientationchange load', function() {
            ww = document.body.clientWidth;
            if (ww > 1023) {
                $("body").addClass("desktop").removeClass("mobile");
                $('.mp-pusher').removeAttr('style');
            } else {
                $("body").removeClass("desktop").addClass("mobile");
            }
            if (isMobile == true) {
                $("body").removeClass("desktopDevice").addClass("portableDevice");
            } else {
                $("body").removeClass("portableDevice").addClass("desktopDevice");
            }
			
        });

        if (isMobile) {
            $("body").removeAttr('style');
        }

        /*if (location.href.indexOf("advanced-search.htm") > 0) {
											//$('.calender').datepick();
										};*/

        if ($(".searchGo").length) {
            $('.searchGo').val('Go');
        }


        //$(".tab_content").hide(); //Hide all content
        //$("ul.tabs li:first").addClass("active").show(); //Activate first tab
        //$(".tab_content:first").show(); //Show first tab content
        /*if ($(".tabNav").length > 0) {
            $(".tabContent").hide();
            $(".tabContent:first").show();
            $(".tabNav li a:first").addClass("active");
            $(".tabNav li a").click(function() {
                $(".tabNav li a").removeClass("active");
                $(this).addClass("active");
                $(".tabContent").hide();
                var selected_tab = $(this).attr("href");
                $(selected_tab).fadeIn();
                return false;
            });
        };*/
		if ($(".indexBanner .item").length > 1) {
            var owl = $('.indexBanner .owl-carousel');
            owl.owlCarousel({
                items: 1,
                dots: false,
				mouseDrag: false,
				loop:true,
				pullDrag: false,
                autoplay: 4000,
				smartSpeed:1000,
				autoplayHoverPause:true,
				animateOut: 'owlFadeOut',
    			animateIn: 'owlFadeIn'
				
            });
            $('.nextIcon').click(function(event) {
				event.preventDefault();						  
				$('.sliderPlay').css("display","none");
                $('.sliderPause').css("display","inline-block");;
                owl.trigger('next.owl.carousel');
            });
            $('.prevIcon').click(function(event) {
					event.preventDefault();
					$('.sliderPlay').css("display","none");
                $('.sliderPause').css("display","inline-block");
                owl.trigger('prev.owl.carousel', [300]);
            });
            $('.sliderPlay').on('click',function(event){
				event.preventDefault();
                $('.sliderPlay').css("display","none");
                $('.sliderPause').css("display","inline-block");;
                owl.trigger('play.owl.autoplay',[5000]);
            });
            $('.sliderPause').on('click',function(event){
				event.preventDefault();											  
                $('.sliderPause').css("display","none");
                $('.sliderPlay').css("display","inline-block");;
               owl.trigger('stop.owl.autoplay');
            });
        };
        if ($(".homeSlider .item").length > 1) {
            var owl = $('#js_slider');
            owl.owlCarousel({
                items: 1,
																loop: true,
                dots: false,
																mouseDrag: false,
																pullDrag: false,
                autoplay: true,
																smartSpeed:1000,
																autoplayHoverPause:false,
																	animateOut: 'owlFadeOut',
    		animateIn: 'owlFadeIn'
            });
            $('.customNextBtn').click(function() {
																$('.owlPlay').hide();
                $('.owlStop').show();
                owl.trigger('next.owl.carousel');
            });
            $('.customPrevBtn').click(function() {
																$('.owlPlay').hide();
                $('.owlStop').show();
                owl.trigger('prev.owl.carousel', [300]);
            });
            $('.owlPlay').on('click',function(){
                $('.owlPlay').hide();
                $('.owlStop').show();
                owl.trigger('play.owl.autoplay',[5000]);
            });
            $('.owlStop').on('click',function(){
                $('.owlStop').hide();
                $('.owlPlay').show();
               owl.trigger('stop.owl.autoplay');
            });
        };
								
        if ($("#js_slider .item").length > 1 || $("#mobile .item").length > 1) {}
        if ($("#scroller-body").length > 0) {
            var defaultTab = $("#hdnDefaultTab").val() - 1;
            $("#scroller-body .displayPanel").hide();
            $("#scroller-body .displayPanel:eq(" + defaultTab + ")").show();
            $(".tabNavTop li:eq(" + defaultTab + ") a").addClass("selected");
            $(".tabNavTop li a").click(function(e) {
                $(".tabNavTop li a").removeClass("selected");
                $(this).addClass("selected");
                $("#scroller-body .displayPanel").hide();
                var selected_tab = $(this).attr("href");
                $(selected_tab).fadeIn();
                e.preventDefault();
            });
        };
		
		$('.yogaControls a,.homeSlider>a')
			.click(function (e) {
			e.preventDefault();
		});

		/*Yoga Postures Popup*/
		if( $(".litebox").length){	
		$('.litebox').liteBox();
		};

       /*Footer Logo Slider*/
        if ($(".footerLogosSlider ").length > 0) {
            var owl2 = $('.footerLogosSlider .owl-carousel');
            owl2.owlCarousel({
                loop: false,
                items:8,
                nav: true,
                dots: false,
                autoplay: false,
                mouseDrag: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true,
                        loop: true,
						mouseDrag: true,
                        autoplay: true
                    },
                    480: {
                        items: 2,
                        nav: true,
                        loop: true,
						mouseDrag: true,
                        autoplay: true
                    },
                    768: {
                        items:4,
                        nav: true,
                        loop: true,
						mouseDrag: true,
                        autoplay: true
                    },
					 1024: {
                        items: 6,
                        nav: true,
                        loop: true,
						mouseDrag: true,
                        autoplay: true
                    },
                    1169: {
                        items:8,
                        nav: false,
                        loop: false,
                        mouseDrag: false,
						autoWidth:true
                    }
                }
            });
        }
		
		/*Yoga Page Photo  Gallery Slider*/
        if ($(".yogaPhotoGallery").length > 0) {
            var owl3 = $('.yogaPhotoGallery');
            owl3.owlCarousel({
                loop: false,
                items: 4,
                nav: false,
                dots: false,
                autoplay: false,
                mouseDrag: true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        loop: true,
                        autoplay: true
                    },
                    330: {
                        items: 2,
                        nav: false,
                        loop: true,
                        autoplay: true
                    },
                    768: {
                        items: 3,
                        nav: false,
                        loop: true,
                        autoplay: true
                    },
                    1024: {
                        items: 4,
                        nav: false,
                        loop: false,
                        mouseDrag: false
                    }
                }
            });
        }

        if ($(".missionTabNav").length > 0) {
            $(".tab_container .tab_content").hide();
            $(".tab_container .tab_content:first").show();
            $(".missionTabNav li:first").addClass("active");
            $(".missionTabNav li a").click(function() {
                $(".missionTabNav li").removeClass("active");
                $(this).parent().addClass("active");
                $(".tab_container .tab_content").hide();
                var selected_tab = $(this).attr("href");
                $(selected_tab).fadeIn();
                return false;
            });
        };
		
		if ($(".missionTabNavYoga").length > 0) {
			var defaultTabYoga = $("#hdnDefaultTabYoga").val();
			var defaultTabDetail = $(".missionTabNav li:nth-child("+defaultTabYoga+") a").attr("href");
            $(".tab_container .tab_content").hide();
            $(defaultTabDetail).show();
			$(".missionTabNav li").removeClass("active");
            $(".missionTabNav li:nth-child("+defaultTabYoga+")").addClass("active");
            $(".missionTabNav li a").click(function() {
                $(".missionTabNav li").removeClass("active");
                $(this).parent().addClass("active");
                $(".tab_container .tab_content").hide();
                var selected_tab = $(this).attr("href");
                $(selected_tab).fadeIn();				
                return false;
            });
        };
		
		//Append class in Inner banner for Yoga Day
	if ($(".yogaDay").length > 0 || $(".innerBanner img").attr("src") == "Portal/CMS_Template_Banner/274_1_yoga-icon.png") {
	 $('.innerBanner').addClass( "yogaWebsite" );	
	}

        if ($(".topStrip").length > 0) {
            //Sidebar Icon Link Clone
            var $topleftLinks = $('.topleftLinks').clone();
            $('.topLinkPart').before($topleftLinks);

            var $rightIconLink = $('.rightIconLinks').clone().addClass('rightIconWrap');
            $('.homeLastRowOut').before($rightIconLink);

            //var $searchBox = $('.topLinks .searchLI').html();
            $('#nav').after('<div class="menuSearchBox"></div>');
            $('.menuSearchBox').append('<a class="menuSearchIcon" href="#">Search</a>');
            //$('.menuSearchBox').append($searchBox);
        }

        if ($(".homeSlider").length > 0) {
            $('.homeSlider').append('<div class="swipeIcon">Swipe</div>');
        }
        if ($(".socialIconBox").length > 0) {
            var $socialIconBox = $('.socialIconBox').clone();
            $('.alignCenter').before($socialIconBox);
        }

        if ($(".tabSectionJs").length > 0) {
            var $profileBlock = $('.profileBlock').clone();
            $('.tabSectionJs').before($profileBlock);

            var $newTabs1 = $('.newTabs ul.tabs li.newTabs1 a').text();
            $('.imaBlockH').prepend('<div class="imaBlockH-title">' + $newTabs1 + '</div>');

            var $newTabs2 = $('.newTabs ul.tabs li.newTabs2 a').text();
            $('.briefsBlockH').prepend('<div class="briefsBlockH-title">' + $newTabs2 + '</div>');

            var $perspectivesText = $('.perspectives h2').text();
            $('.leftBlock .text').prepend('<span class="homeBtmTitle">' + $perspectivesText + '</span>');

            var $lecturesText = $('.lectures h2').text();
            $('.lecturesText strong').before('<span class="homeBtmTitle">' + $lecturesText + '</span>');

            var $documentText = $('.documentBlk h2').text();
            $('.documentBlk .dataContent').prepend('<div class="homeBtmTitle">' + $documentText + '</div>');

            var $indiaAtaGlance = $('.indiaAtaGlance a img').attr('alt');
            $('.listLinkHome li:last-child').before('<li class="indiaAtaGlanceLink"><a title="Glance @ India" href="india-at-glance.htm">' + $indiaAtaGlance + '</a></li>');
			
			var $documentIndiaIs = $('.documentIndiaIs').clone();
            $('.lectures').after($documentIndiaIs);
        }

        if ($(".menuSearchBox .menuSearchIcon").length > 0) {
            $('.menuSearchBox .menuSearchIcon').click(function() {
                if ($('.searchAndLangWrap').css("display") == "block") {
                    $(this).removeClass('active');
                    $('.searchAndLangWrap').slideUp();
                } else {
                    $(this).addClass('active');
                    $('.searchAndLangWrap').slideDown();
                }
            });

            $(document).bind('mousedown touchstart', function(e) {
                if (ww < 767) {
                    if ($(e.target).closest('.searchBoxWrap').length === 0) {
                        $('.menuSearchIcon').removeClass('active');
                        $('.searchAndLangWrap').slideUp();
                    }
                }
            });
        }
        // Mobile Menu Code
       // Mobile Menu Code
        if ($(".mobile").length > 0) {
            $('#nav').before('<a class="menu-trigger" id="trigger" href="#"><span></span><em>Menu</em></a>');
            var $whatsNewLink = $('#nav .MenuLiLast a').clone().addClass('whatsNewLink');
            $('#nav').after($whatsNewLink);

            var $mobMenu = $('#nav').clone();
            $('.mobMenuPart').append($mobMenu);
            $('.mobMenuPart #nav').removeAttr('id').addClass('mobNav');

            $('.mobMenuPart .mobNav li ul').wrap('<div class="mp-level" />');
            var itemLi = $('.mobMenuPart .mobNav li').find('div.mp-level');
            itemLi.parent().addClass('icon-arrow-left');

            $('.mobMenuPart .mobNav li .mp-level').each(function() {
                var menuText = $(this).prev('a').text();
                //var backText = $(".customPrevBtn").text();
                //$(this).prepend('<h2>' + menuText + '</h2><a href="#" class="mp-back">' + backText + '</a>');
                $(this).prepend('<h2>' + menuText + '</h2><a href="#" class="mp-back">Previous</a>');

            });
												
			new mlPushMenu(document.getElementById('menuPartWrapper'), document.getElementById('trigger'));
																						
            // Mobile Puch Menu  scrollbar
            var mobWinHeight = $(window).height();
            var menuHeadHeight = $('.mp-level > h2').outerHeight(true);
            var backHeight = $('.mp-level-open > .mp-back').outerHeight(true);
            $('.mobMenuPart').height(mobWinHeight);
            $('.mp-menu .mobNav').height(mobWinHeight - menuHeadHeight);

            $(window).on('resize orientationchange load', function() {
                var mobWinHeight = $(window).height();
                var menuHeadHeight = $('.mp-level > h2').outerHeight(true);
                var backHeight = $('.mp-level-open > .mp-back').outerHeight(true);
                $('.mobMenuPart').height(mobWinHeight);
                $('.mp-menu .mobNav').removeAttr('style');
                $('.mp-menu .mobNav').height(mobWinHeight - menuHeadHeight);

                if ($('.mp-level').hasClass('mp-level-open')) {
                    var mobWinHeight = $(window).height();
                    var menuHeadHeight = $('.mp-level > h2').outerHeight(true);
                    var backHeight = $('.mp-level-open > .mp-back').outerHeight(true);
                    $('.mp-level-open ul').removeAttr('style');
                    $('.mp-level-open > ul').height(mobWinHeight - (menuHeadHeight + backHeight));
                }
            });
        }

        if ($(".leftMenu").length > 0) {

            if ($('#menuLeft').find('li').length > 0) {
                $('.innerContentPart').before('<div class="leftMenuBarBlock cf"/>');
                var $leftMenu = $('.leftMenu').clone();
                $('.leftMenuBarBlock').append($leftMenu);
                $('.leftMenuBarBlock #menuLeft .subNoLink').addClass('subMenuLink');
            }
            $('.menuTitle').prepend('<em />');

            $('.leftMenuBarBlock .menuTitle').click(function() {
                if ($('.leftMenuBarBlock #menuLeft').css("display") == "block") {
                    $(this).removeClass('active');
                    $('.leftMenuBarBlock #menuLeft').slideUp();
                } else {
                    $(this).addClass('active');
                    $('.leftMenuBarBlock #menuLeft').slideDown();
                }
            });
            $(document).bind('mousedown touchstart', function(e) {
                if ($(e.target).closest('.leftMenu').length === 0) {
						if (ww > 1023) {
									$('.leftMenuBarBlock .menuTitle').removeClass('active');
									$('.leftMenuBarBlock #menuLeft').slideUp();
						}
                }
            });

            if ($(".subMenuLink").length > 0) {
                $('.subMenuLink').click(function() {
                    $('.subMenuLink').next('ul').slideUp();
                    if ($(this).next('ul').css("display") == "block") {
                        $(this).next('ul').slideUp();
                    } else {
                        $(this).next('ul').slideDown();
                    }
                });
            }
        }
        $(window).on('resize', function() {
            if (ww < 1023) {
                $('.leftMenuBarBlock #menuLeft').removeAttr('style');
                $('.leftMenuBarBlock .menuTitle').removeClass('active');
                $('.headingListing').removeAttr('style');
                $('.menuNewsTitle').removeClass('active');
            }
        });

        if ($(".headingListing").length > 0) {
            $(".commonListing.headingListing").wrap('<div class="leftMenuWhatsNew" />');
            var $innerBannerTitle = $('.innerBanner span').text();
            $('.leftMenuWhatsNew .headingListing').before('<span class="menuNewsTitle"><em></em>' + $innerBannerTitle + '</span>');

            $('.leftMenuWhatsNew .menuNewsTitle').click(function() {
                if ($('.leftMenuWhatsNew .headingListing').css("display") == "block") {
                    $(this).removeClass('active');
                    $('.leftMenuWhatsNew .headingListing').slideUp();
                } else {
                    $(this).addClass('active');
                    $('.leftMenuWhatsNew .headingListing').slideDown();
                }
            });
            $(document).bind('mousedown touchstart', function(e) {
                if ($(e.target).closest('.leftMenuWhatsNew').length === 0) {
																			if (ww < 1023) {
																						$('.leftMenuWhatsNew .menuNewsTitle').removeClass('active');
																						$('.leftMenuWhatsNew .headingListing').slideUp();
																			}
                }
            });
        }


        if ($("#ContentPlaceHolder1_KeywordSearch1_pnlKeywordSrch----").length > 0) {
            // Highlighting
            $.fn.highlight = function(pat) {
                function innerHighlight(node, pat) {
                    var skip = 0;
                    if (node.nodeType == 3) {
                        var pos = node.data.toUpperCase().indexOf(pat);
                        if (pos >= 0) {
                            var spannode = document.createElement('span');
                            spannode.className = 'highlight';
                            var middlebit = node.splitText(pos);
                            var endbit = middlebit.splitText(pat.length);
                            var middleclone = middlebit.cloneNode(true);
                            spannode.appendChild(middleclone);
                            middlebit.parentNode.replaceChild(spannode, middlebit);
                            skip = 1;
                        }
                    } else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
                        for (var i = 0; i < node.childNodes.length; ++i) {
                            i += innerHighlight(node.childNodes[i], pat);
                        }
                    }
                    return skip;
                }
                return this.each(function() {
                    innerHighlight(this, pat.toUpperCase());
                });
            };
            $(searchTextB).autocomplete({
			delay: 1000,

                source: function(request, response) {
                    var pID;
                    var hdnSiteID = hdnStID;
                    //var hdnLanguageID = hdnLangID;
                    $('.ui-corner-all').addClass('zindexUp');
                    if (hdnSiteID.value == '') pID = 1;
                    else pID = hdnSiteID.value;
                    $.ajax({
                        //url: "AutoCompleteService.asmx/AutoSugessionSiteSearch",
                        url: "WebServiceSolr.asmx/AutoSugessionSiteSearch",
                        data: "{ 'SearchText': '" + escape(request.term) + "' , 'SiteId':'" + pID + "', 'LanguageId':'" + hdnLangID.value + "', 'TopRecords':'" + 'top 10' + "' }",
                        dataType: "json",
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        dataFilter: function(data) {
                            return data;
                        },
                        success: function(data) {
                            response($.map(data.d, function(item) {
                                var label1 = item.split("::");
                                return {
                                    value: label1[1] + "::" + label1[2],
                                    label: label1[0]
                                }
                            }));
                            $('.ui-autocomplete').highlight($(searchTextB).val());


                            var p = $(".ui-autocomplete");
				if($("ul#ui-id-2").length)
                              {
				p = $("ul#ui-id-2");				
				}							
                            var position = p.position();
                            var positionFinL = position.left - 170;
                            var positionFinT = position.top + 5;
                            $(".ui-autocomplete").css('left', positionFinL);
                            $(".ui-autocomplete").css('top', positionFinT);
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            //alert(textStatus);
                            return
                        }
                    });
                },
                select: function(event, ui) {
                    $(event.target).val(ui.item.label);
                    var target = ui.item.value.split("::")
                        //  var target = ui.item.llink;
                    if (target[1] == "_blank") {
                        window.open(target[0], '_blank');
                    } else {
                        //window.location = ui.item.value;
                        window.location = target[0];
                    }
                    return false;
                },
                minLength: 4
            });
        };
        if ($('#divexpand').length == 1) {
            $('#divexpand').hide();
            $('.seemoreBtn').click(function() {
                $(this).siblings('#divexpand').toggle('fast');
                return false;
            });
        };
        if ($(".ticker").length) {
            $('.ticker').each(function(i) {
                $(this).addClass('tickerDiv' + i).attr('id', 'ticker' + i);
                $('#ticker' + i).find('.tickerDivBlock').first().addClass('newsTikker' + i).attr('id', 'newsTikker' + i);
                $('#ticker' + i).find('a').first().attr('id', 'stopNews' + i)
                $('#newsTikker' + i).vTicker({
                    speed: 1E3,
                    pause: 4E3,
                    animation: "fade",
                    mousePause: false,
                    showItems: 2,
                    height: 190,
                    direction: 'up'
                })
               $("#stopNews"+i).click(function () {
						if($(this).hasClass('stop')){
							$(this).removeClass("stop").addClass("play").text("Play").attr('title', 'Play');
						}else{
							$(this).removeClass("play").addClass("stop").text("Pause").attr('title', 'pause');
						}
						return false;
				});
            });
        }
		
		if( $(".accordion").length){
	   $('.accordion .accordDetail').hide();
	   $(".accordion .accordDetail:first").show(); 
	   $(".accordion .accTrigger:first").addClass("active");	
	   $('.accordion .accTrigger').click(function(){
		  if ($(this).hasClass('active')) {
			   $(this).removeClass('active');
			   $(this).next().slideUp();
		  } else {
			  if ($('body').hasClass('desktop')) {
			   $('.accordion .accTrigger').removeClass('active');
			   $('.accordion .accordDetail').slideUp();
			  }
			   $(this).addClass('active');			   
			   $(this).next().slideDown();
		  }
		  return false;
	   });
	};
		
		//Swachh Bharat Mission Photos, Vidoes 
		 if ($(".scrollIt").length > 0) {
            var owl2 = $('.scrollIt');
            owl2.owlCarousel({
                loop: true,
                items: 1,
                nav: true,
                dots: false,
                autoplay: false,
                mouseDrag: false,
                itemElement: 'div',
                responsiveClass: false,
                responsive: {
                    0: {
                        items: 1                      
                    }
				}
            });
        }
		
		//Swachh Bharat Mission Photos 2017
		 if ($(".scrollIt2").length > 0) {
            var owl3 = $('.scrollIt2');
            owl3.owlCarousel({
                loop: true,
                items: 1,
                nav: false,
                dots: false,
                autoplay: true,
                mouseDrag: false,
                itemElement: 'div',
                responsiveClass: false,
				margin: 15,
                responsive: {
                    0: {
                        items: 1                     
                    },
					767: {
                        items: 2                     
                    }
				}
            });
        }
		
		//Swachh Bharat Mission Vidoes 2017
		 if ($(".scrollItVidoes").length > 1) {
            var owl4 = $('.scrollItVidoes');
            owl4.owlCarousel({
                loop: true,
                items: 1,
                nav: true,
                dots: false,
                autoplay: false,
                mouseDrag: false,
                itemElement: 'div',
                responsiveClass: false,
				margin: 15,
                responsive: {
                    0: {
                        items: 1                     
                    }
				}
            });
        }
		
		if( $(".sbmTabs .tab_content").length){
		   $('.sbmTabs .tab_content .officeDelhi').hide();
		   $(".sbmTabs .tab_content .officeDelhi:first").show(); 
		   $(".sbmTabs .tab_content h3:first").addClass("active");	
		   $('.sbmTabs .tab_content h3').click(function(){
			  if ($(this).hasClass('active')) {
				   $(this).removeClass('active');
				   $(this).next().slideUp();
			  } else {
				   $('.sbmTabs .tab_content h3').removeClass('active');
				   $(this).addClass('active');
				   $('.sbmTabs .tab_content .officeDelhi').slideUp();
				   $(this).next().slideDown();
			  }
			  return false;
		   });
		};
		
		if( $("#sbmTabstritter .tab_content").length){
		   $('#sbmTabstritter .tab_content').hide();
		   $("#sbmTabstritter .tab_content li:first").show(); 
		   $("#sbmTabstritter .tab_content").addClass("active");	
		   $('#sbmTabstritter .tab_content h3').click(function(){
			  if ($(this).hasClass('active')) {
				   $(this).removeClass('active');
				   $(this).next().slideUp();
			  } else {
				   $('#sbmTabstritter .tab_content h3').removeClass('active');
				   $(this).addClass('active');
				   $('#sbmTabstritter .tab_content').slideUp();
				   $(this).next().slideDown();
			  }
			  return false;
		   });
		};

        // Table Add Class
        if ($('.tableData').length > 0) {
            if ($('.tableData').hasClass('responsiveTable')) {

            } else {
                $('.tableData').addClass('responsiveTable');
            }
        }
		
		
		// twitter tab 2017
		$('.targetDiv:not(#social1)').hide();
		$('.sbmTabstritterTabNav li:nth-child(1) a').addClass('active');
		$('.sbmTabstritterTabNav li a').click(function() {
			
					$(".sbmTabstritterTabNav li a").removeClass('active');
					$(this).addClass('active');
			 $('.targetDiv').hide();
		 	 $('#social' + $(this).attr('target')).show();
			
		
		});
		
		


        // Responsive Table
        if ($(".responsiveTable").length) {
            $(".responsiveTable").each(function() {
                $(this).wrap('<div class="tableOut"></div>');
                $(this).find('td').removeAttr('width');
                $(this).find('td').removeAttr('align');
                var head_col_count = $(this).find('tr th').size();
                // loop which replaces td
                for (i = 0; i <= head_col_count; i++) {
                    // head column label extraction
                    var head_col_label = $(this).find('tr th:nth-child(' + i + ')').text();
                    // replaces td with <div class="column" data-label="label">
                    $(this).find('tr td:nth-child(' + i + ')').attr("data-label", head_col_label);
                }
            });
        }
        //ww = document.body.clientWidth;
        //if (ww < 767) {
									if (isMobile) {
            if ($('.galleryImgWrapper .galleryImg').length > 0){
                $('.galleryImgWrapper .galleryImg').magnificPopup({
                    delegate: 'a', // the selector for gallery item
                    type: 'image',
                    mainClass: 'mfp-zoom-in',
                    closeOnContentClick: true,
                    midClick: true,
																				fixedContentPos: false,
                    gallery: {
                        // delegate: 	options.autolinkElements,
                        //tPrev: '',
                        //tNext: '',
                        //tCounter: '%curr% / %total%',
                        enabled: true,
																								navigateByImgClick: true,
                        preload: [0, 1] // Will preload 1 - before current, and 1 after the current image	
                    },
                    zoom: {
                        enabled: true,
                        duration: 300,
                        easing: 'ease-in-out',
                        opener: function(openerElement) {
                            return openerElement.is('img') ? openerElement : openerElement.find('img');
                        }
                    },                    
                    callbacks: {
                        open: function() {
                            //overwrite default prev + next function. Add timeout for css3 crossfade animation
                            $.magnificPopup.instance.next = function() {
                                var self = this;
                                self.wrap.removeClass('mfp-image-loaded');
                                setTimeout(function() {
                                    $.magnificPopup.proto.next.call(self);
                                }, 120);
                            }
                            $.magnificPopup.instance.prev = function() {
                                var self = this;
                                self.wrap.removeClass('mfp-image-loaded');
                                setTimeout(function() {
                                    $.magnificPopup.proto.prev.call(self);
                                }, 120);
                            }
                        },
                        imageLoadComplete: function() {
                            var self = this;
                            setTimeout(function() {
                                self.wrap.addClass('mfp-image-loaded');
                            }, 16);																												
                            $(".mfp-container").swipe({																																																						
                                swipeLeft: function(event, direction, distance, duration, fingerCount, fingerData) {
							//alert('left');
							//magnificPopup.next();
							$('.mfp-arrow-right').click();},
							swipeRight: function(event, direction, distance, duration, fingerCount, fingerData) {
								//alert('right');
								//magnificPopup.prev();
								$('.mfp-arrow-left').click();
								},
                                threshold: 0,
                                fingers: 'all'
                            });

                        }																				
                    }
                });

            }
        }

        $("#backToTop").hide();
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#backToTop').fadeIn('fast');
            } else {
                $('#backToTop').hide();
            }
        });
        $('#backToTop a').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, '200');
            return false;
        });
								
								// iPad and iPhone Back to Top Position Fixed
							if (iPhoneAndiPad === true) {							
								$('#backToTop').addClass('iosMenu');
								var navHeight = $('#backToTop').height();
								var wh = $(window).height();
								var newTP = (wh - navHeight);
								$('#backToTop').css('top', newTP);
								
								$(window).on('resize', function() {
									$('#backToTop').removeAttr('style');
									navHeight = $('#backToTop').height();
									wh = $(window).height();
									newTP = (wh - navHeight);
									$('#backToTop').css('top', newTP);
								});
								
								
								$(window).scroll(function() {
									var y = $(this).scrollTop();
									newY1 = y + newTP;
									$('#backToTop').css("top", newY1);
								});
							}



        if ($('.tableData').length > 0) {
            $(".tableData tr:even").addClass("evenRow");
        };
        if ($('.panel').length > 0) {
            //$("#panel-1 a").last().focus(function(){$("#panel-2 a, #panel-3 a").attr('tabindex','-1');});
            $("li.panel a").attr('tabindex', '-1');
            $("#s_0 a").removeAttr('tabindex');
        };
        /* for mobile go to top link */
        switch_top = function(e) {
            var link = $(e.target);
            var href = link.attr("href");
            if (href.search("a") != -1) href = href.replace("a", "b");
            else href = href.replace("b", "a");
            link.attr("href", href)
        };
        var counter = 0;
        $('a[href="#up"]').each(function(index, value) {
            link = $(value);
            link.attr("href", "#up" + counter++ +"a").click(switch_top)
        });
        var windowWidth = $(window).width();
        if (windowWidth < 480) {
            $('.mobcontainer').find('.imgBdr').each(function() {
                $('.imgBdr').wrap("<span class='imageOut' />");
            });
        };
        $('.goBackM').click(function() {
            window.history.back();
            return false;
        });
        var BodyW = $('body').innerWidth();
        var BodyW3 = BodyW / 4;
        $('.TopStrip').width(BodyW3);
        $(window).resize(function() {
            var BodyW = $('body').innerWidth();
            var BodyW3 = BodyW / 3.5;
            $('.TopStrip').width(BodyW3);
        });
        if ($('#innerContent .inFocusLatestCnt').length > 0) {
            var max = -1;
            $("#innerContent .inFocusLatestCnt").each(function() {
                var h = $(this).height();
                max = h > max ? h : max;
            });
            $("#innerContent .inFocusLatestCnt").height(max);
        };
        if ($(".customSelect").length > 0) {
            $(".customSelect").customSelect();
        };
        if ($(".siteLanguage").length > 0) {
            $(".siteLanguage").customSelect();
        };
        if ($(".indiaMapImg").length > 0) {
            $(".indiaMapImg area").tooltip({
                track: true,
                hide: false,
                show: false
            });
            $("img[usemap]").maphilight();
        }
        if ($(".marqueeScrolling").length > 0) {
            var $mq = $('.marquee').marquee({
                speed: 25000,
                gap: 0,
                duplicated: true,
                pauseOnHover: true
            });
            $(".btnMPause").toggle(function() {
                $(this).addClass('play');
                $(this).text('Play');
                $mq.marquee('pause');
            }, function() {
                $(this).removeClass('play');
                $(this).text('Pause');
                $mq.marquee('resume');
                return false;
            });
        }

        if ($(".calender").length) {
            //$(".calender").datepicker();
            $('.calender').datepick();
        };
		
		// Video Player JS
	if( $("#docVid").length){
		var videoFile = $('#ContentPlaceHolder1_HomeTabControlYoga1_hdnLink').val();
		var thumbFile = $('#ContentPlaceHolder1_HomeTabControlYoga1_hdnImage').val();
		var videoType = $('#ContentPlaceHolder1_HomeTabControlYoga1_hdnVideoType').val();
		var videoTitle = $('#ContentPlaceHolder1_HomeTabControlYoga1_hdnVideoName').val();
		var videoTypeExt = $('#ContentPlaceHolder1_HomeTabControlYoga1_hdnVideoFormat').val();	
		
		document.getElementById("videoCaption").innerHTML=videoTitle;
		
		var videoType2 = "video/" + videoTypeExt;
		var fileExtension = videoFile.substring(videoFile.lastIndexOf('.') + 1);
		//alert(fileExtension);
		if (videoType == 'EV') {
			var videoType2 = "video/youtube";
		}
		if (videoType == 'UV') {
			var videoType2 = "video/" + videoTypeExt;
		}
	
		projekktor('#docVid', {
        //poster: 'writereaddata/images/intro.jpg',
        //title: 'International Fleet Review 2016 at Visakhapatnam',
		controls: true,
        playerFlashMP4: 'projekktor-1/jarisplayer.swf',
        playerFlashMP3: 'projekktor-1/jarisplayer.swf',
		volume: 1,
        //width: 436,
        //height: 294,
		fullscreen:true,
        playlist: [
			{0: { src: videoFile, type: videoType2 },			
				config: {
					poster: thumbFile,
					plugin_display: {
						logoImage: '~/images/logo.png',
						logoDelay: 1
					}
				}
			}
        ]    
        }, function(player) {
				if ($(".videoPlayBtn").length > 0){
					$('.videoPlayBtn').click(function(){
						$('.projekktor').addClass('projekktorStart');
						$(this).addClass('inactive');
						setTimeout(function() {
							player.setPlay();
						}, 400);
					});
				}			
			}
        );
	}
	
	// Video JS
	if( $(".instVideo").length){		
		$(".instVideo").each(function(){
			var $this = $(this);							   
			projekktor($this, {
			poster: $this.find("img").attr("src"),
			title: $(this).find("img").attr("alt"),
			playerFlashMP4: '../videoplayer/jarisplayer.swf',
			playerFlashMP3: '../videoplayer/jarisplayer.swf',			
			fullscreen:true,
			playlist: [
				{0: {src: $this.find("a").attr("href"), type: $this.find("a").attr("rel")}}
			]    
			}, function(player) {} // on ready 
			);
		})
	};
	
	
	if( $(".advSearchTabing").length){
	$(".moreSearchNav > a").on('click', function(e) {
		e.preventDefault();												   
		if($(this).parent().hasClass('showSub'))	{			
			$(this).parent().removeClass('showSub');
		}
		else {
		$(this).parent().addClass('showSub')
		}
		
	});
	
	$(document).on('mouseup', function() {			   
		if($('.moreSearchNav').hasClass('showSub'))	{			
			$('.moreSearchNav').removeClass('showSub');
		}
		
	});
	}
        //if($(".tableData").length > 0){$('.tableData').stacktable({myClass:'stacktable small-only'});}
        /*---------------------------------------------------------------------*/
/****************newjs**********************/
/*if( $(".whatsNewSlider .swiper-slide").length > 1){	
mySwiperSlider = new Swiper ('.whatsNewSlider .swiper-container', { 
						direction: 'vertical',
						centeredSlides:true,
						speed: 800, 
						autoplay: 3500, 
						spaceBetween:25,
						slidesPerView:3,
						loop:true,
						grabCursor:false,
						slidesPerView: 'auto',
						autoHeight:false,
						  breakpoints: {
	   2500:{
		     height:364,
		   },
		    1023: {
              height:170,
			  spaceBetween:20
            },
            479: {
              height:250,
			  spaceBetween:25
            },
			 400: {
              height:230,
			  spaceBetween:50
            }
			}
						});
$('.whatsNewPlay').click(function (event) {
event.preventDefault();								   
$(this).hide();
$(".whatsNewPause").css("display","inline-block");
  mySwiperSlider.startAutoplay();
  return false
});
$('.whatsNewPause').click(function (event) { 
event.preventDefault();										
	$(this).hide();
	$(".whatsNewPlay").css("display","inline-block");
  mySwiperSlider.stopAutoplay();
  return false
});
}*/
/*if( $(".indexBanner").length){
	var mySwiper = $('.indexBanner .swiper-container').swiper({
  autoplay: 5000,
  pagination: '.swiper-pagination',
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  speed: 2000,
  autoPlay:5000,
  grabCursor:false,
  autoplayDisableOnInteraction: false,
  simulateTouch:true,
  loop:true,
  centeredSlides: true,
   breakpoints: {
	   2500:{
		     simulateTouch:false,
			 effect:'fade'
		   },
            767: {
              simulateTouch:true,
			  effect:'slide'
            }
   }
});
$('.sliderPlay').click(function () {
$(this).hide();
$(".sliderPause").css("display","inline-block");
  mySwiper.startAutoplay();
  return false
});
$('.sliderPause').click(function () { 
	$(this).hide();
	$(".sliderPlay").css("display","inline-block");
  mySwiper.stopAutoplay();
  return false
});
	}*/

	if($(".sliderImg").length) {
		$('.sliderImg').each(function(){
			var banimgSrc = $(this).find('img').attr('src');		
			$(this).css('background-image', 'url(' + banimgSrc +')');
			
		});
	}

	// Responsive Tabing Script
	if( $(".resTab").length) {
		$('.resTab').responsiveTabs({
			 rotate: false
			,startCollapsed:'tab' //accordion
			,collapsible: 'accordion' //accordion
			,scrollToAccordion: true
			,scrollToAccordionOnLoad:false
		});
		if($(".meaInfoBlock").length){
			$(".meaInfoBlock .resTab li:nth-child(2) a").trigger("click");
			}
	};
				


		if( $("#facebookMea").length){			
			if($("#facebookMea").length){
		setTimeout(function() {
		// var container_height = $('#fb.flyOutOuter').height();  
		 /* alert(1)
			$('#FBcontainer').html('<div class="fb-page" ' + 
			'data-href="https://www.facebook.com/devendra.fadnavis/"' +
			' data-width="' + container_width + '" data-height="' + container_height + '" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/devendra.fadnavis/"><a href="https://www.facebook.com/devendra.fadnavis/">Devendra Fadnavis</a></blockquote></div></div>');
			FB.XFBML.parse( );     */
			
		$('.faceBookFeed').html('<iframe id="fbiframe" src=" https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMEAINDIA&amp;tabs=timeline&amp;&amp;height=400&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=true&amp;show_facepile=false&amp;appId" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div>');
		  }, 100); 
			}
		}
		//ambedkar page
		 if ($(".ambSlider").length > 0) {
            var owl2 = $('.ambSlider');
            owl2.owlCarousel({
                loop: true,
                items: 1,
                nav: false,
                dots: false,
                autoplay: 5000,
				speed:800,
                mouseDrag: false,
                itemElement: 'li',
                responsiveClass: false,
                responsive: {
                    0: {
                        items: 1                      
                    }
				}
            });
			$('.owlPlay').on('click',function(e){		
			e.preventDefault();													  
   		 owl2.trigger('play.owl.autoplay');
		  $(this).hide();
	   $(".owlStop").show();
		});
		$('.owlStop').on('click',function(e){
			e.preventDefault();													   
      owl2.trigger('stop.owl.autoplay');
	   $(this).hide();
	   $(".owlPlay").show();
        })
		
		$('.customPrevBtn').on('click',function(e){		
			e.preventDefault();													  
   		 owl2.trigger('prev.owl.carousel');
		});
		$('.customNextBtn').on('click',function(e){
			e.preventDefault();													   
      owl2.trigger('next.owl.carousel');
        })
        }
		 if ($(".imageGallery").length > 0) {
            var owl3 = $('.imageGallery');
            owl3.owlCarousel({
                loop: true,
                items: 1,
                nav: false,
                dots: false,
                autoplay: 4000,
				speed:2000,
                mouseDrag: false,
                itemElement: 'li',
                responsiveClass: false,
                responsive: {
                    0: {
                        items: 1                      
                    }
				}
            });
			$('.playOwl').on('click',function(e){		
			e.preventDefault();													  
   		 owl3.trigger('play.owl.autoplay');
		  $(this).hide();
	   $(".stopOwl").show();
		});
		$('.stopOwl').on('click',function(e){
			e.preventDefault();													   
      owl3.trigger('stop.owl.autoplay');
	   $(this).hide();
	   $(".playOwl").show();
        })
        }
    });

    $(window).load(function() {
		if ($(".mobileAdBlock").length == 0 && $(".homeSlider").length > 0) {
			var mobileAdHtml = '<div class="mobileAdBlock"><div class="mobileAdBox"><div class="mobileAdBoxRow cf"><div class="mobileAdImg"><img title="Ministry of External Affairs Mobile App" alt="Ministry of External Affairs Mobile App" src="images/mea-mobile-app.png" height="264" width="135"/></div><div class="mobileAdText"><span class="adHeading">MEA goes Mobile...</span><p>Ministry of External Affairs proudly presents &quot;MEAIndia&quot; - an integrated smart app for mobile and other hand held devices.<span class="adAppHide">&quot;MEAIndia&quot; is now available for download on App Store and Google Play Store.</span><a class="appReadMoreLink" title="Read More" href="mea-mobile-app.htm">Read More</a></p><div class="downloadtext cf"><div class="appIconRow"><div class="availableApp">Available on the <span class="availAppText">App Store &amp; Android Market</span></div><a class="iosIcon" href="https://itunes.apple.com/in/app/meaindia/id673095668?mt=8" target="_blank">Available on the<span class="iosIconText">App Store</span></a><a class="androidIcon" href="https://play.google.com/store/apps/details?id=com.mea" target="_blank">Available on the<span class="iosIconText">Android Market</span></a></div></div><a class="mobileAdclose" title="Close" href="">Close</a></div></div></div></div>';
			
		$(mobileAdHtml).insertBefore("#wrapper");
		}
        if ($(".mobileAdBlock").length > 0) {			

            var $mobileAdBlock = $('.mobileAdBlock').clone();
            $('.page').before($mobileAdBlock);
            $('.mp-pusher .mobileAdBlock').remove();

            setTimeout(function() {
                if (isMobile == true) {
                    // Mobile Ad cookie Set
                    if ($.cookie('mobileApp') == null) {
                        $('.mobileAdBlock').slideDown();
                        $.cookie("mobileApp", 1, {
                            expires: 10
                        });
                    }
                    $('.mobileAdclose').click(function(e) {
                        e.preventDefault();
                        $('.mobileAdBlock').slideUp();
                    });
                }
            }, 1000);

            setTimeout(function() {
                $('.mobileAdBlock').slideUp();
            }, 8000);

        }
		
    });
	
	 setTimeout(function(){
		var s = document.createElement("script");
		s.type = "text/javascript";
		s.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5719c023313f189f";
		// Use any selector
		//$("head").append(s);			 
						 
	},2000);
	
	$('#footer').appear();
	$(document).on('appear', '#footer', function(e) {
		if($('.translateOut').length == 0)	{	
		$("#google_translate_element").prepend("<div class='translateOut'></div>")
			var script2 = document.createElement("script");
			script2.type = "text/javascript";
			script2.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
			document.getElementById('google_translate_element').appendChild(script2);
			if ($('body').hasClass("hindiDoc")) {var lang ='hi';}else {var lang ='en';}
			setTimeout(function(){
					new google.translate.TranslateElement({ pageLanguage: lang, layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element'); 
			},800);
		}
	});
	
	
	
	/* On Load Popup Homepage*/
	if( $(".onLoadPopup").length){
		
		$(".onLoadClose, .onLoadOverlay").click(function(){
			$(".onLoadPopup, .onLoadOverlay").hide();
			return false;
		});
	}
	
	
	
	
})(jQuery);


function validate() {
    return false;
};


if ($('#ContentPlaceHolder1_KeywordSearch1_txtKeyword').length) {
    if (hdnLangID.value == '2') {
        google.load("elements", "1", {
            packages: "transliteration"
        });

        function onLoad() {
            var options = {
                sourceLanguage: 'en',
                destinationLanguage: ['hi'],
                shortcutKey: 'ctrl+g',
                transliterationEnabled: true
            };
            var control = new google.elements.transliteration.TransliterationControl(options);
            control.makeTransliteratable(['ContentPlaceHolder1_KeywordSearch1_txtKeyword']);
        }
        google.setOnLoadCallback(onLoad);
    }

    function CheckString() {
        var Key = searchTextB;
        if (Key.value.length < 3) {
            Key.value = "Minimum 3 character required";
            return false;
        }
        if (Key.value == Key.defaultValue) {
            Key.value = "Enter valid search text";
            return false;
        }
        if (Key.value == "Minimum 3 character required" || Key.value == "Enter valid search text") {
            return false;
        }
        return true;
    }
}

if ($('#ContentPlaceHolder1_KeywordSearch1_txtKeyword').length) {
    if (hdnLangID.value == '3') {
        google.load("elements", "1", {
            packages: "transliteration"
        });

        function onLoad() {
            var options = {
                sourceLanguage: 'en',
                destinationLanguage: ['ar'],
                shortcutKey: 'ctrl+g',
                transliterationEnabled: true
            };
            var control = new google.elements.transliteration.TransliterationControl(options);
            control.makeTransliteratable(['ContentPlaceHolder1_KeywordSearch1_txtKeyword']);
        }
        google.setOnLoadCallback(onLoad);
    }

    function CheckString() {
        var Key = searchTextB;
        if (Key.value.length < 3) {
            Key.value = "Minimum 3 character required";
            return false;
        }
        if (Key.value == Key.defaultValue) {
            Key.value = "Enter valid search text";
            return false;
        }
        if (Key.value == "Minimum 3 character required" || Key.value == "Enter valid search text") {
            return false;
        }
        return true;
    }
}

if ($('#ContentPlaceHolder1_KeywordSearch1_txtKeyword').length) {
    if (hdnLangID.value == '5') {
        google.load("elements", "1", {
            packages: "transliteration"
        });

        function onLoad() {
            var options = {
                sourceLanguage: 'en',
                destinationLanguage: ['es'],
                shortcutKey: 'ctrl+g',
                transliterationEnabled: true
            };
            var control = new google.elements.transliteration.TransliterationControl(options);
            control.makeTransliteratable(['ContentPlaceHolder1_KeywordSearch1_txtKeyword']);
        }
        google.setOnLoadCallback(onLoad);
    }

    function CheckString() {
        var Key = searchTextB;
        if (Key.value.length < 3) {
            Key.value = "Minimum 3 character required";
            return false;
        }
        if (Key.value == Key.defaultValue) {
            Key.value = "Enter valid search text";
            return false;
        }
        if (Key.value == "Minimum 3 character required" || Key.value == "Enter valid search text") {
            return false;
        }
        return true;
    }
}

if ($('#ContentPlaceHolder1_KeywordSearch1_txtKeyword').length) {
    if (hdnLangID.value == '6') {
        google.load("elements", "1", {
            packages: "transliteration"
        });

        function onLoad() {
            var options = {
                sourceLanguage: 'en',
                destinationLanguage: ['fr'],
                shortcutKey: 'ctrl+g',
                transliterationEnabled: true
            };
            var control = new google.elements.transliteration.TransliterationControl(options);
            control.makeTransliteratable(['ContentPlaceHolder1_KeywordSearch1_txtKeyword']);
        }
        google.setOnLoadCallback(onLoad);
    }

    function CheckString() {
        var Key = searchTextB;
        if (Key.value.length < 3) {
            Key.value = "Minimum 3 character required";
            return false;
        }
        if (Key.value == Key.defaultValue) {
            Key.value = "Enter valid search text";
            return false;
        }
        if (Key.value == "Minimum 3 character required" || Key.value == "Enter valid search text") {
            return false;
        }
        return true;
    }
}
if ($(".addthis_button_more").length) {
    //addthis.layers({'theme' : 'transparent', 'share' : { 'position' : 'left', 'numPreferredServices' : 0  } });
};


function cloneDiv(){
	if($(".impLinksMove").length){
		$(".impLinksMove").each(function(){
		$(this).clone().appendTo(".impHomeLinks").removeClass("halfHeightBanner mrgT14").addClass("mobileLink").insertBefore(".impHomeLinks li:first").wrap("<li></li>");								 
		});
		}
	}