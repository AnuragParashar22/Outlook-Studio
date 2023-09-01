 <div id="part2">
        <div  class="part2text">
            <h3>FULL-FLEDGED</h3>
            <h4>PHOTOGRAPHER's AND their Collection.</h4>
            <h2>SITE Examples</h2>
        </div>
        <div id="part2img">
            <div  class="part2imgbox">
                <img src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" alt="">
                <div class="part2imgboxinr">
                    <h4>Personal Shoot</h4>
                    <a href="/">Book now</a>
                </div>
            </div>
            <div  id="part2imgbox2" class="part2imgbox">
                <img src="https://images.unsplash.com/photo-1513546493312-0066d7de3fd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1940&q=80" alt="">
                <div class="part2imgboxinr">
                    <h4>Festive Shoot's</h4>
                    <a href="/">Book now</a>
                </div>
            </div>
            <div  class="part2imgbox">
                <img src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="">
                <div class="part2imgboxinr">
                    <h4>Wedding photography</h4>
                    <a href="/">Book now</a>
                </div>
            </div>
            <div  id="part2imgbox2" class="part2imgbox">
                <img src="https://images.unsplash.com/photo-1580895456895-cfdf02e4c23f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="">
                <div class="part2imgboxinr">
                    <h4>Retro Shoot's</h4>
                    <a href="/">Book now</a>
                </div>
            </div>
            <div  class="part2imgbox">
                <img src="https://images.unsplash.com/photo-1494386346843-e12284507169?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" alt="">
                <div class="part2imgboxinr">
                    <h4>Candid Shots</h4>
                    <a href="/">Book now</a>
                </div>
            </div>
        </div>
     </div>


     #part2{
    width: 100%;
    height: 130vh;
    background-color: #b1b7b2;
    padding-top: 2%;
    display: flex;
    flex-direction: column;
}
#part2>.part2text{
    width: 100%;
    height: 25%;
    /* background-color: red; */
    font-family: 'Yeon Sung', cursive;
}
.part2text>h2{
    line-height: 7vw;
    text-align: center;
    font-size: 12vw;
    text-transform:lowercase;
    font-family: 'Babylonica', cursive;
    font-weight: 100;
    /* color: /white; */
}
.part2text>h3{
    text-align: center;
    /* text-transform: lowercase; */
    font-weight: 100;
    font-size: 3vw;
}
.part2text>h4{
    text-align: center;
    text-transform: lowercase;
    font-weight: 100;
    font-size: 2vw;
}
#part2img{
    width: 100%;
    height: 75%;
    /* background-color: aliceblue; */
    padding: 2%;
    display: flex;
    
}
.part2imgbox{
   position: relative;
    margin-right: 2vw;
width: 18%;
height:50%;
background-color: red;
border-radius: 10px;
/* box-shadow: 5px 5px 25px rgb(201, 224, 255); */
}
#part2imgbox2{

   margin-top: 20%;
}
.part2imgbox>img{
    /* filter: grayscale(1); */
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
}
.part2imgbox>img:hover{
    filter: grayscale(0);
}
.part2imgboxinr{
    top: 0%;
    border-radius: 10px;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(58, 59, 59, 0.627);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: none;
    transition: all cubic-bezier(0.19, 1, 0.22, 1) 1s;
}
.part2imgboxinr>h4{
    text-align: center;
    font-family: 'Babylonica', cursive;
    font-size: 3vw;
    font-weight: 500;
    color: rgb(255, 255, 255);
}
.part2imgboxinr>a{
    color: rgb(255, 255, 255);
    font-family: gilroy;
}
.part2imgbox:hover>.part2imgboxinr{
    display: flex;
}