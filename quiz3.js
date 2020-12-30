 // constellation quiz
(function() 
 {
  var allQuestions = [{
    question: " Betelgeuse star is in which constellation ? ",
    options: ["cepheus", "corona borealis", 'Orion', "leo"],
    answer: 2
  }, {
    question: "Sirius star is in which constellation ?",
    options: ["virgo ", "ursa minor", "scorpius ", "Canis Major"],
    answer: 3
  }, {
    question: "Polaris star is in which constellation ?",
    options: ["Ursa Minor", "ursa major", "sagittarius ","pisces "],
    answer: 0
  },{
    question: "which star is not in orion?",
    options: ["betelgeuse", "Vega", "rigel", "bellatrix"],
    answer: 1
  }, {
    question: "Antares star is in which constellation ?",
    options: ["lyra ","Scorpius", "taurus", "perseus"],
    answer: 1
  },{
    question: "Fomalhaut star is in which constellation ?",
    options: ["sculptor", "orion ", "pegasus", "Piscis"],
    answer: 3
  },{
    question: "find the odd one :",
    options: ["kepler-444", "kepler-62", "Kepler-11", "vega"],
    answer: 2
  },{
    question: "Deneb star is in which constellation ?",
    options: ["corona borealis", "Cygnus", "draco", "gemini"],
    answer: 1
  },{
    question: "Altair star is in which constellation ?",
    options: ["fornax ", "libra", "Aquila", "andromeda"],
    answer: 2
  },{
   question: "Canopus star is in which constellation ?",
    options: ["Carina", "cassiopeia ", "hydra", "lynx"],
    answer: 0
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