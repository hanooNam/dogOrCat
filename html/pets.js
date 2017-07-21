(function(){
  var app = angular.module('pets-directives', []);

  app.directive("petsImage", function() {
    return {
      restrict: 'E',
      templateUrl: "pets-image.html",
      controller:function(){
        this.current = 0;

        this.clicked = function(image){
          var num = image.slice(-5,-4);
          num = num > 3 ? image.slice(-5,-4) - 4 : image.slice(-5,-4) -1;
          this.current = num;
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
