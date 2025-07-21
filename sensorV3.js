
//import the knitout writer code and instantiate it as an object
const knitout = require('knitout');
k = new knitout.Writer({carriers:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']});

// add some headers relevant to this job
k.addHeader('Machine','SWGXYZ');
k.addHeader('Gauge','15');
const Carrier3 = '5';
const Carrier1 = '1';
const Carrier2 = '2';

k.inhook(Carrier1);
for(var i=0;i<=50;i +=2){
    k.tuck("+","f"+i,Carrier1);
}

k.releasehook(Carrier1);

for(var i=50;i>=0;i--){
    k.knit("-","f"+i,Carrier1);
}

for(var i=0;i<=50;i ++){
    k.knit("+","f"+i,Carrier1);
}


k.inhook(Carrier2);



k.knit("+","f3",Carrier2);
k.knit("+","f5",Carrier2);
k.knit("+","f7",Carrier2);
k.knit("+","f9",Carrier2);

k.releasehook(Carrier2);

k.inhook(Carrier3);

k.knit("+","f23",Carrier3);
k.knit("+","f25",Carrier3);
k.knit("+","f27",Carrier3);
k.knit("+","f29",Carrier3);


k.releasehook(Carrier3);

for(var h=0;h<=50;h++){

    k.xfer("f9","b9");
    k.rack (-1);
    k.xfer("b9","f8");
    k.rack (0);
    k.knit("+","f9",Carrier2);
for(var i=50;i>=0;i--){
        k.knit("-","f"+i,Carrier1);
    }
for(var i=0;i<=50;i++){
        k.knit("+","f"+i,Carrier1);
    }
    
    k.xfer("f29","b29");
    k.rack (-1);
    k.xfer("b29","f28");
    k.rack (0);
    k.knit("+","f29",Carrier3);
    

}

    

k.outhook(Carrier1);
k.outhook(Carrier2);
k.outhook(Carrier3);



// write to output file
k.write('SensorV3.k');



