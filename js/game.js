let info1 = document.querySelector(".info1"),
    info2 = document.querySelector(".info2");

let textInfo1 = document.querySelector(".text-info1"),
    textInfo2 = document.querySelector(".text-info2");

info1.addEventListener("mouseover", () => {
    info2.style.zIndex = "1";
    textInfo1.style.top = "16%";
    textInfo1.style.opacity = "1";
    textInfo1.style.zIndex = "2";
});
info1.addEventListener("mouseout", () => {
    textInfo1.style.top = "2%";
    textInfo1.style.opacity = "0";
    textInfo1.style.zIndex = "-1";
    info2.style.zIndex = "5";
});

info2.addEventListener("mouseover", () => {
    textInfo2.style.top = "16%";
    textInfo2.style.opacity = "1";
    textInfo2.style.zIndex = "2";

});
info2.addEventListener("mouseout", () => {
    textInfo2.style.top = "-20%";
    textInfo2.style.opacity = "0";
    textInfo2.style.zIndex = "-1";
});
// шар с предскозанием числа
let circle = document.querySelector(".circle");
let circleNum = document.querySelector("#circleNum");
// переключатели
const checkbox1 = document.querySelector("#checkbox");
const checkbox2 = document.querySelector("#checkbox2");
// блоки игр
const blockGame = document.querySelectorAll(".block-game");
// число от человека
const numGame = document.querySelector("#numGame");
// ставки
const rate1 = document.querySelector("#rate1");
const rate2 = document.querySelector("#rate2");

// радио кнопки
let textRadio = document.querySelectorAll(".setting__radio-text");
let form = document.forms[0];
let choice = form.elements.choice;

// вывод денег на табло
let money = document.querySelector("#money"),
    win = document.querySelector("#win"),
    bigWin = document.querySelector("#bigWin"),
    losing = document.querySelector("#losing");

///////////////// при 400 придумаем число вывод
const outNum = document.querySelector(".text-out");
const thisNum = document.querySelector(".this__num");
const circleDots = document.querySelectorAll(".anim-circle");
const upNum = document.querySelectorAll(".setting__arrow-up");
const downNum = document.querySelectorAll(".setting__arrow-down");

//кнопка старта игры
const start = document.querySelector(".start");

///////////////////зажатие на кнопки/////////////////////////
upNum[0].addEventListener("touchstart", () => {
    let a = setInterval(() => {
        if (+numGame.value > 29) {
            clearInterval(a);
        } else {
            numGame.value = +numGame.value + 1;
        }
    }, 200);
    this.addEventListener("touchend", () => {
        clearInterval(a);
    })
});

