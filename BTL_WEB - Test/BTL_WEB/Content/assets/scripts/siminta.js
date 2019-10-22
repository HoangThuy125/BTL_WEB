
/*====================================
 Free To Use For Personal And Commercial Usage
Author: http://binarytheme.com
 Share Us if You Like our work 
 Enjoy Our Codes For Free always.
======================================*/
$(document).on("click", ".editproduct", function () {
    var idsp = $(this).data('id');
    console.log(idsp);
    $(".modal-body #idsanpham").text(idsp);
    var host = "http" + location.host;
    $.ajax({

        url: "/api/sanpham/getsanpham/" + idsp.toString(),
        dataType: "json",
        success: function (result) {
            $("#div1").html(result);
            console.log(result);
            $.each(JSON.parse(result), function (index, element) {
                console.log("---1");
                console.log(index);
                console.log("---2");
                console.log(element);
                console.log("---3");
                $('.modal-body').append($('<div>', {
                    text: element
                }));
            });
        }
    });

});
$(function () {
    //alert xoa
 
     $(".delete-product").click(function(){
    if (!confirm("Bạn có chắc chắn xóa sản phẩm!")){
      return false;
    }
  });

    // tooltip demo
    $('.tooltip-demo').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body"
    })

    // popover demo
    $("[data-toggle=popover]")
        .popover()
    ///calling side menu

    $('#side-menu').metisMenu();

    ///pace function for showing progress

    function load(time) {
        var x = new XMLHttpRequest()
        x.open('GET', "" + time, true);
        x.send();
    };

    load(20);
    load(100);
    load(500);
    load(2000);
    load(3000);
    setTimeout(function () {
        Pace.ignore(function () {
            load(3100);
        });
    }, 4000);

    Pace.on('hide', function () {
        console.log('done');
    });
    paceOptions = {
        elements: true
    };
   

});

//Loads the correct sidebar on window load, collapses the sidebar on window resize.
$(function() {
    $(window).bind("load resize", function() {
        console.log($(this).width())
        if ($(this).width() < 768) {
            $('div.sidebar-collapse').addClass('collapse')
        } else {
            $('div.sidebar-collapse').removeClass('collapse')
        }
    })
})
