export default function dragModals() {
    const chromeBackground = document.querySelector(".desktop__chrome-background");
    let dragging = null;

    let dragOffsetX = 0;
    let dragOffsetY = 0;

    document.addEventListener('mousemove', (event) => {
        if (dragging) {

            //console.log(dragOffsetX, "app");
            //console.log(event.clientX, "client");
            dragging.style.left = event.clientX - dragOffsetX + 'px';
            dragging.style.top = event.clientY - dragOffsetY + 'px';

            chromeBackground.style.left = event.clientX - dragOffsetX - 2 + 'px';
            chromeBackground.style.top = event.clientY - dragOffsetY - 2 + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        if (dragging) {
            dragging.classList.remove('dragging');
            dragging = null;
        }
    });

    document.querySelectorAll('.draggable').forEach((element) => {
        element.addEventListener('mousedown', (event) => {
            const item = event.target.classList.value;

            // Draggable Chrome
            if (item === "desktop__chrome-header-first resize"
                || item === "desktop__calculator-header-first") {
                dragging = element;
                dragOffsetX = event.offsetX;
                dragOffsetY = event.offsetY;
                element.classList.add('dragging');
            } else if (item === "desktop__bin-header-first-middlebar") {
                dragging = element;
                // Have to add 100 for some reason??
                dragOffsetX = event.offsetX + 100;
                dragOffsetY = event.offsetY;
                element.classList.add('dragging');
            }
        });
    });
}
