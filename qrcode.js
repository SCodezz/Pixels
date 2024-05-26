window.addEventListener('load', function() {
    const resultElement = document.getElementById('result');
    const uploadButton = document.getElementById('upload-btn');
    const photoUpload = document.getElementById('photo-upload');
    const uploadMessage = document.getElementById('upload-message');
    const uploadedImage = document.getElementById('uploaded-image');
    const uploadedImageContainer = document.getElementById('uploaded-image-container');

    function onScanSuccess(decodedText, decodedResult) {
        // Handle the decoded result here.
        resultElement.innerText = `QRCode Result: ${decodedText}`;
        uploadButton.disabled = false;
    }

    function onScanFailure(error) {
        // Handle scan failure, usually better to ignore and keep scanning.
        console.warn(`QR error: ${error}`);
    }

    let html5QrCode = new Html5Qrcode("qr-reader");

    // Start scanning
    html5QrCode.start(
        { facingMode: "environment" }, 
        {
            fps: 10,    // Optional, frame per seconds for qr code scanning
            qrbox: 250  // Optional, if you want bounded box UI
        },
        onScanSuccess,
        onScanFailure
    ).catch(err => {
        console.error(`Unable to start scanning: ${err}`);
    });

    // Trigger file input when upload button is clicked
    uploadButton.addEventListener('click', () => {
        photoUpload.click();
    });

    // Handle file upload
    photoUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Display the uploaded image
                uploadedImage.src = e.target.result;
                uploadedImage.hidden = false;
                uploadMessage.textContent = 'Image has been saved successfully!';
            };
            reader.onerror = function(error) {
                uploadMessage.textContent = 'Error reading file!';
                console.error('FileReader error: ', error);
            };
            reader.readAsDataURL(file);
        }
    });
});
