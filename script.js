function validate(){
  x =document.myForm
  txt = x.myInput.value
  if (txt>=1 && txt<=8){
    return true
  } else{
    if (txt < 1) {
      alert("Es menor que 1, debe estar entre 1 y 8");
    } else if (txt > 8) {
      alert("Es mayor que 8, debe estar entre 1 y 8");
    } else {
      alert("No es válido, debe estar entre 1 y 8");
    }
    return false
  }
}
  