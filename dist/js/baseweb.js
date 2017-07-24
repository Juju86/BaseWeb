var utility = (function () {

  'use strict';

  //
  // Variables
  //

  var api = {};
  var settings;
  var defaults = {};

  //
  // Public Methods
  //

  /**
   * Checks if an element has a class or not
   * @param {Element} Element to check class on
   * @param {String} Class string to check for
   * @returns {Boolean} Returns true if class exists on element, otherwise false
   */
  api.hasClass = function ( el, c ) {
    return el.classList.contains(c);
  }; // End hasClass

  /**
   * Adds a class to an element
   * @param {Element} Element to add class(es) on
   * @param {String} || {Array} Class(es) to add
   */
  api.addClass = function ( el, c ) {

    c = api.toArray(c);

    c.forEach( function ( c ) {
      el.classList.add( c );
    });

  }; // End addClass

  /**
   * Remove a class from an element
   * @param {Element} Element to remove class(es) from
   * @param {String} || {Array} Class(es) to remove
   */
  api.removeClass = function ( el, c ) {

    c = api.toArray(c);

    c.forEach( function ( c ) {
      el.classList.remove( c );
    });

  }; // End removeClass

  /**
   * Toggle a class on an element
   * @param {Element} Element to toggle class(es) on
   * @param {String} || {Array} Class(es) to toggle
   */
  api.toggleClass = function ( el, c ) {

    c = api.toArray(c);

    c.forEach( function ( c ) {
      var fn = api.hasClass( el, c ) ? api.removeClass : api.addClass;
      fn( el, c );
    });

  }; // End toggleClass

  /**
   * Find the closest parent element based on class
   * @param {Element} Element to start search on
   * @param {String} Class string to toggle
   * @return {Element} Closest parent element
   */
  api.closest = function ( el, c ) {
    while ((el = el.parentElement) && !api.hasClass(el, c));
    return el;
  }; // End closest

  /**
   * Converts a string to an array
   * @param {String} || {Array} A string to convert to an array
   * @return {Array} Return the converted array
   */
  api.toArray = function( c ) {

    var array = [];

    if (typeof c === 'string') {
      array.push(c);
    } else if (Array.isArray(c)) {
      array = c;
    } else {
      return false;
    }

    return array;

  }; // End toArray

  /**
   * Creates a forEach loop for NodeList
   * @param {NodeList} Node list to loop through
   * @param {Function} The function to run within the loop
   * @param {Scope} I'm not quite sure what this does
   * @return {Integer} {Value} Passed to the callback function
   */
  api.forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; ++i) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  };

  /**
   * Merge two or more objects. Returns a new object.
   * Set the first argument to `true` for a deep or recursive merge
   * @param {Boolean} deep If true, do a deep (or recursive) merge [optional]
   * @param {Object} objects The objects to merge together
   * @returns {Object} Merged values of defaults and options
   */
  api.extend = function () {

    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    // Check if a deep merge
    if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
      deep = arguments[0];
      i++;
    }

    // Merge the object into the extended object
    var merge = function ( obj ) {
      for ( var prop in obj ) {
        if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
          // If deep merge and property is an object, merge properties
          if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
            extended[prop] = extend( true, extended[prop], obj[prop] );
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    // Loop through each object and conduct a merge
    for ( ; i < length; i++ ) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;

  }; // End extend

  //
  // Return Public APIs
  //

  return api;

})();

var dismissible = (function () {

  'use strict';

  //
  // Variables
  //

  var u = utility;

  var api = {};
  var settings;
  var defaults = {
    classTrigger : 'close',
    classDismissible : 'dismissible',
    classHide : 'hide',
  };

  //
  // Private Methods
  //

  var runDismissible = function () {

    // Only run if the clicked link was a dismissible item
    if ( !event.target.matches('.' + settings.classTrigger)) return;

    // Prevent default link behavior
    event.preventDefault();

    // Get the dismissible parent element
    var dismissible = u.closest(event.target, settings.classDismissible);

    // Add initial classes
    if (dismissible) {
      u.addClass(dismissible, settings.classHide);
    } else {
      console.log('Dismissible element was not found!');
    }

  };

  //
  // Public Methods
  //

  api.init = function ( options ) {

    // Destroy any previous initializations
    api.destroy();

    // Merge user options with the defaults
    settings = u.extend( defaults, options || {} );

    // Add event listener
    document.addEventListener('click', runDismissible, false);

  };

  api.destroy = function () {

    // Remove listener
    document.removeEventListener('click', runDismissible, false);

    // Reset settings
    settings = null;

  };

  //
  // Return Public APIs
  //

  return api;

})();

