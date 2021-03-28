//格子升起
function rise(node) {
  node.animate({
    bottom: "0rem"
  }, 1000, "linear");
}
rise($(".z01"))
rise($(".pigeon"))


//中间文字的显示
var s = 0;
var t = 0
var as = setInterval(function () {
  if (parseInt(s) == 1) {
    s = 1
    clearInterval(as)
  }
  s += 0.1
  $(".p1").animate({
    opacity: s + 0.5
  }, 1000)
}, 500)


//初始声音
$(".audio2").attr({
  "src": "./mp3/1.mp3",
  "loop": "loop",
  "autoplay": "autoplay"
})



// $(".audo2").attr({"src":"./mp3/1.mp3","loop":"loop","autoplay":"autoplay"})
//风车
var arr = ["a", "b", "c"];
var i = 0;
setInterval(function () {
  if (i > 2) {
    i = 0
  }
  $(".z29").attr("src", "./img/qt/z18-" + arr[i] + ".png")
  i++
}, 200);

//箭头
var Time = 0;
$(".jtt").css("opacity", "0");

function arrows() {
  var time = setInterval(function () {
    Time += 0.1;
    $(".jtt3").css("opacity", Time);
    if (parseInt(Time) == 1) {
      Time = 0
      $(".jtt3").css("opacity", Time);
      clearInterval(time);
      var time1 = setInterval(function () {
        Time += 0.1
        $(".jtt2").css("opacity", Time);
        if (parseInt(Time) == 1) {
          Time = 0
          $(".jtt2").css("opacity", Time);
          clearInterval(time1);
          var time2 = setInterval(function () {
            Time += 0.1;
            $(".jtt1").css("opacity", Time);
            if (parseInt(Time) == 1) {
              Time = 0
              $(".jtt1").css("opacity", Time);
              clearInterval(time2)
              arrows()
            }
          }, 50)
        }
      }, 50)
    }
  }, 50)
}
//调用箭头
arrows()

// 给箭头绑定单击事件
$(".jtt").on("click", function () {
  //文字和箭头隐藏
  $(".sp").css("display", "none")
  $(".pillar").css("display", "block")

  //初始声音
  $(".audio2").attr({
    "src": "",
    "loop": "",
    "autoplay": ""
  })
  //调用柱子方法
  pillars($(".z23"), "1.7rem", "1.5rem", 1000, /* 700 */)
  pillars($(".z24"), "0.1rem", "-0.1rem", 1200, /* 800 */)
  pillars($(".z29"), "0.9rem", "0.6rem", 1400, /* 900 */)
  pillars($(".z30"), "2.3rem", "2rem", 1400, /* 1000 */)


  //第一段路出现
  setTimeout(function () {
    $(".audio3").attr({
      "src": "./mp3/2.mp3",
      "loop": "loop",
      "autoplay": "autoplay"
    })
    pillars($(".z02"), "-2.98rem", "-3.18rem", 1000, 500)
    pillars($(".z03"), "-2.5rem", "-2.9rem", 1200, 700)
    pillars($(".z04"), "-2.74rem", "-3.34rem", 1400, 900)
    pillars($(".z05"), "-0.11", "-0.31rem", 1600, 1100)
    pillars($(".z06"), "0.81rem", "0.41rem", 1800, 1300)
    pillars($(".z07"), "0.3rem", "-0.1rem", 1800, 1500)
    pillars($(".z08"), "0.99rem", "0.69rem", 2400, 1900)
  }, 1500)

  //显示光圈
  setTimeout(function () {
    $(".halo").css("display", "block")
    $(".audio3").attr({
      "src": "",
      "loop": "loop",
      "autoplay": "autoplay"
    })
  }, 5000)
})

//封装柱子升起
function pillars(node, bottom, bottom2, sj, sj2) {
  node.animate({
    bottom: bottom
  }, sj, function () {
    node.animate({
      bottom: bottom2
    }, sj2)
  })
}

//鸽子走
// var a = 1;
var c = 1
var d = 11;
var time = null

