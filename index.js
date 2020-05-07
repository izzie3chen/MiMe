const { hash } = window.location;
const message = atob(hash.replace("#", "")); //decode hash and remove the # sign
if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");
  document.querySelector("h1").innerHTML = message;
}
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); //prevent page refresh
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");
  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value); //encode input value
  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`; //embed the input value in the url
  linkInput.select(); //select the input and the text inside of it
});
