/**
	 * NotificationFx function
	 */

	function NotificationFx( options ) {	
		this.options = extend( {}, this.options );
		extend( this.options, options );
		this._init();
	}

	/**
	 * NotificationFx options
	 */
	NotificationFx.prototype.options = {
		// element to which the notification will be appended
		// defaults to the document.body
		wrapper : document.body,
		// the message
		message : 'yo!',
		// layout type: growl|attached|bar|other
		layout : 'growl',
		// effects for the specified layout:
		// for growl layout: scale|slide|genie|jelly
		// for attached layout: flip|bouncyflip
		// for other layout: boxspinner|cornerexpand|loadingcircle|thumbslider
		// ...
		effect : 'slide',
		// notice, warning, error, success
		// will add class ns-type-warning, ns-type-error or ns-type-success
		type : 'error',
		// if the user doesn´t close the notification then we remove it 
		// after the following time
		ttl : 6000,
		// callbacks
		onClose : function() { return false; },
		onOpen : function() { return false; }
	}

	/**
	 * init function
	 * initialize and cache some vars
	 */
	NotificationFx.prototype._init = function() {
		// create HTML structure
		this.ntf = document.createElement( 'div' );
		this.ntf.className = 'ns-box ns-' + this.options.layout + ' ns-effect-' + this.options.effect + ' ns-type-' + this.options.type;
		var strinner = '<div class="ns-box-inner">';
		strinner += this.options.message;
		strinner += '</div>';
		strinner += '<span class="ns-close"></span></div>';
		this.ntf.innerHTML = strinner;

		// append to body or the element specified in options.wrapper
		this.options.wrapper.insertBefore( this.ntf, this.options.wrapper.firstChild );

		// dismiss after [options.ttl]ms
		var self = this;
		this.dismissttl = setTimeout( function() {
			if( self.active ) {
				self.dismiss();
			}
		}, this.options.ttl );

		// init events
		this._initEvents();
	}

	/**
	 * init events
	 */
	NotificationFx.prototype._initEvents = function() {
		var self = this;
		// dismiss notification
		this.ntf.querySelector( '.ns-close' ).addEventListener( 'click', function() { self.dismiss(); } );
	}

	/**
	 * show the notification
	 */
	NotificationFx.prototype.show = function() {
    console.log('show');
		this.active = true;
		classie.remove( this.ntf, 'ns-hide' );
		classie.add( this.ntf, 'ns-show' );
		this.options.onOpen();
	}

	/**
	 * dismiss the notification
	 */
	NotificationFx.prototype.dismiss = function() {
		console.log('dismiss');
    var self = this;
		this.active = false;
		clearTimeout( this.dismissttl );
		classie.remove( this.ntf, 'ns-show' );
		setTimeout( function() {
			classie.add( self.ntf, 'ns-hide' );
			
			// callback
			self.options.onClose();
		}, 25 );

		// after animation ends remove ntf from the DOM
		var onEndAnimationFn = function( ev ) {
			if( support.animations ) {
				if( ev.target !== self.ntf ) return false;
				this.removeEventListener( animEndEventName, onEndAnimationFn );
			}
			self.options.wrapper.removeChild( this );
		};

		if( support.animations ) {
			this.ntf.addEventListener( animEndEventName, onEndAnimationFn );
		}
		else {
			onEndAnimationFn();
		}
	}

	/**
	 * add to global namespace
	 */
	window.NotificationFx = NotificationFx;

 ( window );

(function() {
  var bttn = document.getElementById( 'notification-trigger' );

  bttn.addEventListener( 'click', function() {

      // create the notification
      var notification = new NotificationFx({
        message : '<span class="icon icon-megaphone"></span><p>You have some interesting news in your inbox. Go <a href="#">check it out</a> now.</p>',
        layout : 'bar',
        effect : 'slidetop',
        type : 'notice', // notice, warning or error
        onClose : function() {
          bttn.disabled = false;
        }
      });

      // show the notification
      notification.show();
  } );
  
  var bttn2 = document.getElementById( 'notification-trigger2' );
  
  bttn2.addEventListener( 'click', function() {

      // create the notification
      var notification = new NotificationFx({
        message : '<p>This is just a simple notice. Everything is in order and this is a <a href="#">simple link</a>.</p>',
        layout : 'growl',
        effect : 'scale',
        type : 'notice', // notice, warning, error or success
        onClose : function() {
          bttn.disabled = false;
        }
      });

      // show the notification
      notification.show();

  } );
});
