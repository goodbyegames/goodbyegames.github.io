const NUM_SCREENSHOTS_AT_A_TIME = 4;
var screenshotImages = [
    'day i left.png',
    'new year.png',
    'no talking 01.jpg',
    'packing game.png',
    'QCC.png',
    'singing game.png'
];
var screenshots = [];
var leftMostScreenshotId = 0;



function scrollScreenshotsLeft() {
    console.log('left');
    if(leftMostScreenshotId == 0)
        return;

    leftMostScreenshotId--;
    updateScreenshots();
}


function scrollScreenshotsRight() {
    console.log('right');
    if(leftMostScreenshotId == screenshotImages.length - NUM_SCREENSHOTS_AT_A_TIME)
        return;

    leftMostScreenshotId++;
    updateScreenshots();
}


function updateScreenshots() {
    for(let i = 0; i <= screenshots.length; i++) {
        screenshots[i].src = '/img/screenshots/' + screenshotImages[leftMostScreenshotId + i];
    }
}


window.onload = function(e) {
    let leftArrow = document.getElementById('Games-scrollScreenshotsLeftArrow');
    let rightArrow = document.getElementById('Games-scrollScreenshotsRightArrow');

    leftArrow.addEventListener('click', scrollScreenshotsLeft);
    rightArrow.addEventListener('click', scrollScreenshotsRight);

    for(let i = 1; i <= NUM_SCREENSHOTS_AT_A_TIME; i++) {
        let screenshot = document.getElementById(`Games-screenshot${i}`);
        screenshots.push(screenshot);
    }

    leftMostScreenshotId = 1;
}