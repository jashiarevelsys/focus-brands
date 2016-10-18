<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js" integrity="sha256-xNjb53/rY+WmG+4L6tTl9m6PpqknWZvRt0rO1SRnJzw=" crossorigin="anonymous"></script>
  <script type="text/javascript">
	var _failed = false ;
	jQuery(document).ready(function($){
		$('body').on( 'submit' , '.reseller-form' , function() {
			_failed = false ;
			$('.revelValMsg').remove() ;
			
			//Loop through each field to be validated - Specific to this form
			$('.reseller-form .validationField.required').each(function(i,e){
				_val  =  $(this).find('input,textarea,select').val();
				//Empty String validation
				if ( String(_val) == '' ) {
					$(this).append('<div style="color:#e04;" class="revelValMsg">*Field Required</div>');
					_failed = true ;
				}
				//Email Validation
				if ( $(this).hasClass( 'email' ) ) {
					
					_email_re  =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i;
					if( _val != '' && !_email_re.test(_val) ) {
						$(this).find('.revelValMsg').remove() ;
						$(this).append('<div style="color:#f00;" class="revelValMsg">*Email Address Required</div>');
						_failed = true ;
					}
				}
				//Numeric Validation
				if ( $(this).hasClass( 'numeric' ) ) {
					_numeric  =  /^[0-9\-\.\,\s]*$/i;
					if( _val != '' && !_numeric.test(_val) ) {
						$(this).find('.revelValMsg').remove() ;
						$(this).append('<div style="color:#f00;" class="revelValMsg">*Numeric Value Expected</div>');
						_failed = true ;
					}
				}
				if ( $(this).hasClass( 'integer' ) ) {
					_integer  =  /^[0-9]*$/i;
					if( _val != '' && !_integer.test(_val) ) {
						$(this).find('.revelValMsg').remove() ;
						$(this).append('<div style="color:#f00;" class="revelValMsg">*Integer (Whole Number) Value Expected</div>');
						_failed = true ;
					}
				}
			});
			if ( _failed ) {  //prevent form submission if validation fails, and scroll user up to top of form
				$(document).scrollTop($('.reseller-form .revelValMsg').first().parents('.validationField').offset().top - (($('#header').css('position') == 'fixed' ) ? $('#header').innerHeight() + 15 : 0 ) );
				return false;
			} ;
		});
		
		function syncBundleQuan(){
			_bndlQ = $('.bundleInput input').val();
			_playerLyncQ = $('.playerLyncInput input:checked').length > 0 ? $('.playerLyncInput input:checked').val() : 0;
			_addTillQ = $('.addTillInput input:checked').length > 0 ? $('.addTillInput input:checked').val() : 0;
			if ($('.bundleGrid li').length > 0 ) {
				$('.bundleGrid li.terminal').each(function(i,e) {
					var _newQ = parseInt($(e).find('span').attr('data-multiplier')) * parseInt( _bndlQ );
					$(e).find('span').html(_newQ);
				});
				$('.bundleGrid li.playerLync').each(function(i,e) {
					var _newQ = parseInt($(e).find('span').attr('data-multiplier')) * parseInt( _playerLyncQ );
					$(e).find('span').html(_newQ);
				});
				$('.bundleGrid li.addTill').each(function(i,e) {
					var _newQ = parseInt($(e).find('span').attr('data-multiplier')) * parseInt( _addTillQ );
					$(e).find('span').html(_newQ);
				});
			}
		}
		
		syncBundleQuan();	
		
		$('.bundleInput input,.playerLyncInput input,.addTillInput input').on( 'keyup change' , function() {
			syncBundleQuan();
		});
		
		$( ".datepicker" ).datepicker({ defaultDate: 35 });
	
	});
</script>