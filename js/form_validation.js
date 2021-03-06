jQuery(document).ready(function($) {
	$('.date').datepicker({dateFormat: 'dd/mm/yy'});

	$( "#signupForm" ).validate( {
		rules: {
			firstname: {
				required: true,
				maxlength: 25
			},
			lastname: {
				required: true,
				maxlength: 25
			},
			year: {
				required: true,
				number: true,
				min: 15,
				max: 150
			},
			date: {
				required: true,
				date: true
			},
			phoneNumber: {
				required: true,
				matches1: true
			},
		},
		messages: {
			firstname: {
				required: "Vui lòng nhập vào đây",
				maxlength: "Tên đăng nhập tối đa 25 ký tự",
			},
			lastname: {
				required: "Vui lòng nhập vào đây",
				maxlength: "Tên đăng nhập tối đa 25 ký tự",
			},
			year:{
				required: "Vui lòng nhập vào đây",
				number: "Phải nhập kiểu chữ số",
				min: "Min là 15",
				max: "Max là 150",
			},
			date:{
				required: "Vui lòng nhập vào đây",
				date: "Không đúng định dạng"
			},
			phoneNumber:{
				required: "Vui lòng nhập vào đây",
				matches1: "nhap dung so dien thoai"
			}
		},
		
	});

	$('#signupForm')
        .find('[name="phoneNumber"]')
            .intlTelInput({
                utilsScript: '/vendor/intl-tel-input/lib/libphonenumber/build/utils.js',
                autoPlaceholder: true,
                preferredCountries: ['fr', 'us', 'gb']
            });

    $('#signupForm')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                phoneNumber: {
                    validators: {
                        callback: {
                            message: 'The phone number is not valid',
                            callback: function(value, validator, $field) {
                                return value === '' || $field.intlTelInput('isValidNumber');
                            }
                        }
                    }
                }
            }
        })
        // Revalidate the number when changing the country
        .on('click', '.country-list', function() {
            $('#signupForm').formValidation('revalidateField', 'phoneNumber');
        });
	
});