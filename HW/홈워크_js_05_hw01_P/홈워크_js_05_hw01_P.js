axios
  .get("https://api.example.com/data")
  .then(function (response) {
    console.log(response);
  })
  // 어떤 에러인지 확인
  .catch(function (err) {
    console.log(err);
  });
