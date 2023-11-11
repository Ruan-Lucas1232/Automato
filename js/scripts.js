
function senoidal(input) {
    a = 0.7071067811865
    b = 1.5707963267949
    q = -2.3561944901923
    d = 0.5

    if((a * Math.sin(b * input + q) + d) > 0.5){
        return 1
    }
    else{
        return 0
    }
}