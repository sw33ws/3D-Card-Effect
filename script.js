const pre = document.querySelector("pre");

document.addEventListener("mousemove", (e) => {
    rotateElement(e, pre);
})

function rotateElement(event, element) {

    // This sets the max the card can tilt
    degTiltMax = 45;

    const x = event.clientX;
    const y = event.clientY;
    // console.log(x,y);

    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    const offsetX = ((x - middleX) / middleX) * degTiltMax;
    const offsetY = ((y - middleY) / middleY) * degTiltMax;
    // console.log(offsetX,offsetY)

    element.style.setProperty("--rotateX", -1 * offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
}