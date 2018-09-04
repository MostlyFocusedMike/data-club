import app from '../app'
const mainController = function($scope){
    this.title = "hello there"
    this.myInput = "wow ok then"
    this.checkVal = false
    this.getCheckVal = function() {
        alert(this.checkVal)
    }
    this.show = true
};

export default mainController;