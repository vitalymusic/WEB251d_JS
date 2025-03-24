// async function getText(file) {
//     let x = await fetch(file);
//     let y = await x.text();
//     myDisplay(y);
//   }

let url = "https://jsonplaceholder.typicode.com/posts/1/comments";

fetch(url)

.then((response)=>{
    return response.json()
})
.then((response)=>{
    return loadData(response)
})
.finally(()=>{
    console.log('data loaded')
});

function loadData(data){

    for(item of data){
        document.querySelector(".content").innerHTML+=`
        <div class="post">
            <h2>${item.name}</h2>
            <h3>${item.email}</h3>
            <p>${item.body}</p>
        </div>
    `
    }
}



// Ajax with forms


let form = document.querySelector("#form1");

form.onsubmit = (event)=>{
    //console.log(event);
    event.preventDefault();

    try{
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"post",
            body:new FormData(form),
            headers: {
                // 'Content-type': 'application/json; charset=UTF-8',
              },
        },
    
    )
        .then((response)=>{
            return response.text()
        })
        .then(()=>{
            alert("Data added")
        })
    }
    catch(error){
        alert("error");
    } ;



}