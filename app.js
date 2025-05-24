const clickSound = document.getElementById("clickSound");

let btn = document.querySelector("#showBtn");
let downloadBtn = document.querySelector("#downloadBtn");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
  clickSound.play(); // 🔊 Play sound on show
  let link = await getImage();
  let img = document.querySelector("#result");
  img.setAttribute("src", link);
  downloadBtn.setAttribute("href", link);
  downloadBtn.classList.add("show");
});

downloadBtn.addEventListener("click", () => {
  clickSound.play(); // 🔊 Play sound on download
});

document.querySelectorAll(".social-click").forEach((icon) => {
  icon.addEventListener("click", () => {
    clickSound.play(); // 🔊 Play sound on social icons
  });
});

async function getImage() {
  try {
    let res = await axios.get(url);
    return res.data.message;
  } catch (e) {
    console.log("error - ", e);
    return "No Image found";
  }
}
