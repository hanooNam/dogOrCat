(function(){
  var app = angular.module('pets-directives', []);

  app.directive("petsImage", function() {
    return {
      restrict: 'E',
      templateUrl: "pets-image.html",
      controller:function(){
        this.current ;

        // // this.goImage = function(image){
        // //   if (this.current !== null){
        // //     return this.current = pet.images[0]
        // //   }else{
        // //     return this.current = image;
        // //   }
        // // };
        // this.basic = function(pet){
        //   console.log(pet);
        //   return this.current = pet.images[0];
        // };
        // 이렇게나 쓸모없는 코드가 많았음 ㅎ
        this.clicked = function(image){
          // var num = image.slice(-5,-4);
          // num = num > 3 ? image.slice(-5,-4) - 4 : image.slice(-5,-4) -1;
          // this.current = num;
          return this.current = image;
        };
      },
      controllerAs:'img'
    };
  });
  app.directive('petsBasic',function(){
    return{
      restrict :"E",
      templateUrl:'pets-basic.html'
    };
  });

  app.directive('petsDescription',function(){
    return{
      restrict :"E",
      templateUrl:'pets-description.html'
    };
  });

  app.directive('petsReview', function(){
    return{
      restrict:'E',
      templateUrl:'pets-review.html',
      controller:function(){
        this.reviewContent = {};

        this.update = function(pet){
          // this.reviewContent= {review:$('#textInput').val(), like:0};
          // $('#textInput').val('');
          this.reviewContent.like=0;
          pet.reviews.push(this.reviewContent);
          this.reviewContent = {};
        };

        this.upLike = function(review){
          return review.like +=1;
        };



      },
      controllerAs:'review'
    };
  });

})();
