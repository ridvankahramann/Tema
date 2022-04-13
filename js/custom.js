jQuery(document).ready(function($) {
  $(".toggle_down").hide();
  $("#wrapper").toggleClass('toggled');
  $(".hamburger_menu").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
  $(".menu_sidebar").click(function(e) {
  	e.preventDefault();
  	$("#wrapper").toggleClass("toggled");
  });
  $('.sidebar-brand').click(function() {
  	$(this).addClass('sidebaractive').siblings().removeClass('sidebaractive');
    if ($('.toggle_down').width() == 69.0208) {
      $(this).next('.toggle_down').slideToggle(400);
    }else{
      $(".toggle_down").hide(400);
    }
  });

  google.charts.load('visualization', '1', {packages:['corechart']});
  google.charts.setOnLoadCallback(drawChart1);
  function drawChart1() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2004',  1000,      400],
      ['2005',  1170,      460],
      ['2006',  660,       1120],
      ['2007',  1030,      540]
    ]);

    var options = {
      animation:{duration: 1000,easing: 'linear',startup: true},
      title: 'Company Performance',
      titleTextStyle: {color: '#FFF'},
      hAxis: {title: 'Year', textStyle:{color: '#FFF'}, titleTextStyle: {color: '#fff'}},
      legend: {textStyle: {color: '#FFF'}},
      backgroundColor: '#383B5E'
   };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
  }

  google.charts.load('visualization', '1', {packages:['corechart']});
  google.charts.setOnLoadCallback(drawChart2);
  function drawChart2() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2013',  1000,      400],
      ['2014',  1170,      460],
      ['2015',  660,       1120],
      ['2016',  1030,      540]
    ]);

    var options = {
      title: 'Company Performance',
      animation:{duration: 1000,easing: 'linear',startup: true},
      titleTextStyle: {color: '#FFF'},
      hAxis: {title: 'Year', textStyle:{color: '#FFF'},  titleTextStyle: {color: '#fff'}},
      vAxis: {minValue: 0},
      legend: {textStyle: {color: '#FFF'}},
      backgroundColor: '#383B5E'
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
  }

  $(window).resize(function(){
    drawChart1();
    drawChart2();
  });


});
