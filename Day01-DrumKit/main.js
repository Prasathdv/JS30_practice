// Create a function to play the audio based on keycode
function playSound(e){
    // Get the DOM value of audio data-key
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);    
    
    // Business logic for playing audio on key press
    if(!audio) return; // stop the function if invalid key pressed
    audio.currentTime = 0; // Reset to zero so that audio can play seamlessly
    audio.play();
    key.classList.add('playing') // add the playing class to existing key class
}

// Create a function to remove the transition effect when the key is pressed once
function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

// Loop through all keys and remove the transition effect from class playing
const keys = document.querySelectorAll(".key");    
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Add a window based even listener to get keydown event and call playSound() function
window.addEventListener('keydown', playSound);
