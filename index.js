if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js')
        .then((registration) => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch((error) => {
          console.log('ServiceWorker registration failed: ', error);
        })
    })
}

const kingDueoutRoomInput = document.querySelector(".king-dueout-room-input");
const doubleDueoutRoomInput = document.querySelector(".double-dueout-room-input");
const suiteDueoutRoomInput = document.querySelector(".suite-dueout-room-input");
const kingStayoverRoomInput = document.querySelector(".king-stayover-room-input");
const doubleStayoverRoomInput = document.querySelector(".double-stayover-room-input");
const suiteStayoverRoomInput = document.querySelector(".suite-stayover-room-input");

const kingPlainSheetNumber = document.querySelector(".king-plain-sheet-number");
const kingTopSheetNumber = document.querySelector(".king-top-sheet-number");
const queenPlainSheetNumber = document.querySelector(".queen-plain-sheet-number");
const queenTopSheetNumber = document.querySelector(".queen-top-sheet-number");
const pillowcasesNumber = document.querySelector(".pillowcases-number");
const bodyTowelNumber = document.querySelector(".body-towel-number");
const handTowelNumber = document.querySelector(".hand-towel-number");
const faceClothNumber = document.querySelector(".face-cloth-number");
const bathMatNumber = document.querySelector(".bath-mat-number");

const countButton = document.querySelector(".count-button");

const doNotAllowPlusAndMinus = (e) => {
    if(e.key === "+" || e.key === "-") {
        e.preventDefault();
    }
}   

[kingDueoutRoomInput, doubleDueoutRoomInput, suiteDueoutRoomInput, kingStayoverRoomInput, doubleStayoverRoomInput, suiteStayoverRoomInput].forEach(roomInput => roomInput.addEventListener("keydown", doNotAllowPlusAndMinus));

countButton.addEventListener("click", (e) => {
    e.preventDefault();
    kingPlainSheetNumber.textContent = ((Number(kingDueoutRoomInput.value) * 2) + (Number(suiteDueoutRoomInput.value) * 2)).toString();
    kingTopSheetNumber.textContent = ((Number(kingDueoutRoomInput.value) * 1) + (Number(suiteDueoutRoomInput.value) * 1)).toString();
    queenPlainSheetNumber.textContent = (Number(doubleDueoutRoomInput.value * 4)).toString();
    queenTopSheetNumber.textContent = (Number(doubleDueoutRoomInput.value * 2)).toString();
    pillowcasesNumber.textContent = ((Number(kingDueoutRoomInput.value) * 4) + (Number(doubleDueoutRoomInput.value * 8)) + (Number(suiteDueoutRoomInput.value) * 4)).toString();
    bodyTowelNumber.textContent = ((Number(kingDueoutRoomInput.value) * 2) + (Number(doubleDueoutRoomInput.value * 3)) + (Number(suiteDueoutRoomInput.value) * 4) + (Number(kingStayoverRoomInput.value) * 2) + (Number(doubleStayoverRoomInput.value * 3)) + (Number(suiteStayoverRoomInput.value) * 4)).toString();
    handTowelNumber.textContent = ((Number(kingDueoutRoomInput.value) * 2) + (Number(doubleDueoutRoomInput.value * 2)) + (Number(suiteDueoutRoomInput.value) * 4) + (Number(kingStayoverRoomInput.value) * 2) + (Number(doubleStayoverRoomInput.value * 2)) + (Number(suiteStayoverRoomInput.value) * 4)).toString();
    faceClothNumber.textContent = ((Number(kingDueoutRoomInput.value) * 2) + (Number(doubleDueoutRoomInput.value * 2)) + (Number(suiteDueoutRoomInput.value) * 4) + (Number(kingStayoverRoomInput.value) * 2) + (Number(doubleStayoverRoomInput.value * 2)) + (Number(suiteStayoverRoomInput.value) * 4)).toString();
    bathMatNumber.textContent = ((Number(kingDueoutRoomInput.value) * 1) + (Number(doubleDueoutRoomInput.value * 1)) + (Number(suiteDueoutRoomInput.value) * 1) + (Number(kingStayoverRoomInput.value) * 1) + (Number(doubleStayoverRoomInput.value * 1)) + (Number(suiteStayoverRoomInput.value) * 1)).toString();
})