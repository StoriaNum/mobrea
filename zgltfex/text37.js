module.exports = require('https://raw.githubusercontent.com/AnalyticalGraphicsInc/obj2gltf/master/index.js');
    
   var obj2gltf = require('obj2gltf');
var fs = require('fs');
obj2gltf('model.obj')
    .then(function(gltf) {
        var data = Buffer.from(JSON.stringify(gltf));
        fs.writeFileSync('model.gltf', data);
    }); 
    
 
