let x=0;
let y=0;
let p = "you";
let q = "computer";

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#mg");

const s1 = document.querySelector("#user");
const s2 = document.querySelector("#comp");
let nw = document.querySelector("#new-btn");
let nw1 = document.querySelector("#new-btn1");
let ms = document.querySelector(".msg1");
let mss = document.querySelector("#mg1");

const resetg = () =>{
    if(x > y)
    {
    showw(p);
    }
    else if(y>x){
    showw(q);
    }
    else
    {
        draww();
    }
    s1.innerText = x;
    s2.innerText = y;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#262525";
    ms.classList.remove("hide");
    
    
};
const resetg1 = () =>{
    x=0,y=0;
    s1.innerText = x;
    s2.innerText = y;
    ms.classList.add("hide");
    
    
};

const compc = () =>{
    const op = ["rock","paper","scissors"];
    const rand = Math.floor(Math.random() * 3);
    return op[rand];
}

const drawg = () =>{
    console.log("Game was draw.");
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#262525";
}
const draww = () =>{
    mss.innerText = `Game was draw`;
    ms.classList.remove("hide");
}

const win = (f,id,cc) =>{
    if(f) {
        x++;
        s1.innerText = x;
        msg.innerText = `You Win! Your ${id} beats ${cc}`;
        msg.style.backgroundColor = "#ffb703";
        
    }
    else{
        y++;
        s2.innerText = y;
        msg.innerText =`You lost :( ${cc} beats your ${id}`;
        msg.style.backgroundColor = "#d90429";
        
    }
}

const playg = (id) =>{
    const cc = compc();
    if(id == cc){
        drawg();
    }
    else
    {
        let f= 1;
        if(id == "rock")
        f = (cc == "paper") ? 0 : 1;
        else if(id == "paper")
        f =(cc == "scissors") ? 0 : 1;
        else{
        f = (cc == "rock") ? 0 : 1;
        }
        win(f,id,cc);
    }
}
const showw = (winner) => {
    if(winner == "you")
    mss.innerText = `Congratulations, Winner is ${winner}`;
else
    mss.innerText = `Winner is ${winner}`;

    ms.classList.remove("hide");

};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const id = choice.getAttribute("id");
        playg(id);
    });
});
nw.addEventListener("click",resetg);
nw1.addEventListener("click",resetg1);