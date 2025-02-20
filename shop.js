document.addEventListener("DOMContentLoaded", function () {
    let images = [
        "images/crochet/image1.jpeg",
        "images/crochet/image2.jpeg",
        "images/crochet/image3.jpeg",
        "images/crochet/image4.jpeg",
        "images/crochet/image5.jpeg",
        "images/crochet/image6.jpeg",
        "images/crochet/image7.jpeg",
        "images/crochet/image8.jpeg",
        "images/crochet/image9.jpeg",
        "images/crochet/image10.jpeg",
        "images/crochet/image11.jpeg",
        "images/crochet/image12.jpeg",
        "images/crochet/image13.jpeg",
        "images/crochet/image14.jpeg",
        "images/crochet/image15.jpeg",
        "images/embroidery/image1.jpeg",
        "images/embroidery/image2.jpeg",
        "images/embroidery/image3.jpeg",
        "images/embroidery/image4.jpeg",
        "images/embroidery/image5.jpeg",
        "images/embroidery/image6.jpeg",
        "images/embroidery/image7.jpeg",
        "images/embroidery/image8.jpeg",
        "images/embroidery/image9.jpeg",
        "images/embroidery/image10.jpeg",
        "images/embroidery/image11.jpeg",
        "images/embroidery/image12.jpeg",
        "images/embroidery/image13.jpeg",
        "images/embroidery/image14.jpeg",
        "images/embroidery/image15.jpeg"
    ];

    images.sort(() => Math.random() - 0.5);
    let container = document.getElementById("image-container");

    if (container) {
        images.forEach(src => {
            let imgContainer = document.createElement("div");
            imgContainer.classList.add("item");

            let img = document.createElement("img");
            img.src = src;
            img.classList.add("product-image");

            let button = document.createElement("button");
            button.textContent = "🛒 Add to Cart";
            button.classList.add("cart-button");
            button.addEventListener("click", function() {
                alert("Added to cart! 🩷");
            });

            imgContainer.appendChild(img);
            imgContainer.appendChild(button);
            container.appendChild(imgContainer);
        });
    }
});
