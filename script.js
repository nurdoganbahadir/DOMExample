//!Example 1
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
// for (let i = 0; i < allParagraphTwo.length; i++) {
//   console.log(allParagraphTwo[i]);
// }
// Dördüncü paragrafta metin içeriği olarak Fourth Paragraph yerleştirin.
// allParagraphTwo[3].textContent = "Fourth Paragraph";
// console.log(allParagraphTwo[3]);

// Farklı özellik ayarlama yöntemlerini kullanarak tüm paragraflar için id ve sınıf özelliklerini ayarlayın
// allParagraphTwo[3].className = "pFour";
// allParagraphTwo[0].id = "pOne";
//!Example 2
// JavaScript kullanarak her paragrafın stilini değiştirin (örn. renk, arka plan, sınır, yazı tipi boyutu, yazı tipi ailesi)
// allParagraphTwo[2].style.backgroundColor = "red";
// allParagraphTwo[2].style.color = "white";
// allParagraphTwo[2].style.fontSize = "24px";

// Tüm paragrafları seçin ve her elemanın içinde dolaşın ve ilk ve üçüncü paragrafı yeşil, ikinci ve dördüncü paragrafı kırmızı renkte verin
// for (let i = 0; i < allParagraphTwo.length; i++) {
//   if (i == 0 || i == 2) {
//     allParagraphTwo[0].style.backgroundColor = "green";
//     allParagraphTwo[2].style.backgroundColor = "green";
//   } else {
//     allParagraphTwo[1].style.backgroundColor = "red";
//     allParagraphTwo[3].style.backgroundColor = "red";
//   }
// }

// Her paragrafın içeriğini, id'sini ve sınıfını ayarlayın
// for (let i = 0; i < allParagraphTwo.length; i++) {
//   allParagraphTwo[i].className = "mardatone";
//   console.log(allParagraphTwo);
// }