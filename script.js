let fileContent = fs.readFileSync("1.txt", "utf8")
console.log(fileContent)

//l = new File([`{"ProgrammingLanguage" :["C++","Python","Ruby","Javascript"]}`],"1.txt")


/*reader = new FileReader()
m = reader.readAsText(l)
reader.onload = function() {
    f = JSON.parse(reader.result)
    console.log(f.ProgrammingLanguage)
}
/* g = new File([`{"Прізвища" : ["Романюк","Степаненко","Гуцуляк","Сергієнко"]}`],"2.txt")
reader1 = new FileReader()
m1 = reader1.readAsText(g)
reader1.onload = function() {
    f1 = JSON.parse(reader1.result)
    console.log(f1.Прізвища)
}
b1.addEventListener("click", cl)
b2.addEventListener("click", cl1)
function cl(){    
lm.innerHTML=`<span>${f.ProgrammingLanguage}</span>`
}
function cl1(){    
lm.innerHTML=`<span>${f1.Прізвища}</span>`
}







/* reader = new FileReader()
l = reader.readAsText('1.txt')
reader.onload = function() {
console.log(reader.result);
};

reader.onerror = function() {
console.log(reader.error);
};*/







