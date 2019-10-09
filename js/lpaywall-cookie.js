( function( $ )  {

	$(document).ready( function() {

		var bodyClasses = $('body').attr('class').split(' ');

		$.each(bodyClasses, function(i, value) {

			if ( !value.search('postid' ) ) {
				
				var classArray = value.split('-');

				var post_id = parseInt( classArray[1] );

				if ( post_id > 0 ) {

					var data = {
						action: 'lpaywall_process_cookie',
						post_id: post_id
					};

					$.get(lpaywall_cookie_ajax.ajaxurl, data, function(data) {
						var response;
	
						if ( data ) {

							response = JSON.parse(data);

							if ( response.indexOf("lpaywall_message_wrap") >= 0 ) {
								
								var content = $( lpaywall_cookie_ajax.post_container );
								
								content.html(response);
								
							}

						}
						
						
					});

				}

			}

			// for pages
			if ( !value.search('page-id' ) ) {
				
				var classArray = value.split('-');
				var post_id = parseInt( classArray[2] );

				if ( post_id > 0 ) {

					var data = {
						action: 'lpaywall_process_cookie',
						post_id: post_id
					};

					$.get(lpaywall_cookie_ajax.ajaxurl, data, function(data) {
						var response;
	
						if ( data ) {

							response = JSON.parse(data);

							if ( response.indexOf("lpaywall_message_wrap") >= 0 ) {
								
								var content = $( lpaywall_cookie_ajax.page_container );
								
								content.html(response);
								
							}

						}
						
						
					});

				}

			}

		});

	});

})( jQuery );