/**
 * 클립보드에 텍스트 복사하기
 */
export const copyToClipboard = (text: string) => {
  if (!document.queryCommandSupported("copy")) {
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.top = "0px";
  textarea.style.left = "0px";
  textarea.style.position = "fixed";

  document.body.appendChild(textarea);
  textarea.focus(); // focus() -> 사파리 브라우저 서포팅
  textarea.select(); // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
  document.execCommand("copy");
  document.body.removeChild(textarea);
  return true;
};
