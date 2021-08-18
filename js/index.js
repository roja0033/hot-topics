// GET THE REFERENCES
const container = document.querySelector('.dynamic-content');
let div = container.firstElementChild;
const links = document.querySelector('#btns');

let url = 'partials/articles.xml';
let portfolio = 'partials/portfolio.xml';


// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
const loadContent = function loadContent(urlFeed){

// RUN THE fetch(urlFeed).then().then().catch()
    fetch(urlFeed)
        .then(function (rsp) {
            
            if (rsp.ok) {
                return rsp.text();
            }
        
            //Handle error 
            throw new Error(rsp.statusText);
        })
        .then(function (xmlString) {
           
            //Parser is the object that is generated by DOMParser
            //in order to convert the xtm-string to xml-dom(object)

            let contentType = 'text/xml';
            let parser = new DOMParser();
            let xmlDOM = parser.parseFromString(xmlString, contentType);
           
           
            let articles = xmlDOM.querySelector('articles');
            let articleInfo = articles.children;
            
                
            for (let item of articleInfo) {
                let div = document.createElement('div');
                div.innerText = item.textContent;
                container.appendChild(div);

                let image = document.createElement('img');
                image.innerHTML = item.textContent;
                container.appendChild(image);

                let text = document.createElement('p');
                text.innerText = item.textContent;
                
            }



        })
        .catch(function (err) {
            console.log(err.message);
        });
    
}



const selectContent = function loadContent (ev) {
    ev.preventDefault();
   
}
links.addEventListener("click", loadContent);





