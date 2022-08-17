document.spliter.addEventListener('submit',function(e){
    e.preventDefault()

    var mainText=document.spliter.sentence.value
    var separate=document.spliter.separater.value
    var output=mainText.split(separate)
    
    for(var i=0;i<output.length ;i++){
        $('#output').append((i+1)+'. '+output[i] +'<br>')
    }
    $('#refresh').on('click',function(){
        location.replace('https://arannabarua1971.github.io/spliting-generator/')
    })

})