upNum[1].addEventListener("touchstart", () => {
    let a = setInterval(() => {
        if (+rate1.value + +rate2.value < +money.value) {
            rate1.value = +rate1.value + 1;
        } else if (checkbox2.checked == false && +rate1.value < +money.value) {
            rate1.value = +rate1.value + 1;
        } else if (+rate1.value + +rate2.value > +money.value) {
            clearInterval(a);
        } else if (money.value == 0) {
            rate1.value = 1;
            rate2.value = 1;
        }
    }, 100);
    this.addEventListener("touchend", () => {
        clearInterval(a);
    })
});
upNum[2].addEventListener("touchstart", () => {
    let a = setInterval(() => {
        if (+rate2.value + +rate1.value < +money.value) {
            rate2.value = +rate2.value + 1;
        } else if (checkbox1.checked == false && +rate2.value <= +money.value - 1) {
            rate2.value = +rate2.value + 1;
        } else if (+rate2.value + +rate1.value > +money.value) {
            clearInterval(a);
        } else if (money.value == 0) {
            rate1.value = 1;
            rate2.value = 1;
        }
    }, 100);
    this.addEventListener("touchend", () => {
        clearInterval(a);
    })
});
downNum[0].addEventListener("touchstart", () => {
    let a = setInterval(() => {
        if (+numGame.value <= 0) {
            clearInterval(a);
        } else {
            numGame.value = +numGame.value - 1;
        }
    }, 200);
    this.addEventListener("touchend", () => {
        clearInterval(a);
    })
});
downNum[1].addEventListener("touchstart", () => {
    let a = setInterval(() => {
        if (checkbox2.checked == false && +rate1.value <= +money.value && +rate1.value > 1) {
            rate1.value = +rate1.value - 1;
        } else if (+rate1.value + +rate2.value <= +money.value && +rate1.value > 1) {
            rate1.value = +rate1.value - 1;
        } else if (+rate1.value + +rate2.value > +money.value) {
            rate1.value = +rate1.value - +rate2.value;
            clearInterval(a);
        }
    }, 100);
    this.addEventListener("touchend", () => {
        clearInterval(a);
    })
});
downNum[2].addEventListener("touchstart", () => {
    let a = setInterval(() => {
        if (checkbox1.checked == false && +rate2.value <= +money.value && +rate2.value > 1) {
            rate2.value = +rate2.value - 1;
        } else if (+rate2.value + +rate1.value <= +money.value && +rate2.value > 1) {
            rate2.value = +rate2.value - 1;
        } else if (+rate2.value + +rate1.value > +money.value) {
            rate2.value = +rate2.value - +rate1.value;
            clearInterval(a);
        }
    }, 100);
    this.addEventListener("touchend", () => {
        clearInterval(a);
    })
});


////////////////////////клики на кнопку//////////////////////////


upNum[0].addEventListener("click", () => {
    if (+numGame.value > 29) {
        numGame.value = 30;
    } else {
        numGame.value = +numGame.value + 1;
    }
});
upNum[1].addEventListener("click", () => {
    if (+rate1.value + +rate2.value < +money.value) {
        rate1.value = +rate1.value + 1;
    } else if (checkbox2.checked == false && +rate1.value < +money.value) {
        rate1.value = +rate1.value + 1;
    } else if (money.value == 0) {
        rate1.value = 1;
        rate2.value = 1;
    }
});
upNum[2].addEventListener("click", () => {
    if (+rate2.value + +rate1.value < +money.value) {
        rate2.value = +rate2.value + 1;
    } else if (checkbox1.checked == false && +rate2.value < +money.value) {
        rate2.value = +rate2.value + 1;
    } else if (money.value == 0) {
        rate1.value = 1;
        rate2.value = 1;
    }
});
downNum[0].addEventListener("click", () => {
    if (+numGame.value <= 0) {
        numGame.value = + 1;
    }
    numGame.value = +numGame.value - 1;
});
downNum[1].addEventListener("click", () => {
    if (checkbox2.checked == false && +rate1.value <= +money.value && +rate1.value > 1) {
        rate1.value = +rate1.value - 1;
    } else if (+rate1.value + +rate2.value <= +money.value && +rate1.value > 1) {
        rate1.value = +rate1.value - 1;
    } else if (money.value == 0) {
        rate1.value = 1;
        rate2.value = 1;
    }
});
downNum[2].addEventListener("click", () => {
    if (checkbox1.checked == false && +rate2.value <= +money.value && +rate2.value > 1) {
        rate2.value = +rate2.value - 1;
    } else if (+rate2.value + +rate1.value <= +money.value && +rate2.value > 1) {
        rate2.value = +rate2.value - 1;
    } else if (money.value == 0) {
        rate1.value = 1;
        rate2.value = 1;
    }
});
numGame.addEventListener("wheel", (e) => {
    e.preventDefault();
    let out = numGame.value = +numGame.value + e.deltaY / -100;
    let x1 = Math.round(out);
    console.log(x1);

    if (x1 <= 0) {
        numGame.value = 0;
    } else if (checkbox1.checked == false) {
        numGame.value = 10;
    } else if (x1 >= 30) {
        numGame.value = 30;
    }
});

