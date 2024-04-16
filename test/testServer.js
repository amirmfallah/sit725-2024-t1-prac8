var { expect } = require("chai");
var request = require("request");

describe("test GET api", function () {
  var url = "http://localhost:3000/api/cats";
  it("returns statusCode of 200", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});

describe("test POST api", function () {
  var url = "http://localhost:3000/api/cats";
  const body = {
    title: "Cat x",
    path: "https://us.123rf.com/450wm/elenasoldatova/elenasoldatova1604/elenasoldatova160400010/57162639-three-kittens-animal-outside-summer-nature-pet-little.jpg",
    desciption: "Three Cats Stock Photos and Images - 123RF",
  };

  it("post cat to DB", function (done) {
    request.post({ url, body, json: true }, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});

describe("test DELETE api", function () {
  var url = "http://localhost:3000/api/cats/661e000b2fa33b2f5a4406ef";

  it("delete a cat", function (done) {
    request.delete({ url }, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
