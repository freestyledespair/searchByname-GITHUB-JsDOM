

const form = document.querySelector("#search")
const input = document.querySelector("#inp")
const output = document.querySelector(".output")
const API = "https://api.github.com/users/"


form.addEventListener("submit", (el) => {
    el.preventDefault()
    searchUsers()
})

const searchUsers = async () => {
    const request = await fetch(API + input.value)
    const response = await request.json()
    renderUser(response)
}


const renderUser = (response) => {
    console.log(response);
    output.innerHTML = ""
    const img = document.createElement("img")
    const h1 = document.createElement("h1")
    h1.classList.add("title")
    const h2_following = document.createElement("h2")
    const h2_followers = document.createElement("h2")
    h2_followers.classList.add("follow")
    h2_following.classList.add("follow")
    const html = document.createElement("a")
    html.href = response.html_url
    img.src = response.avatar_url + html
    h1.textContent = response.login
    h2_following.textContent = "Following: " + response.following
    h2_followers.textContent = "Followers: " + response.followers

    html.append(img)
    output.append(html, h1, h2_following, h2_followers)
    document.body.append(output)
}