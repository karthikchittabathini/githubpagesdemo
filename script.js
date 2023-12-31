const counters = document.querySelectorAll('.counter');

console.log(counters[0]);
console.log(counters[0].getAttribute('data-target'));

counters.forEach((counter) => {
  counter.innerText = 0;

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const increment = target / 100;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
