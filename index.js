var express = require('express')
var app = express();
app.use(express.static('static'));
app.get('/staticfile/:verificationToken/:type/:file',function (req,res) {
	if(req.params.verificationToken == "pseudoDemo"){
		console.log(req.headers.host == 'localhost' || req.headers.host == 'demos-blogkraken.blogspot.com')
		if(req.params.type == 'img'){
		res.sendFile('static/images@blogkraken/'+req.params.file,{ root: __dirname });
	}
	else if(req.params.type == 'file'){
res.sendFile('static/staticprocessors@blogkraken/'+req.params.file,{ root: __dirname });
	
	}
	}
	else{
		res.send('hello')
	}
	
	
})
var server = app.listen(80,function () {
   var host = server.address().address
   var port = server.address().port
})