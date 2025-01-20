function animateCount(element, start, end, duration) {
    const increment = Math.ceil((end - start) / (duration / 15));
    let current = start;
    const step = () => {
      current += increment;
      if (current > end) current = end;
      element.textContent = current;
      if (current < end) setTimeout(step, 10);
    };
    step();
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const number = entry.target.querySelector('.count');
            const endValue = parseInt(entry.target.getAttribute('data-value'), 10);
            animateCount(number, 0, endValue, 2000);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => observer.observe(number));
  });