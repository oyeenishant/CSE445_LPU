var songrun=false;
var count=1;
var mod=1;
var path=["songs\\Saadda Haq .mp3"
,"songs\\Zinda.mp3"
,"songs\\Sultan.mp3"
,"songs\\Ainvayi Ainvayi.mp3"
,"songs\\Badtameez Dil.mp3"
,"songs\\Channa_Mereya.mp3"
,"songs\\Jeena Jeena.mp3"
,"songs\\Kal Ho Naa Ho.mp3"
,"songs\\Zindagi Ek Safar Hai.mp3"
,"songs\\Ilahi.mp3"
,"songs\\Jashn-E-Bahaara.mp3"
,"songs\\Mitwa.mp3"
,"songs\\Tujh Mein Rab Dikhta.mp3"
];

var sname=[["Saadda Haq .mp3","angry"],
["Zinda.mp3","angry"],
["Sultan.mp3","angry"],
["Ainvayi Ainvayi","happy"],
["Badtameez Dil","happy"],
["Channa_Mereya","sad"],
["Jeena Jeena","sad"],
["Kal Ho Naa Ho","sad"],
["Zindagi Ek Safar Hai","neutral"],
["Ilahi","neutral"],
["Jashn-E-Bahaara","neutral"],
["Mitwa","neutral"],
["Tujh Mein Rab Dikhta","sad"]
];

var sd=["Movie: Rockstar<br>Singer: A.R. Rahman, Clinton Cerejo, Mohit Chauhan"
,"Movie: Bhaag Milkha Bhaag<br>Singer: Shankar-Ehsaan-Loy, Siddharth Mahadevan"
,"Movie: Sulta<br>Singer: Sukhwinder Singh, Shadab Faridi"
,"The song is sung by Salim Merchant,Sunidhi Chauhan<br>and composed by Salim Merchant,Sulaiman Merchant<br>while lyrics written by Amitabh Bhattacharya<br>Singer: Salim-Sulaiman, Sunidhi Chauhan, Salim Merchant"
,"Movie: Yeh Jawaani Hai Deewani<br>Benny Dayal, Shefali Alvares"
,"The song is sung by Sanam Puri<br>and composed by Pritam Chakraborty<br>while lyrics written by Amitabh Bhattachary<br>Singer - Arijit Singh"
,"The song is sung by Atif Aslam<br>and composed by Jigar Saraiya,Sachin Sanghvi<br>while lyrics written by Dinesh Vijan,Priya Saraiya<br>Singer - Atif Aslam"
,"Movie: Kal Ho Naa Ho (2003)<br>Singer: Shankar-Ehsaan-Loy, Sonu Nigam "
,"Movie: Andaz (1971)<br>Singer: Shankar-Jaikishan, Asha Bhosle, Kishore Kumar, Suman Kalyanpur, Mohammed Rafi, Pratibha, Poornima"
,"Movie: Yeh Jawaani Hai Deewani<br>Singer: Arijit Singh<br>Music by: Pritam"
,"The song is sung by Javed Ali and composed by A.R. Rahman <br>while lyrics written by Javed Akhtar<br>Singer: Javed Ali"
,"Movie: Kabhi Alvida Naa Kehna (2006)<br>Singer: Shankar-Ehsaan-Loy, Shankar Mahadevan, Caralisa Monteiro, Shafqat Amanat Ali"
,"Movie: Rab Ne Bana Di Jodi (2008)<br>Singer: Roopkumar Rathod"
];

var bool=[];
for(var i=0; i<sd.length; i++)
	bool[i]=false;

var icon=["images\\\\1.jpg",
"images\\\\2.jpg",
"images\\\\3.jpg",
"images\\\\4.jpg",
"images\\\\5.jpg",
"images\\\\6.jpg",
"images\\\\7.jpg",
"images\\\\8.jpg",
"images\\\\9.jpg",
"images\\\\10.jpg",
"images\\\\11.jpg",
"images\\\\12.jpg",
"images\\\\13.jpg",
];
var mood=[["1","2","3"],["4","5"],["6","7","8"],["9","10"]];



var songs=new Array(13);
// for (var i = 0; i<12; i++) {
// 	songs[i]=new Array(4);
// 	songs[i][0]=path[i];
// 	songs[i][1]=sd[i];
// 	songs[i][2]=icon[i];
// 	songs[i][3]=sname[i][1]+".png";//emoji
// 	console.log(songs[i][0]);
// 	console.log(songs[i][1]);
// 	console.log(songs[i][2]);
// 	var ins=document.createElement("div");
// 	ins.id='b'+i;
// 	// ins.onclick=function(){
// 	// next(this);
//   	// };
// 	ins.setAttribute("class", "song");
// 	document.body.appendChild(ins);
// 	document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
// 	document.getElementById('a'+i).onclick=function(){
// 		play(this);
// 	};
// 	document.getElementById('c'+i).onclick=function(){
// 		addq(this);
// 	};	
// }

