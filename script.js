const qrtext = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generatorBtn = document.getElementById("generatorBtn");
const downloadBtn = document.getElementById("downloadBtn");

let size = sizes.value;

const qrcontainer = document.querySelector(".qr-body");

generatorBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyinput(); 
    
});

sizes.addEventListener("change",(e)=>{
 size = e.target.value;
 isEmptyinput();
})

function isEmptyinput(){
    if(qrtext.value.length > 0){
        generateQRCode();
    }else{
        alert("Please enter text or URL to generate QR Code");
    }

}

downloadBtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');
    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    }else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
})

function generateQRCode(){
    qrcontainer.innerHTML = "";
    new QRCode(qrcontainer, {
        text: qrtext.value,
        height:size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000",
    })
}