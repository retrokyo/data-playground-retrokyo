export default function getMousePositionInElement(event) {
  const elementRect = event.target.getBoundingClientRect();
  const mouseAction = {
    type: event.type,
    x: event.clientX - elementRect.left,
    y: event.clientY - elementRect.top,
  };

  console.log(mouseAction);
}
