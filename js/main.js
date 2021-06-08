
function mostrar() {
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (archivo!=null) {
        document.getElementById('file').style = 'background-color: green;';
        reader.readAsDataURL(archivo);
        reader.onloadend = function () {
            document.getElementById("img").src = reader.result;
        }
    }
}

function buttonChange(){
    const img_path = document.getElementById('img').src;
    const filename = img_path.replace(/^.*[\\\/]/, '');
    if(filename != ''){
        document.getElementById('contenedor_predicciones').hidden = false;
        // Load the model.
        mobilenet.load().then(model => {
            // Classify the image.
            model.classify(img).then(predictions => {
                let array = predictions;
                document.getElementById('col_1-1').innerHTML = array[0].className;
                document.getElementById('col_1-2').innerHTML = array[1].className;
                document.getElementById('col_1-3').innerHTML = array[2].className;

                document.getElementById('col_2-1').innerHTML = parseFloat(array[0].probability).toFixed(4);
                document.getElementById('col_2-2').innerHTML = parseFloat(array[0].probability).toFixed(4);
                document.getElementById('col_2-3').innerHTML = parseFloat(array[0].probability).toFixed(4);
            });
        });
    }else{
        alert('¡Error!, inserte un archivo primero.');
    }
}



