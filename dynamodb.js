var AWS = require("aws-sdk");

dynamo = boto3.resource('dynamodb',region_name='us-east-1')
dynamoTable = dynamo.Table('CNNTable')

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "CNNTable";

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

console.log("Scanning  table.");
docClient.scan(params, onScan);

function onScan(err, data) {
    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        // store all the articles
        console.log("Scan succeeded.");
        data.Items.forEach(function(article) {


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
