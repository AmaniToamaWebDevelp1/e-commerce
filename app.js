(function(){
   
  
    'use strict';
     var shoes = [
        
          {
            price : "$3",
            title : "orange shoes",
            url : "items/sh1",
            des : "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus excepturi, culpa doloremque repellendus dignissimos accusantium maiores quia ex, aliquid optio,"
        },
        {
            price : "$10",
            title : "sportive red shoes",
            url : "items/sh3",
            des : "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus excepturi, culpa doloremque repellendus dignissimos accusantium maiores quia ex, aliquid optio,"

        },
         {
            price : "$9",
            title : "sportive blue&black shoes",
            url : "items/sh4",
            des : "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus excepturi, culpa doloremque repellendus dignissimos accusantium maiores quia ex, aliquid optio,"

        },
       {
            price : "$10",
            title : "sportive white&black shoes",
            url : "items/sh2",
            des : "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus excepturi, culpa doloremque repellendus dignissimos accusantium maiores quia ex, aliquid optio,"

        }
    ];
     var accessories = [
          {
            price : "$3",
            title : "Diamond accessory ",
            url : "items/e4",
            des : "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus excepturi, culpa doloremque repellendus dignissimos accusantium maiores quia ex, aliquid optio,"
        },
        {
            price : "$10",
            title : "Golden accessory ",
            url : "items/e2",
            des : "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus excepturi, culpa doloremque repellendus dignissimos accusantium maiores quia ex, aliquid optio,"

        },
         {
            price : "$9",
            title : "simple golden accessory",
            url : "items/e3",
            des : "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus excepturi, culpa doloremque repellendus dignissimos accusantium maiores quia ex, aliquid optio,"

        },
       
    ];
     var pantaloons = [
          {
            price : "$100",
            title : "Mens Beige pantaloon",
            url : "items/p1",
            des : "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus excepturi, culpa doloremque repellendus dignissimos accusantium maiores quia ex, aliquid optio,"
        },
        {
            price : "$120",
            title : "Women's blue pantaloon",
            url : "items/p2",
            des : "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus excepturi, culpa doloremque repellendus dignissimos accusantium maiores quia ex, aliquid optio,"

        },
         {
            price : "$90",
            title : "Classic pantaloon",
            url : "items/p3",
            des : "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus excepturi, culpa doloremque repellendus dignissimos accusantium maiores quia ex, aliquid optio,"

        },
       {
            price : "$100",
            title : "Boy friend pantaloon",
            url : "items/p4",
            des : "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus excepturi, culpa doloremque repellendus dignissimos accusantium maiores quia ex, aliquid optio,"

        }
    ];
     var bags = [
          {
            price : "$20",
            title : "Aqua  bag",
            url : "items/b3",
            des : "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus excepturi, culpa doloremque repellendus dignissimos accusantium maiores quia ex, aliquid optio,"
        },
        {
            price : "$10",
            title : "White bag",
            url : "items/b1",
            des : "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus excepturi, culpa doloremque repellendus dignissimos accusantium maiores quia ex, aliquid optio,"

        },
         {
            price : "$25",
            title : "pink bag",
            url : "items/b2",
            des : "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus excepturi, culpa doloremque repellendus dignissimos accusantium maiores quia ex, aliquid optio,"

        }
       
    ];
    
  angular.module('store', [])
  .controller('itemsList', itemsList);
  itemsList.$inject = ['$scope'];
  function itemsList($scope){
    $scope.shoes = shoes;
    $scope.accessories = accessories;
    $scope.pantaloons = pantaloons;
    $scope.bags = bags;
  }
}
)();
// hello world 