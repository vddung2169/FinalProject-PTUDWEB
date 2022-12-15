// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// Filter

function Validator(options) {

    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    //Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector('.form-message');
        var errorMessage;

        //Lấy ra các rule của selector
        var rules = selectorRules[rule.selector];

        for (var i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            // errorMessage = rules[i](inputElement.value);
            if (errorMessage) {
                break;
            }
        }

        if (errorMessage) {
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
            errorElement.innerText = errorMessage;
        } else {
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
            errorElement.innerText = '';
        }
        return !errorMessage;
    }

    var formElement = document.querySelector(options.form);
    if (formElement) {
        //Khi submit form
        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isFormValid = true;

            // lặp qua từng rule và validate;
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector);
                // Array.from(inputElements).forEach(function(inputElement) {

                // })
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                //Trường hợp submit vs JavaScript
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]:not([disable])')
                    var formValues = Array.from(enableInputs).reduce(function(values, input) {
                            switch (input.type) {
                                case 'checkbox':
                                    if (!input.matches(':checked')) {
                                        values[input.name] = '';
                                        return values;
                                    }
                                    if (!Array.isArray(values[input.name])) {
                                        values[input.name] = [];
                                    }
                                    values[input.name].push(input.value);
                                    break;
                                case 'radio':
                                    // console.log(input.name);
                                    values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                    break;
                                case 'file':
                                    values[input.name] = input.files;
                                    break;
                                default:
                                    values[input.name] = input.value;
                            }
                            return values;
                            // console.log(input.name, input.value)
                        }, {})
                        // console.log(formValues);
                    options.onSubmit(formValues);
                }
                //Trường hợp submit vs hành vi mặc định HTML
                else {
                    formElement.submit();
                }
            }
        }

        //Lặp qua mỗi rule và xử lí
        options.rules.forEach(rule => {
            //Lưu lại các rule cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);
            // console.log(inputElements);
            Array.from(inputElements).forEach(function(inputElement) {
                errorElement = getParent(inputElement, options.formGroupSelector).querySelector('.form-message');
                if (inputElement) {
                    inputElement.onblur = function() {
                        validate(inputElement, rule);
                    }

                    //Xử lí mỗi khi người dùng nhập
                    inputElement.oninput = function() {
                        errorElement.innerText = '';
                        getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                    }
                }
            });
        });
    }
}

//Nguyên tắc rule:
//1. Khi có lỗi -> Message lỗi
//2. Khi không có lỗi -> Return undefined
Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value ? undefined : message || "Vui lòng nhập trường này!";
        }
    }
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : "Vui long nhap Email!";
        }
    }
}

Validator.minLength = function(selector, min) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự!`;
        }
    }
}

Validator.isConfirm = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || "Giá trị nhập vào không trùng khớp";
        }
    }
}

const filterBtn = $('.availableTicket-header-choose__filter')
const filter = $('.filter-wrap')
const filterBody = $('.filter__body')
const closeFilter = $('.filter__header i')

filterBtn.onclick = function() {
    filter.classList.add('active')
}
closeFilter.onclick = function() {
    filter.classList.remove('active')
}
filter.onclick = function() {
    filter.classList.remove('active')
}
filterBody.onclick = function(event) { event.stopPropagation(); }

const upBtn = $('.filter__departureNumberOfSeat--choose .up');
const downBtn = $('.filter__departureNumberOfSeat--choose .down');

upBtn.onclick = function() {
    const quantity = $('.filter__departureNumberOfSeat--choose .quantity');
    var currentSlot = parseInt(quantity.innerText);
    currentSlot++;
    quantity.innerHTML = currentSlot;
}

downBtn.onclick = function() {
    const quantity = $('.filter__departureNumberOfSeat--choose .quantity');
    var currentSlot = parseInt(quantity.innerText);
    if (currentSlot > 0) {
        currentSlot--;
    }
    quantity.innerText = currentSlot;
}