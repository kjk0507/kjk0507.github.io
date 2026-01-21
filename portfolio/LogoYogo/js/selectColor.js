// --------------------------- js 시작 --------------------------- //
function selectColor(){
    document.querySelectorAll('.item-color-inner').forEach(item => {
        item.addEventListener('click', () => {
            var color = window.getComputedStyle(item).backgroundColor;

            var selectData = getSelectData();
            selectData.color = color;

            setSelectData(selectData);
            loadPage("content", "components/selectArrange.html", selectArrange);
        });
    });

    document.getElementById('passEditor').addEventListener('click', e => {
        e.preventDefault();	
        sessionStorage.removeItem('selectData');
        loadPage("content", "components/editor.html", editor);
    })

    function getSelectData() {
        const raw = sessionStorage.getItem('selectData');
        if (!raw) return null;
        return JSON.parse(raw);
    }

    function setSelectData(data) {
        sessionStorage.setItem('selectData', JSON.stringify(data));
    }
// --------------------------- js 밑단 --------------------------- //
};