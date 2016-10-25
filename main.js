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
		
		// first bundle
		function syncBundleQuan1(){
			_bndlQ = $('.bundleInput1 input').val();
			if ($('.bundleGrid1 li').length > 0 ) {
				$('.bundleGrid1 li.terminal').each(function(i,e) {
					var _newQ = parseInt($(e).find('span').attr('data-multiplier')) * parseInt( _bndlQ );
					$(e).find('span').html(_newQ);
				});
			}
		}
		
		syncBundleQuan1();
		
		$('.bundleInput1 input').on( 'keyup change' , function() {
			syncBundleQuan1();
		});

		// second Bundle
		function syncBundleQuan2(){
			_bndlQ = $('.bundleInput2 input').val();
			if ($('.bundleGrid2 li').length > 0 ) {
				$('.bundleGrid2 li.terminal').each(function(i,e) {
					var _newQ = parseInt($(e).find('span').attr('data-multiplier')) * parseInt( _bndlQ );
					$(e).find('span').html(_newQ);
				});
			}
		}
		
		syncBundleQuan2();
		
		$('.bundleInput2 input').on( 'keyup change' , function() {
			syncBundleQuan2();
		});

		// third bundles
		function syncBundleQuan3(){
			_bndlQ = $('.bundleInput3 input').val();
			if ($('.bundleGrid3 li').length > 0 ) {
				$('.bundleGrid3 li.terminal').each(function(i,e) {
					var _newQ = parseInt($(e).find('span').attr('data-multiplier')) * parseInt( _bndlQ );
					$(e).find('span').html(_newQ);
				});
			}
		}
		
		syncBundleQuan3();
		
		$('.bundleInput3 input').on( 'keyup change' , function() {
			syncBundleQuan3();
		});
		

		// total bundles 
		function syncTotalBundleQuan(){
			_bndlQ = $('.bundleInput input').val();
			_playerLyncQ = $('.playerLyncInput input:checked').length > 0 ? $('.playerLyncInput input:checked').val() : 0;
			_addTillQ = $('.addTillInput input:checked').length > 0 ? $('.addTillInput input:checked').val() : 0;
			_addRASSQ = $('.addRassInput input:checked').length > 0 ? $('.addRassInput input:checked').val() : 0;
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
				$('.bundleGrid li.addRass').each(function(i,e) {
					var _newQ = parseInt($(e).find('span').attr('data-multiplier')) * parseInt( _addRASSQ );
					$(e).find('span').html(_newQ);
				});
			}
		}
		
		syncTotalBundleQuan();	
		
		$('.bundleInput input, .playerLyncInput input, .addTillInput input, .addRassInput input').on( 'keyup change' , function() {
			syncTotalBundleQuan();
		});
		$('.addKDSInput input').on( 'keyup change' , function() {
			$('.addKDSInput .last-choices').toggle();
		});
		$('.addPrintersInput input').on( 'keyup change' , function() {
			$('.addPrintersInput .last-choices').toggle();
		});
		$('.addMobileOrdersInput input').on( 'keyup change' , function() {
			$('.addMobileOrdersInput .last-choices').toggle();
		});		
		$( ".datepicker" ).datepicker({ defaultDate: 35 });
	
	});
</script>