function palindrome(str = 'Madam') {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  if (str.length <= 1) {
    return true;
  } else {
    if (str[0] != str[str.length - 1]) return false;
    return palindrome(str.slice(1, -1));
  }
}

console.log(palindrome("eye"));