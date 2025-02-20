document.addEventListener("DOMContentLoaded", function () {
    let images = [
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
        "images/embroidery/image15.jpeg",
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
    