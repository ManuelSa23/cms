var base = location.protocol+'//'+location.host;

document.addEventListener('DOMContentLoaded',function(){
    var btn_product_file_image=document.getElementById('btn_product_file_image');
    var product_file_image = document.getElementById('product_file_image');
    btn_product_file_image.addEventListener('click', function(){
        console.log('click');
        product_file_image.click();
    }, false);
});

$(document).ready(function(){
    editor_init('editor');
})

function editor_init(field){
    CKEDITOR.replace(field,{
        toolbar: [
        { name: 'clipboard', items: ['Cut','Copy','Paste','PasteText','-','Undo', 'Redo']},
        { name: 'basicstyles', items:['Bold', 'Italic','BulletedList','Strike', 'Image','Link', 'Unlink','Blockquote']}, 
        { name: 'document', items:['CodeSnippet', 'EmojiPanel','Preview', 'Source']}
        ]
    });
}