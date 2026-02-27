// Animate fox eyes to follow input caret
const userInput = document.getElementById("username");
const passInput = document.getElementById("password");
const pupilLeft = document.getElementById("pupil-left");
const pupilRight = document.getElementById("pupil-right");
const pawCoverLeft = document.getElementById("paw-cover-left");
const pawCoverRight = document.getElementById("paw-cover-right");

function movePupils(position = 0) {
  // Pupil X movement ranges:
  // left: (base 185) range +-6
  // right: (base 235) range +-6
  const angle = Math.max(-7, Math.min(7, position - 8)); // keep within range
  pupilLeft.setAttribute('cx', 185 + angle); 
  pupilRight.setAttribute('cx', 235 + angle);
}
// For eye up/down cringe effect when typing
function winkIfPassword(focused) {
  if (focused) {
    pawCoverLeft.style.opacity = pawCoverRight.style.opacity = "1";
    pupilLeft.style.opacity = pupilRight.style.opacity = "0";
  } else {
    pawCoverLeft.style.opacity = pawCoverRight.style.opacity = "0";
    pupilLeft.style.opacity = pupilRight.style.opacity = "1";
  }
}

// Username eye follow
userInput.addEventListener('input', e => {
  const pos = userInput.selectionStart || 0;
  movePupils(pos / userInput.value.length * 15 || 0);
});
userInput.addEventListener('focus',  () => movePupils(userInput.selectionStart || 0));
userInput.addEventListener('blur',   () => movePupils(0));

// Password eye cover
passInput.addEventListener('focus',   () => winkIfPassword(true));
passInput.addEventListener('blur',    () => winkIfPassword(false));

// Also cover eyes as long as value is present and typing password
passInput.addEventListener('input',   () => winkIfPassword(true));

// Always reset on page load
winkIfPassword(false);

// Optional: pressing tab toggles as expected