var dropdowns = (function () {

  'use strict';

  //
  // Variables
  //

  var u = utility;

  var api = {};
  var settings;
  var defaults = {
    selectorTrigger: '.dropdown-trigger.on-click',
    classTrigger: 'dropdown-trigger',
    classDropdown: 'dropdown',
    classActive: 'active',
  };

  var triggers = [];
  var dropdowns = [];

  //
  // Private Methods
  //

  var runDropdownTriggers = function () {

    var trigger = u.closest(event.target, settings.classTrigger);

    // Is the dropdown already active?
    var is_active = u.hasClass(trigger, settings.classActive);

    // Hide all dropdowns that are click activated
    api.hideAll();

    // Keep the parent dropdowns active
    api.showParents(trigger);

    // If the dropdown is not active, add the active class
    if (!is_active) {
      u.addClass(trigger, settings.classActive);
    }

    // Prevent default link behavior
    event.preventDefault();

    // Stop the click event from bubbling down to the document
    event.stopPropagation();

  };

  var runDropdowns = function () {

    // Hide all dropdowns that are click activated
    api.hideAll();

    // Keep the parent dropdowns active
    api.showParents(event.target);

    // Prevent default link behavior
    event.preventDefault();

    // Stop the click event from bubbling down to the document
    event.stopPropagation();

  };

  //
  // Public Methods
  //

  // Hide all dropdowns that are click activated
  api.hideAll = function () {

    triggers.forEach( function (el) {
      u.removeClass(el, settings.classActive);
    });

  };

  // Keep the parent dropdowns active
  api.showParents = function (el) {

    var parent = u.closest(el, settings.classTrigger);

    while (parent) {
      u.addClass(parent, settings.classActive);
      parent = u.closest(parent, settings.classTrigger);
    }

  };

  api.init = function ( options ) {

    // Destroy any previous initializations
    api.destroy();

    // Merge user options with the defaults
    settings = u.extend( defaults, options || {} );

    // Find triggers and dropdowns
    triggers = document.querySelectorAll(settings.selectorTrigger);
    dropdowns = document.querySelectorAll(settings.selectorTrigger + ' .' + settings.classDropdown);

    // Add event listener to document
    document.addEventListener('click', api.hideAll, false);

    // Add event listener to dropdown trigger
    triggers.forEach(function (el) {
      el.addEventListener('click', runDropdownTriggers, false);
    });

    // Add event listener to dropdown
    dropdowns.forEach(function (el) {
      el.addEventListener('click', runDropdowns, false);
    });

  };

  api.destroy = function () {

    // Remove listeners
    document.removeEventListener('click', api.hideAll, false);

    triggers.forEach(function (el) {
      el.removeEventListener('click', runDropdownTriggers, false);
    });

    dropdowns.forEach(function (el) {
      el.removeEventListener('click', runDropdowns, false);
    });

    // Reset settings
    settings = null;
    triggers = null;
    dropdowns = null;

  };

  //
  // Return Public APIs
  //

  return api;

})();

