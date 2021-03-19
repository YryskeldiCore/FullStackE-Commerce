const validate = (value, create, setValue, onHide) => {
    if(value === ''){
        const input = document.querySelector('.input-validate')
        input.setAttribute('placeholder', "You didn't enter the data!")
        input.classList.add('actif')
        return 0
    } else {
        create({name: value})
            .then(res => {
                setValue('')
                onHide()
            })
    }
}

const validateDeviceInput = (value, input, placeholderText) => {
    const inputInfo = document.querySelector(input)
    if(!value){
            inputInfo.setAttribute('placeholder', placeholderText)
            inputInfo.classList.add('actif')
    } else {
            inputInfo.classList.remove('actif')
    }
}

export {
    validate, 
    validateDeviceInput
} 