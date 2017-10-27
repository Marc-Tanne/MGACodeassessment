
$(".dropdown-menu li a").click(function(){
	var selText = $(this).text();
	$(this).parents('.btn-group').find('.dropdown-toggle').val(selText);
	$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="glyphicon glyphicon-play top pull-right"></span><span class="glyphicon glyphicon-play bottom pull-right"></span>');
	if ($(this).parent().parent().parent().find('button').hasClass('state')) {
		if (selText == 'California') {
			$('.form-group.optional').show();
		} else {
			$('.form-group.optional').hide();
		}
	}
});
$(".btn-submit").on('click', function(){
	$('.has-error').removeClass('has-error');
	$('.warning-text').hide();
	$('.warning-icon').hide();
	$regex = new RegExp('([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})');
	$('form').find('.required').parent('*:not(":hidden")').each(function() {
	    var $this = $(this);
	    var $input = $this.find('input');
	    var $button = $this.find('button');
	    var $textarea = $this.find('textarea');
	    if ($input.val() == '' && typeof $input.val() !== 'undefined') {
	        $this.parent('.input-group').addClass('has-error');
			$this.parent('.input-group').next('.warning-text').show();
			$this.parent('.input-group').find('.warning-icon').show();
			return;
	    }
	    if ($input.attr('type') == "phone") {
		    if (!$regex.test($input.val())) {
				$this.parent('.input-group').addClass('has-error');
				$('.warning-text.phone').show();
				$this.parent('.input-group').find('.warning-icon').show();
				return;
			}
		}
	    if($button.val() == '' && typeof $button.val() !== 'undefined') {
	    	$this.parent('.input-group').addClass('has-error');
			$this.parent('.input-group').next('.warning-text').show();
			$this.parent('.input-group').find('.warning-icon').show();
			return;
	    }
	    if ($textarea.val() == '' && typeof $textarea.val() !== 'undefined') {
	    	$this.addClass('has-error');
			$this.next('.warning-text').show();
			$this.find('.warning-icon').show();
			return;
	    }
	});
	if ($(".has-error").length == 0) {
		var $height = $('form').height() + 10;
		$('.form-container').html('<div class="bold header-text" style="height: '+$height+'px;">Thank you! <br />We have recieved your message and will reach out to you as soon as humanly possible</div>');
	}
});
