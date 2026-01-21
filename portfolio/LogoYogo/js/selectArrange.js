// --------------------------- js 시작 --------------------------- //
function selectArrange(){
    document.querySelectorAll('.selectArrange-pos').forEach(item => {
        item.addEventListener('click', () => {
            var pos = item.dataset.pos;
            
            var selectData = getSelectData();
            selectData.pos = pos;

            setSelectData(selectData);
            
            console.log("pos :"+ pos);
            loadPage("content", "components/editor.html", editor);
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