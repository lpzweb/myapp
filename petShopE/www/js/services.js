angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('classify', function() {
	var Classinav={
	"为您推荐":false,"狗狗主粮":false,"狗狗零食":false,"狗狗日用":false,"狗狗玩具":false,"狗狗保健":false,
	"狗狗医疗":false,"狗狗服饰":false,"狗狗牵引":false,"狗狗美容":false,"狗狗香波":false,"狗狗书籍":false,
	"狗狗周边":false,"狗狗定制":false
	}
	return{
		all:function(){
			return Classinav;
		}
	}
})
.factory('dogfooddata', function() {
	var Dogfood={
					listall:[
					{src:"img/hhomeimg/dogfood.png",describe:"美国原装进口 雅思ARTEMIS中/大型犬配方全期犬粮4磅（1.81kg）",Oprice:"￥165.60",Nprice:"￥138.00",interact:"1235（96%好评）",soldnum:"23"},
					{src:"img/hhomeimg/dogfood1.png",describe:"美国原装进口 LUCY鸭肉土豆低配方全犬粮25磅（1.81kg）",Oprice:"￥320.60",Nprice:"￥254.00",interact:"8789（98%好评）",soldnum:"23"},
					{src:"img/hhomeimg/dogfood2.png",describe:"加拿大装进口 3Whahah中/大型犬配方全期犬粮4磅（1.81kg）",Oprice:"￥673.60",Nprice:"￥428.00",interact:"1212（99%好评）",soldnum:"23"},
					{src:"img/hhomeimg/dogfood3.png",describe:"加拿大原装进口 	Orijen渴望狗粮六种鱼肉加美毛专用配方犬粮（2kg）",Oprice:"￥290.60",Nprice:"￥320.00",interact:"1.8万（97%好评）",soldnum:"23"},
					{src:"img/hhomeimg/dogfood4.png",describe:"【保质期至2017-12-19】加拿大原装进口 	Orijen渴望狗粮（1.81kg）",Oprice:"￥620.60",Nprice:"￥684.00",interact:"5478（99%好评）",soldnum:"23"},
					{src:"img/hhomeimg/dogfood5.png",describe:"比利时进口 鱼子酱Canine Caviart特殊需求配方犬粮（低敏/减肥/老犬）10.88kg）",Oprice:"￥678.60",Nprice:"￥813.60",interact:"22（100%好评）",soldnum:"23"},
					{src:"img/hhomeimg/dogfood.png",describe:"美国原装进口 雅思ARTEMIS中/大型犬配方全期犬粮4磅（1.81kg）",Oprice:"￥165.60",Nprice:"￥138.00",interact:"22（100%好评）",soldnum:"23"},
					{src:"img/hhomeimg/dogfood.png",describe:"美国原装进口 雅思ARTEMIS中/大型犬配方全期犬粮4磅（1.81kg）",Oprice:"￥165.60",Nprice:"￥138.00",interact:"22（100%好评）",soldnum:"23"},
					{src:"img/hhomeimg/dogfood.png",describe:"美国原装进口 雅思ARTEMIS中/大型犬配方全期犬粮4磅（1.81kg）",Oprice:"￥165.60",Nprice:"￥138.00",interact:"22（100%好评）",soldnum:"23"},
					{src:"img/hhomeimg/dogfood.png",describe:"美国原装进口 雅思ARTEMIS中/大型犬配方全期犬粮4磅（1.81kg）",Oprice:"￥165.60",Nprice:"￥138.00",interact:"22（100%好评）",soldnum:"23"}
			]
	}
	return{
		all:function(){
			return Dogfood;
		}
	}
})