//temp

//shuffle song array


function shuffle(array) {
 
  array.sort(() => Math.random() - 0.5);

  return array;
}

for (var i = 0; i<13; i++) {
	songs[i]=new Array(5);
	songs[i][0]=path[i];
	songs[i][1]=sd[i];
	songs[i][2]=icon[i];
	songs[i][3]=sname[i][1]+".png";//emoji
	songs[i][4]=sname[i][0];
	console.log(songs[i][0]);
	console.log(songs[i][1]);
	console.log(songs[i][2]);
	if(i==12){
		songs=shuffle(songs);
		for(i=0;i<12;i++){
			var ins=document.createElement("div");
			ins.id='b'+i;
	// ins.onclick=function(){
	// next(this);
  	// };
			ins.setAttribute("class", "song");
			document.body.appendChild(ins);
			document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
			document.getElementById('a'+i).onclick=function(){
				play(this);
				};
			document.getElementById('c'+i).onclick=function(){
				//console.log(this)
				addq(this);
			};
		}
	}
		
}



function setmod(elem){
	mod=elem.value;
	if(!songrun){
		if(mod==2)
			getTime();
		if(mod==3)
			rand_play();
	}
}

function play(elem){
	console.log(elem.id);
	console.log(elem.id.substring(1,elem.id.length));
	var x=elem.id.substring(1,elem.id.length);
	var z=songs[x][0];
	document.getElementById("sname").innerHTML=songs[x][4];
	document.getElementById("sel").src= z;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
	songrun=true;

}

var eqc=1;
var sqc=1;

function addq(elem){
	console.log(elem);
	var x=elem.id.substring(1,elem.id.length);
	if(!songrun){
		var z=songs[x][0];
		document.getElementById("sname").innerHTML=songs[x][4];
		document.getElementById("sel").src= z;
		document.getElementById("main_slider").load();
		document.getElementById("main_slider").play();
		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
		songrun=true;		
		return;
	}
	if(bool[x]==true)
		return;
	
	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=songs[x][4]+"<br>";
	//var text=document.createTextNode(sname[x][0]+"<br>");
	//l.appendChild(text);
	document.getElementById("queue").appendChild(l);
	eqc=eqc+1;
}
function addQ(elem){
	console.log(elem);
	var x=elem.substring(1,elem.length);
	if(!songrun){
		var z=songs[x][0];
		document.getElementById("sname").innerHTML=songs[x][4];
		document.getElementById("sel").src= z;
		document.getElementById("main_slider").load();
		document.getElementById("main_slider").play();
		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
		songrun=true;		
		return;
	}
	if(bool[x]==true)
		return;
	
	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=songs[x][4]+"<br>";
	//var text=document.createTextNode(sname[x][0]+"<br>");
	//l.appendChild(text);
	document.getElementById("queue").appendChild(l);
	eqc=eqc+1;
}

function nextsong(){
	if(sqc==eqc){
				alert("Queue is empty.");
				return;
		}
		var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			bool[xa]=false;
			document.getElementById("sname").innerHTML=sname[xa][0];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;

}

function next_in_Q(){
			songrun=false;
			if(sqc==eqc){
				alert("Queue is empty.");
				return;
			}
			var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			document.getElementById("sname").innerHTML=songs[xa][4];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;
			}

function rand_play(){
	var index=Math.random()*path.length;
	index=parseInt(index);
	var pa=songs[index][0];
	document.getElementById("sname").innerHTML=songs[index][4];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[index][3]+"')";
	songrun=true;

}

// function moody(val){
// 	var index=Math.random()*mood[val].length;
// 	index=parseInt(index);
// 	var pa=songs[mood[val][index]-1][0];
// 	document.getElementById("sname").innerHTML=sname[mood[val][index]-1][0];
// 	document.getElementById("sel").src= pa;
// 	document.getElementById("main_slider").load();
// 	document.getElementById("main_slider").play();
// 	document.getElementById("emoji").style.backgroundImage="url('"+songs[mood[val][index]-1][3]+"')";
// 	songrun=true;
// }

function moody(val){
	for(var i=0;i<13;i++){
		
		var song_mode= songs[i][3];
		song_mode=song_mode.substring(0,song_mode.length-4);
		
		if(song_mode === val){
			console.log(song_mode);
			addQ("c"+i);

		}
	}
}


async function getTime() {
	let value = await eel.getEmotion()();
	moody(value);
}