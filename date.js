// document.write(new Date());


// setInterval(()=>{
//     let date = new Date();
    
//     let timeDisplay = `
//         <h1>
//             ${date.getHours()}:
//             ${date.getMinutes()}:
//             ${date.getSeconds()}
//         </h1>`

//     document.body.innerHTML = timeDisplay;
// },1000);
    // let now = new Date();
    let nextweek = Date.now()+(1000*3600*24*7);
    document.write(`Next week is: ${new Date(nextweek)}`);




