function clickMenu(){
   if ((document.getElementById('burg')).style.display === 'none'){
        (document.getElementById('burg')).style.display = 'block'
        newFunction()

   }
   else {
    (document.getElementById('burg')).style.display = 'none'
    newFunction()
   }
   
    

    function newFunction() {
        if (document.getElementById('fis').style.display === 'none') {
            (document.getElementById('fis')).style.display = 'block'
        }
        else {
            (document.getElementById('fis')).style.display = 'none'
        }
    }
}
    
    