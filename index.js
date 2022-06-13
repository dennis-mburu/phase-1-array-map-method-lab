let tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];




const titleCased = () => {
  return tutorials.map((list) => {
    const title = list.split(" ");
    const capitalizedTitle = title.map(
      (title) => title.charAt(0).toUpperCase() + title.slice(1));
    const result = capitalizedTitle.join(' ');
    return result;
    });
};


console.log(titleCased(tutorials))













// IGNORE --ROUGH WORK

// const titleCased = () => {
//   return tutorials.map((list) => {
//     const title = list.split(" ");
//     const capitalizedTitle = title.map(
//       (title) => title.charAt(0).toUpperCase() + title.slice(1));
//     const result = capitalizedTitle.join(' ');
//     return result;


// const titleCased = () => {
//   let tutorials2 = tutorials.map(function (elem){
//     let sentence = elem.toLocaleLowerCase().split(" ");
//     for (let i=0; i<sentence.length; i++ ){
//         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//     sentence.join(" ");
//     return sentence
//   })
//   tutorials.splice(0, tutorials.length)
//   console.log(tutorials2)
//   for (elem of tutorials2){
//     tutorials.push(elem)
//     tutorials.join(" ")

//   }
//   return tutorials
// }

// console.log(titleCased(tutorials))



// const titleCased = () => {
//   return tutorials.map((list) => {
//     const title = list.split(" ");
//     const capitalizedTitle = title.map(
//       (title) => title.charAt(0).toUpperCase() + title.slice(1));
//     const result = capitalizedTitle.join(' ');
//     return result;

    
//   });
// };

// console.log(titleCased(tutorials))




// const titleCased = () => {
//   tutorials.map(function (elem){
//     let sentence = elem.toLowerCase().split(" "); //sentence is is now an array with the individual words of each item in an array as its elements
//     for (let i=0; i<sentence.length; i++ ){
//       let word
//       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//       word = sentence[i];
//       console.log(word)
//       for (let i=0; i<sentence.length; i++ ){
//         tutorials[i] = word
//         return tutorials
//       }
//     }
//     tutorials.join(" ");
//     return tutorials
//   })
//   return tutorials
// }

// console.log(titleCased(tutorials))


// const titleCased = () => {
//   tutorials.map(function (elem){
//     sentence = elem.toLocaleLowerCase().split(" ");
//     for (let i=0; i<sentence.length; i++ ){
//         tutorials[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//     tutorials.join(" ");
//     return tutorials
//   })
//   return tutorials
// }

// console.log(titleCased(tutorials))



// const titleCased = () => {
//   tutorials = tutorials.map(function (elem){
//     sentence = elem.toLocaleLowerCase().split(" ");
//     for (let i=0; i<sentence.length; i++ ){
//         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//     sentence.join(" ");
//     return sentence
//   })
//   return tutorials
// }

// console.log(titleCased(tutorials))






// const titleCased = () => {
//   let tut=[...tutorials]
//   // console.log(tut)
//   function titleCase(string) {
//     var sentence = string.toLowerCase().split(" ");
//     for(var i = 0; i< sentence.length; i++){
//        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//   sentence.join(" ");
//   return sentence
//   }  
//   tut.map(titleCase())
//   console.log(tut)

//   // return tutorials
// }



// const titleCased = () => {
//   return tutorials
// }

// titleCased()

