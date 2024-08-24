export default function trimText(text, length = 20) {
  if (text.length > length) {
    return text.substring(0, length) + "...";
  } else {
    return text;
  }
}
