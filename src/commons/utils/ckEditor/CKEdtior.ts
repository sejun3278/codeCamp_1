
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";

export const CKEditorConfig = () => {
    const config = {
        // Plugin : [Underline],
        toolbar : [ 'heading', '|', 'bold', 'italic', 'link', '|', 'bulletedList', 'numberedList', 'outdent', 'indent', '|', 'blockQuote', 'insertTable', 'mediaEmbed', '|', 'undo', 'redo'],
        
    }
    
    return config;
}