    function switchTheme() {
      document.body.classList.toggle('dark');
    }

    function checkColor() {
      let kek;
      kek = document.getElementById('box');
      if (kek.checked) {
        document.body.classList.add('dark');
        console.log("bg dark")
      }
      else {
       document.body.classList.remove('dark');
       console.log("bg white");
      }
    }

    function checkColor2() {
      let kek2;
      kek2 = document.getElementById('box2');
      if (kek2.checked) {
        document.body.classList.add('blue');
        console.log("bg blue")
      }
      else {
       document.body.classList.remove('blue');
       console.log("bg white");
      }
    }

    function checkColor3() {
      let kek3;
      kek3 = document.getElementById('box3');
      if (kek3.checked) {
        document.body.classList.add('purple');
        console.log("bg purple")
      }
      else {
       document.body.classList.remove('purple');
       console.log("bg white");
      }
    }

function radioColor() {
  let lol = document.getElementById('rchek');
  console.log(lol);
  if (lol.checked) {
    document.body.classList.add('dark');
  }
}

function radioColor2() {
  let lol2 = document.getElementById('rchek2');
  console.log(lol2);
  if (lol2.checked) {
    document.body.classList.add('blue');
  }
}

function radioColor3() {
  let lol3 = document.getElementById('rchek3');
  console.log(lol3);
  if (lol3.checked) {
    document.body.classList.add('purple');
  }
}





















/*function colorSet(argument) {
  // body...
   let cheburek = prompt("Get Color");
   if (prompt === "dark") {
    document.body.classList.toggle('dark');
   }
   document.body.classList.toggle('dark');


}
colorSet();*/