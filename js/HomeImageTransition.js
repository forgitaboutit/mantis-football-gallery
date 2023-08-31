var images = ['/mantis-football-gallery/images/bis/bis_base.jpg',
							'/mantis-football-gallery/images/bis/bis_3_leaves_stripes.jpg',
							'/mantis-football-gallery/images/bis/bis_cannabis_herbalife.jpg',
							'/mantis-football-gallery/images/bis/bis_spiral.jpg'];

var topImage, bottomImage;
var nextImageIndex = 2;
var intervalLen = 3000;
var transitionLen = 1000;

$(function() {

	// Execute the following function every intervalLen milliseconds
	setInterval(function() { 

		topImage = $('img#TopImage');
		bottomImage = $('img#BottomImage');

		// Fades out top image to reveal bottom image
		topImage.fadeTo(transitionLen, 0, function() {
			
			// Set src of invisible top image to that of bottom image
			topImage.prop('src', bottomImage.prop('src'));
			
			// Show new top image to cover changing of bottom image
			topImage.css('opacity', '1');
				
			// Set src of invisible bottom image to next image in sequence
			bottomImage.prop('src', images[nextImageIndex]);

			// Increment the index (2, 0, 1, 2, 0, 1, 2, 0, ...)
			nextImageIndex = (nextImageIndex + 1) % images.length;

		});

	}, intervalLen);

});
