$(function() {

	$('.MainMenuItem').bind('click', function() {
		
		switch($(this).prop('id')) {

			case 'HomeLink':
        $('#Home').show();
        $('#About').hide();
        $('#Stories').hide();
				return;

			case 'AboutLink':
        $('#About').show();
        $('#Stories').hide();
        $('#Home').hide();
				return;

			case 'StoriesLink':
        $('#Stories').show();
        $('#About').hide();
        $('#Home').hide();
				return;

			case 'YouTubeChannelLink':
				window.open('https://www.youtube.com/channel/UCicWhM01PqtJmox2vdR7WQw', '_blank');
				return;
		}
	});

});
