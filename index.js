let intervalId;

function getExam(days = 7) {
  intervalId && clearInterval(intervalId);

  const currTimeMs = Date.now();

  const btn = document.getElementById('btnCheck');

  intervalId = setInterval(async () => {
    await btn.click();

    const examDays = document.querySelectorAll('td.picker-cell[title="Disponibil"]');
    const firstAvailableDay = examDays[0];

    const day = firstAvailableDay.innerText;
    const month = +firstAvailableDay.getAttribute('data-month');
    const year = firstAvailableDay.getAttribute('data-year');

    const nextDate = new Date(year, month, day);

    const period = nextDate.getTime() - currTimeMs;
    const checkPeriod = (1000 * 60 * 60 * 24) * days;

    if (period < checkPeriod) {
      const audio = document.createElement('audio');
      audio.setAttribute('src', 'https://www.w3schools.com/tags/horse.mp3');
      audio.play();

      body.appendChild(tag);

      console.log('Найден свободный день!');
    }
  }, 5000);

  return `timer's ID: ${intervalId}`;
};

getExam();
