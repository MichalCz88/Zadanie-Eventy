const foto = 
[
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952"
    },
    {
      albumId: 1,
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796"
    },
    {
      albumId: 1,
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355"
    },
    {
      albumId: 1,
      id: 4,
      title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      url: "https://via.placeholder.com/600/d32776",
      thumbnailUrl: "https://via.placeholder.com/150/d32776"
    },
    {
      albumId: 1,
      id: 5,
      title: "natus nisi omnis corporis facere molestiae rerum in",
      url: "https://via.placeholder.com/600/f66b97",
      thumbnailUrl: "https://via.placeholder.com/150/f66b97"
    },
    {
      albumId: 1,
      id: 6,
      title: "accusamus ea aliquid et amet sequi nemo",
      url: "https://via.placeholder.com/600/56a8c2",
      thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
    },
    {
      albumId: 1,
      id: 7,
      title: "officia delectus consequatur vero aut veniam explicabo molestias",
      url: "https://via.placeholder.com/600/b0f7cc",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
    },
    {
      albumId: 1,
      id: 8,
      title: "aut porro officiis laborum odit ea laudantium corporis",
      url: "https://via.placeholder.com/600/54176f",
      thumbnailUrl: "https://via.placeholder.com/150/54176f"
    },
    {
      albumId: 1,
      id: 9,
      title: "qui eius qui autem sed",
      url: "https://via.placeholder.com/600/51aa97",
      thumbnailUrl: "https://via.placeholder.com/150/51aa97"
    },
]
/*Task 1: write a function that will create any html element, where parameterer 1 will be the tag type, 2 - class, 3- text.*/
function createTag(nazwaTag, nazwaClass, text) {
    class Htmlelement{
        constructor(nazwaTag, nazwaClass, text) {
            this.nazwaTag = nazwaTag;
            this.nazwaClass =nazwaClass;
            this.text = text;
            this.show = function showme () {
                console.log(`Oto nowy obiekt, który zmienimy na html, czyli tag ${this.nazwaTag} o klasie ${this.nazwaClass} z tekstem ${this.text}`)
            }
    
    
        }
    
    } 
    const myelement= new Htmlelement(nazwaTag, nazwaClass, text)
    const myHtmlElement= document.createElement(nazwaTag)
    myHtmlElement.innerText= text
    myHtmlElement.setAttribute('class', nazwaClass)
    return myHtmlElement
    }
    
    const zobaczymyCzyWyjdzie = createTag('h1',  'los', 'kos')
    console.log(createTag('h1', 'lalala', 'ania'), 'wyjdzieOrNot')

    //2
    const showImgBtn = document.getElementById('showImg')
const app = document.getElementById('app')
function createView(){
  foto.forEach(item => {
    const h1Photo = document.createElement('h1')
    const divPhoto = document.createElement('div')
    const divImg= document.createElement('img') 
    divPhoto.classList.add('photoStyle')
    divImg.src = item.thumbnailUrl
    h1Photo.innerHTML = item.title
    divPhoto.appendChild(h1Photo)
    h1Photo.appendChild(divImg)
    console.log(app)
    app.appendChild(divPhoto)
})
}
showImgBtn.addEventListener('click', createView)