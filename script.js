// JavaScript code to trigger download when the button is clicked
document.getElementById("downloadButton").addEventListener("click", function() {
    var downloadLink = document.createElement("a");
    downloadLink.href = "seu_app.apk"; // Replace with the actual file path of your APK
    downloadLink.download = "seu_app.apk"; // Specify the file name for download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});
