$( document ).ready(function() {
    var numberToGuess = "";
    var counter = 0;
    var number1 = [10];
    var number2 = [5];
    var number3 = [3];
    var number4 = [7];

//     $('reset').on('click', function){
//         // Math.floor(Math.random() * 120) + 19;
//         // return
//         // function getRandomInt(max) {
//   return Math.floor(Math.random() * 120) + 19;
//     }
    
    $('number1 number2 number3 number4').text(numberToGuess);
    for (var i=0; i< number1.length; i++){
      var imageCrystal1 = $('<img>');
      
      imageCrystal1.attr('data-num', number1[i]);
      imageCrystal1.attr('src', 'assets/images/crystal-green.png');
      imageCrystal1.attr('alt', 'green crystal');
      imageCrystal1.addClass('crystalImage');
      $('#crystals').append(imageCrystal1);
    }

    for (var i=0; i< number2.length; i++){
      var imageCrystal2 = $('<img>');
      
      imageCrystal2.attr('data-num', number2[i]);
      imageCrystal2.attr('src', 'assets/images/crystal-blue.png');
      imageCrystal2.attr('alt', 'blue crystal');
      imageCrystal2.addClass('crystalImage');
      $('#crystals').append(imageCrystal2);
    }

    for (var i=0; i< number3.length; i++){
      var imageCrystal3 = $('<img>');
      
      imageCrystal3.attr('data-num', number3[i]);
      imageCrystal3.attr('src', 'assets/images/crystal-pink.png');
      imageCrystal3.attr('alt', 'red crystal');
      imageCrystal3.addClass('crystalImage');
      $('#crystals').append(imageCrystal3);
    }

    for (var i=0; i< number4.length; i++){
      var imageCrystal4 = $('<img>');
      
      imageCrystal4.attr('data-num', number4[i]);
      imageCrystal4.attr('src', 'assets/images/crystal-teal.png');
      imageCrystal4.attr('alt', 'purple crystal');
      imageCrystal4.addClass('crystalImage');
      $('#crystals').append(imageCrystal4);
    }

    $('#reset').on('click', function(){
        reset();
    });

    function reset(){
      console.log("made it");
      counter = 0;      
      $('#yourNumber').text(counter);

      number1 = [5];
      number2 = [3];
      number3 = [7];
      number4 = [10];
      $('number1 number2 number3 number4').text(numberToGuess);
      console.log('Is it working');
    };

    $('.crystalImage').on('click', function(){
    

      counter = counter + parseInt($(this).data('num'));
      
      $('#yourNumber').text(counter);
      if (counter == numberToGuess){
        alert('You won!');
        reset();
        console.log("try it");
      }else if( counter > numberToGuess){
        alert('You lost!');
        reset();
      }
    });
  
  });
</script>