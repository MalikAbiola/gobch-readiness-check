
let questions = [
    {
        question: "I have registered for GOBC&H 2023",
        answers: [
          "Yes"
        ],
        options: [
          "Yes",
          "No",
        ]
    },
    {
        question: "I have taken my leave for GOBC&H 2023",
        answers: [
          "Yes"
        ],
        options: [
          "Yes",
          "No",
        ]
    },
    {
        question: "I am fully prepared to connect online",
        answers: [
          "Yes",
          "I am going to be on-ground"
        ],
        options: [
          "Yes",
          "No",
          "I am going to be on-ground"
        ]
    },

    {
        question: "I have settled my travel plans",
        answers: [
          "Yes",
          "I am going to be online"
        ],
        options: [
          "Yes",
          "No",
          "I am going to be online"
        ]
    },
    {
        question: "I have settled my flight and accommodation",
        answers: [
          "Yes"
        ],
        options: [
          "Yes",
          "No",
          "I am going to be online"
        ]
    },
    {
        question: "I have prepared my offerings, seeds and other obligations",
        answers: [
          "Yes"
        ],
        options: [
          "Yes",
          "No",
        ]
    },

    {
        question: "I am fully prepared to attend on-ground",
        answers: [
          "Yes"
        ],
        options: [
          "Yes",
          "No",
          "I am connecting online"
        ]
    },
    {
        question: "I have a new note for messages and instructions",
        answers: [
          "Yes"
        ],
        options: [
          "Yes",
          "No",
        ]
    },
    {
        question: "I am connecting to the GOBC&H prayer chains",
        answers: [
          "Yes"
        ],
        options: [
          "Yes",
          "No",
        ]
    },
    {
        question: "I have made plans to get the GOBC&H 2023 messages on tape",
        answers: [
          "Yes"
        ],
        options: [
          "Yes",
          "No",
        ]
    },
];

let question_count = 0;
let correct = 0;


window.onload = function(){
  $( "#readiness_bar" ).progressbar({
      value: false
    });
    show(question_count);

};

function show(count){
    let question = document.getElementById("questions");

    questAndOptionsHtml = `<h3>${questions[count].question}</h3>`
    if (questions[count].options.length > 0) {
      questAndOptionsHtml +=  `<ul class="option_group">`

      for(let i=0; i < questions[count].options.length; i++){
          questAndOptionsHtml += `<li class="option">${questions[count].options[i]}</li>`
      }

      questAndOptionsHtml += `</ul>`;
    }


    question.innerHTML = questAndOptionsHtml
    toggleActive();
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){
  if(question_count != questions.length-1){
    let user_answer = document.querySelector("li.option.active").innerHTML;

    if(questions[question_count].answers.indexOf(user_answer) >= 0) {
        correct ++;
    }
    question_count++;
    show(question_count);
    return
  }

  let resultDiv = document.getElementById("quiz_result_div");
  let questionsDiv = document.getElementById("quiz_content_div");

  perc = Math.ceil((correct / question_count) * 100)

  $("#readiness_value").text(`You are ${perc}% ready for GOBC&H 2023`);
  $("#readiness_bar").progressbar( "option", {
     value: perc
   })


  $("#quiz_content_div").fadeOut("slow", function(){
    $("#quiz_result_div").fadeIn()
  })
}
