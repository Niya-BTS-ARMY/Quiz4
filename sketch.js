
var s1, s2, s3, s4;
var pic1;
var gameState = 0;
var startButton, nextButton;
var q = 1;
var op1, op2, op3, op4;
var score = 0, life = 2;
var questionShow = true;
var pic2;
var lifeImg;
var que;
var answer;
var ans, wans;
var bonus = false;

function preload() {
  s1 = loadSound("ButterRemix.mp3");
  s2 = loadSound("DynamiteRemix.mp3");
  s3 = loadSound("Idol.mp3");
  s4 = loadSound("PTD.mp3");
  pic1 = loadImage("btspic1.png")
  pic2 = loadImage("rm.png");
  lifeImg = loadImage("life.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (gameState == 0) {
    startButton = createButton("START QUIZ")
    startButton.position(width / 2 - 400, 450)
    startButton.class("customButton")

    songButton1 = createButton("Butter ft Megan")
    songButton1.position(width / 2 + 400, 50)
    songButton1.class("songButton")

    songButton2 = createButton("Dynamite(Tropical Remix)")
    songButton2.position(width / 2 + 400, 110)
    songButton2.class("songButton")

    songButton3 = createButton("Idol")
    songButton3.position(width / 2 + 400, 170)
    songButton3.class("songButton")

    songButton4 = createButton("Permission To Dance")
    songButton4.position(width / 2 + 400, 230)
    songButton4.class("songButton")
  }

  ans = createElement('h1', "You guessed the right answer")
  ans.position(width / 2 - 500, height - 200)
  ans.class("correctanswer")

  wans = createElement('h1', "Your answer is incorrect")
  wans.position(width / 2 - 500, height - 200)
  wans.class("wronganswer")

  ans.hide();
  wans.hide();

}

