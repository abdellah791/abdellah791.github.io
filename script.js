var names= Array();
names[0]="alice";
names[1]="jackobe";
names[2]="narin";
names[3]="jim";
names[4]="patrik";
names[5]="yanis";
names[6]="adin";
names[7]="pablo";
names[8]="larry";
names[9]="jack";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}