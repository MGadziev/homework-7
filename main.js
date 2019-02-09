(function () {

  function throughOnce(func, context) {
        var count = 2;
    return function() {
      if (count % 2 === 0)  {
          count++
        return func.apply(context, arguments);
      } else {count++};
    };
  }


  var logThroughOnce = throughOnce(function(text) {
    console.log(text);
  });

  logThroughOnce("Hello World!"); // "Hello World!"
  logThroughOnce("Hello World!"); //
  logThroughOnce("Hello World!"); // "Hello World!"
  logThroughOnce("Hello World!"); //
})();
