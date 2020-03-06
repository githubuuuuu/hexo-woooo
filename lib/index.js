'use strict';

module.exports = function (data) {
  // 用函数返回的新字符串替换掉'post.md'中与‘正则表达式(/\!\[(.*)\]\((.*)\)/g)’匹配的字符串。
  data.content = data.content.replace(/\!\[(.*)\]\((.*)\)/g, (match, p1, offset, string) => {
      // 1. 获得与‘正则表达式’匹配的字符串: match
      // 2. 将match中指定的字符串"data.slug + /"用空字符串代替。
      // 3. 返回新的字符串。
      let str01 = "/" + data.slug + "\\//g";    // /Post-0304-1140\//g
      console.log('Post asset folder :', str01);            // debug
      let reg01 = eval(str01);
      let newStr = match.replace(reg01, "");
      return newStr;
    },
  );

  return data;
};

