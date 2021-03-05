$(document).ready(function () {
    $(".fancybox").fancybox({
        loop: false,
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {title: {type: 'inside'}, overlay: {css: {background: 'rgba(0,0,0,0.8)'}}},
        beforeShow: function () {
            // If there's more than one image in the group, show the image numbers and nav links
            if (this.group.length > 1)
            {
                this.title = (this.title ? '' + this.title + '<br />' : '') + 'Image ' + (this.index + 1) + ' of ' + this.group.length;
                if (this.index != 0)
                {
                    this.title = this.title + ' <a href="javascript:;" onclick="$.fancybox.prev();">&lt; Previous</a>';
                }
                if (this.index < this.group.length - 1)
                {
                    this.title = this.title + ' <a href="javascript:;" onclick="$.fancybox.next();">Next &gt;</a>';
                }
                this.title = this.title;
            } else
            {
                // Otherwise just show the title
                this.title = (this.title ? '' + this.title + '' : '');
            }
        }
    });

    $('#mega-nav').slick({
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1,
        arrow: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]

    });
 
    var now = new Date();
    $('.newsdate').html(now);
    //=document.getElementsByClassName('newsdate).innerHTML = now;
    
    
});



function fun() {
  
    var tenanh = ["mm1_gutsman2", "mm1_cutman2", "mm1_elecman2", "mm1_iceman2", "mm1_fireman2", "mm1_bombman2","mm1_cyclops","megaman","mm1_submarine","mm1_drwily2"];
    var tenanh2 = ["mm1_gutsman", "mm1_cutman", "mm1_elecman", "mm1_iceman", "mm1_fireman", "mm1_bombman","blue","blue","blue","blue"];
    var caption = ["Guts man", "Cut man", "Elec man", "Ice man", "Fire man", "Bomb man","Cyclops","Mega Man Clone","Submarines","Dr Wily"];
    var weapon_use = ["Rolling cutter", "Thunder Beam", "Ice Slasher", "Fire Storm", "Hyper Bomb", "Super Arm","Thunder Beam", "Thunder Beam", "Super Arm","Fire Storm/Rolling Cutter"];
    var weapon_receive = ["Super Arm", "Rolling cutter", "Thunder Beam", "Ice Slasher", "Fire Storm", "Hyper Bomb","Nothing","Nothing","Nothing","Nothing"];
    var link =["#","#","#","#","#",""];
    var k = 5;//document.getElementById("InputN").value;
    var n = tenanh.length;
    var sohang = n % k === 0 ? n / k : (n - n % k) / k + 1;
    //var s= "<table class='table-with-border'>";
    var s = "";
    for (var i = 0; i < sohang; i++) {
        s += "<tr>";
        for (var j = 0; j < k; j++) {
            if (i * k + j < n) {
                s += "<td align='center'><img class = 'boss_img' src= 'images/" + tenanh[i * k + j] + ".gif' >" + "<td align='center'>" + caption[i * k + j] + "</td><td align='center'>" + weapon_use[i * k + j] + "</td><td align='center'>" + weapon_receive[i * k + j] + "</td>" + "<td align='center'>"+"<a href ='"+ link[i*k+j] +"'>" +"<img class = 'boss_img' src= 'images/" + tenanh2[i * k + j] + ".gif' >" + "</a>";
            }
            s += "</tr>";
        }
    }
    //s+= "</table>";
    $('#bang_boss').append(s);
}


