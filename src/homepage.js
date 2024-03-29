import imageLink from '../restaurant_image_homepage.png';

function homepage(){
    const div = document.createElement("div");
    const content = document.querySelector("#content");
    
    const h1 = document.createElement("h1");
    h1.textContent = "Home"

    const img = document.createElement("img");
    img.setAttribute("src", imageLink);
    img.setAttribute("alt", "cool restaurant image");
    img.style.width = "50vh";
    img.style.height = "auto";
    
    const p = document.createElement("p");
    p.textContent = "Introducing 'FlavorFusion': Where Culinary Creativity Meets Playful Palates! Nestled in the heart of the city, FlavorFusion is not your average dining experience. We've tossed aside the rulebook to bring you a whimsical journey through the world of food. Our culinary wizards blend flavors from around the globe with a touch of irreverence and a dash of magic, creating dishes that will tantalize your taste buds and leave you craving more. Step into our vibrant and eclectic space, where every corner tells a story and every bite is an adventure. Whether you're a fearless foodie or a curious connoisseur, our menu has something to satisfy every craving. From sizzling street food to haute cuisine with a twist, we're here to delight and surprise you at every turn. But FlavorFusion is more than just a restaurant—it's a celebration of life, love, and the joy of good food. Join us for a night of laughter, libations, and culinary escapades, and discover why we're not just a place to eat, but a destination to remember. Come see why FlavorFusion is where the flavor revolution begins. Your taste buds will thank you.";

    div.appendChild(h1);
    div.appendChild(img);
    div.appendChild(p);

    content.appendChild(div);
}

export {homepage};