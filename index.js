const userInfoLocationOne = document.getElementById("user-info-location-one")
const userInfoLocationTwo = document.getElementById("user-info-location-two")
const userInfoLocationThree = document.getElementById("user-info-location-three")
const userInfoUsernameOne = document.getElementById("user-info-username-one")
const userInfoUsernameTwo = document.getElementById("user-info-username-two")
const userInfoUsernameThree = document.getElementById("user-info-username-three")
const bottomLikesOne = document.getElementById("bottom-likes-one")
const bottomLikesTwo = document.getElementById("bottom-likes-two")
const bottomLikesThree = document.getElementById("bottom-likes-three")
const bottomCommentsOne = document.getElementById("bottom-comments-one")
const bottomCommentsTwo = document.getElementById("bottom-comments-two")
const bottomCommentsThree = document.getElementById("bottom-comments-three")
const postPicOne = document.getElementById("post-pic-one")
const postPicTwo = document.getElementById("post-pic-two")
const postPicThree = document.getElementById("post-pic-three")
let randomNum1 = Math.floor(Math.random()*1000)
let randomNum2 = Math.floor(Math.random()*1000)
let randomNum3 = Math.floor(Math.random()*1000)
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
userInfoUsernameOne.innerHTML = `<span>${posts[0].name}</span>`
userInfoUsernameTwo.innerHTML = `<span>${posts[1].name}</span>`
userInfoUsernameThree.innerHTML = `<span>${posts[2].name}</span>`
userInfoLocationOne.innerHTML = `${posts[0].location}`
userInfoLocationTwo.innerHTML = `${posts[1].location}`
userInfoLocationThree.innerHTML = `${posts[2].location}`
bottomLikesOne.innerHTML = `<span>${posts[0].likes},${randomNum1} likes</span>`
bottomLikesTwo.innerHTML = `<span>${posts[1].likes},${randomNum2} likes</span>`
bottomLikesThree.innerHTML = `<span>${posts[2].likes},${randomNum3} likes</span>`
bottomCommentsOne.innerHTML = `<span>${posts[0].username}</span> ${posts[0].comment}`
bottomCommentsTwo.innerHTML = `<span>${posts[1].username}</span> ${posts[1].comment}`
bottomCommentsThree.innerHTML = `<span>${posts[2].username}</span> ${posts[2].comment}`

postPicOne.addEventListener("dblclick", function(){
    randomNum1 += 1
    bottomLikesOne.innerHTML = `<span>${posts[0].likes},${randomNum1} likes</span>`
})

postPicTwo.addEventListener("dblclick", function(){
    randomNum2 += 1
    bottomLikesTwo.innerHTML = `<span>${posts[1].likes},${randomNum2} likes</span>`
})

postPicThree.addEventListener("dblclick", function(){
    randomNum3 += 1
    bottomLikesThree.innerHTML = `<span>${posts[2].likes},${randomNum3} likes</span>`
})