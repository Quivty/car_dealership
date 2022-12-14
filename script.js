const hyundai={
    marka:'Hyundai',
    model:'Santa Fe',
    cena: 162000,
    opis: 'Auto jest w najbogatszej wersji wyposażenia dostępnej w Polsce. Poza wszystkimi dodatkami auto jest wyposażone w 3 rząd siedzeń pozwalający komfortowo podróżować szóstej i siódmej osobie, otwierany dach panoramiczny oraz hak np. na wygodny bagażnik rowerowy. Nadwozie auta zostało pokryte powłoką ceramiczna, która zabezpiecza warstwę lakieru przed drobnymi rysami i innymi uszkodzeniami.',
    img: '<img src="img/hyundai.png" alt="hyundai santa fe">',
}

const audi={
    marka:'Audi',
    model:'A4',
    cena: 30000,
    opis: "Skrzynia biegów: manualna (6 biegów)Auto z Polski (nie sprowadzane)Jeden właściciel od sierpnia 2013 r.Auto garażowaneLakier szary metalicObręcze kół ze stopu metali lekkich (16 opony zimowe Dunlop WinterSport)Śruby zabezpieczające koła przed kradzieżąLusterka zewnętrzne asferyczne podgrzewaneElektryczne 4 szybyReflektory bixenonowe (światła do jazdy dziennej- LED)Czujnik zmierzchowy świateł",
    img: '<img src="img/audi.png" alt="hyundai santa fe">',
}

const mercedes={
    marka:'Mercedes-Benz',
    model:'Klasa V',
    cena: 324900,
    opis: 'Pojazd jest wyposażony w sprawdzoną i dynamiczną jednostkę diesla 190 KM z automatyczną skrzynią biegów 7G. Samochód kupiliśmy w salonie Mercedes Benz Warszawa pod indywidualne zamówienie. Auto jest 100% bezwypadkowe, nigdy nic nie malowane. W 2020r wymieniłem tylko szybę czołową ze względu pęknięcie od kamienia. Pojazd regularnie serwisowany w oparciu o oleje i filtry. W zeszłym roku kupiłem nowe opony Lato i Zima. ',
    img: '<img src="img/mercedes.png" alt="hyundai santa fe">',
}

const bmw={
    marka:'BMW',
    model:'X5',
    cena: 139000,
    opis: 'Samochód krajowy , rok produkcji to 2013r. a pierwsza rejestracja luty 2014, trzeci właściciel (drugi i trzeci właściciel są małżeństwem , auto użytkowane w rodzinie), 2 klucze, auto bezwypadowe. Homologacja ciężarowa, 5 miejsc. Sprzedająca jest osobą prywatną. Kompleksowa dokumentacja serwisowa do wglądu. Samochód w ciągłym użytkowaniu w rodzinie. W dniu 26 kwietnia przebył okresowe badanie techniczne.',
    img: '<img src="img/bmw.png" alt="hyundai santa fe">',
}

const toyota={
    marka:'Toyota',
    model:'RAV4',
    cena: 88000,
    opis: 'Auto kupione jako nowe pod koniec 2015 roku - zarejetrowane w tym samym roku. Auto posiada jednego właściciela - jednego użytkownika. Przez cały okres o stan techniczny dbano w autoryzowanym serwisie Toyota Jaworski Bydgoszcz. Auto użytkowane na emeryturze stąd nie było wykorzystywane do pracy. Garażowane; Służyło na niedzielne przejazdy do kościoła, na dojazdy do rodziny w różnych częściach Polski, na wyjazdy wakacyjne i do załatwiania wielu spraw w mieście.',
    img: '<img src="img/toyota.png" alt="hyundai santa fe">',
}

const peugot={
    marka:'peugot',
    model:'308',
    cena: 61500,
    opis: 'AUTO ŚWIEŻO SPROWADZONE ZAREJESTROWANE I UBEZPIECZONE W POLSCE bogata wersja NAWIGACJA KLIMATRONIC KAMERA COFANIA alu felgi dwa klucze STAN WZOROWY możliwa zamiana',
    img: '<img src="img/peugot.png" alt="hyundai santa fe">',
}


const auta=document.querySelector("select")
auta.addEventListener("change",wypisywanie)

function wypisywanie(){
    const cena=document.querySelector(".cena")
    const nazwa=document.querySelector(".nazwa")
    const opis=document.querySelector(".opis")
    const image=document.querySelector(".image")

    if(auta.value==0){
        nazwa.innerHTML='Model:<br>'+hyundai.marka+'<br>Model:<br>'+hyundai.model;
        cena.innerHTML="Cena:<br>"+hyundai.cena+" PLN";
        opis.innerHTML="Opis:<br>"+hyundai.opis;
        image.innerHTML=hyundai.img;
    }else if(auta.value==1){
        nazwa.innerHTML='Marka:<br>'+audi.marka+'<br>Model:<br>'+audi.model;
        cena.innerHTML="Cena:<br>"+audi.cena+" PLN";
        opis.innerHTML="Opis:<br>"+audi.opis;
        image.innerHTML=audi.img;
    }else if(auta.value==2){
        nazwa.innerHTML='Marka:<br>'+mercedes.marka+'<br>Model:<br>'+mercedes.model;
        cena.innerHTML="Cena:<br>"+mercedes.cena+" PLN";
        opis.innerHTML="Opis:<br>"+mercedes.opis;
        image.innerHTML=mercedes.img;
    }else if(auta.value==3){
        nazwa.innerHTML='Marka:<br>'+bmw.marka+'<br>Model:<br>'+bmw.model;
        cena.innerHTML="Cena:<br>"+bmw.cena+" PLN";
        opis.innerHTML="Opis:<br>"+bmw.opis;
        image.innerHTML=bmw.img;
    }else if(auta.value==4){
        nazwa.innerHTML='Marka:<br>'+toyota.marka+'<br>Model:<br>'+toyota.model;
        cena.innerHTML="Cena:<br>"+toyota.cena+" PLN";
        opis.innerHTML="Opis:<br>"+toyota.opis;
        image.innerHTML=toyota.img;
    }else if(auta.value==5){
        nazwa.innerHTML='Marka:<br>'+peugot.marka+'<br>Model:<br>'+peugot.model;
        cena.innerHTML="Cena:<br>"+peugot.cena+" PLN";
        opis.innerHTML="Opis:<br>"+peugot.opis;
        image.innerHTML=peugot.img;
    }
}

let koszprzedmioty= []
let koszcena=0

const dodajkoszyk=document.querySelector(".dodajkoszyk")
dodajkoszyk.addEventListener("click",koszyk)

function addtobasket(itemprice){
    let suma=0   
    koszprzedmioty.push(parseFloat(itemprice))
    console.log(koszprzedmioty)
    for(x=1;x<=koszprzedmioty.length;x++){
        suma+=koszprzedmioty[x-1]
    }
    return suma
}

function koszyk(){
    console.log(auta.value)
    if(auta.value==0){
        koszcena=addtobasket(hyundai.cena)
    }
    if(auta.value==1){
        console.log(audi.cena)
        koszcena=addtobasket(audi.cena)
    }
    if(auta.value==2){
        koszcena=addtobasket(mercedes.cena)
    }
    if(auta.value==3){
        koszcena=addtobasket(bmw.cena)
    }
    if(auta.value==4){
        koszcena+=addtobasket(toyota.cena)
    }
    if(auta.value==5){
        koszcena+=addtobasket(peugot.cena)
    }
    const koszykwpisz = document.querySelector(".koszykwpisz")
    koszykwpisz.innerHTML=koszcena+" PLN"
}