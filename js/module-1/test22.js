function checkIfCanAccessContent(subType) {
  const canAccessContent = subType == "pro" || subType == "vip"; // дополни эту строку
  console.log(canAccessContent);
  return canAccessContent;
}
checkIfCanAccessContent("pro");
checkIfCanAccessContent("starter");
checkIfCanAccessContent("vip");
checkIfCanAccessContent("free");
