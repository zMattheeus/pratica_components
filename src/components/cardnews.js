class cardNews extends HTMLElement{
    constructor(){
        super();


        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
     
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        //card left

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonimous");

        const link = document.createElement("a");
        link.textContent = this.getAttribute("title");
        link.href = this.getAttribute("link-url")
        
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor);
        cardLeft.appendChild(link);
        cardLeft.appendChild(newsContent);
        

        //card rightt
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/default-image.jpg";
        newsImage.alt = "Foto Darth"

        cardRight.appendChild(newsImage);



        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);



    return componentRoot;
    
    }

    styles(){
        const style = document.createElement("style");

        style.textContent = `
        .card{
            max-width: 50%;
            box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 15px;
        }
        
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left > span{
            font-weight: 400;
        }
        
        .card__left > a{
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card__left > p{
            color: rgb(70, 70, 70);
        }

        img{
            width: 300px;
        }
        
        `;


        return style;
    }
}

customElements.define("card-news", cardNews)