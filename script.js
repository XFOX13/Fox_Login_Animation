const userInput = document.getElementById("user");
const passInput = document.getElementById("pass");
const pupilLeft = document.getElementById("pupil-left");
const pupilRight = document.getElementById("pupil-right");
const pawLeft = document.getElementById("paw-left");
const pawRight = document.getElementById("paw-right");

function movePupils(input) {
  input.addEventListener("input", e => {
    const length = input.value.length;
    // Move pupils when user types (left/right)
    const offset = Math.min(10, length * 2);
    pupilLeft.style.transform = `translateX(${offset}px)`;
    pupilRight.style.transform = `translateX(${offset}px)`;
  });
  input.addEventListener("focus", e => {
    pupilLeft.style.transform = 'translateX(7px)';
    pupilRight.style.transform = 'translateX(7px)';
  });
  input.addEventListener("blur", e => {
    pupilLeft.style.transform = 'translateX(0px)';
    pupilRight.style.transform = 'translateX(0px)';
  });
}

userInput.addEventListener("input", e => {
  const cursorX = userInput.selectionStart || 0;
  const move = Math.min(12, cursorX * 2);
  pupilLeft.style.transform = `translateX(${move}px)`;
  pupilRight.style.transform = `translateX(${move}px)`;
});

movePupils(userInput);

// Fox covers eyes when password box is focused or typed in
passInput.addEventListener("focus", e => {
  pawLeft.style.opacity = "1";
  pawRight.style.opacity = "1";
  pupilLeft.style.opacity = "0";
  pupilRight.style.opacity = "0";
});
passInput.addEventListener("blur", e => {
  pawLeft.style.opacity = "0";
  pawRight.style.opacity = "0";
  pupilLeft.style.opacity = "1";
  pupilRight.style.opacity = "1";
});
