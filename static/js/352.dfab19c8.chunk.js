(this["webpackJsonp@uiw/react-mac-keyboard"]=this["webpackJsonp@uiw/react-mac-keyboard"]||[]).push([[352],{392:function(n,a){!function(n){var a={pattern:/\{[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}\}/i,alias:"constant",inside:{punctuation:/[{}]/}};n.languages["solution-file"]={comment:{pattern:/#.*/,greedy:!0},string:{pattern:/"[^"\r\n]*"|'[^'\r\n]*'/,greedy:!0,inside:{guid:a}},object:{pattern:/^([ \t]*)(?:([A-Z]\w*)\b(?=.*(?:\r\n?|\n)(?:\1[ \t].*(?:\r\n?|\n))*\1End\2(?=[ \t]*$))|End[A-Z]\w*(?=[ \t]*$))/m,lookbehind:!0,greedy:!0,alias:"keyword"},property:{pattern:/^([ \t]*)[^\r\n"#=()]*[^\s"#=()](?=\s*=)/m,lookbehind:!0,inside:{guid:a}},guid:a,number:/\b\d+(?:\.\d+)*\b/,boolean:/\b(?:FALSE|TRUE)\b/,operator:/=/,punctuation:/[(),]/},n.languages.sln=n.languages["solution-file"]}(Prism)}}]);
//# sourceMappingURL=352.dfab19c8.chunk.js.map