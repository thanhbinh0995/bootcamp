jQuery(document).ready(function($) {
	$( "#signupForm" ).validate( {
		rules: {
			companyName: {
				required: true,
				maxlength: 25
			},
			name: {
				required: true,
				maxlength: 25
			},
			emailAddress: {
				required: true,
			},
			phoneNumber: {
				required: true,
				number: true,
				matches1: true
			},
			address: {
				required: true
			},
			subject: {
				required: true,
				maxlength: 25
			},
			message: {
				required: true
			}
		}
		// messages: {
		// 	companyName: {
		// 		required: "Vui lòng nhập vào đây",
		// 		maxlength: "Tên đăng nhập tối đa 25 ký tự",
		// 	},
		// 	Name: {
		// 		required: "Vui lòng nhập vào đây",
		// 		maxlength: "Tên đăng nhập tối đa 25 ký tự",
		// 	},
		// 	emailAddress:{
		// 		required: "Vui lòng nhập vào đây"
		// 	}.
		// 	phoneNumber:{
		// 		required: "Vui lòng nhập vào đây",
		// 		matches1: "nhap dung so dien thoai"
		// 	},
		// 	subject: {
		// 		required: "Vui lòng nhập vào đây",
		// 		maxlength: "Tên đăng nhập tối đa 25 ký tự",
		// 	},
		// 	message: {
		// 		required: "Vui lòng nhập vào đây"
		// 	}
		// },
		
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