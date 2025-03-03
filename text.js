// Strings


let text1 = "This is text";
let text2 = '<h1>This is text</h1>';
let text3 = `<p>This is text 3</p>`;

let username = "Vitalij";
let borderStyle = "border:2px solid red;padding:10px";

document.write(text1,text2,text3);
document.write(text1[5]);

// Konkatenacija

document.write("<h1 style=\" "+ borderStyle+ " \">Active user: " + username + "</h1>");
document.write('<h1 style=" '+ borderStyle+ ' ">Active user: ' + username + '</h1>');

let output = `
    <h1 
        style="${borderStyle}">
        ${username}
    </h1>`;

    output+=`
        <h1 
            style="${borderStyle}">
            username2
        </h1>`;

    document.write(output);    


    document.write("<br>"+ text1.length);
    document.write("<br>"+ text1.toUpperCase());
    document.write("<br>"+ text1.toLowerCase());
    document.write("<br>"+ text1.substring(4,8));
    document.write("<br>"+ text1.split(" "));
    console.log(text1.split());
    document.write("<br>"+ text1.replace("text","Replaced text"));
    document.write("<br>"+ text1.search("text"));
    document.write("<br>"+ text1.charAt(6));
    document.write("<br>"+ text1.charCodeAt(6));

    // RegEx

    let regex1 = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/g;

    let email1 = "user@inbox.lv";

    // alert(email1.match(regex1));
    document.write("<br>"+ text1.replaceAll(/(^t)\w+/gmi,"*"));

    // slice()