//第一段
function gezi1() {
  gezi_move(1, 5, 1);
  $(".audio3").attr({
    "src": "",
    "loop": "loop",
    "autoplay": "autoplay"
  })
  $(".audio1").attr({
    "src": "./mp3/4.mp3",
    "loop": "loop"
  });
  $(".pigeon").animate({
    left: 1.7 + 'rem',
    bottom: 0.9 + 'rem',
  }, 1000, "linear", function () {
    gezi_move(11, 15, 11);
  }).animate({
    left: 2.7 + 'rem',
    bottom: 1.5 + 'rem',
  }, 740, "linear", function () {
    gezi_move(1, 5, 1)
  }).animate({
    left: 0.5 + 'rem',
    bottom: 2.8 + 'rem',
  }, 1400, "linear", function () {
    gezi_move(11, 15, 11);
  }).animate({
    left: 1.5 + 'rem',
    bottom: 4 + 'rem',
  }, 900, "linear", function () {
    gezi_move(1, 5, 1)
    phone($(".z10"), "5.4rem", "5.2rem");
    Two();
    $("audio").attr({
      "src": "",
      "loop": "loop"
    });
    clearInterval(time)
  })
}

//第二段路出现 
function Two() {
  pillars($(".z11"), "1.86rem", "1.86rem", 2600, 2000)
  pillars($(".z10"), "5.3rem", "5.3rem", 2600, 2000)
  // phone($(".z10"), "5.4rem", "5.2rem");

  setTimeout(function () {
    $(".audio3").attr({
      "src": "./mp3/2.mp3",
      "loop": "loop",
      "autoplay": "autoplay"
    })
    pillars($(".z09"), "1.629rem", "1.429rem", 2000, 900)
    pillars($(".z12"), "2.06rem", "1.86rem", 2100, 1000)
    pillars($(".z13"), "2.7rem", "2.28rem", 2300, 800)
    pillars($(".z14"), "3rem", "2.7rem", 2500, 1100)
    pillars($(".z15"), "2.9rem", "2.688rem", 2700, 1300)
  }, 2000)

  setTimeout(function () {
    $(".audio3").attr({
      "src": "",
      "loop": "loop",
      "autoplay": "autoplay"
    })
    $(".halo1").css("display", "block")
  }, 5000)
}

//第二段
function gezi2() {
  gezi_move(1, 5, 1)
  $(".audio3").attr({
    "src": "",
    "loop": "loop",
    "autoplay": "autoplay"
  })
  $(".audio1").attr({
    "src": "./mp3/4.mp3",
    "loop": "loop"
  });
  $(".pigeon").animate({
    left: 1 + 'rem',
    bottom: 4.2 + 'rem',
  }, 500, "linear", function () {
    gezi_move(11, 15, 11)
  }).animate({
    left: 4 + 'rem',
    bottom: 6 + 'rem',
  }, 2500, "linear", function () {
    gezi_move(21, 25, 21)
    phone($(".z17"), "6.8rem", "7rem");
    Three1()
    $(".audio1").attr({
      "src": "",
      "loop": "loop"
    });
    clearInterval(time)
  })
}


//第三段路出现 
function Three1() {
  pillars($(".z16"), "3.55rem", "3.55rem", 2600, 2000)
  pillars($(".z17"), "7rem", "7rem", 2600, 2000)


  setTimeout(function () {
    //声音启动
    $(".audio3").attr({
      "src": "./mp3/2.mp3",
      "loop": "loop",
      "autoplay": "autoplay"
    })
    pillars($(".z18"), "4.84rem", "4.66rem", 2000, 900)
    pillars($(".z19"), "-0.2rem", "0rem", 2100, 1000)
    pillars($(".z20"), "0.75rem", "0.45rem", 2300, 800)
    pillars($(".z21"), "0.37rem", "0.17rem", 2500, 1100)
    pillars($(".z22"), "0rem", "-0.1rem", 2700, 1300)
  }, 2000)

  setTimeout(function () {
    //声音取消
    $(".audio3").attr({
      "src": "",
      "loop": "loop",
      "autoplay": "autoplay"
    })
    $(".halo2").css("display", "block")
  }, 5000)
}
//第三段
function gezi3() {
  gezi_move(21, 25, 21)
  $(".audio3").attr({
    "src": "",
    "loop": "loop",
    "autoplay": "autoplay"
  })
  $(".audio1").attr({
    "src": "./mp3/4.mp3",
    "loop": "loop"
  });
  $(".pigeon").animate({
    left: 4.8 + 'rem',
    bottom: 4.9 + 'rem',
  }, 1000, "linear", function () {
    gezi_move(31, 35, 31)
  }).animate({
    left: 3.9 + 'rem',
    bottom: 4.3 + 'rem',
  }, 1200, "linear", function () {
    gezi_move(21, 25, 21)
  }).animate({
    left: 5.4 + 'rem',
    bottom: 3.5 + 'rem',
  }, 1500, "linear", function () {
    gezi_move(31, 35, 31)
    phone($(".z32"), "4.4rem", "4.2rem");
    Four()
    $(".audio1").attr({
      "src": "",
      "loop": "loop"
    });
    clearInterval(time)
  })
}

