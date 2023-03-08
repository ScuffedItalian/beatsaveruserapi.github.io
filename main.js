const userInputID = document.getElementById("userINP");
const button = document.getElementById("enterButton");


button.addEventListener("click", async () => {
    const userID = userInputID.value;
    const dataURL = fetch("https://api.beatsaver.com/users/id/107013")
    const response = await dataURL;
    console.log(response);
})