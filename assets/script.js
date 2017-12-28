$(document).ready(function () {
     //datatable cupons
     datatableCupons();

     //database financials
     datatableFinancials();


    $(".rippler").rippler({
        effectClass: 'rippler-effect',
        effectSize: 16 // Default size (width & height)
            ,
        addElement: 'div' // e.g. 'svg'(feature)
            ,
        duration: 400
    });


    //limit chars
    $('.url-sefaz').text($('.url-sefaz').text().substr(0, 40) + '...');

    //active tabs
    $('.lktb').removeClass('active');
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('#') + 1);
    if (id != url) {
        $('.' + id).addClass('active');
        return false;
    }
    $('.qrcode').addClass('active');
    return false;
});

function selectTab(tab) {
    $('.content-tab').hide();
    $('#' + tab).show();

    $('.lktb').removeClass('active');
    $('.' + tab).addClass('active');

    applyEffects();
}

function applyEffects(){
    $("#list-financials").hide();
    $("#list-cupons").hide();
    $("#show-data").hide();

    setTimeout(function(){
        $("#list-financials").fadeIn();
        $("#list-cupons").fadeIn();
        $("#show-data").fadeIn();
    }, 600);


    $('html, body').animate({
        scrollTop: $("#list-financials").offset().top - 170
    }, 100);
    $('html, body').animate({
        scrollTop: $("#list-cupons").offset().top - 170
    }, 100);
}


/*datatable cupons*/
function datatableCupons(){
    var json = [
        {"url": "http://nfce.encat.org/consumidor/consulte-nota/", "data": "16/12/2017"},
        {"url": "http://nfce.encat.org/consumidor/consulte-nota/", "data": "16/12/2017"},
        {"url": "http://nfce.encat.org/consumidor/consulte-nota/", "data": "16/12/2017"},
        {"url": "http://nfce.encat.org/consumidor/consulte-nota/", "data": "16/12/2017"},
        {"url": "http://nfce.encat.org/consumidor/consulte-nota/", "data": "16/12/2017"},
        {"url": "http://nfce.encat.org/consumidor/consulte-nota/", "data": "16/12/2017"},
        {"url": "http://nfce.encat.org/consumidor/consulte-nota/", "data": "16/12/2017"},
        {"url": "http://nfce.encat.org/consumidor/consulte-nota/", "data": "16/12/2017"},
        {"url": "http://nfce.encat.org/consumidor/consulte-nota/", "data": "16/12/2017"},
        {"url": "http://nfce.encat.org/consumidor/consulte-nota/", "data": "16/12/2017"},
        {"url": "http://nfce.encat.org/consumidor/consulte-nota/", "data": "16/12/2017"},
        {"url": "http://nfce.encat.org/consumidor/consulte-nota/", "data": "16/12/2017"},
        {"url": "http://nfce.encat.org/consumidor/consulte-nota/", "data": "16/12/2017"},
        {"url": "http://nfce.encat.org/consumidor/consulte-nota/", "data": "16/12/2017"},
        {"url": "http://nfce.encat.org/consumidor/consulte-nota/", "data": "16/12/2017"},
        {"url": "http://nfce.encat.org/consumidor/consulte-nota/", "data": "16/12/2017"},
        {"url": "http://nfce.encat.org/consumidor/consulte-nota/", "data": "16/12/2017"},
        {"url": "http://nfce.encat.org/consumidor/consulte-nota/", "data": "16/12/2017"},
        {"url": "http://nfce.encat.org/consumidor/consulte-nota/", "data": "16/12/2017"},
    ];
    var itens = '';
    $('#list-cupons').html('');
    $.each(json, function(idx, obj) {
        itens += ' <li>';
        itens += ' <a class="rippler rippler-default" href="'+obj.url+'" target="_blank">';
        itens += ' <p class="url-sefaz">'+obj.url+'</p>';
        itens += ' <div class="search-icon"><img src="assets/images/search.png" alt=""> <small>'+obj.data+'</small></div>';
        itens += ' </a>';
        itens += ' </li>';
        //alert(obj.url);
    });    
    $('#list-cupons').append(itens);    
}

/*datatable financial*/
function datatableFinancials(){
    var json = [
        {"description": "Supermercado",      "subtotal": "156.60",  "data": "16/10/2017"},
        {"description": "Farmácia",          "subtotal": "90.00",   "data": "16/10/2017"},
        {"description": "Posto de Gasolina", "subtotal": "230.00",  "data": "16/10/2017"},
        {"description": "Restaurante",       "subtotal": "16.57",   "data": "16/10/2017"},
        {"description": "Viagem",            "subtotal": "1158.00", "data": "16/10/2017"},
        {"description": "Supermercado",      "subtotal": "156.60",  "data": "16/11/2017"},
        {"description": "Farmácia",          "subtotal": "90.00",   "data": "16/11/2017"},
        {"description": "Posto de Gasolina", "subtotal": "230.00",  "data": "16/11/2017"},
        {"description": "Restaurante",       "subtotal": "16.57",   "data": "16/11/2017"},
        {"description": "Viagem",            "subtotal": "1158.00", "data": "16/11/2017"},
        {"description": "Supermercado",      "subtotal": "156.60",  "data": "16/12/2017"},
        {"description": "Farmácia",          "subtotal": "90.00",   "data": "16/12/2017"},
        {"description": "Posto de Gasolina", "subtotal": "230.00",  "data": "16/12/2017"},
        {"description": "Restaurante",       "subtotal": "16.57",   "data": "16/12/2017"},
        {"description": "Viagem",            "subtotal": "1158.00", "data": "16/12/2017"}        
    ];
    var itens = '';
    $('#list-financials').html('');
    $.each(json, function(idx, obj) {
        itens += ' <li>';
        itens += ' <p>'+obj.description+'</p>';
        itens += ' <div class="subtotal"><label>'+obj.subtotal+'</label><small>'+obj.data+'</small></div>';
        itens += ' </li>';
    });
    $('#list-financials').append(itens);
}