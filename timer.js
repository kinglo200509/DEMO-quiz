document.addEventListener("DOMContentLoaded", function () {
    // Timer
    let initlatime = 120;
    const countdown = setInterval(() => {
      const minutes = Math.floor(initlatime / 60);
      const seconds = initlatime % 60;
  
      document.querySelector(".timer").innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      initlatime--;
  
      if (initlatime < 0) {
        clearInterval(countdown);
        document.querySelector(".timer").innerHTML = "Times up";
      }
    }, 1000);
  });