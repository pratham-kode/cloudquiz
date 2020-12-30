 // constellation quiz
 (function() 
 {
  var allQuestions = [{
    question: " who discovered hydrogen ? ",
    options: ["Henry Cavendish", "niels bohr", 'edwin hubble', "karl landsteiner"],
    answer: 0
  }, {
    question: "who discovered electron ? ",
    options: ["democritus ", "socrates", "J.J. Thomson", "pythagoras"],
    answer: 2
  }, {
    question: "who discovered radioactivity ?",
    options: ["archimedes.", "Becquerel", "marie curie","john dalton"],
    answer: 1
  },{
    question: "who discovered that black holes are not completely black.?",
    options: ["isaac newton", "albert einstein", "galileo galilei", "Stephen Hawking"],
    answer: 3
  }, {
    question: "who discovered penicillin ?",
    options: ["Alexander Fleming","charles darwin", "robert hooke", "carl linnaeus"],
    answer: 0
  },{
    question: "who discovered gravity ?",
    options: ["socrates", "pythagoras", "albert einstein", "Isaac Newton"],
    answer: 3
  },{
    question: "who discovered that the orbit of Mars was an ellipse ?",
    options: ["edwin hubble", "democritus", "Johannes Kepler", "galileo galilei"],
    answer: 2
  },{
    question: "who discovered cell ?",
    options: ["john dalton", "Robert Hooke", "niels bohr", "charles darwin"],
    answer: 1
  },{
    question: "who discovered methane ?",
    options: ["ernest rutherford ", "william thomson,", "Alessandro Volta", "alexander fleming"],
    answer: 2
  },{
   question: "who discovered electron?",
    options: ["charles darwin", "Ernest Rutherford", "john dalton", "niels bohr"],
    answer: 1
   }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();