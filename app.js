// upload article data from the database
AWS.config.update({
  region: "us-east-1",
  accessKeyId: "KeyId",
  secretAccessKey: "SecretAccessKey"
});

 document.write(region)

var docClient = new AWS.DynamoDB.DocumentClient();

exports.getItem = function(event, context, callback){
  var parms = {
    TableName : process.env.CNNTable
  };
  docClient.scan(params, function(err, data){
    if(err){
      callback(err, null);
    }else{
      callback(null, data.Items);
    }
  })
}

response = dynamoTable.get_item(
  Key = {
    'CNN':'9'
  }
)
Item = response['Item']['author']
print(Item)

function onScan(err, data) {
    if (err) {
        document.getElementById('textarea').innerHTML += "Unable to scan the table: " + "\n" + JSON.stringify(err, undefined, 2);
    } else {

        document.getElementById('textarea').innerHTML += "Scan succeeded: " + "\n";
        data.Items.forEach(function(Item) {
            document.getElementById('textarea').innerHTML += Item.title + ": " + Item.discription + " - author: " + Item.author + "\n";
        });


        document.getElementById('textarea').innerHTML += "Scanning for more..." + "\n";
        params.ExclusiveStartKey = data.LastEvaluatedKey;
        docClient.scan(params, onScan);
    }
}


// posting the articles onto the database

$(() => {

//articles
$.ajax({
      success: data => {
         for (let i = 0; i < 13; i++) {

            if (i === 0) {
               $(".CNN-articles").append(
                  $("<div>")
                     .CNNTable("article-data", Item[i])
                     .css("width", "100%")
                     .css("height", "100%")
                     .addClass("CNN-feature")
                     .addClass("article")
                     .append(
                        $("<img>")
                           .attr("src", Item[i].image.urlToImage)
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
                                 .text("source: CNN")
                                 .css("padding-bottom", "5px")
                           )
                           .append(
                              $("<h4>")
                                 .text(Item[i].title)
                                 .css("text-align", "center")
                                 .css("position", "relative")
                           )
                           .append($("<p>").text(Item[i].description))
                     )
               );
            } else {
               $(".CNN-articles").append(
                  $("<div>")
                     .Item("article-data", Item[i])
                     .css("width", "100%")
                     .addClass("article")
                     .append(
                        $("<img>")
                           .attr("src", Item[i].image.urlToImage)
                           .css("width", "100%")
                           .css("height", "50%")
                           .css("border-radius", "10px")
                     )
                     .append(
                        $("<div>")
                           .css("width", "100%")
                           .css("height", "50%")
                           .append(
                              $("<h5>").text("SOURCE: CNN")
                           )
                           .append(
                              $("<h4>")
                                 .text(Item[i].title)
                                 .css("top", "15%")
                                 .css("text-align", "center")
                                 .css("position", "relative")
                           )
                     )S
               );
            }
          }

            const readArticle = event => {
                        event.preventDefault();


                        const articleImg = $(event.currentTarget).data("article-data").image.urlToImage;
                        const articleSrc = $(event.currentTarget).data("article-data").author;
                        const articleTitle = $(event.currentTarget).data("article-data").title;
                        const articleContent = $(event.currentTarget).data("article-data").discription;
                        const articleLink = $(event.currentTarget).data("article-data").hyperlink;
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
