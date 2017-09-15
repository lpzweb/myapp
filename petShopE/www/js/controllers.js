
angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope,$timeout,dogfooddata){
	$timeout(function(){
	var mySwiper1 = new Swiper('.swiper-container1', {
			loop:true,
			speed:400,
			initialSlide:0,
//			autoHeight:true,
//			autoplayDisableOnInteraction:false,
			onSlideChangeStart:function(swiper){
				var n=swiper.activeIndex;
				if(n==7){n=1;}
				$(".dian").eq(n-1).addClass("active").siblings().removeClass("active");
			}
		})
			$(".dian").click(function(){
				var i=$(this).index();
				mySwiper1.slideTo(i+1,10);
				console.log(i+1)
				$(this).addClass("active").siblings().removeClass("active");
			})
	var mySwiper2 = new Swiper('.swiper-container2', {
		pagination : '.swiper-pagination',
		paginationType : 'progress',
		loop:true,
//		effect : 'coverflow',
		noSwiping : false,
	})
	//狗粮列表获取数据----------------------------------------
	 $scope.foodlist=dogfooddata.all().listall;
	 //点击选择不同的类别的狗粮
	 $(".nav-wrap .dian1").click(function(){
		$(this).children().addClass("NFactive");
		$(this).siblings().children().removeClass("NFactive");
	})
	 $scope.haha="刘鹏真"
	},0)
})

.controller('classificationCtrl', function($scope,classify) {
	$scope.isbrand=false
	$scope.isclassif=true;
	$scope.classifshow=function(){
		$scope.isbrand=false;
		$scope.isclassif=true;
	}
	$scope.brandshow=function(){
		$scope.isbrand=true;
		$scope.isclassif=false;
	}
  	$scope.classinav = classify.all();
	$scope.that="为您推荐"
	$scope.classinav["为您推荐"]=true;
  	$scope.classshow=function(ind){
  		$scope.classinav["为您推荐"]=false;
		$scope.classinav[$scope.that]=false
		$scope.classinav[ind]=true;
		$scope.that=ind;
   }
})
.controller('shopcartCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
})
.controller('myselfCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
})
//主页中的首页控制器
.controller('homehomeCtrl', function($scope) {

})
