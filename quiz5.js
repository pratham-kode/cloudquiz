 //  quiz
 (function() 
 {
  var allQuestions = [{
    question: "during collision what remains constant ? ",
    options: ["velocity", "Momentum", 'speed', "distance"],
    answer: 1
  }, {
    question: "deceleration is what sort of acceleration?",
    options: ["positive acceleration", "zero acceleration", "Negative Acceleration", "all of above"],
    answer: 2
  }, {
    question: "which of the following is the unit of frequency ?",
    options: ["metre", "second", "newton","Hertz"], 
    answer: 3
  },{
    question: "Joule is the unit of ?",
    options: ["velocity", "Work", "power", "force"],
    answer: 1
  }, {
    question: "Power is a measure of the ....... ?",
    options: ["The rapidity with which work is done","the slowness with which work is performed",
                 "length of time", "amount of energy required to perform the work"],
    answer: 0
  },{
    question: "The total energy of an object falling freely towards the ground ...",
    options: ["decreases", "increases", "increases in the beginning and then decreases", "Remains Unchanged "],
    answer: 3
  },{
    question: "The work done on an object does not depend on ....",
    options: ["Initial velocity of the object", "displacement", "applied force", "the angle between force and displacement."],
    answer: 0 
  },{
    question: "The potential energy of your body is least when you are .....",
    options: ["sitting on a chair", "Sleeping on the ground", "standing on the ground", "sitting on the ground"],
    answer: 1
  },{
    question: "what is unit of pressure ?",
    options: ["newton ", "meter", "Pascal", "none of above"],
    answer: 2
  },{
   question: "unit of current",
    options: ["kelvin", "volts", "kilogram", "None of above"],
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