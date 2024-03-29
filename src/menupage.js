import imageLink from '../samosas.jpg';

function menupage(){
    const div = document.createElement("div");
    const content = document.querySelector("#content");
    
    const h1 = document.createElement("h1");
    h1.textContent = "Menu"

    const img = document.createElement("img");
    img.setAttribute("src", imageLink);
    img.setAttribute("alt", "samosas");
    img.style.width = "50vh";
    img.style.height = "auto";
    
    const p = document.createElement("p");
    p.textContent = `Appetizers:
    1. Cosmic Calamari: Flash-fried calamari rings served with a tangy starfruit dipping sauce.
    2. Tropical Tacos: Mini tacos stuffed with mango salsa, coconut-lime shrimp, and a hint of chili heat.
    3. Galactic Guacamole: Creamy avocado mash blended with cosmic spices and served with homemade plantain chips.
    
    Main Courses:
    1. Interstellar Noodles: Wok-tossed noodles with a fusion of Asian vegetables, marinated tofu, and a savory miso broth.
    2. Meteorite Burger: A juicy beef patty topped with melted brie, caramelized pineapple, and a drizzle of tangy teriyaki sauce, served with space fries.
    3. Celestial Curry: Aromatic coconut curry simmered with tender chicken, sweet potatoes, and exotic spices, served with fluffy jasmine rice.
    
    Desserts:
    1. Galaxy Gelato: Creamy gelato swirled with colorful galaxy sprinkles and a sprinkle of stardust.
    2. Nebula Cheesecake: Velvety cheesecake infused with swirls of raspberry coulis and topped with a celestial dusting of edible glitter.
    3. Milky Way Milkshake: A heavenly blend of vanilla ice cream, chocolate syrup, and whipped cream, garnished with a constellation of chocolate stars.
    
    Beverages:
    1. Orbiting Mocktails: Refreshing non-alcoholic concoctions like the Stardust Spritzer and the Comet Cooler.
    2. Cosmic Cocktails: Signature cocktails like the Supernova Sangria and the Solar Flare Margarita, crafted to dazzle your taste buds.
    3. Interstellar Brews: Local craft beers and intergalactic IPAs, perfect for washing down your celestial feast.
    
    Specialty Coffees:
    1. Meteor Mocha: Rich espresso blended with dark chocolate and topped with a fluffy cloud of whipped cream.
    2. Space Station Latte: Smooth steamed milk infused with vanilla syrup and a hint of interstellar cinnamon.
    3. Astronaut Affogato: A shot of piping hot espresso poured over creamy vanilla ice cream, creating a deliciously decadent treat.
    `;

    div.appendChild(h1);
    div.appendChild(img);
    div.appendChild(p);

    content.appendChild(div);
}

export {menupage};