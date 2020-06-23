var selectedShape;


function goToStep2 () {
    var ele = document.getElementsByName('shape');
    for(let i = 0; i<ele.length; i++) {
        if(ele[i].checked) {
            this.selectedShape = ele[i].value
        }
    }
    localStorage.setItem('shape', this.selectedShape)

    location.href = 'step2.html'

}
