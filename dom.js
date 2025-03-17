// Searching elements with JS


const heading1 = document.querySelector("h1"); // 1 elem
const div1 = document.querySelector(".content"); // 1 elem
const paragraph = document.querySelector("#paragraph"); // 1 elem
const inp1 = document.querySelector("input[type='number']"); // 1 elem
const inp2 = document.querySelector("input[type='text']"); // 1 elem

const headings = document.querySelectorAll("h1"); // array of elements

// Old methods

   const paragraph2 =  document.getElementById("paragraph");  // 1 elem

   const elements1 = document.getElementsByTagName("h1"); //array of elem
   const elements2 = document.getElementsByClassName("content"); //array of elem

   console.log(heading1,headings,elements1,inp1,paragraph);


    // Reading text/html from elements
    
    console.log(paragraph.innerText);
    document.title = paragraph.innerText;
    heading1.innerText = "My text";
    div1.innerHTML = `
        <p>This is added text from JS</p>
    `;
    div1.innerHTML += `
        <p>This is also added text from JS</p>
    `;

    inp1.value = 12345;
    inp2.value = heading1.innerText;
    inp1.value = ""; 


    const btn1 = document.querySelector("button");
    const btn2 = document.querySelector("#btn2");

    btn2.innerText = "Set image src";
    btn2.onclick = function(){
        document.querySelector("img").src =  inp2.value;
    }

    btn1.innerText = "Set Background";
    btn1.onclick = ()=>{
        let background = document.querySelector("input[type='color']").value;
        document.body.style.backgroundColor = background;
    }

    document.querySelector(".buttons").innerHTML = `
        <button onclick="setBackground(1)">Background1</button>
        <button onclick="setBackground(2)">Background2</button>
        <button onclick="setBackground(3)">Background3</button>
        <button onclick="changeTextColor()">Change text color</button>
    `;

    document.body.innerHTML+=`
        <h3>Add new content</h3>
        <input type="number" id="imgCount" placeholder="Enter Image element count">
        <button onclick="insertImages()">Insert images</button>
    `;


    
    function setBackground(number){
        document.body.classList.remove("background1");
        document.body.classList.remove("background2");
        document.body.classList.remove("background3");
        document.body.classList.add("background"+number);
    }
    function changeTextColor(){
        document.body.classList.toggle("whiteText");
    }

    function insertImages(){
        imageCount = +document.querySelector("#imgCount").value;

        for(let i=0;i<imageCount;i++){
            document.body.innerHTML+=`
                <img class="new" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19-969y2IwyfoMA7iUPhLrBHjSxEgrYWnCA&s" style="width:200px;margin:15px" onclick="remove(this)">
            `;
        }
    }


    function remove(element){
        console.log(element);
        element.remove();
    }


    // adding elements with JS

    let newDiv = document.createElement("div");
    let newText = "this is new text";
    newDiv.append(newText);
    // document.body.append(newDiv);

    // document.body.insertAdjacentElement('afterbegin',newDiv);
    heading1.insertAdjacentElement('afterend',newDiv);
    div1.appendChild(newDiv);


    






    







    




