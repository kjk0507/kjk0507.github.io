// --------------------------- js 시작 --------------------------- //
function selectShape(){
	function getDiagramSvgs(){
		fetch("resources/data/diagramSvgs.json")
			.then(res => res.json())
			.then(svgs => {
			var content = document.getElementById("selectShape-container");

			svgs.forEach((path, idx) => {
				var btn = document.createElement("button");
				btn.className = "svg-select-btn";
				btn.title = "SVG " + (idx + 1);

				var img = document.createElement("img");
				img.src = path;

				btn.appendChild(img);
				content.appendChild(btn);

				btn.addEventListener("click", e => {
				e.preventDefault();

				var selectData = getSelectData();
				selectData.path = path;
				setSelectData(selectData);

				loadPage("content", "components/selectColor.html", selectColor);
				});
			});
			});
	}

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

	getDiagramSvgs();
// --------------------------- js 밑단 --------------------------- //
};