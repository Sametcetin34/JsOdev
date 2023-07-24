//! diferenceMultipleAdded fonksiyonu

function diferenceMultipleAdded(deger){
    let deger1=String(deger);
   
    let x=Number(deger1.charAt(0));
    let y=Number(deger1.charAt(1));

   let yenideger=(x*y)-(x+y);
    console.log(yenideger);

    
}

diferenceMultipleAdded(72);

//!FindChildren fonksiyonu

function FindChildren(value){
    var x=1;
    var y=1;
    var birinciSayi;
    var ikinciSayi;
    var dizi=[];
    var dizi2=[];
    dizi.push(1);
    while(x*x<value){
        x=x+1;
        dizi.push(x);
    }
    dizi.pop();
    birinciSayi=dizi[dizi.length-1];
    console.log("Birinci Sayı:"+ birinciSayi);
    var yeniSayi=value-birinciSayi*birinciSayi;
    dizi2.push(1);
    while(y*y<yeniSayi){
        y=y+1;
        dizi2.push(y);
    }
    dizi2.pop();
    ikinciSayi=dizi2[dizi2.length-1];
    console.log("İkinci Sayı:"+ikinciSayi);
console.log((birinciSayi*birinciSayi)+ (ikinciSayi*ikinciSayi));
}

FindChildren(72);

//! 4 basamaklı sayı
let randomSayi2;
let randomSayi=Math.floor(Math.random()*10001);

if (randomSayi>=1000){

    randomSayi2=randomSayi
}
else{
    randomSayi2=randomSayi*10
}
let guess=prompt("Lütfen 4 basamaklı sayı giriniz:");
if(guess<=9999 && guess>=1000){

console.log("1000 ile 9999 arasında sayı üretildi:" +randomSayi2);
console.log("Tahmin edilen 4 basamaklı sayı:" +guess);



let basamak1=Number(guess.charAt(0));
let basamak2=Number(guess.charAt(1));
let basamak3=Number(guess.charAt(2));
let basamak4=Number(guess.charAt(3));

randomSayi2=String(randomSayi2);
let a=Number(randomSayi2.charAt(0));
let b=Number(randomSayi2.charAt(1));
let c=Number(randomSayi2.charAt(2));
let d=Number(randomSayi2.charAt(3));

for(let i=1;i<=4;i++){

if(i==1){
    if(a==basamak1){
        console.log("1.sıranın hem değerini hem yerini buldunuz:"+a);
    }
    else if(a==basamak2 && a!=basamak1){
        console.log("1.sıranın değerini buldunuz:");
    }
    else if(a==basamak3 && a!=basamak1){
        console.log("1.sıranın değerini buldunuz:");
    }
    else if(a==basamak4 && a!=basamak1){
        console.log("1.sıranın değerini buldunuz:");
    }
    else{
        console.log("1.sıra için değer bulunamadı");
    }

}
if(i==2){
    if(b==basamak1 && b!=basamak2){
        console.log("2.sıranın değerini buldunuz:");
    }
    else if(b==basamak2){
        console.log("2.sıranın hem değerini hem yerini buldunuz:"+b);
    }
    else if(b==basamak3 && b!=basamak2){
        console.log("2.sıranın değerini buldunuz:");
    }
    else if(b==basamak4 && b!=basamak2){
        console.log("2.sıranın değerini buldunuz:");
    }
    else{
        console.log("2.sıra için değer bulunamadı");
    }

}

if(i==3){
    if(c==basamak1 && c!=basamak3){
        console.log("3.sıranın değerini buldunuz:");
    }
    else if(c==basamak2 && c!=basamak3){
        console.log("3.sıranın değerini buldunuz:");
    }
    else if(c==basamak3){
        console.log("3.sıranın hem değerini hem yerini buldunuz:"+c);
    }
    else if(c==basamak4 && c!=basamak3){
        console.log("3.sıranın değerini buldunuz:");
    }
    else{
        console.log("3.sıra için değer bulunamadı");
    }

}

if(i==4){
    if(d==basamak1 && d!=basamak4){
        console.log("4.sıranın değerini buldunuz:");
    }
    else if(d==basamak2 && d!=basamak4){
        console.log("4.sıranın değerini buldunuz:");
    }
    else if(d==basamak3 && d!=basamak4){
        console.log("4.sıranın değerini buldunuz:");
    }
    else if(d==basamak4){
        console.log("4.sıranın hem değerini hem yerini buldunuz:"+d);
    }
    else{
        console.log("4.sıra için değer bulunamadı");
    }

}
}

}
else {
    alert("Sayıyı hatalı girdiniz,tekrar 4 basamaklı sayı giriniz!")
    
}

