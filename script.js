function checkforblank(){
    if(document.getElementById('name').value == "") {
        alert('Please enter your name')
        document.getElementById('name').classList.add("error");
        return false;
        }
        else {
            document.getElementById('name').classList.remove("error");
        }
    if(document.getElementById('email').value == "") {
        alert('Please enter your email')
        document.getElementById('email').classList.add("error");
        return false;
        }
        else {
            document.getElementById('email').classList.remove("error");
        }
    if(document.getElementById('detail').value == "") {
        alert('Please enter your project detail')
        document.getElementById('detail').classList.add("error");
        return false;
        }
        else {
            document.getElementById('detail').classList.remove("error");
        }
}