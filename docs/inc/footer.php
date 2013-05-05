    </div><!-- .container -->
</section><!-- .main -->

<footer class="footer">
    <p><a href="https://github.com/sebnitu/BaseWeb">BaseWeb</a> is built and maintained by <a href="http://sebnitu.com">Sebastian Nitu</a>. <a href="https://github.com/sebnitu/BaseWeb">Fork this project on GitHub</a>.</p>
</footer><!-- .footer -->

<!-- jQuery -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script>!window.jQuery && document.write(unescape('%3Cscript src="assets/js/libs/jquery.min.js"%3E%3C/script%3E'))</script>

<!-- BaseWeb jQuery Plugins -->
<script src="assets/js/baseweb.js"></script>
<script src="assets/js/baseweb.mobilemenus.js"></script>

<!-- jQuery functions, document ready & window load -->
<script src="assets/js/jquery.function.js"></script>
<script src="assets/js/jquery.docready.js"></script>

<script>
$(document).ready(function() {
    
    ////
    // Select Form
    ////
    // Tables
    $('#table-classes').change( function() {
        
        var i,
            form_data = $(this).serializeArray(),
            table = $('#table-demo'),
            output = $('#table-classes-output'),
            classes = '';
        
        table.removeClass();
        
        for (i = 0; i < form_data.length; ++i) {
            table.addClass(form_data[i]['value']);
        }
        
        classes = table.attr('class');
        
        output.text('class="' + classes + '"');
        
    });
    ////
    // Forms
    $('#form-classes').change( function() {
        
        var i,
            form_data = $(this).serializeArray(),
            table = $('#form-demo'),
            output = $('#form-classes-output'),
            classes = '';
        
        table.removeClass();
        
        for (i = 0; i < form_data.length; ++i) {
            table.addClass(form_data[i]['value']);
        }
        
        classes = table.attr('class');
        
        output.text('class="' + classes + '"');
        
    });
    
    ////
    // Forms
    ////
    // Focus Detection
    // Checks if anything inside of a form has focus
    // and adds the focus class to parent .group
    $('form *').focus(function() {
        $(this).parents('.group').addClass('focus');  
    }).blur(function(){
        $(this).parents('.group').removeClass('focus');  
    });
    
    ////
    // Mobile Menu
    $('.mobile-menu-demo').mobilemenu();
    
});
</script>

</body>
</html>