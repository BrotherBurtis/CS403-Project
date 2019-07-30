$(() => {

//articles
$.ajax({
      success: data => {
         for (let i = 0; i < 10; i++) {

            if (i === 0) {
               $(".CNN-articles").append(
                  $("<div>")
                     .data("article-data", data.articles[i])
                     .css("width", "100%")
                     .css("height", "100%")
                     .addClass("CNN-feature")
                     .addClass("article")
                     .append(
                        $("<img>")
                           .attr("src", data.articles[i].urlToImage)
                           .css("width", "100%")
                           .css("height", "75%")
                           .css("border-radius", "10px")
                     )
                     .append(
                        $("<div>")
                           .css("width", "100%")
                           .css("height", "25%")
                           .append(
                              $("<h5>")
                                 .text("source: " + data.articles[i].source.name)
                                 .css("padding-bottom", "5px")
                           )
                           .append(
                              $("<h4>")
                                 .text(data.articles[i].title)
                                 .css("text-align", "center")
                                 .css("position", "relative")
                           )
                           .append($("<p>").text(data.articles[i].description))
                     )
               );
            } else {
               $(".CNN-articles").append(
                  $("<div>")
                     .data("article-data", data.articles[i])
                     .css("width", "100%")
                     .addClass("article")
                     .append(
                        $("<img>")
                           .attr("src", data.articles[i].urlToImage)
                           .css("width", "100%")
                           .css("height", "50%")
                           .css("border-radius", "10px")
                     )
                     .append(
                        $("<div>")
                           .css("width", "100%")
                           .css("height", "50%")
                           .append(
                              $("<h5>").text("SOURCE: " + data.articles[i].source.name)
                           )
                           .append(
                              $("<h4>")
                                 .text(data.articles[i].title)
                                 .css("top", "15%")
                                 .css("text-align", "center")
                                 .css("position", "relative")
                           )
                     )
               );
            }
          }

            const readArticle = event => {
                        event.preventDefault();
                        // console.log("Article Clicked!");

                        // console.log($(event.currentTarget).data("article-data"));

                        const articleImg = $(event.currentTarget).data("article-data").urlToImage;
                        const articleSrc = $(event.currentTarget).data("article-data").source.name;
                        const articleTitle = $(event.currentTarget).data("article-data").title;
                        const articleContent = $(event.currentTarget).data("article-data").content;
                        const articleLink = $(event.currentTarget).data("article-data").url;
                        // Img
                        $(".content-img").attr("src", articleImg);

                        // source
                        $(".content-src").text(articleSrc);

                        // title
                        $(".content-title").text(articleTitle);

                        // article
                        $(".content-article").text(articleContent);

                        // link

                        $(".content-link")
                           .attr("href", articleLink)
                           .attr("target", "_blank");

                        fakeNews.indexOf(articleSrc) > -1 ? terrorize() : null;

                        showModal();
                     };
                     $(".article").on("click", readArticle);
                  },
                  error: e => {
                     console.log("Error: " + e);
                  }
               });
}
