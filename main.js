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




document.addEventListener('DOMContentLoaded', function () {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET"
    })
        .then(function (response) {
            if (response.status == 200) {
                return response.json()
            }
        })
        .then(function (data) {
            data.forEach(function (post) {
                console.log('Title:', post.title);
                console.log('Body:', post.body);                
            });            
            console.log('1-topshiriq tugadi');
        })
        .catch(function (error) {
            console.log('Xatolik yuz berdi' ,error);
        });
        console.log('1. Mashq: Barcha postlarni olish');
});



document.addEventListener('DOMContentLoaded', function () {
    fetch("https://randomuser.me/api/", {
        method: "GET"
    })
    .then(function (response) {
        if (response.status == 200) {
            return response.json()
        }
    })
    .then(function (data) {
        const randomIndex = Math.floor(Math.random() * data.results.length); 
        const randomPost = data.results[randomIndex]; 
        

        console.log("Name:", randomPost.name.first); 
        console.log("Email:", randomPost.email);
        console.log('2-topshiriq tugadi: Random user malumotlarini olish');
        
    })

    .catch(function (error) {
        console.log('Xatolik yuz berdi', error);
        
    })    
})



document.addEventListener('DOMContentLoaded', function () {
    fetch("https://disease.sh/v3/covid-19/all", {
        method: "GET"
    })

    .then(function (response) {
        if (response.status == 200) {
            return response.json()
        }
    })
    .then(function (posts) {
        console.log("Cases:", posts.cases);
        console.log("Deaths:", posts.deaths);
        console.log("Recovered:", posts.recovered);
        console.log("3-topshiriq tugati: Mashq: Dunyo bo'ylab COVID-19 statistikasi");
    })
    .catch(function (error) {
        console.log("Xatolik yuz berdi", error);
        
    })  
})




document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json', {
        method: "GET"
    })

    .then(function (response) {
        if (response.status == 200) {
            return response.json()
        }
    })
    .then(function (price){
        if (price && price.bpi && price.bpi.USD && price.bpi.USD.rate) {
            console.log("Narx:", price.bpi.USD.rate);
        } else {
            console.log("Narx ma'lumoti topilmadi");
        }
        console.log("4-topshiriq tugadi:Mashq: Bitcoin narxi ");
        
    })
    
    .catch(function (error) {
        console.log("Xatolik yuzaga keldi", error);
        
    })
})


document.addEventListener('DOMContentLoaded', function () {
    let city = "Taskent";
    fetch("https://goweather.herokuapp.com/weather/{city}", {
        method: "GET"
    })

    .then(function (response) {
        if (response.status == 200) {
            return response.json()
        }
    })
    .then(function (temp){
        console.log(`${city}, shahar harorati ${temp.temperature}`);
    })

    .catch(function (error){
        console.log('Xatolik yuzaga keldi', error);
        
    })

})