rate1.addEventListener("wheel", (e) => {
    e.preventDefault();
    let rate = rate1.value = +rate1.value + e.deltaY / -100;
    let x2 = Math.round(rate);
    if (checkbox1.checked && checkbox2.checked) {
        if (+rate1.value + +rate2.value >= money.value) {
            rate1.value = +money.value - +rate2.value;
        }
    } else if (checkbox1.checked == true && checkbox2.checked == false) {
        if (+rate1.value >= money.value) {
            rate1.value = +money.value;
        }
    }
    if (x2 <= 0) {
        rate1.value = 1;
    } else if (checkbox1.checked == false) {
        rate1.value = 1;
    } else if (x2 >= money.value) {
        rate1.value = money.value;
    }
});

rate2.addEventListener("wheel", (e) => {
    e.preventDefault();
    let rate = rate2.value = +rate2.value + e.deltaY / -100;
    let x3 = Math.round(rate);
    if (checkbox1.checked && checkbox2.checked) {
        if (+rate2.value + +rate1.value >= money.value) {
            rate2.value = +money.value - +rate1.value;
        }
    } else if (checkbox1.checked == false && checkbox2.checked) {
        if (+rate2.value >= money.value) {
            rate2.value = +money.value;
        }
    }
    if (x3 <= 0) {
        rate2.value = 1;
    } else if (checkbox2.checked == false) {
        rate2.value = 1;
    } else if (x3 >= money.value) {
        rate2.value = money.value;
    }
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};
let width = document.body.offsetWidth;
function int() {
    if (width <= 800) {
        setTimeout(() => {
            circleNum.style.opacity = "1";
        }, 2000);
    } else {
        setTimeout(() => {
            circleNum.style.opacity = "1";
        }, 1010);
    }
}
function wave() {
    let ripple = document.querySelector('.ripple');
    if (ripple) {
        ripple.remove();
    }
    let buttonWidth = start.offsetWidth,
        buttonHeight = start.offsetHeight;
    if (buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth;
    } else {
        buttonWidth = buttonHeight;
    }
    let x = event.offsetX == undefined ? event.layerX : event.offsetX - buttonWidth / 2,
        y = event.offsetY == undefined ? event.layerY : event.offsetY - buttonHeight / 2;
    let span = document.createElement('span');
    span.className = 'ripple';
    s = span.style;
    s.width = buttonWidth + 'px';
    s.height = buttonHeight + 'px';
    s.top = y + 'px';
    s.left = x + 'px';
    start.appendChild(span);
}
function animСhoiceGreen() {
    rate2.classList.add("animGreen");
    setTimeout(() => {
        rate2.classList.remove("animGreen");
    }, 1500);
}
function animСhoiceRed() {
    rate2.classList.add("animRed");
    setTimeout(() => {
        rate2.classList.remove("animRed");
    }, 1500);
}
function animMultipleGreen() {
    numGame.classList.add("animGreen");
    rate1.classList.add("animGreen");
    setTimeout(() => {
        numGame.classList.remove("animGreen");
        rate1.classList.remove("animGreen");
    }, 1000);
}
function animMultipleRed() {
    numGame.classList.add("animRed");
    rate1.classList.add("animRed");
    setTimeout(() => {
        numGame.classList.remove("animRed");
        rate1.classList.remove("animRed");
    }, 1000);
}
if (localStorage.getItem('mon') && localStorage.getItem('los') &&
    localStorage.getItem('win') && localStorage.getItem('bigWin')) {
    win.value = localStorage.getItem('win');
    bigWin.value = localStorage.getItem('bigWin');
    losing.value = localStorage.getItem('los');
    money.value = localStorage.getItem('mon');
} else {
    money.value = 200;
    win.value = 0;
    bigWin.value = 0;
    losing.value = 0;
}


//////////////////////////////////////////////////////////////
start.addEventListener("click", (e) => {
    e.preventDefault();
    start.style.pointerEvents = "none";
    setTimeout(() => {
        start.style.pointerEvents = "all";
    }, 2000);
    circle.classList.add("circle__active");
    setTimeout(() => {
        circle.classList.remove("circle__active");
    }, 1010);
    circleNum.style.opacity = "0";
    let nowCircleNum = circleNum.value = getRandomInt(30);
    ////////////////////////////////////////////
    if (width <= 400) {
        for (let i = 0; i < circleDots.length; i++) {
            if (+money.value <= 0) {
                money.value = 0;
                outNum.innerHTML = "Конец игры";
                thisNum.style.opacity = 0;
                info1.classList.add("info-active");
                setTimeout(() => {
                    info1.classList.remove("info-active");

                }, 1000);
            } else {
                thisNum.style.display = "none";
                thisNum.style.opacity = 0;
                outNum.innerHTML = "Это число";
                circleDots[i].classList.add("play" + i);
                setTimeout(() => {
                    circleDots[i].classList.remove("play" + i);
                    thisNum.style.display = "block";
                    thisNum.style.opacity = 1;
                    thisNum.value = nowCircleNum;
                }, 1000);
            }

            // setTimeout(() => {
            //     thisNum.style.opacity = 0;
            // }, 1800);
            // setTimeout(() => {
            //     thisNum.style.display = "none";
            // }, 1900);

        }
    }
    ///////////////////////////////
    if (checkbox1.checked && checkbox2.checked) {
        if (+money.value < +rate1.value + +rate2.value) {
            rate1.value = 1;
            rate2.value = 1;
        }
    }
    if (checkbox1.checked == false && checkbox2.checked) {
        if (+money.value < +rate2.value) {
            rate2.value = 1;
        }
    }
    if (checkbox1.checked && checkbox2.checked == false) {
        if (+money.value < +rate1.value) {
            rate1.value = 1;
        }
    }

    if (+money.value == 1) {
        if (checkbox1.checked && checkbox2.checked) {
            checkbox1.checked = false;
            blockGame[0].style.backgroundColor = "rgba(204, 194, 194, 0.5)";
            setBox1.style.color = "#000";
            numGame.readOnly = true;
            numGame.style.cursor = "no-drop";
            rate1.readOnly = true;
            rate1.style.cursor = "no-drop";
        }
    }
    /////////////////////////
    if (+money.value == 0) {
        setTimeout(() => {
            circle.classList.remove("circle__active");
            circleNum.style.fontSize = "18px";
            circleNum.value = "гуляй";

            circleNum.style.opacity = "1";
            circle.style.background = "firebrick";
            start.classList.add("animBtn");
            money.classList.add("animColor");
        }, 0);
        setTimeout(() => {
            start.classList.remove("animBtn");
            money.classList.remove("animColor");
        }, 1000);
    } else {
        setTimeout(() => {
            circle.classList.remove("circle__active");
            circleNum.style.opacity = "1";
            circleNum.style.transition = "0.4s";
        }, 1010);
    }
    //////////////////////////////////////////////////////////////////
    if (+money.value >= +rate1.value + +rate2.value && checkbox1.checked && checkbox2.checked) {
        wave();
        if (numGame.value == nowCircleNum && nowCircleNum % 2 == 0 && choice[0].checked ||
            numGame.value == nowCircleNum && nowCircleNum % 2 == 1 && choice[1].checked) {
            let numVal = +rate2.value + +(rate1.value * 5);
            let zero = 0;
            let spid;
            if (numVal > 60) {
                spid = 10;
            } else if (numVal > 40) {
                spid = 20;
            } else if (numVal > 20) {
                spid = 30;
            } else if (numVal > 0) {
                spid = 50;
            }
            localStorage.setItem('mon', +money.value + numVal);
            setTimeout(() => {
                let out = setInterval(() => {
                    if (zero == numVal - 1) {
                        clearTimeout(out)
                    }
                    money.value = +money.value + 1;
                    zero++
                }, spid);
                bigWin.value = +bigWin.value + 1;
                win.value = +win.value + 1;

                numGame.classList.add("animGreen");
                rate1.classList.add("animGreen");
                rate2.classList.add("animGreen");
            }, 1000);
            setTimeout(() => {
                numGame.classList.remove("animGreen");
                rate1.classList.remove("animGreen");
                rate2.classList.remove("animGreen");
            }, 2000);
            console.log("в пять раз и четное1 :)");
            // если угадано число и четное
        } else if (numGame.value != nowCircleNum && nowCircleNum % 2 == 0 && choice[0].checked ||
            numGame.value != nowCircleNum && nowCircleNum % 2 == 1 && choice[1].checked) {
            let numVal;
            let plus;
            if (+rate1.value > +rate2.value) {
                numVal = +rate1.value - +rate2.value;
                plus = false;
                console.log("one if");
            } else if (+rate2.value >= +rate1.value) {
                numVal = +rate2.value - +rate1.value;
                plus = true;
                console.log("two if");
            }
            console.log("сумма " + numVal)
            let zero = 0;
            let spid;
            if (numVal > 60) {
                spid = 10;
            } else if (numVal > 40) {
                spid = 20;
            } else if (numVal > 20) {
                spid = 30;
            } else if (numVal > 0) {
                spid = 50;
            }

            localStorage.setItem('mon', +money.value + numVal);
            console.log(localStorage.getItem('mon'));
            setTimeout(() => {
                let out = setInterval(() => {
                    if (zero == numVal - 1) {
                        clearTimeout(out)
                    }
                    if (numVal <= zero) {
                        money.value = +money.value - 1;
                        clearTimeout(out)
                    }
                    zero++
                    if (plus == false) {
                        money.value = +money.value - 1;
                        console.log("false");
                    } else {
                        money.value = +money.value + 1;
                        console.log("true");
                    }
                }, spid);
                win.value = +win.value + 1;
                losing.value = +losing.value + 1;

                numGame.classList.add("animRed");
                rate1.classList.add("animRed");
                rate2.classList.add("animGreen");
            }, 1000);

            setTimeout(() => {
                numGame.classList.remove("animRed");
                rate1.classList.remove("animRed");
                rate2.classList.remove("animGreen");
            }, 2000);
            console.log("в пять раз и четное2 :)");
            // если НЕ угадоно число и четное число угадали
        } else if (numGame.value == nowCircleNum && nowCircleNum % 2 == 1 && choice[0].checked ||
            numGame.value == nowCircleNum && nowCircleNum % 2 == 0 && choice[1].checked) {
            let numVal;
            if (+rate1.value >= +rate2.value) {
                numVal = +(rate1.value * 5) - +rate2.value;
                plus = false;
                console.log("one if");
            } else if (+rate2.value >= +rate1.value) {
                numVal = +rate2.value - +(rate1.value * 5);
                plus = true;
                console.log("two if");
            }
            console.log("сумма " + numVal)
            let zero = 0;
            let spid;
            if (numVal > 60) {
                spid = 10;
            } else if (numVal > 40) {
                spid = 20;
            } else if (numVal > 20) {
                spid = 30;
            } else if (numVal > 0) {
                spid = 50;
            }


            localStorage.setItem('mon', +money.value + numVal);
            console.log(localStorage.getItem('mon'));
            setTimeout(() => {
                let out = setInterval(() => {
                    if (zero == numVal - 1) {
                        clearTimeout(out)
                    }
                    if (numVal <= zero) {
                        money.value = +money.value - 1;
                        clearTimeout(out)
                    }
                    zero++
                    money.value = +money.value + 1;
                    console.log("false");
                }, spid);
                bigWin.value = +bigWin.value + 1;
                losing.value = +losing.value + 1;

                numGame.classList.add("animGreen");
                rate1.classList.add("animGreen");
                rate2.classList.add("animRed");
            }, 1000);

            setTimeout(() => {
                numGame.classList.remove("animGreen");
                rate1.classList.remove("animGreen");
                rate2.classList.remove("animRed");
            }, 2000);
            console.log("в пять раз и четное3 :)");
            //если угадоно число и Не угадано четное
        } else if (numGame.value != nowCircleNum && nowCircleNum % 2 == 0 && choice[1].checked ||
            numGame.value != nowCircleNum && nowCircleNum % 2 == 1 && choice[0].checked) {
            let numVal = +rate1.value + +rate2.value;
            console.log("сумма " + numVal)
            let zero = 0;
            let spid;
            if (numVal > 60) {
                spid = 10;
            } else if (numVal > 40) {
                spid = 20;
            } else if (numVal > 20) {
                spid = 30;
            } else if (numVal > 0) {
                spid = 50;
            }


            localStorage.setItem('mon', +money.value - numVal);
            console.log(localStorage.getItem('mon'));


            setTimeout(() => {
                let out = setInterval(() => {
                    if (zero == numVal - 1) {
                        clearTimeout(out)
                    }
                    if (numVal <= zero) {
                        money.value = +money.value - 1;
                        clearTimeout(out)
                    }
                    zero++
                    money.value = +money.value - 1;
                    console.log("false");
                }, spid);
                losing.value = +losing.value + 1;

                numGame.classList.add("animRed");
                rate1.classList.add("animRed");
                rate2.classList.add("animRed");
            }, 1000);

            setTimeout(() => {
                numGame.classList.remove("animRed");
                rate1.classList.remove("animRed");
                rate2.classList.remove("animRed");
            }, 2000);
            console.log("в пять раз и нечетное6 :)");
            //если НЕ угадано число и НЕ угадано нечетное
        }
    } else if (+money.value >= +rate1.value && checkbox1.checked && checkbox2.checked == false) {
        if (numGame.value == nowCircleNum) {
            let numVal = +(rate1.value * 5);
            console.log("сумма " + numVal)
            let zero = 0;
            let spid;
            if (numVal > 60) {
                spid = 10;
            } else if (numVal > 40) {
                spid = 20;
            } else if (numVal > 20) {
                spid = 30;
            } else if (numVal > 0) {
                spid = 50;
            }

            localStorage.setItem('mon', +money.value + numVal);
            console.log(localStorage.getItem('mon'));
            setTimeout(() => {
                animMultipleGreen();
                let out = setInterval(() => {
                    if (zero == numVal - 1) {
                        clearTimeout(out)
                    }
                    zero++
                    money.value = +money.value + 1;
                    console.log("false");
                }, spid);
                bigWin.value = +bigWin.value + 1;

            }, 1000);

            //если угадано число
        } else if (numGame.value != nowCircleNum) {
            let numVal = +rate1.value;
            console.log("сумма " + numVal)
            let zero = 0;
            let spid;
            if (numVal > 60) {
                spid = 10;
            } else if (numVal > 40) {
                spid = 20;
            } else if (numVal > 20) {
                spid = 30;
            } else if (numVal > 0) {
                spid = 50;
            }

            localStorage.setItem('mon', +money.value - numVal);
            console.log(localStorage.getItem('mon'));


            setTimeout(() => {
                animMultipleRed();
                let out = setInterval(() => {
                    if (zero == numVal - 1) {
                        clearTimeout(out)
                    }
                    zero++
                    money.value = +money.value - 1;
                    console.log("false");
                }, spid);
                losing.value = +losing.value + 1;

            }, 1000);

            console.log("Вы проиграли9 :(");
            //если Не угадано число
        }
    } else if (+money.value >= +rate2.value && checkbox1.checked == false && checkbox2.checked) {
        if (nowCircleNum % 2 == 0 && choice[0].checked ||
            nowCircleNum % 2 == 1 && choice[1].checked) {
            let numVal = +rate2.value;
            console.log("сумма " + numVal)
            let zero = 0;
            let spid;
            if (numVal > 60) {
                spid = 10;
            } else if (numVal > 40) {
                spid = 20;
            } else if (numVal > 20) {
                spid = 30;
            } else if (numVal > 0) {
                spid = 50;
            }


            localStorage.setItem('mon', +money.value + numVal);
            console.log(localStorage.getItem('mon'));


            setTimeout(() => {
                animСhoiceGreen();
                let out = setInterval(() => {
                    if (zero == numVal - 1) {
                        clearTimeout(out)
                    }
                    zero++
                    money.value = +money.value + 1;
                    console.log("false");
                    console.log(spid);

                }, spid);
                win.value = +win.value + 1;
            }, 1000);

            console.log("в пять раз и нечетное10 :)");
            //если угадано четное число
        } else if (nowCircleNum % 2 == 0 && choice[1].checked ||
            nowCircleNum % 2 == 1 && choice[0].checked) {
            let numVal = +rate2.value;
            console.log("сумма " + numVal)
            let zero = 0;
            let spid;
            if (numVal > 60) {
                spid = 10;
            } else if (numVal > 40) {
                spid = 20;
            } else if (numVal > 20) {
                spid = 30;
            } else if (numVal > 0) {
                spid = 50;
            }


            localStorage.setItem('mon', +money.value - numVal);
            console.log(localStorage.getItem('mon'));


            setTimeout(() => {
                animСhoiceRed();
                let out = setInterval(() => {
                    if (zero == numVal - 1) {
                        clearTimeout(out)
                    }
                    zero++
                    money.value = +money.value - 1;
                    console.log("false");
                }, spid);
                losing.value = +losing.value + 1;
            }, 1000);

            console.log("Вы проиграли11 :(");
            //если Не угадано четное число
        }
    }


    setTimeout(() => {
        localStorage.setItem('bigWin', bigWin.value);
        localStorage.setItem('win', win.value);
        localStorage.setItem('los', losing.value);
    }, 1050);

});
//////////////////////////////////////////////////////////////
checkbox1.addEventListener("click", () => {
    if (checkbox1.checked == false && checkbox2.checked) {
        blockGame[0].style.backgroundColor = "rgba(204, 194, 194, 0.5)";
        setBox1.style.color = "#000";
        numGame.readOnly = true;
        numGame.style.cursor = "no-drop";
        rate1.readOnly = true;
        rate1.style.cursor = "no-drop";
    } else if (checkbox1.checked == false && checkbox2.checked == false) {
        blockGame[1].style.backgroundColor = "transparent";
        checkbox2.checked = true;
        setBox2.style.color = "blue";
        rate2.readOnly = false;
        rate2.style.cursor = "n-resize";

        blockGame[0].style.backgroundColor = "rgba(204, 194, 194, 0.5)";
        setBox1.style.color = "#000";
        numGame.readOnly = true;
        numGame.style.cursor = "no-drop";
        rate1.readOnly = true;
        rate1.style.cursor = "no-drop";
    } else if (checkbox1.checked == true) {
        blockGame[0].style.backgroundColor = "transparent";
        setBox1.style.color = "blue";
        numGame.readOnly = false;
        numGame.style.cursor = "n-resize";
        rate1.readOnly = false;
        rate1.style.cursor = "n-resize";
    }
});
checkbox2.addEventListener("click", () => {
    if (checkbox2.checked == false && checkbox1.checked) {
        blockGame[1].style.backgroundColor = "rgba(204, 194, 194, 0.5)";
        setBox2.style.color = "#000";
        rate2.readOnly = true;
        rate2.style.cursor = "no-drop";
    } else if (checkbox1.checked == false && checkbox2.checked == false) {
        blockGame[0].style.backgroundColor = "transparent";
        checkbox1.checked = true;
        setBox1.style.color = "blue";
        rate1.readOnly = false;
        rate1.style.cursor = "n-resize";
        numGame.readOnly = false;
        numGame.style.cursor = "n-resize";

        blockGame[1].style.backgroundColor = "rgba(204, 194, 194, 0.5)";
        setBox2.style.color = "#000";
        rate2.readOnly = true;
        rate2.style.cursor = "no-drop";
    } else if (checkbox2.checked == true) {
        blockGame[1].style.backgroundColor = "transparent";
        setBox2.style.color = "blue";
        rate2.readOnly = false;
        rate2.style.cursor = "n-resize";
    }
});