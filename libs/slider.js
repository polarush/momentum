const leftArrow = document.querySelector('.slide-prev');
const rightArrow = document.querySelector('.slide-next');

const AFTERNOON = "https://raw.githubusercontent.com/polarush/stage1-tasks/assets/images/afternoon";
const EVENING = "https://raw.githubusercontent.com/polarush/stage1-tasks/assets/images/evening";
const MORNING = "https://raw.githubusercontent.com/polarush/stage1-tasks/assets/images/morning";
const NIGHT = "https://raw.githubusercontent.com/polarush/stage1-tasks/assets/images/night";

const arrOfIndexes = ['01','02','03','04','05','06','07','08','09','10',
                      '11','12','13','14','15','16','17','18','19','20'];

const arrayOfTimes = [
                      `${AFTERNOON}/${arrOfIndexes[Math.round(Math.random() * 20)]}.jpg` ,
                      `${EVENING}/${arrOfIndexes[Math.round(Math.random() * 20)]}.jpg` ,
                      `${MORNING}/${arrOfIndexes[Math.round(Math.random() * 20)]}.jpg` ,
                      `${NIGHT}/${arrOfIndexes[Math.round(Math.random() * 20)]}.jpg` 
                    ]

                    
let currentTimeSlideArray; // показывает, из какой папки брать картинку

let hour = new Date().getHours();

let randomNum;

function setStaticSlideByTime() {
    
    randomNum = arrOfIndexes[Math.round(Math.random(1) * 19)]

    if (hour >= 6 && hour < 12)
        currentTimeSlideArray = `${MORNING}`;
    else if (hour >= 12 && hour < 18)
        currentTimeSlideArray = `${AFTERNOON}`;
    else if (hour >= 18 && hour < 24)
        currentTimeSlideArray = `${EVENING}`;
    else if (hour >= 0 && hour < 6)
         currentTimeSlideArray = `${NIGHT}`;
    
         document.body.style.backgroundImage = "url('" + currentTimeSlideArray + "/" + arrOfIndexes[randomNum] + ".jpg')";
}


setStaticSlideByTime()


function setBg() {  
    const img = new Image();
    img.src = currentTimeSlideArray + "/" + arrOfIndexes[randomNum] + ".jpg"
    img.onload = () => {      
        document.body.style.backgroundImage = "url('" + img.src + "')"
    }; 
  }


function getSlideNext() {
    if (randomNum >= 19) randomNum = 0;
    else randomNum++
    setBg()
}

function getSlidePrev() {
    if (randomNum <= 0) randomNum = 19; 
    else randomNum-- 
    setBg()
}

leftArrow.addEventListener('click', getSlideNext())
rightArrow.addEventListener('click', getSlidePrev())


async function getSlideUnsplash() {
    
    const morning = 'https://api.unsplash.com/photos/random?query=morning&orientation=landscape&client_id=iBEY-Xnb31vbNdxTKw5gD0wKJhF3qiiMM6K8T4eFOjU'

    const afternoon = 'https://api.unsplash.com/photos/random?query=afternoon&orientation=landscape&client_id=iBEY-Xnb31vbNdxTKw5gD0wKJhF3qiiMM6K8T4eFOjU'

    const evening = 'https://api.unsplash.com/photos/random?query=evening&orientation=landscape&client_id=iBEY-Xnb31vbNdxTKw5gD0wKJhF3qiiMM6K8T4eFOjU'

    const night = 'https://api.unsplash.com/photos/random?query=night&orientation=landscape&client_id=iBEY-Xnb31vbNdxTKw5gD0wKJhF3qiiMM6K8T4eFOjU'

    const morningRes = await fetch(morning);
    const morningData = await morningRes.json();

    const afternoonRes = await fetch(afternoon);
    const afternoonData = await afternoonRes.json();

    const eveningRes = await fetch(evening);
    const eveningData = await eveningRes.json();

    const nightRes =  await fetch(night);
    const nightData = await nightRes.json();

    const img = new Image();
    img.src = document.body.style.backgroundImage
    img.onload = () => {      
    document.body.style.backgroundImage = "url('" + img.src + "')"

    }; 


    if (hour >= 6 && hour < 12){
        img.src = document.body.style.backgroundImage
        img.onload = () => {      
            document.body.style.backgroundImage = "url('" + morningData.urls.regular + "')";
        };
        }
     
    else if (hour >= 12 && hour < 18) {
        img.src = document.body.style.backgroundImage
        img.onload = () => {      
         document.body.style.backgroundImage = "url('" + afternoonData.urls.regular + "')";
        }; 
       }

    else if (hour >= 18 && hour < 24) {
        img.src = document.body.style.backgroundImage
        img.onload = () => {      
         document.body.style.backgroundImage = "url('" + eveningData.urls.regular + "')";
        }; 
    }

    else if (hour >= 0 && hour < 6) {
        img.src = currentTimeSlideArray + "/" + arrOfIndexes[randomNum] + ".jpg"
        img.onload = () => {      
            document.body.style.backgroundImage = "url('" + nightData.urls.regular + "')";
        }; 

    }
        
}


async function getSlideFlickr() {
    
    const morning = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=20&api_key=3d0eea7afebe638d61b9c345e2d0dcd9&tags=morning&extras=url_l&format=json&nojsoncallback=1'
    const afternoon = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=20&api_key=3d0eea7afebe638d61b9c345e2d0dcd9&tags=afternoon&extras=url_l&format=json&nojsoncallback=1'
    const evening = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=20&api_key=3d0eea7afebe638d61b9c345e2d0dcd9&tags=evening&extras=url_l&format=json&nojsoncallback=1'
    const night = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=20&api_key=3d0eea7afebe638d61b9c345e2d0dcd9&tags=night&extras=url_l&format=json&nojsoncallback=1'

    const morningRes = await fetch(morning);
    const morningData = await morningRes.json();

    const afternoonRes = await fetch(afternoon);
    const afternoonData = await afternoonRes.json();

    const eveningRes = await fetch(evening);
    const eveningData = await eveningRes.json();

    const nightRes = await fetch(night);
    const nightData = await nightRes.json();

    if (hour >= 6 && hour < 12){
         document.body.style.backgroundImage = "url('" + morningData.photos.photo[randomNum].url_l + "')";
         randomNum = Math.round(Math.random() * 19)
        }
     
    else if (hour >= 12 && hour < 18) {
        document.body.style.backgroundImage = "url('" + afternoonData.photos.photo[randomNum].url_l + "')";
        randomNum = Math.round(Math.random() * 19)
    }

    else if (hour >= 18 && hour < 24) {
        document.body.style.backgroundImage = "url('" + eveningData.photos.photo[randomNum].url_l + "')";
        randomNum = Math.round(Math.random() * 19)
    }

    else if (hour >= 0 && hour < 6) {
        document.body.style.backgroundImage = "url('" + nightData.photos.photo[randomNum].url_l + "')";
        randomNum = Math.round(Math.random() * 19)
    }
         
}

const name = document.querySelector('.name')

function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }
window.addEventListener('beforeunload', setLocalStorage)


function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }

window.addEventListener('load', getLocalStorage)
  