/* Golden's Casa Linda Keys — Main JS */
(function(){
  'use strict';

  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if(hamburger && mobileMenu){
    hamburger.addEventListener('click', function(){
      mobileMenu.classList.toggle('open');
      const open = mobileMenu.classList.contains('open');
      hamburger.setAttribute('aria-expanded', open);
      hamburger.querySelectorAll('span')[0].style.transform = open ? 'rotate(45deg) translate(5px,5px)' : '';
      hamburger.querySelectorAll('span')[1].style.opacity = open ? '0' : '';
      hamburger.querySelectorAll('span')[2].style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(function(btn){
    btn.addEventListener('click', function(){
      const answer = this.nextElementSibling;
      const isOpen = this.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-question.open').forEach(function(q){
        q.classList.remove('open');
        q.nextElementSibling.classList.remove('open');
      });
      // Toggle current
      if(!isOpen){
        this.classList.add('open');
        answer.classList.add('open');
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Sticky header shadow
  const header = document.querySelector('.site-header');
  if(header){
    window.addEventListener('scroll', function(){
      header.style.boxShadow = window.scrollY > 10 ? '0 4px 30px rgba(0,0,0,.25)' : '0 4px 20px rgba(0,0,0,.12)';
    });
  }

  // Phone number tracking (placeholder)
  document.querySelectorAll('a[href^="tel:"]').forEach(function(a){
    a.addEventListener('click', function(){
      if(typeof gtag !== 'undefined'){
        gtag('event','phone_click',{event_category:'contact',event_label:this.href});
      }
    });
  });

})();
