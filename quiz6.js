// city : Paris , Washington , 	Greenville , Mumbai , 
// Dubai  , Rome , Pisa ,   London , Peru , Asia  ; 

(function() 
 {
  var allQuestions = [{
    question: "what is the chemical foemulae of baking soda ?",
    options: ["AgIO3", "C3H8O2", 'CeB6', "NaHCO₃"],
    answer: 3
  }, {
    question: "what is the chemical foemulae of calcium nitride ?",
    options: ["Ca3N2", "Ca3(AsO4)2", "C17H36", "FeO"],
    answer: 0
  }, {
    question: "what is the chemical foemulae of nitric acid ?",
    options: ["HNO3", "HNO2", "HCl","HCOOH"],
    answer: 0
  },{
    question: "what is the chemical foemulae of lactic acid ?",
    options: ["HC3H5O3", "HCO3−", "HClO", "HN3"],
    answer: 0
  }, {
    question: "what is the chemical foemulae of sulfurous acid ?",
    options: ["H2SO4","H2SO3", "H2O2", "H2S"],
    answer: 1
  },{
    question: "what is the chemical foemulae of water ?",
    options: ["H2S2O6", "H2N2O2", "H2O", "H3O+"],
    answer: 2
  },{
    question: "what is the chemical foemulae of magnesium oxide ?",
    options: ["MgO", "MgS", "MgSO3", "MgSO4"],
    answer: 0
  },{
    question: "what is the chemical foemulae of oxygen ?",
    options: ["O2", "O2−", "O", "OH−"],
    answer: 2
  },{
    question: "what is the chemical foemulae of ozone ?",
    options: ["O2F2", "OF2", "O3", "O2"],
    answer: 2
  },{
   question: "what is the chemical foemulae of hydrochloric acid ?",
    options: ["HNO3", "H2SO4", "H2O", "HCL"],
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