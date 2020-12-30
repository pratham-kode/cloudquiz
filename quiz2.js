// city : Paris , Washington , 	Greenville , Mumbai , 
// Dubai  , Rome , Pisa ,   London , Peru , Asia  ; 

(function() 
 {
  var allQuestions = [{
    question: "where is Taj Mahal situated ?",
    options: ["Agra", "paris", 'new york', "mumbai"],
    answer: 0
  }, {
    question: "where is Eiffel Tower situated ?",
    options: ["greenville", "washington", "lisbon", "Paris"],
    answer: 3
  }, {
    question: "where is Burj Khalifa  located ?",
    options: ["peru", "Dubai", "london","new york"],
    answer: 1
  },{
    question: "where is Colosseum  located ?",
    options: ["cape town", "mumbai", "lisbon", "Rome"],
    answer: 3
  }, {
    question: "where is Leaning Tower   located ?",
    options: ["greenville","Pisa", "dubrovnik", "london"],
    answer: 1
  },{
    question: "where is  Big Ben located ?",
    options: ["athenes", "rome", "delhi", "London"],
    answer: 3
  },{
    question: "where is Machu Picchu  located ?",
    options: ["Peru ", "london", "san francisco", "dubrovnik"],
    answer: 0
  },{
    question: "where is Mount Everest  located ?",
    options: ["Asia", "austrelia", "america", "antartica"],
    answer: 0
  },{
    question: "where is Gateway of India  located ?",
    options: ["washington", "delhi", "Mumbai", "paris"],
    answer: 2
  },{
   question: "where is Great Pyramid located ?",
    options: ["peru", "san francisco", "cape town", "Giza"],
    answer: 3
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