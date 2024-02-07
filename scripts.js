document.getElementById("email").innerHTML = "hi@hexato.io";
document.getElementById("email").innerHTML = "hi@hexato.io";

const hexagon1 = document.getElementById('hexagon1');
const hexagon2 = document.getElementById('hexagon2');

let mouseX = 0, mouseY = 0;
let hex1X = 0, hex1Y = 0, hex2X = 0, hex2Y = 0;
let hex1Angle = 0, hex2Angle = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const followMouse = () => {
    // Use requestAnimationFrame for smooth performance
    requestAnimationFrame(followMouse);
  
    // Move hexagon1 towards the mouse position and rotate
    hex1X += (mouseX - hex1X) * 0.05; // Adjust speed as necessary
    hex1Y += (mouseY - hex1Y) * 0.05; // Adjust speed as necessary
    hex1Angle += 1; // Adjust rotation speed as necessary
    hexagon1.style.transform = `translate(${hex1X}px, ${hex1Y}px) rotate(${hex1Angle}deg)`;
  
    // Move hexagon2 with a slight delay, at a slower rate, and rotate
    hex2X += (mouseX - hex2X) * 0.02; // Adjust speed as necessary
    hex2Y += (mouseY - hex2Y) * 0.02; // Adjust speed as necessary
    hex2Angle += 1; // Adjust rotation speed as necessary, slower than hex1 for effect
    hexagon2.style.transform = `translate(${hex2X}px, ${hex2Y}px) rotate(${hex2Angle}deg)`;
  };
  
  // Start the animation
  followMouse();
  