var http = require('http')
var url = require('url')
var fs = require('fs')



http.createServer(function (req, res){

    //res.writeHead(200,{'Content-Type': 'text/plain; charset:utf-8'});
    var q2 = url.parse(req.url, true)
    //console.dir(q2)

    if(q2.pathname == "/"){
        var txt = "chego aqui 1"
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-Type':'text/html; charset:utf-8'})
            if(err)
            res.write(err)
            else
            res.write(data)
            
            res.end()
        })
    } else {
        var regexpr = new RegExp("\/[0-9]+")
        
        if(q2.pathname.match(regexpr)){
            numPag = req.url.substring(1,2)
            fileName = 'arqFiles/arq' + numPag +'.xml' // arqFiles/arq1.xml
            fs.readFile(fileName, function(err, data){
                res.writeHead(200, {'Content-Type':'text/xml; charset:utf-8'})
                if(err)
                    res.write('error')
                else
                    res.write(data)
                
                res.end()
            })
        } else{
            res.writeHead(200,{'Content-Type': 'text/plain; charset:utf-8'});
            res.end("Não sei fazer essa operação!")
        }
    }
}).listen(7777);


console.log("Servidor à escuta na porta 7777!")
