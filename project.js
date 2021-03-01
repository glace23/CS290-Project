var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var path = require('path')

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 30244);

// post
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Main page
app.get('/css', function(req,res){
      var options = { 
        root: path.join(__dirname + "/public/css") 
    }; 
  res.sendFile("style.css", options);
});

app.get('/naviscript', function(req, res){
    var options = { 
        root: path.join(__dirname + "/public/js") 
    }; 
    res.sendFile("navibar.js", options);
});

// HOME Page
app.get('/homescript', function(req, res){
    var options = { 
        root: path.join(__dirname + "/public/js") 
    }; 
    res.sendFile("slide.js", options);
});

app.get('/images/1',  function(req, res){
  var options = { 
        root: path.join(__dirname + "/public/images") 
    }; 
  res.sendFile("1.jpg", options);
});

app.get('/images/2',  function(req, res){
  var options = { 
        root: path.join(__dirname + "/public/images") 
    }; 
  res.sendFile("2.jpg", options);
});

app.get('/images/3',  function(req, res){
  var options = { 
        root: path.join(__dirname + "/public/images") 
    }; 
  res.sendFile("3.jpg", options);
});

app.get('/images/5',  function(req, res){
  var options = { 
        root: path.join(__dirname + "/public/images") 
    }; 
  res.sendFile("5.jpg", options);
});

app.get('/images/6',  function(req, res){
  var options = { 
        root: path.join(__dirname + "/public/images") 
    }; 
  res.sendFile("6.jpg", options);
});

app.get('/images/7',  function(req, res){
  var options = { 
        root: path.join(__dirname + "/public/images") 
    }; 
  res.sendFile("7.jpg", options);
});

app.get('/',function(req,res){
  res.render('home')
  // const fs = require("fs"); 
  
  // let directory_name = __dirname + "/images"; 
  
  // var context = {}
  // var fileList = []
  // // Function to get current filenames 
  // // in directory 
  // let filenames = fs.readdirSync(directory_name); 
  
  // for (var file in filenames){
  //   fileList.push({'file':filenames[file]})
  //   var link = '/images/' + filenames[file]
    
  //   app.get(link, function(req, res){
  //     var options = { 
  //           root: path.join(__dirname + "/images") 
  //       }; 
  //     res.sendFile(filenames[file], options);
  //   });

  // }

  // context.fileList = fileList

  // res.render('home', context) //We can omit the .handlebars extension as we do below
});


//About me page
app.get('/downloadresume', function(req, res){
    var options = { 
        root: path.join(__dirname + "/public/files") 
    }; 
    res.sendFile("Scott.Li_Resume.pdf", options);
});

app.get('/images/4',  function(req, res){
  var options = { 
        root: path.join(__dirname + "/public/images") 
    }; 
  res.sendFile("4.jpg", options);
});

//contact
app.get('/showscript', function(req, res){
    var options = { 
        root: path.join(__dirname + "/public/js") 
    }; 
    res.sendFile("show.js", options);
});

app.get('/aboutme',function(req,res){
  res.render('aboutme')
});


//contact
app.get('/commentscript', function(req, res){
    var options = { 
        root: path.join(__dirname + "/public/js") 
    }; 
    res.sendFile("comment.js", options);
});


var commentData = []

app.get('/contact',function(req,res){
    // copy queryData list
  var getParam = commentData;
  // add data to getParam list
  for (var name in req.query){
    var username
    if (name == "comment"){
      getParam.push({'name':username, 'value':req.query[name]})
    }
    else if(name == "username"){
      username = req.query[name]
      
    }
  }
  // render get-page dataList with getParam
  var context = {};
  context.dataList = getParam;
  res.render('contact', context);

  // copy getParam to queryData
  commentData = getParam
});


//get query request
app.get('/get-page',function(req,res){
	// copy queryData list
	var getParam = commentData;
  // render get-page dataList with getParam
  var context = {};
  context.dataList = getParam;
  res.render('get-page', context);
  // copy getParam to queryData
});


app.get('/password',function(req,res){
  res.render('password')
});


app.get('/blogscript', function(req, res){
    var options = { 
        root: path.join(__dirname + "/public/js") 
    }; 
    res.sendFile("blog.js", options);
});

var AblogData = []

app.get('/writeBlog',function(req,res){
  var blogData = AblogData;
  //add data to postBody list
  for (var name in req.query){
    var title
    var description
    if (name == "title"){
      title = req.query[name]
    }
    else if (name == "description"){
      description = req.query[name]
    }
    else{
      blogData.push({'title':title,'value':{'description': description, 'blog':req.query[name]}})
    }
  }
  // dataList:postParam, bodyList:postBody
  var context = {};
  context.blogList = blogData;
  res.render('writeBlog')

  // copy data back
  AblogData = blogData

});


app.get('/blog',function(req,res){
  var context = {};
  context.blogList = AblogData;
  res.render('blog', context)
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});