 var questions = [
        {
          question: "At the turn of the century, widespread panic occurred that at midnight all computers would reset to zero and life as we knew it would cease to exist. What was this doomsday theory commonly referred to as?",
          options: ['Y2K','XYZ','The Reset','Going Dark'],
          answer: "Y2K"
          playerAnswer:''
          correct: true
        },
        {
          question: "In 2001, tragedy struck on September 11th. Where was United States President George W. Bush when receiving news of the terrorist attack in New York?",
          options: ['The White House press conference room','Vacationing in Camp David','His home in Texas','A Florida elementary school']
          answer: 'A Florida elementary school',
          playerAnswer: '',
          correct: true
        },
        {
          question: "The USA proudly hosted the 2002 Winter Olympics in which of these locations?",
          options: ['Warren, New Hampshire','Lake Tahoe, California','Salt Lake City, Utah','Seattle, Washington']
          answer: 'Salt Lake City, Utah',
          playerAnswer: '',
          correct: true
        },
        {
          question: "At Super Bowl XXXVII in 2004, which two artists performed at half time leading to a nipple slip later referred to as a 'wardrobe malfunction?'",
          options: ['Madonna and Britney Spears','Sting and Shania Twain','Justin Timberlake and Janet Jackson','Usher and Beyoncé']
          answer: 'Justin Timberlake and Janet Jackson',
          playerAnswer: '',
          correct: true
        },
        {
          question: "What website was launched in 2005 for user-made videos?",
          options: ['Vimeo','YouTube','Flickr','Imgur']
          answer: 'YouTube',
          playerAnswer: '',
          correct: true
        }
      ];

      var questionCount = 0;
var correct = 0;
var incorrect =0;
var unanswered = questions.length;

$(document).ready(function () {
    
    var timer;
    var questionTimer;
    var time = 30;
    var questionTime = 5;
    
  
    $("#start").on("click", function() {
        
        start();
     
    });
    
        $(".answer").on("click", function() {
            clearInterval(questionTimer);
            clearInterval(timer);
            if ( $(this).text() === questions[questionCount].answer) {
                $("#question").html("You chose correct! The answer was: " + questions[questionCount].answer);
                correct++;
                unanswered--;
                setTimeout(showQuestion, 3000);
                setTimeout(resetQC, 3000);
                setTimeout(resetTimer, 3000);
            }
            else {
                $("#question").html("You  chose incorrect. The correct answer was: " + questions[questionCount].answer);
                incorrect++;
                unanswered--;       
                setTimeout(showQuestion, 3000);
                setTimeout(resetQC, 3000);
                setTimeout(resetTimer, 3000);
            }
            $(".answer").empty();
            questionCount++;
        });
    
    $("#reset").on("click", function() {
        reset();
        $("#reset").hide();
    });
    
    function start() {
        $("#timer").show();
        $(".question").show();
        $("#stats").hide();
        $("#start").hide();
        $("#reset").hide();
    
       
        timer = setInterval(countdown, 1000);
        showQuestion();
        questionTimer = setInterval(questionCountdown, 1000);
    }
    
    
    function showQuestion() {
        if (questionCount === questions.length) {
            stop();
        }
        else {
            $("#question").html(questions[questionCount].question);
            $("#answer1").html(questions[questionCount].choices[0]);
            $("#answer2").html(questions[questionCount].choices[1]);
            $("#answer3").html(questions[questionCount].choices[2]);
            $("#answer4").html(questions[questionCount].choices[3]);
            questionTime = 5;
        }
    }
    
    
    function countdown() {
        time--;
        $("#timer").html("<h2>" + time + "</h2>");
        
        if (time === 0) {
            stop();
        }
    }
    
    function questionCountdown() {
        questionTime--;
        if (questionTime === 0) {
            questionCount++;
            showQuestion();
        }
        else if (questionCount === questions.length) {
            stop();
        }
    }
   
    function resetQC() {
        questionTimer = setInterval(questionCountdown, 1000);
    }
    
   
    function resetTimer() {
        timer = setInterval(countdown, 1000);
    }
    
   
    function stop() {
        clearInterval(timer);
        clearInterval(questionTimer);
        $(".question").hide();
        $("#timer").hide();
        $("#stats").show();
        time = 30;
        displayResults();
        setTimeout(empty, 5000);
       
    }
    
    function displayResults() {
        $("#timer").html("<h2>" + time + "</h2>");
        $("#correct").html("<p>" + "Correct Answers: " + correct + " </p>");
        $("#wrong").html("<p>" + "Incorrect Answers: " + incorrect + "</p>");
        $("#unanswered").html("<p>" + "Unanswered Questions: " + unanswered + "</p>");
    }
    
    function empty() {
        $("#stats").hide();
        $("#reset").show();
    }
    
    function reset() {
        questionCount = 0;
        correct = 0;
        incorrect =0;
        unanswered = questions.length;
        timer;
        questionTimer;
        time = 30;
        questionTime = 5;
        $(".question").show();
        start();
        
    }
    
});