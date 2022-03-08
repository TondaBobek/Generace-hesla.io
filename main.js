const init = function() {

    Znaky = document.getElementById("znaky")
    tlacitko = document.getElementById("button");
    Cislo = document.getElementById("cisla");
    Velka = document.getElementById("velka");
    Specialni = document.getElementById("speacilani");
    form = document.getElementById("form")
    abc = "abcdefghijklmnopqrstuvwxyz"
    vABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    cisla = "0123456789"
    znak = "#&@{}Łł][Đđ|€/!ß$¤*><×~^()"
    vysledek =""
    heslo = document.getElementById("heslo");


    function Generace() {
        vysledek=""
        for(let index = 0; index < Znaky.value; index++) {
            poradi = Math.round(Math.random()*(3))
            pismeno = Math.round(Math.random()*(25))
            rcislo = Math.round(Math.random()*(9))

            

            switch(poradi){
                case 0:
                    vysledek = vysledek.concat(abc[pismeno])
                    break
                case 1:
                    if(Cislo.checked==true){
                        vysledek = vysledek.concat(cisla[rcislo])
                        break
                    }
                    if(Cislo.checked==false){
                        index = index-1
                        break
                    }
                case 2:
                    if(Velka.checked==true){
                        vysledek = vysledek.concat(vABC[pismeno])
                        break
                    }
                    if(Velka.checked==false){
                        index = index-1
                        break
                    }
                case 3:
                    if(Specialni.checked==true){
                        vysledek = vysledek.concat(znak[pismeno])
                        break
                    }
                    if(Specialni.checked==false){
                        index = index-1
                        break
                    }
            }
            
        }
        heslo.innerText = vysledek;
    }


    tlacitko.addEventListener("click", Generace)
    form.addEventListener("submit", e=>{
        e.preventDefault()
    })







































}
window.addEventListener("DOMContentLoaded", init)