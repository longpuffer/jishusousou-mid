<script>
    $(function(){
        $('.sample_arrowac .sample_arrowac_title').on('click', function () {
            $(this).next().slideToggle();
            $(this).next().toggleClass('active');
            $(this).toggleClass('active');
        })
 });
</script>