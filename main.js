document.querySelectorAll('a[href="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute('href'))
      .scrollIntoView({ behaviour: 'smooth' });
  });
});

// let array = [1, 2, 3, 4, 5, 5];
// function processArray(arr) {
//   // Write code here
//   arr.pop();
//   let x = 10;
//   arr.push(x);
//   arr.sort();
//   if (arr.includes(5)) {
//     let index = arr.indexOf(5);
//     arr[index] = 50;
//   }
//   arr.reverse()
//   console.log(arr);
// }
// processArray(array);

function countVowels(str) {
  // Write code here
  let vowel = 0;
  for (const letter of str) {
    let vows = ['a', 'e', 'i', 'o', 'u'];
    if (vows.includes(letter)) vowel++;
  }
  console.log(vowel);
}
countVowels('girls');
