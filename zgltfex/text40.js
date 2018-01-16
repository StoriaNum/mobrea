<!DOCTYPE html>
<html>
<body>

<h2>External JavaScript</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<p>(myFunction is stored in an external file called "myScript.js")</p>

<script src="https://raw.githubusercontent.com/StoriaNum/obj2gltf/master/index.js"></script>


<script>
var obj2gltf = require('obj2gltf');
var fs = require('fs');
obj2gltf('https://raw.githubusercontent.com/StoriaNum/obj2gltf/master/model.obj')
    .then(function(gltf) {
        var data = Buffer.from(JSON.stringify(gltf));
        fs.writeFileSync('model.gltf', data);
    });
</script>

</body>
</html>
