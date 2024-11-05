document.getElementById("dragItem").addEventListener
("dragstart", function (e) {
e.dataTransfer.setData("text", e.target.id);
});
document.getElementById("dropArea").addEventListener
("dragover", function (e) {
e.preventDefault();
});
document.getElementById("dropArea").addEventListener
("drop", function (e) {
e.preventDefault();
const data = e.dataTransfer.getData("text");
e.target.appendChild(document.getElementById(data));
});
