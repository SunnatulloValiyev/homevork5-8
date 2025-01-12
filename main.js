// Darsdan bajarilgan tasks

const form = document.getElementById('form')
const field = document.getElementById('field')
const card = document.getElementById('card')
const img1 = document.getElementById('img2')
const left = document.getElementById('left')
const right = document.getElementById('right')

function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } 
    catch (error) {
        return false;
    }
}

form && form.addEventListener('submit', function (event) {
    event.preventDefault();

    const isValid = isValidURL(field.value)
    if (!isValid) {
        alert('url is not valid ')
        return;
    }

    let images = []
    if (localStorage.getItem('images')) {
        images = JSON.parse(localStorage.getItem('images'))
    }

    if (images.includes(field.value)) {
        alert('Ushbu url manzildagi rasm mavjud')
        return;
    }

    images.push(field.value);
    localStorage.setItem('images', JSON.stringify(images))
    form.reset()
    window.location.reload();
})


document.addEventListener('DOMContentLoaded', function(){
    let images = []
    if (localStorage.getItem('images')) {
        images = JSON.parse(localStorage.getItem('images'))
    }

    if (images.length == 0) {
        card.innerHTML = "Images not found"
    }

    img1.setAttribute('src', images[0])
    img1.setAttribute('data-id', 0)
} )

right && right.addEventListener('click', function () {
    let images = []
    if (localStorage.getItem('images')) {
        images = JSON.parse(localStorage.getItem('images'))
    }

    let currentID = img1.getAttribute('data-id')
    if (currentID == images.length - 1) {
        img1.setAttribute('src', images[0])
        img1.setAttribute('data-id', 0)
    }
    else {
        img1.setAttribute('src', images[Number(currentID) + 1])
        img1.setAttribute('data-id', Number(currentID) + 1)
    }

})

left && left.addEventListener('click', function () {
    let images = []
    if (localStorage.getItem('images')) {
        images = JSON.parse(localStorage.getItem('images'))
    }

    let currentID = img1.getAttribute('data-id')
    if (currentID == 0) {
        img1.setAttribute('src', images[images.length - 1])
        img1.setAttribute('data-id', images.length - 1)
    }
    else {
        img1.setAttribute('src', images[Number(currentID) - 1])
        img1.setAttribute('data-id', Number(currentID) - 1)
    }

})




// document.addEventListener('DOMContentLoaded', function () {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// });

