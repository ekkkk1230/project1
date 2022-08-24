$(function(){
/* ------------------------메인메뉴------------------------------------- */
    $('#nav>ul>li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown();
    });
    $('#nav>ul>li').mouseleave(function(){
        $(this).find('.sub').stop().slideUp();
        
    });

/* --------------------------서브메뉴----------------------------------------------- */
    $('.left_menu_depth1>li').mouseenter(function(){
        $(this).find('.left_menu_depth2').stop().slideDown();
    });
    $('.left_menu_depth1>li').mouseleave(function(){
        $(this).find('.left_menu_depth2').stop().slideUp();
        
    });

/* ------------------------모바일 메뉴-------------------------------------------- */
    $('.mo_nav_open').click(function(){
        $('#mo_nav').css('display','block');
    });

    $('.mo_nav_close').click(function(){
        $('#mo_nav').css('display','none');
    });

    $('.mo_nav_depth2').hide();

    //모바일 서브메뉴 슬라이드

    $('#mo_nav_depth1>li').mouseenter(function(){
        $(this).find('.mo_nav_depth2').stop().slideDown(500);
    });
    $('#mo_nav_depth1>li').mouseleave(function(){
        $(this).find('.mo_nav_depth2').stop().slideUp(500);
    });


/* -------------------모바일 left_menu-------------------------------------------- */
    var tabMenu = $('.mo_section_nav_depth1 > li');
    var content = $('.mo_section_nav_depth1 > li > .mo_section_nav_depth2');
    content.hide().eq(0).show();

    tabMenu.click(function(event){
        event.preventDefault();

        var tg = $(this);
        var i = tg.index();

        content.css('display','none'); 
        content.eq(i).css('display','block');
    })
/* -------------------모바일 slogan------------------------------------------------ */
    var mo_slogan_bt = $('.mo_slogan > .mo_btn');
    var isOpen = false;

    mo_slogan_bt.click(function(){
        if(isOpen == false){
            $('.mo_slogan > .mo_btn:hover').next().stop().slideDown();
            isOpen = true;
        }else{
            $('.mo_slogan > .mo_btn:hover').next().stop().slideUp();
            isOpen = false;
        };
        
    });


/* ----------------------2depth------------------------------------------------- */
    var menu_tab = $('.mo_section_nav_depth1>li');
    var menu_contents = $('.mo_section_nav_depth2>ul');

    menu_contents.hide().eq(0).show();

    menu_tab.click(function(event){
        event.preventDefault();

        var  menu_tab_tg = $(this);
        var  menu_tab_i =  menu_tab_tg.index();

        menu_contents.css('display','none'); 
        menu_contents.eq( menu_tab_i).css('display','block');
    })
/* ----------------------3depth---------------------------------------------------- */
    var li = $('.mo_nav_depth2 li');
    
    li.click(function(e){
        $(this).find('.mo_nav_depth3').stop().slideDown(500);
    });
    li.mouseleave(function(e){
        $(this).find('.mo_nav_depth3').stop().slideUp(500);
    });
/* ------------------------나와같은case-------------------------------------------- */
    var caseBtn = $('.caseBtn');
    var show = false;

    caseBtn.click(function(){
            
        caseBtn.css('backgroundColor','#be4a4a');
        
        if(show == false){
            $('.box ul .hide').css('display','block');
            caseBtn.css('backgroundColor','#413e3e');
            show = true;
        }else{
            $('.box ul .hide').css('display','none');
            caseBtn.css('backgroundColor','#be4a4a');
            show = false;
        }
    });
});