function draw() {
  background("Purple");
  console.log(q)

  if (gameState == 0) {
    textSize(40)
    strokeWeight(4)
    fill("black")
    text("BTS QUIZ", windowWidth / 2 - 100, 50)
    textSize(30)
    text("Rules For The Quiz", 50, 150)
    fill("white")
    textSize(20)
    text("1. Every question will have 4 options, you will get 2 chances to select the correct answer.", 50, 200)
    text("2. For every correct answer 50 points will be rewarded", 50, 250)
    text("3. For every question you will get 60 seconds(i.e 1 minute) to answer", 50, 300)
    text("4. Bonus questions will be given to earn extra chance", 50, 350)
    image(pic1, width / 2 + 100, height / 2)



    songButton1.mouseClicked(() => {
      s1.loop();
      s2.pause();
      s3.pause();
      s4.pause();
    })

    songButton2.mouseClicked(() => {
      s2.loop();
      s1.pause();
      s3.pause();
      s4.pause();
    })

    songButton3.mouseClicked(() => {
      s3.loop();
      s1.pause();
      s2.pause();
      s4.pause();
    })

    songButton4.mouseClicked(() => {
      s4.loop();
      s1.pause();
      s2.pause();
      s3.pause();
    })

  }

  startButton.mouseClicked(() => {
    gameState = 1;
    q = 1;

    songButton1.hide()
    songButton2.hide()
    songButton3.hide()
    songButton4.hide()
    startButton.hide()
  })



  if (life > 0) {
    if (gameState === 1) {
      fill("white")
      textSize(20)
      text("SCORE : " + score, width - 150, 50);
      textSize(20)
      text("LIFE : ", width - 300, 100);
      for (i = 0; i < life; i++) {
        image(lifeImg, (width - 230) + i * 40, 80, 30, 30)
      }

      if (questionShow) {
        setInterval(nextQuestion, 10000);
        if (q == 1) {

          question("1. In Which Year Did BTS Debut?")
          options(2012, 2013, 2014, 2015)
          answer = 2;
          questionShow = false

        }

        if (q == 2) {
          que.remove()
          // ans.remove()
          question("2. How many members are there in BTS?")
          options(5, 6, 7, 8)
          answer = 3;
          questionShow = false
        }
        if (q == 3) {
          que.remove()
          question("3. Who is the leader of BTS?")
          options("Rm", "Jin", "Jk", "Suga")
          answer = 1;
          questionShow = false

        }

        if (q == 4) {
          que.remove()

          question(" BONUS QUESTION :<br/> What is the fandom of BTS called ?")

          options("BLINKS", "ONCE", "ARMY", "STAY");
          answer = 3;
          questionShow = false;
          bonus = true;
        }


        if (q == 5) {
          que.remove()
          question("4. Who are the visuals of BTS?")
          options("Jimin,Jk", "Jin,V", "Rm,Suga", "Jhope,Suga")
          answer = 2;
          bonus = false
          questionShow = false
        }

        if (q == 6) {
          que.remove()
          question("5. What is the full form of BTS?")
          options("Break The Silence", "Behind The Scenes", "Bangtan Sonyonden", "Bangtan Sonyeondan")
          answer = 4;
          questionShow = false
        }

        if (q == 7) {
          que.remove()
          question("6. Guess the member in the picture?")
          options("Rm", "Jk", "Jin", "Suga")
          answer = 1;
          questionShow = false;
        }

        if (q == 8) {
          que.remove()
          question(" BONUS QUESTION :<br/> In which entertainment does BTS work ?")
          options("SM Entertainment", "YG Entertainment", "JYP Entertainment", "BigHit Entertainment");
          answer = 4;
          questionShow = false;
          bonus = true
        }

        if (q == 9) {
          que.remove()
          question("7. Who is  known as  AgustD in BTS ?")
          options("Jin", "Rm", "Jimin", "Suga")
          answer = 4;
          bonus = false
          questionShow = false;
        }

        if (q == 10) {
          que.remove()
          question("8. Who is  maknae(youngest member)  of  BTS ?")
          options("JHope", "JK", "Jimin", "V")
          answer = 2;
          questionShow = false
        }

        if (q == 11) {
          que.remove()
          question("9. Who is the rapper ?")
          options("Jin", "JK", "Suga", "V")
          answer = 3;
          questionShow = false
        }

        if (q == 12) {
          que.remove()
          question("10. Who is the vocalist ?")
          options("Suga", "Jimin", "JHope", "Rm")
          answer = 2;
          questionShow = false
        }

        if (q == 13) {
          que.remove()
          question(" BONUS QUESTION :<br/> Who is known as WWH (World Wide Handsome) for BTS ARMY?")
          options("Jin", "V", "JK", "JHope");
          answer = 1;
          questionShow = false;
          bonus = true
        }


      }
      else {
        if (q == 7) {
          showImage()
        }
      }




      op1.mouseClicked(() => {
        if (answer == 1) {
          ans.show();
          if (bonus) {
            score += 50;
          }
          score += 50;
          wans.remove()
        }
        else {
          wans.show();
          life -= 1;
          ans.remove()
        }
      })

      op2.mouseClicked(() => {
        if (answer == 2) {
          ans.show()
          score += 50;
          op2.disabled = true;
          wans.remove()
        }
        else {
          wans.show();
          life -= 1;
          ans.remove()
        }
      })

      op3.mouseClicked(() => {
        if (answer == 3) {
          ans.show()
          if (bonus) {
            life += 1
          }
          score += 50;
          wans.remove()
        }
        else {
          wans.show();
          life -= 1;
          ans.remove()
        }
      })

      op4.mouseClicked(() => {
        if (answer == 4) {
          ans.show()
          if (bonus) {
            score += 50;
          }
          score += 50;
          wans.remove()
        }
        else {
          wans.show();
          life -= 1;
          ans.remove()
        }
      })


      nextButton.mouseClicked(() => {
        ans.hide();
        wans.hide()
        q += 1;
        questionShow = true
      })
    }
  }

  if (life <= 0) {
    gameState = 2
  }

  if (gameState == 2) {
    gameOver();
  }
}


function options(o1, o2, o3, o4) {

  op1 = createButton(o1);
  op1.position(width / 2 - 400, height - 400);
  op1.class("optionButton");

  op2 = createButton(o2);
  op2.position(width / 2 + 100, height - 400);
  op2.class("optionButton");

  op3 = createButton(o3);
  op3.position(width / 2 - 400, height - 300);
  op3.class("optionButton");

  op4 = createButton(o4);
  op4.position(width / 2 + 100, height - 300);
  op4.class("optionButton");

  nextButton = createButton("NEXT");
  nextButton.position(width / 2 + 300, 550);
  nextButton.class("nextButton");


}

function question(qt) {
  que = createElement('h2', qt)
  que.position(width / 2 - 250, 100)

}

function gameOver() {
  swal({
    title: `Game Over`,
    text: "Oops you lost the quiz....!!!",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
    imageSize: "100x100",
    confirmButtonText: "Thanks For Playing"
  });
}

function showImage() {
  image(pic2, width / 2 - 580, 60, 400, 250)
}

function nextQuestion() {
  console.log("called");
  ans.hide()
  wans.hide()
  q += 1;
  questionShow = true;
  clearInterval()
}


