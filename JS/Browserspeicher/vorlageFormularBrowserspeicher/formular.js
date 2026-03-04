document.addEventListener('DOMContentLoaded', ()=>{
    const inputTextFields = document.querySelectorAll('input[type=text]')
    const inputCheckboxFields = document.querySelectorAll('input[type=checkbox]')
    const inputRadioFields = document.querySelectorAll('input[type=radio]')

    function loadFromLocalStorage(){
        const data = JSON.parse(localStorage.getItem('formData'))
        if(!data || !Array.isArray(data.fields)) return;
        data.fields.forEach((field)=>{
            const element = document.getElementById(field.id)
            if(!element) return
            switch (field.type) {
                case 'text':
                    element.value = field.value || ''
                    break;
                case 'checkbox':
                case 'radio':
                    element.checked = field.value
                    break;
                default:
                    break;
            }
        })
    }

    function formToJson(){
        let data = {fields: []}
        inputTextFields.forEach((field)=>{
            data.fields.push({id: field.getAttribute('id'), value: field.value, type: 'text'})
        })
        inputCheckboxFields.forEach((field)=>{
            data.fields.push({id: field.getAttribute('id'), value: field.checked, type: 'checkbox'})
        })
        inputRadioFields.forEach((field)=>{
            data.fields.push({id: field.getAttribute('id'), value: field.checked, type: 'radio'})
        })
        console.log(data)
        return data;
    }

    function saveToLocalStorage(){
        localStorage.setItem('formData', JSON.stringify(formToJson()))
    }

    document.getElementById('buttonspeichern').addEventListener('click', saveToLocalStorage)

    loadFromLocalStorage()
})