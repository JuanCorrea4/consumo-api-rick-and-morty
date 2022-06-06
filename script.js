var div_user = document.querySelector("#container");

var div_modal = document.querySelector("#modalWindow");

function exit() {
    document.getElementById("modalWindow").style.display = ("none");
}
function openTarget(id, name, gender, status, species, created) {
    document.getElementById("modalWindow").style.display = ("block");
    let modal = document.createElement('div');
    div_modal.innerHTML = ""
    modal.innerHTML =
        `<p>` + `ID #` + id + `</p>`
        + `<img src='https://rickandmortyapi.com/api/character/avatar/` + id + `.jpeg'>`
        + `<p> ` + `Name: <b>` + name + `</b>` + `</p>`
        + `<p>` + `Status: <b>` + status + `</b>` + `</p>`
        + `<p>` + `Gender: <b>` + gender + `<b>` + `</p>`
        + `<p>` + `Especie: <b>` + species + `<b>` + `</p>`
        + `<p>` + `Fecha de creacion: <b>` + created + `<b>` + `</p>`
        + `<input id="buttonExit" type="button" value="Exit" onclick="exit()">`;
    div_modal.appendChild(modal)
};

fetch(`https://rickandmortyapi.com/api/character`)
    .then((response) => response.json())
    .then((d) => {
        d.results.forEach((data) => {
            let target = document.createElement('div');
            target.innerHTML =
                `<section onclick="openTarget(${data.id}, '${data.name}', '${data.gender}', '${data.status}','${data.species}','${data.created}')">`
                + `<img src='https://rickandmortyapi.com/api/character/avatar/` + data.id + `.jpeg'>`
                + `<p> ` + `Name: <b>` + data.name + `</b>` + `</p>`
                + `</section>`;
            div_user.appendChild(target)

        });

    });
