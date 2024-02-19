const kurzy = {
    CZK: {
        EUR: 0.24,
        USD: 0.22,
    },
    EUR: {
        CZK: 4.17,
        USD: 1.08,
    },
    USD: {
        CZK: 4.55,
        EUR: 0.93,
    },
    PLN: {
        CZK: 5.86,
        PLN: 29.1,
    }
};
 
const prevodnik = document.getElementById("prevodnik");
const vysledek = document.getElementById("vysledek");
 
prevodnik.addEventListener("submit", (e) => {
    e.preventDefault();
 
    const zdroje = e.target.zdroje.value;
    const cil = e.target.cil.value;
    const castka = parseFloat(e.target.castka.value);
 
    if (isNaN(castka)) {
        vysledek.textContent = "Neplatná částka";
        return;
    }
 
    const prevodniKurz = kurzy[zdroje][cil];
    const vyslednaCastka = castka * prevodniKurz;
 
    vysledek.textContent = `${castka} ${zdroje} = ${vyslednaCastka.toFixed(2)} ${cil}`;
});