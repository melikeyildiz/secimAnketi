function svgturkiyeharitasi() {
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');
  const totalPoll = document.querySelector('#total-poll'); 

  element.addEventListener(
    'click',
    function (event) {
      if (event.target.tagName === 'path') {
        const parent = event.target.parentNode;
        const id = parent.getAttribute('id');

        if (id !== 'guney-kibris') {
          // Şehre tıklandığında anket div'ini görünür hale getirin
          totalPoll.style.display = 'block';
        }
      }
    }
  );

}





let poll = {
  question: "Hangi adaya oy vereceksiniz?",
  answers: ["A Adayı", "B Adayı", "C Adayı", "D Adayı"],
  pollCount : 100,
  answerWeight:[60,10,20,10],
  selectAnswer : -1
};

let polldom = {
  question:document.querySelector(".poll .question"),
  answers: document.querySelector(".poll .answers")
};

polldom.question.innerText = poll.question;
polldom.answers.innerHTML = poll.answers.map(function(answer,i){
  return(
    `
    <div class="answer" onclick = "markanswer('${i}')">
    ${answer}
    <span class = "percentage_bar"></span>
    <span class = "percentage_value"></span>
    </div>

    `
  );
}).join("");



function markanswer(i)
{
  poll.selectAnswer = +i;

  try{
    document.querySelector(".poll .answers .answer.selected")
    .classList.remove(".selected");
  }
  catch(msg){}
 
  document.querySelectorAll(".poll .answers .answer")
  [i].classList.add(".selected");

  showresults();
}



function showresults()
{
    let answers = document.querySelectorAll(".poll .answers .answer");

    for (let i = 0; i < answers.length; i++) {
      
      let percentage = 0;

      if (i == poll.selectAnswer) {
          percentage = Math.round
          (
            (poll.answerWeight[i] + 1) * 100 / (poll.pollCount + 1)
          );
      }

      else
      {
        percentage = Math.round
        (
          (poll.answerWeight[i]) * 100 / (poll.pollCount + 1)
        );
      }

      answers[i].querySelector(".percentage_bar").style.width = percentage + "%";
      answers[i].querySelector(".percentage_value").innerText = percentage + "%";
      
    }
}


startProgress();

const nav = document.querySelector(".nav");
        searcIcon = document.querySelector("#searchIcon");
        navOpenBtn = document.querySelector(".navOpenBtn");
        navCloseBtn = document.querySelector(".navCloseBtn");

    searcIcon.addEventListener("click", () => {
        nav.classList.toggle("openSearch");
        nav.classList.remove("openNav");
        if(nav.classList.contains("openSearch")){
         return searcIcon.classList.replace("uil-search" , "uil-times");
        }
        searcIcon.classList.replace("uil-times" , "uil-search");
    });

    navOpenBtn.addEventListener("click", () => {
        nav.classList.add("openNav");
        nav.classList.remove("openSearch");
        searcIcon.classList.replace("uil-times" , "uil-search");
    });
    navCloseBtn.addEventListener("click", () => {
        nav.classList.remove("openNav");
    });

    


function svgturkiyeharitasi() {
    const element = document.querySelector('#svg-turkiye-haritasi');
    const info = document.querySelector('.il-isimleri');

    
    element.addEventListener(
      'mouseover',
      function (event) {
        if (event.target.tagName === 'path' && event.target.parentNode.id !== 'guney-kibris') {
          info.innerHTML = [
            '<div>',
            event.target.parentNode.getAttribute('data-iladi'),
            '</div>'
          ].join('');
        }
      }
    );
  
    element.addEventListener(
      'mousemove',
      function (event) {
        info.style.top = event.pageY + 25 + 'px';
        info.style.left = event.pageX + 'px';
      }
    );
  
    element.addEventListener(
      'mouseout',
      function (event) {
        info.innerHTML = '';
      }
    );
  
    element.addEventListener(
      'click',
      function (event) {
        if (event.target.tagName === 'path') {
          const parent = event.target.parentNode;
          const id = parent.getAttribute('id');
  
          if (
            id === 'guney-kibris'
          ) {
            return;
          }
  
          window.location.href = (
            '#'
            + id
            + '-'
            + parent.getAttribute('data-plakakodu')
          );
        }
      }
    );
  }



function move(progressBarId, startWidth, endWidth) {
  var elem = document.getElementById(progressBarId);
  var width = 0;
  var id = setInterval(frame, 10);
  
  function frame() {
    if (width >= endWidth) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width + '%';
    }
  }
}

function startProgress() {
  move('myBar1', 0, 53); // myBar1 için başlangıç ve bitiş genişlikleri
  move('myBar2', 0, 26); // myBar2 için başlangıç ve bitiş genişlikleri
  move('myBar3', 0, 21); // myBar3 için başlangıç ve bitiş genişlikleri
}
