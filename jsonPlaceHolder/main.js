const URL = 'https://jsonplaceholder.typicode.com/posts'
const header = {
    "Content-Type": "application/json"
}
const sendRequest = (url, method, body = {}) => {
    return fetch(url).then(res => res.json())
}
const posts = document.querySelector('.posts')

window.addEventListener('load', () => {
    const req = sendRequest(URL).then(data => {
        for (let item of data) {
            const post = document.createElement('div')
            post.classList.add('post')
            const postUserId = document.createElement('h3')
            postUserId.innerText = item.userId
            post.append(postUserId)
            const postBody = document.createElement('p')
            postBody.innerHTML = item.body
            post.append(postBody)
            posts.append(post)
        }
    })
})