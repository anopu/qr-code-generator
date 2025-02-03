const form = document.getElementById("qrCodeForm");
const image = document.getElementById("qrCodeImage");
var input = document.getElementById("qrInput");

form.addEventListener("submit", generateQRCode);

function generateQRCode(event){
    event.preventDefault();
    const dataUrl = QRCode.toDataURL(input.value).then(dataUrl => {
        image.src = dataUrl;
    })

}