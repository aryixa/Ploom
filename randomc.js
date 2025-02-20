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
    ];
    images.sort(() => Math.random() - 0.5);

    let container = document.getElementById("image-container");

    if (container) {
        images.forEach(src => {
            
            let img = document.createElement("img");
            img.src = src;

            let likeButton = document.createElement("button");
            likeButton.classList.add("like-button");
            likeButton.innerHTML = "🤍"; 
           
            img.addEventListener("click", function () {
                img.classList.toggle("zoomed");
            });

            likeButton.addEventListener("click", function () {
                likeButton.classList.toggle("liked");
                if (likeButton.classList.contains("liked")) {
                    likeButton.innerHTML = "💖"; 
                } else {
                    likeButton.innerHTML = "❤️"; 
                }
            });
            let imageWrapper = document.createElement("div");
            imageWrapper.classList.add("image-wrapper");

            imageWrapper.appendChild(img);
            imageWrapper.appendChild(likeButton);

            container.appendChild(imageWrapper);
        });
    }
});