//第四段路出现
function Four() {
  pillars($(".z31"), "0.25rem", "0.25rem", 2600, 2000)
  pillars($(".z32"), "4.5rem", "4.5rem", 2600, 2000)
  setTimeout(function () {
    //声音启动
    $(".audio3").attr({
      "src": "./mp3/2.mp3",
      "loop": "loop",
      "autoplay": "autoplay"
    })
    pillars($(".z25"), "3rem", "2.8rem", 2000, 900)
    pillars($(".z26"), "-0.08rem", "-0.28rem", 2100, 1000)
    pillars($(".z27"), "0.36rem", "0.16rem", 2200, 1100)
    pillars($(".z28"), "-1.6rem", "-1.8rem", 2300, 1200)
  }, 2000)

  setTimeout(function () {
    //声音启动
    $(".audio3").attr({
      "src": "",
      "loop": "loop",
      "autoplay": "autoplay"
    })
    $(".halo3").css("display", "block")
  }, 5000)
}
//第四段
function gezi4() {
  gezi_move(31, 35, 31)
  $(".audio3").attr({
    "src": "",
    "loop": "loop",
    "autoplay": "autoplay"
  })
  $(".audio1").attr({
    "src": "./mp3/4.mp3",
    "loop": "loop"
  });
  $(".pigeon").animate({
    left: 4 + 'rem',
    bottom: 2.3 + 'rem',
  }, 1200, "linear", function () {
    gezi_move(31, 35, 31)
  }).animate({
    left: 3.2 + 'rem',
    bottom: 3 + 'rem',
  }, 1100, "linear", function () {
    $(".audio1").attr({
      "src": "",
      "loop": "loop"
    });
    gezi_move(31, 35, 31)
    Zgss()
    clearInterval(time)
  });
}

var ti = null
//最后一根柱子和鸽子上升
var c = 100
function Zgss() {
  clearInterval(ti);
  // 柱子升起声音
  $(".audio4").attr("src","./mp3/3.mp3")

  //先往下在往上升
  $(".z28").animate({
    bottom: "-2.2rem"
  }, 2000, "linear", function () {
    $(".z28").animate({
      bottom: "-0.6rem"
    }, 2000, "linear")
  })

  $(".pigeon").animate({
    bottom: "2.6rem"
  }, 2000, "linear", function () {
    $(".pigeon").animate({
      left: "3.25rem",
      bottom: "4.2rem"
    }, 2000, "linear")
  })

  setTimeout(function () {
    $(".z32").remove()
    $(".z10").remove()
    $(".z17").remove()
    $(".t1").animate({
      bottom: "-15rem",
    }, 2000, "linear")
    $(".base_map").css("background-position", "0 0")
  }, 1000)


  setTimeout(function () {
    $(".star").css("display","block");
  }, 3000)
  
}

//鸽子走
function gezi_move(num, count, num1) {
  clearInterval(time)
  $(".pigeon").attr("src", "./img//gezi/gz" + num + ".png")
  time = setInterval(function () {
    if (num >= count) {
      num = num1
      // clearInterval(time)
    }
    $(".pigeon").attr("src", "./img//gezi/gz" + (++num) + ".png")
  }, 200);
}

/* 电话 wifi 金币 */
function phone(node, dw1, dw2) {
  ti = setInterval(function () {
    node.animate({
      bottom: dw1
    }, 500, "linear").animate({
      bottom: dw2
    }, 500, "linear")
  }, 1000)
}

//光圈
$(".halo").on("click", function () {
  gezi1()
  $(this).remove()
})
$(".halo1").on("click", function () {
  gezi2()
  $(this).remove()
})
$(".halo2").on("click", function () {
  gezi3()
  $(this).remove()
})
$(".halo3").on("click", function () {
  gezi4()
  $(this).remove()
  phone($(".z32"), "4.4rem", "4.2rem");
})