function fun2() {
    var tenanh = ["mm2_airman", "mm2_crashman", "mm2_bubbleman", "mm2_heatman", "mm2_flashman","mm2_quickman","mm2_metalman" ,"mm2_woodman","mm2_dragon","mm2_blocks","mm2_tank","mm2_seekers","mm2_drwily","mm2_drwily2","mm2_drwily3"];
    var tenanh2 = ["mm2_airman2", "mm2_crashman2", "mm2_bubbleman2", "mm2_heatman2", "mm2_flashman2", "mm2_quickman2","mm2_metalman2" ,"mm2_woodman2","blue","blue","blue","blue","blue","blue","blue"];
    var caption = ["Air Man", "Crash man","Bubble man","Heat man","Flash man","Quick man","Metal man","Wood man","Dragon","Blocks","Tank","Seekers","Dr Wily","Dr Wily2","Dr Wily3"];
    var weapon_use = ["Leaf Shield", "Air Shooter","Crash Bomber","Bubble Lead","Metal Blade","Time Stopper","Quick Boomerang","Atomic Fire","Quick Boomerang","Bubble Lead","Quick Boomerang","Crash Bomber","Crash Bomber","Crash Bomber","Bubble Lead"];
    var weapon_receive = [ "Air Shooter","Crash Bomber","Bubble Lead","Atomic Fire","Time Stopper","Quick Boomerang","Metal Blade","Leaf Shield","Nothing","Nothing","Nothing","Nothing","Nothing","Nothing","Nothing"];

    var k = 5;//document.getElementById("InputN").value;
    var n = tenanh.length;
    var sohang = n % k === 0 ? n / k : (n - n % k) / k + 1;
    //var s= "<table class='table-with-border'>";
    var s = "";
    for (var i = 0; i < sohang; i++) {
        s += "<tr>";
        for (var j = 0; j < k; j++) {
            if (i * k + j < n) {
                s += "<td align='center'><img class = 'boss_img' src= 'images/" + tenanh[i * k + j] + ".gif' >" + "<td align='center'>" + caption[i * k + j] + "</td><td align='center'>" + weapon_use[i * k + j] + "</td><td align='center'>" + weapon_receive[i * k + j] + "</td>" + "<td align='center'><img class = 'boss_img' src= 'images/" + tenanh2[i * k + j] + ".gif' >";
            }
            s += "</tr>";
        }
    }
    //s+= "</table>";
    $('#bang_boss2').append(s);
}

function fun3() {
    var tenanh = ["mm3_magnetman", "mm3_hardman", "mm3_topman", "mm3_shadowman", "mm3_sparkman","mm3_needleman","mm3_snakeman" ,"mm3_geminiman","mm3_mystery2","mm3_turtle","mm3_cyclops","megaman","mm3_drwily","mm3_drwily2","mm3_drwily3","mm3_drwily4"];
    var tenanh2 = ["mm3_magnetman2", "mm3_hardman2", "mm3_topman2", "mm3_shadowman2", "mm3_sparkman2","mm3_needleman2","mm3_snakeman2" ,"mm3_geminiman2","mm3_mystery","blue","blue","blue","blue","blue","blue","blue"];
    var caption = ["Magnet Man", "Hard Man","Top Man","Shadow Man","Spark Man","Needle Man","Snake Man","Gemini Man","Mystery man","Turtle","Cyclops","Mega Man Clone","Dr Wily","Dr Wily2","Dr Wily3","Dr Wily4"];
    var weapon_use = ["Spark Shock", "Magnet Missile","Hard Knuckle","Top Spin","Shadow Blade","Gemini Laser/Shadow Blade","Needle Cannon","Search Snake","Everything","Top Spin","Hard Knuckle","Search Snake","Hard Knuckle/Spark Shock","Rush Jet","Hard Knuckle","Top Spin"];
    var weapon_receive = [ "Magnet Missile","Hard Knuckle","Top Spin","Shadow Blade","Spark Shock","Needle Cannon","Search Snake","Gemini Laser","Nothing","Nothing","Nothing","Nothing","Nothing","Nothing","Nothing","Nothing"];

    var k = 5;//document.getElementById("InputN").value;
    var n = tenanh.length;
    var sohang = n % k === 0 ? n / k : (n - n % k) / k + 1;
    //var s= "<table class='table-with-border'>";
    var s = "";
    for (var i = 0; i < sohang; i++) {
        s += "<tr>";
        for (var j = 0; j < k; j++) {
            if (i * k + j < n) {
                s += "<td align='center'><img class = 'boss_img' src= 'images/" + tenanh[i * k + j] + ".gif' >" + "<td align='center'>" + caption[i * k + j] + "</td><td align='center'>" + weapon_use[i * k + j] + "</td><td align='center'>" + weapon_receive[i * k + j] + "</td>" + "<td align='center'><img class = 'boss_img' src= 'images/" + tenanh2[i * k + j] + ".gif' >";
            }
            s += "</tr>";
        }
    }
    //s+= "</table>";
    $('#bang_boss3').append(s);
}





window.onload = fun();
window.onload = fun2();
window.onload = fun3();
