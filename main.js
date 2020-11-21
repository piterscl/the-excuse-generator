window.onload = () => {
document.querySelector("#excuse").innerHTML = escuse();

};

let escuse = () => {
    let who = ['the dog','my granma','his turtle','my bird'];
    let what = ['eat','pissed','crushed','broked'];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

    let whoIndx = Math.floor(Math.random() * who.length);
    let whatIndx = Math.floor(Math.random() * what.length);
    let whenIndx = Math.floor(Math.random() * when.length);

    return `${who[whoIndx]} ${what[whatIndx]} ${when[whenIndx]}`;

};





