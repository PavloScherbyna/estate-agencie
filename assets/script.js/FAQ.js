const questionLinks = document.querySelectorAll('.show_menu');
  questionLinks.forEach(link => {
    link.addEventListener('click', function () {
      const questionBlock = this.parentElement;
      const questionText = questionBlock.querySelector('p');
      const allQuestionTexts = document.querySelectorAll('.questions_block p');
      allQuestionTexts.forEach(text => {
        if (text !== questionText) {
          text.classList.remove('active');
        }
      });
      questionText.classList.toggle('active');
    });
  });