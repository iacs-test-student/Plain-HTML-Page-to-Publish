let item = 0;
let items = [
  'Wow a thing happened. Try again!',
  'OMG it changed again',
  'This is like magic!',
  "Isn't JS the best",
  "This is the fanciest website I've ever seen I'm pretty sure",
  "But what happens when I run out of ideas?"
]

document.querySelector('#test').addEventListener(
  'click',
  ()=>{
    console.log('Clicked button!')
    let div = document.querySelector('#content');
    console.log('Got div',div)
    let content = items[item % items.length];
    item += 1;
    div.innerHTML = `<p>${content}</p> 
    <p><small>(you have clicked the button ${item} times)</small></p>`;
  }
)

