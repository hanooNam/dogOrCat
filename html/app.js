(function(){
  var data = [
    {
      "name": "해피",
      "type": "dog",
      "description": "세상에서 가장 귀여운 강아지 해피",
      "species": "푸들",
      "color": "black",
      "age": 5,
      "images": [
        "images/dog-01.gif",
        "images/dog-02.gif",
        "images/dog-03.gif"
      ],
      "reviews": [
        {review:"넘나 좋은것", like:1},
        {review:"넘나 이뿌네용", like:3}
      ]
    },
    {
      "name": "공이",
      "type": "dog",
      "description": "차가워 보이지만 앵기기 전문",
      "species": "말티즈",
      "color": "white",
      "age": 8,
      "images": [
        "/images/dog-04.gif",
        "/images/dog-05.gif",
        "/images/dog-06.gif"
      ],
      "reviews": [
        {review:"넘나 좋은것", like:1},
        {review:"넘나 이뿌네용", like:3}
      ]
    },
    {
      "name": "당근",
      "type": "cat",
      "description": "당근을 아주 좋아하는 당근당근",
      "species": "페르시안블루",
      "color": "white",
      "age": 3,
      "images": [
        "/images/cat-01.gif",
        "/images/cat-02.gif",
        "/images/cat-03.gif"
      ],
      "reviews": [
        {review:"넘나 좋은것", like:1},
        {review:"넘나 이뿌네용", like:3}
      ]
    },
    {
      "name": "굥이",
      "type": "cat",
      "description": "내사랑 굥이 뀨뀨",
      "species": "먼치킨",
      "color": "whie",
      "age": 4,
      "images": [
        "/images/cat-04.gif",
        "/images/cat-05.gif",
        "/images/cat-06.gif"
      ],
      "reviews": [
        {review:"넘나 좋은것", like:1},
        {review:"넘나 이뿌네용", like:3}
      ]
    }
  ];

  // app.controller('PetsController', ['$http', function($http){
  //   var pets = this;
  //
  //   pets.kind = [];
  //
  //   $http.get("/pets.json").success(function(data){
  //     pets.kind = data;
  //   });
  // }]);
  // data를 write하는거는 angular로 할 수 없다기에.....
  // 다음을 기약합니다.
  var app = angular.module('PetBook', ['pets-directives']);

  app.controller('PetsController',function(){
    this.petDatas = data;


      //   return {{pet.type}}==dog
      // //고양이가 체크
      //   return {{pet.type}}==cat
      // //둘다 체크


  });



})();
