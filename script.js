// index.html dosyası oluşturun ve yukarıdaki gibi dört p elemanı koyun: Etiket adını kullanarak document.querySelector(tagname) ile ilk paragrafı alın
// const allParagraph = document.querySelector("p");
// console.log(allParagraph);

// id'lerine göre document.querySelector('#id') kullanarak her bir paragrafı alın
// const idParagraph = document.getElementById("pTwo");
// console.log(idParagraph);

// Etiket adlarına göre document.querySelectorAll(tagname) kullanarak tüm p elemanlarını nodeList olarak alın
const allParagraphTwo = document.querySelectorAll("p");
// allParagraphTwo.forEach((title) => {
//   console.log(title);
// });

// nodeList içinde dolaşın ve her paragrafın metin içeriğini alın
for (let i = 0; i < allParagraphTwo.length; i++) {
  console.log(allParagraphTwo[i]);
}
// Dördüncü paragrafta metin içeriği olarak Fourth Paragraph yerleştirin.
allParagraphTwo[3].textContent = "Fourth Paragraph";
console.log(allParagraphTwo[3]);
// Farklı özellik ayarlama yöntemlerini kullanarak tüm paragraflar için id ve sınıf özelliklerini ayarlayın
allParagraphTwo[3].className = "pFour";
allParagraphTwo[0].id = "pOne";
