class FAQItem {
    constructor(question, answer) {
      this.question = question;
      this.answer = answer;
    }
  // Метод для отрисовки элемента вопроса и ответа
    render() {
      const item = document.createElement('div');
      item.classList.add('accordion-item');
  
      const button = document.createElement('button');
      button.classList.add('accordion-button');
      button.textContent = this.question;
  
      const content = document.createElement('div');
      content.classList.add('accordion-content');
      content.textContent = this.answer;
  
      item.appendChild(button);
      item.appendChild(content);
  
      return item;
    }
  }
  // Статические данные о вопросах и ответах
  const faqData = [
    {
      question: 'Что такое HTML?',
      answer: 'HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере.'
    },
    {
      question: 'Что такое CSS?',
      answer: 'CSS (/siːɛsɛs/ англ. Cascading Style Sheets «каскадные таблицы стилей») — формальный язык декорирования и описания внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или XHTML).'
    },
    {
      question: 'Что такое JavaScript?',
      answer: 'JavaScript (/ˈdʒɑːvɑːˌskrɪpt/; аббр. JS /ˈdʒeɪ.ɛs./) — мультипарадигменный язык программирования.'
    }
  ];
  
  const accordion = document.querySelector('.accordion');
  
  faqData.forEach(data => {
    const faqItem = new FAQItem(data.question, data.answer);
    const itemElement = faqItem.render();
    accordion.appendChild(itemElement);
  });
  