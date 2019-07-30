var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Article";

var params = {
    TableName: table,
    Key:{
      author: 'author',
      hyperlink: 'hyperlink',
      publication_date: 'publication_date',
      title: 'title',
      discription: 'description',
      image: 'image'
    }
};

console.log("Scanning Movies table.");
docClient.scan(params, onScan);

function onScan(err, data) {
    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        // print all the movies
        console.log("Scan succeeded.");
        data.Items.forEach(function(movie) {
           console.log(
                movie.year + ": ",
                movie.title, "- rating:", movie.info.rating);
        });

        // continue scanning if we have more movies, because
        // scan can retrieve a maximum of 1MB of data
        if (typeof data.LastEvaluatedKey != "undefined") {
            console.log("Scanning for more...");
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            docClient.scan(params, onScan);
        }
    }

describe('Retrieve data', () => {
  const article = {
    author: 'author',
    hyperlink: 'hyperlink',
    publication_date: 'publication_date',
    title: 'title',
    discription: 'description',
    image: 'image'
  };

  it('get an item', done => {
    databaseManager.getItem('article').then(result => {
      assert.equal(article.author, result.author);
      assert.equal(article.hyperlink, result.hyperlink);
      assert.equal(article.publication_date, result.publication_date);
      assert.equal(article.title, result.title);
      assert.equal(article.discription, result.discription)
      assert.equal(article.image, result.discription)
      done();
    });
  });
});
