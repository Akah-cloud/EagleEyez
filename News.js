<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>News Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #fbfbfb;
            /* Set background image and make it cover the entire viewport */
            background-image: url('istockphoto-483099621-612x612.jpg'), url('istockphoto-1142812116-612x612.jpg'), url('istockphoto-1190646515-612x612.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            /* Ensure content is visible on top of the background */
            color: #000;
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.8); /* Add opacity to the background color */
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .article {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #ccc;
        }
        .article h2 {
            margin-top: 0;
        }
        .article p {
            margin-bottom: 10px;
        }
        .article a {
            color: #007bff;
            text-decoration: none;
        }
        .article a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <!-- Slideshow HTML -->
    <div class="slideshow-container">
        <div class="mySlides fade">
            <img src="image1.jpg" style="width:100%">
        </div>
        <div class="mySlides fade">
            <img src="image2.jpg" style="width:100%">
        </div>
        <div class="mySlides fade">
            <img src="image3.jpg" style="width:100%">
        </div>
    </div>

    <!-- JavaScript for Slideshow -->
    <script>
        var slideIndex = 0;
        carousel();

        function carousel() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = "block";
            setTimeout(carousel, 2000); // Change image every 2 seconds
        }
    </script>

    <div class="container">
        <h1>Latest News</h1>
        <div id="news-list"></div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=583d55745ac24f9c9f483f4d89136d48')
            .then(response => response.json())
            .then(data => {
                const newsList = document.getElementById('news-list');
                if (data.articles && data.articles.length > 0) {
                    data.articles.forEach(article => {
                        const articleDiv = document.createElement('div');
                        articleDiv.classList.add('article');
                        articleDiv.innerHTML = `
                            <h2>${article.title}</h2>
                            <p>${article.description}</p>
                            <a href="${article.url}" target="_blank">Read more</a>
                        `;
                        newsList.appendChild(articleDiv);
                    });
                } else {
                    // Handle case where articles are not available
                    newsList.innerHTML = '<p>No articles available</p>';
                }
            })
            .catch(error => console.error('Error fetching news:', error));
        });
    </script>
</body>
</html>