var tabs = (function () {

  'use strict';

  //
  // Variables
  //

  var u = utility;

  var api = {};
  var settings;
  var defaults = {
    classWrap : 'tabs',
    classNav : 'tabs-nav',
    classContent : 'tabs-content',
    classActive : 'active',
  };

  var triggers = [];

  //
  // Private Methods
  //

  var getTabsContent = function(wrap, nav) {

    var content;

    if (wrap) {
      u.forEach(wrap.children, function(i, el) {
        if (u.hasClass(el, settings.classContent)) {
          content = el;
        }
      });
    } else {
      var id = nav.dataset.content;
      if (id) {
        content = document.querySelector('#' + id);
      } else {
        console.log('Tabs content was not found!');
      }
    }

    return content;

  };

  var removeActive = function (nav, content) {

    var activeNav = Array.prototype.slice.call(nav.querySelectorAll('.' + settings.classActive));
    var activeContent = Array.prototype.slice.call(content.querySelectorAll('.' + settings.classActive));
    var activeAll = activeNav.concat(activeContent);

    activeAll.forEach(function (el) {
      u.removeClass(el, settings.classActive);
    });

  };

  var runTabs = function () {

    // Is the clicked item already active?
    var is_active = u.hasClass(event.target.parentElement, settings.classActive);

    // If it's not active
    if (!is_active) {

      // Tabs wrapper
      var tabs = u.closest(event.target, settings.classWrap);

      // Tabs nav wrapper
      var tabsNav = u.closest(event.target, settings.classNav);

      // Tabs content
      var tabsContent = getTabsContent(tabs, tabsNav);

      // Get target
      var target = event.target.getAttribute('href');

      // Remove all active classes
      removeActive(tabsNav, tabsContent);

      // Set tab nav and content item to active
      u.addClass(event.target.parentElement, settings.classActive);
      u.addClass(tabsContent.querySelector(target), settings.classActive);

    } // End if is_active

    // Prevent default link behavior
    event.preventDefault();

  };

  //
  // Public Methods
  //

  api.init = function ( options ) {

    // Destroy any previous initializations
    api.destroy();

    // Merge user options with the defaults
    settings = u.extend( defaults, options || {} );

    // Find triggers
    triggers = document.querySelectorAll('.' + settings.classNav + ' a');

    // Add event listener
    triggers.forEach(function (el) {
      el.addEventListener('click', runTabs, false);
    });

  };

  api.destroy = function () {

    // Remove listener
    triggers.forEach(function (el) {
      el.removeEventListener('click', runTabs, false);
    });

    // Reset settings
    settings = null;
    triggers = null;

  };

  //
  // Return Public APIs
  //

  return api;

})();

var offcanvas = (function () {

  'use strict';

  //
  // Variables
  //

  var u = utility;

  var api = {};
  var settings;
  var defaults = {
    classTrigger : 'oc-trigger',
  };

  //
  // Private Methods
  //

  var runOffcanvas = function () {

    // Only run if the clicked link was a dismissible item
    if ( !event.target.matches(settings.selectorTrigger)) return;

    // Prevent default link behavior
    event.preventDefault();

  };

  //
  // Public Methods
  //

  api.init = function ( options ) {

    // Destroy any previous initializations
    api.destroy();

    // Merge user options with the defaults
    settings = u.extend( defaults, options || {} );

    // Add event listener
    document.addEventListener('click', runOffcanvas, false);

  };

  api.destroy = function () {

    // Remove listener
    document.removeEventListener('click', runOffcanvas, false);

    // Reset settings
    settings = null;

  };

  //
  // Return Public APIs
  //

  return api;

})();

/*
$('.oc-trigger').each(function () {

  var
    $this = $(this),
    $wrap = $this.closest('.oc-wrap'),
    $aside = $wrap.find('.oc-aside'),
    target = $this.attr('data-target'),
    reset = 'oc-wrap',
    is_active = false,
    close = function() {
      // Remove active class
      $wrap.removeClass('oc-active');
      // Remove delay class after the set transition duration
      setTimeout( function() {
        $wrap.removeClass('oc-delay');
      }, 500 );
    }
  ;

  // Button click event
  $this.click(function(e) {
    is_active = $wrap.hasClass('oc-active');

    // Check if it's a close button or if off-canvas is already active
    if(!target || is_active) {
      // Close off-canvas content
      close();
    } else {
      // Reset container class
      $wrap.attr('class', reset);
    }
    // Add target class
    if(target && !is_active) {
      $wrap.addClass(target);
      // Add active and delay classes after a slight delay
      setTimeout( function() {
        $wrap.addClass('oc-active oc-delay');
      }, 25 );
    }

    // Stop the default behavior
    return false;
  });

  // Aside click event
  $aside.click(function(e) {
    // Stop the click propogation from bubbling down to the container
    e.stopPropagation();
  });

  // Container click event
  $wrap.click(function(e) {
    // Close off-canvas content
    close();
  });

});
*/

/*
require
  utility.js
  dismissible.js
  dropdowns.js
  tabs.js
  offcanvas.js
*/

// Default initializations
;(function (window, document, undefined) {

  'use strict';

  dismissible.init();
  dropdowns.init();
  tabs.init();
  offcanvas.init();

})(window, document);
