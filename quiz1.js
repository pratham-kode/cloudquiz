(function() 
 {
  var allQuestions = [{
    question: "when was Albert Einstein born ? ",
    options: ["16 october", "3 september", '14 March', "24 august"],
    answer: 2
  }, {
    question: "when was Isaac Newton born ?",
    options: ["22 february", "11 january", "17 july", "4 January"],
    answer: 3
  }, {
    question: "when was Carl Sagan born ?",
    options: [" 9 November", "18 december", "9 may","7 june"],
    answer: 0
  },{
    question: "When was Galileo Galilei born ?",
    options: ["14 january", "15 February", "23 december", "16 march"],
    answer: 1
  }, {
    question: "when was Stephen Hawking born?",
    options: ["6 september","8 January", "26 july", "19 april"],
    answer: 1
  },{
    question: "when was Louis Pasteur born  ?",
    options: ["30 august", "28 september", "5 june", "27 December"],
    answer: 3
  },{
    question: "when was Nikola Tesla born ?",
    options: ["10 July ", "15 october", "11 january", "27 may"],
    answer: 0
  },{
    question: "when was Srinivasa Ramanujan born ?",
    options: ["26 april", " 22 December", "7 november", "17 february"],
    answer: 1
  },{
    question: "when was Homi J. Bhabha born ?",
    options: ["9 march", "15 august", " 30 October", "18 september"],
    answer: 2
  },{
   question: "when was C. V. Raman born?",
    options: ["21 november", "31 october", "7 November", "8 april"],
    answer: 2
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