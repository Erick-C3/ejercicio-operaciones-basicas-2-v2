const olImagenes = document.querySelector("ol");

const IMG_1 = "https://i2.wp.com/www.senpai.com.mx/wp-content/uploads/2021/09/Ranking_-Los-5-mejores-juegos-de-Crash-Bandicoot.jpg";
const IMG_2 = "https://pbs.twimg.com/profile_images/1364070437639094272/guUYd44L_400x400.png";
const IMG_3 = "https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2023/04/Luigi-png.png";

let cantImg = 0;

function agregarImg(){
    switch (cantImg) {
        case 0:
            olImagenes.innerHTML += `
                <li>
                    <img src="${IMG_1}" alt="imagen 1">
                </li>
            `;
            cantImg++;
            break;
        case 1:
            olImagenes.innerHTML += `
                <li>
                    <img src="${IMG_2}" alt="imagen 1">
                </li>
            `;
            cantImg++;
            break;
        case 2:
            olImagenes.innerHTML += `
                <li>
                    <img src="${IMG_3}" alt="imagen 1">
                </li>
            `;
            cantImg++;
    }
    /* if (cantImg < 3) {
        olImagenes.innerHTML += `
            <li>
                <img src="${IMG_1}" alt="imagen 1">
            </li>
        `;
        cantImg++;
    } */
}

function sacarImg(){
    switch (cantImg) {
        case 3:
            olImagenes.innerHTML = `
                <li>
                    <img src="${IMG_1}" alt="imagen 1">
                </li>
                <li>
                    <img src="${IMG_2}" alt="imagen 1">
                </li>
            `;
            cantImg--;
            break;
        case 2:
            olImagenes.innerHTML = `
                <li>
                    <img src="${IMG_1}" alt="imagen 1">
                </li>
            `;
            cantImg--;
            break;
    
        case 1:
            olImagenes.innerHTML = `
                
            `;
            cantImg--;
    }
    /* olImagenes.innerHTML = `
                <li>
                    <img src="${IMG_1}" alt="imagen 1">
                </li>
                <li>
                    <img src="${IMG_2}" alt="imagen 1">
                </li>
            `; */
}