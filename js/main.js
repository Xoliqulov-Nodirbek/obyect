// ----------------- Card__one ---------------

const captiva = {
    name: "Captiva",
    img: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Holden-Captiva.png",
    color: "black",
    year: 2018,
    iron: true,
    country: "AQSH" // --> property
}

const car1 = document.querySelector(".car__one");

const car1Img = document.createElement("img");
car1Img.className = "car__one-img";
car1Img.src = captiva.img;
car1.appendChild(car1Img);

const car1Name = document.createElement("h2");
car1Name.className = "car__one-name";
car1Name.textContent = captiva.name;
car1.appendChild(car1Name);

const car1Color = document.createElement("p");
car1Color.className = "car__one-color";
car1Color.textContent = captiva.color;
car1.append(car1Color);

const car1Year = document.createElement("p");
car1Year.className = "car__one-year";
car1Year.textContent = captiva.year;
car1.append(car1Year);

const car1Country = document.createElement("address");
car1Country.className = "car__one-address";
car1Country.textContent = captiva.country;
car1.append(car1Country);





// ------------------ Card__two ------------------

const trablezer = {
    name: "Trailblazer",
    img: "https://file.kelleybluebookimages.com/kbb/base/evox/CP/14398/2021-Chevrolet-Trailblazer-front_14398_032_1852x927_GAZ_cropped.png",
    color: "white",
    year: 2021,
    iron: true,
    country: "UK" // --> property
}

const car2 = document.querySelector(".car__two");

const car2Img = document.createElement("img");
car2Img.className = "car__two-img";
car2Img.src = trablezer.img;
car2.appendChild(car2Img);

const car2Name = document.createElement("h2");
car2Name.className = "car__two-name";
car2Name.textContent = trablezer.name;
car2.appendChild(car2Name);

const car2Color = document.createElement("p");
car2Color.className = "car__two-color";
car2Color.textContent = trablezer.color;
car2.append(car2Color);

const car2Year = document.createElement("p");
car2Year.className = "car__two-year";
car2Year.textContent = trablezer.year;
car2.append(car2Year);

const car2Country = document.createElement("address");
car2Country.className = "car__two-address";
car2Country.textContent = trablezer.country;
car2.append(car2Country);




// ------------------ Card__two ------------------

const malibu = {
    name: "Malibu",
    img: "https://file.kelleybluebookimages.com/kbb/base/evox/CP/14792/2022-Chevrolet-Malibu-front_14792_032_1824x751_GAZ_cropped.png",
    color: "white",
    year: 2021,
    iron: true,
    country: "AQSH" // --> property
}

const car3 = document.querySelector(".car__three");

const car3Img = document.createElement("img");
car3Img.className = "car__three-img";
car3Img.src = malibu.img;
car3.appendChild(car3Img);

const car3Name = document.createElement("h2");
car3Name.className = "car__three-name";
car3Name.textContent = malibu.name;
car3.appendChild(car3Name);

const car3Color = document.createElement("p");
car3Color.className = "car__three-color";
car3Color.textContent = malibu.color;
car3.append(car3Color);

const car3Year = document.createElement("p");
car3Year.className = "car__three-year";
car3Year.textContent = malibu.year;
car3.append(car3Year);

const car3Country = document.createElement("address");
car3Country.className = "car__three-address";
car3Country.textContent = malibu.country;
car3.append(car3Country);
