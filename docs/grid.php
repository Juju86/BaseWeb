<div class="demo-intro">
    <header class="demo-header">
        <h1>Grid System</h1>
    </header><!-- .demo-header -->
</div><!-- .demo-intro -->

<div class="demo">
    
    <div class="semantic">
        <div class="test-1">
            <p>.column(3);</p>
        </div>
        <div class="test-2">
            <p>.column(9);</p>
        </div>
        <div class="test-3">
            <p>.column(3); .prefix(3); .suffix(6);</p>
        </div>
    </div>
    
    <div class="nested-semantic">
        <div class="test-1">
            <p>.column(4);</p>
        </div>
        <div class="test-2">
            <p>.column(8);</p>
            <div class="test-3">
                <div class="test-4">
                    <p>.column(4, 8);</p>
                </div>
                <div class="test-5">
                    <p>.column(4, 8);</p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="row">
        <div class="col-12"><p>.col-12</p></div>
    </div><!-- .row -->
    
    <div class="row">
        <div class="col-1"><p>.</p></div>
        <div class="col-11"><p>.col-11</p></div>
    </div><!-- .row -->
    
    <div class="row">
        <div class="col-2"><p>.col-2</p></div>
        <div class="col-10"><p>.col-10</p></div>
    </div><!-- .row -->
    
    <div class="row">
        <div class="col-3"><p>.col-3</p></div>
        <div class="col-9"><p>.col-9</p></div>
    </div><!-- .row -->
    
    <div class="row">
        <div class="col-4"><p>.col-4</p></div>
        <div class="col-8"><p>.col-8</p></div>
    </div><!-- .row -->
    
    <div class="row">
        <div class="col-5"><p>.col-5</p></div>
        <div class="col-7"><p>.col-7</p></div>
    </div><!-- .row -->
    
    <div class="row">
        <div class="col-6"><p>.col-6</p></div>
        <div class="col-6"><p>.col-6</p></div>
    </div><!-- .row -->
    
    <div class="row">
        <div class="col-4 prefix-2 suffix-6"><p>.col-4 .prefix-2 .suffix-6</p></div>
        <div class="col-4 prefix-6 suffix-2"><p>.col-4 .prefix-6 .suffix-2</p></div>

    </div><!-- .row -->
    
        <div class="row nested nested-static">
                
        <div class="col-8">
            <p>.col-8</p>
            
            <div class="row row-8">
                <div class="col-3">
                    <p>.col-3</p>
                    
                    <div class="row">
                        <div class="col-1">
                            <p>.</p>
                        </div>
                        <div class="col-2">
                            <p>.col-2</p>
                        </div>
                    </div>
                    
                </div>
                <div class="col-3">
                    <p>.col-3</p>
                    
                    <div class="row">
                        <div class="col-1">
                            <p>.</p>
                        </div>
                        <div class="col-2">
                            <p>.col-2</p>
                        </div>
                    </div>
                    
                </div>
                <div class="col-2">
                    <p>.col-2</p>
                </div>
            </div>
            
        </div>
        
        <div class="col-4">
            <p>.col-4</p>
            
            <div class="row">
                <div class="col-2">
                    <p>.col-2</p>
                    
                    <div class="row">
                        <div class="col-1">
                            <p>.</p>
                        </div>
                        <div class="col-1">
                            <p>.</p>
                        </div>
                    </div>
                    
                </div>
                <div class="col-2">
                    <p>.col-2</p>
                </div>
            </div>
            
        </div>
        
    </div><!-- .row -->
    
</div><!-- .demo -->