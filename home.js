$('input[type=radio][name=menu]').change(() => {
    document.location.href = $('input[type=radio][name=menu]:checked').val() + ".html";
});