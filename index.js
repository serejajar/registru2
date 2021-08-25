let intervalId;

function getExam() {
  intervalId && clearInterval(intervalId);

  const currTimeMs = Date.now();

  const btn = document.getElementById('btnCheck');

  intervalId = setInterval(async () => {
    await btn.click();

    const examDays = document.querySelectorAll('td.picker-cell[title="Disponibil"]');

    if (examDays.length) {
      const audio = document.createElement('audio');
      audio.setAttribute('src', 'https://www.w3schools.com/tags/horse.mp3');
      audio.setAttribute('loop', true);
      audio.play();

      document.body.appendChild(audio);

      console.log('Найден свободный день!');
    }
  }, 5000);

  return `timer's ID: ${intervalId}`;
};

getExam();
