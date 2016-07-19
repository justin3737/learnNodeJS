var request = require('request');
var cheerio = require('cheerio');

var url = 'http://www.cwb.gov.tw/V7/forecast/taiwan/Taipei_City.htm';
request(url, function(err, res, body){
    // 去跟中央氣象局的網站要資料

    $ = cheerio.load(body);
    // 把要到的資料放進 cheerio

    var weather = [];
    var tmp = $('.FcstBoxTable01 tbody tr').each(function(i, elem){
        weather.push($(this).text().split('\n'));
    });

    var output = [];

	for(var i=0 ; i<weather.length ; i++){
	    output.push({
	        time: weather[i][1].substring(2).split(' ')[0],
	        temp: weather[i][2].substring(2),
	        rain: weather[i][6].substring(2)
	    });
	}

	console.log(output);
	/*
	[ 
		{ time: '今晚至明晨', temp: '26 ~ 32', rain: '10 %' },
  		{ time: '明日白天', temp: '26 ~ 37', rain: '40 %' },
  		{ time: '明日晚上', temp: '26 ~ 32', rain: '10 %' } 
  	]
  	*/

});