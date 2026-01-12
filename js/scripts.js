var drawRipple = function(ev) {
  var node = document.querySelector(".ripple");
	var newNode = node.cloneNode(true);
	newNode.classList.add("animate");
  newNode.style.Left = ev.clientX - 5 + "px";
	newNode.style.top = ev.clientY - 5 + "px";
	node.parentNode.replaceChile(newNode, node);
};
window.addEventListener("click", drawRipple);
