let last_digit;
add_num = (val) =>{
    if('.+-x/'.includes(last_digit) && '.+x/'.includes(val)){
        document.getElementById('screen').value = document.getElementById('screen').value.slice(0,-1);
    }
    document.getElementById('screen').value += val
    last_digit = val
}
rslt = () =>{
    let screen_text = document.getElementById('screen').value
    screen_text = screen_text.replaceAll('x','*')
    result = eval(screen_text)
    document.getElementById('screen').value = result
}
clear_inp = () =>{
    document.getElementById('screen').value = ''
}