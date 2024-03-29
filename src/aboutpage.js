function aboutpage(){
    const div = document.createElement("div");
    const content = document.querySelector("#content");
    
    const h1 = document.createElement("h1");
    h1.textContent = "About"

    const img = document.createElement("img");
    img.setAttribute("src", "../about.jpg");
    img.setAttribute("alt", "about");
    img.style.width = "50vh";
    img.style.height = "auto";
    
    const p = document.createElement("p");
    p.textContent = `Welcome to FlavorFusion, where culinary creativity knows no bounds! At FlavorFusion, we're not just a restaurant; we're a vibrant celebration of flavors, cultures, and the joy of good food.

    Nestled in the heart of the city, FlavorFusion is a culinary haven where traditional meets unconventional, and every dish tells a story. Our talented team of chefs combines global inspiration with a touch of whimsy, crafting mouthwatering creations that will take your taste buds on an unforgettable journey.
    
    But FlavorFusion is more than just a place to eat; it's a community hub where friends, families, and food lovers come together to share laughter, stories, and, of course, fantastic food. Whether you're joining us for a casual meal with friends or a special celebration, you'll find warmth, hospitality, and a dash of magic in every experience.
    
    Our commitment to excellence extends beyond the kitchen. We source the freshest, highest quality ingredients, supporting local producers and sustainable practices whenever possible. We believe that great food should be accessible to all, which is why we strive to offer a diverse menu that caters to every palate and dietary preference.
    
    At FlavorFusion, we invite you to savor the moment, indulge your senses, and embark on a culinary adventure unlike any other. Join us and discover why we're not just a restaurant – we're a destination for food lovers everywhere.
    `;

    div.appendChild(h1);
    div.appendChild(img);
    div.appendChild(p);

    content.appendChild(div);
}

export {aboutpage};