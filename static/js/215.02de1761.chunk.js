(this["webpackJsonp@uiw/react-mac-keyboard"]=this["webpackJsonp@uiw/react-mac-keyboard"]||[]).push([[215],{255:function(e,n){!function(e){function n(e){return RegExp("(\\()"+e+"(?=[\\s\\)])")}function a(e){return RegExp("([\\s([])"+e+"(?=[\\s)])")}var t="[-+*/_~!@$%^=<>{}\\w]+",r="(\\()",i="(?=\\))",s="(?=\\s)",o={heading:{pattern:/;;;.*/,alias:["comment","title"]},comment:/;.*/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0,inside:{argument:/[-A-Z]+(?=[.,\s])/,symbol:RegExp("`"+t+"'")}},"quoted-symbol":{pattern:RegExp("#?'"+t),alias:["variable","symbol"]},"lisp-property":{pattern:RegExp(":"+t),alias:"property"},splice:{pattern:RegExp(",@?"+t),alias:["symbol","variable"]},keyword:[{pattern:RegExp(r+"(?:(?:lexical-)?let\\*?|(?:cl-)?letf|if|when|while|unless|cons|cl-loop|and|or|not|cond|setq|error|message|null|require|provide|use-package)"+s),lookbehind:!0},{pattern:RegExp(r+"(?:for|do|collect|return|finally|append|concat|in|by)"+s),lookbehind:!0}],declare:{pattern:n("declare"),lookbehind:!0,alias:"keyword"},interactive:{pattern:n("interactive"),lookbehind:!0,alias:"keyword"},boolean:{pattern:a("(?:t|nil)"),lookbehind:!0},number:{pattern:a("[-+]?\\d+(?:\\.\\d*)?"),lookbehind:!0},defvar:{pattern:RegExp(r+"def(?:var|const|custom|group)\\s+"+t),lookbehind:!0,inside:{keyword:/^def[a-z]+/,variable:RegExp(t)}},defun:{pattern:RegExp(r+"(?:cl-)?(?:defun\\*?|defmacro)\\s+"+t+"\\s+\\([\\s\\S]*?\\)"),lookbehind:!0,inside:{keyword:/^(?:cl-)?def\S+/,arguments:null,function:{pattern:RegExp("(^\\s)"+t),lookbehind:!0},punctuation:/[()]/}},lambda:{pattern:RegExp(r+"lambda\\s+\\((?:&?"+t+"\\s*)*\\)"),lookbehind:!0,inside:{keyword:/^lambda/,arguments:null,punctuation:/[()]/}},car:{pattern:RegExp(r+t),lookbehind:!0},punctuation:[/(?:['`,]?\(|[)\[\]])/,{pattern:/(\s)\.(?=\s)/,lookbehind:!0}]},l={"lisp-marker":RegExp("&[-+*/_~!@$%^=<>{}\\w]+"),rest:{argument:{pattern:RegExp(t),alias:"variable"},varform:{pattern:RegExp(r+t+"\\s+\\S[\\s\\S]*"+i),lookbehind:!0,inside:{string:o.string,boolean:o.boolean,number:o.number,symbol:o.symbol,punctuation:/[()]/}}}},p="\\S+(?:\\s+\\S+)*",d={pattern:RegExp(r+"[\\s\\S]*"+i),lookbehind:!0,inside:{"rest-vars":{pattern:RegExp("&(?:rest|body)\\s+"+p),inside:l},"other-marker-vars":{pattern:RegExp("&(?:optional|aux)\\s+"+p),inside:l},keys:{pattern:RegExp("&key\\s+"+p+"(?:\\s+&allow-other-keys)?"),inside:l},argument:{pattern:RegExp(t),alias:"variable"},punctuation:/[()]/}};o.lambda.inside.arguments=d,o.defun.inside.arguments=e.util.clone(d),o.defun.inside.arguments.inside.sublist=d,e.languages.lisp=o,e.languages.elisp=o,e.languages.emacs=o,e.languages["emacs-lisp"]=o}(Prism)}}]);
//# sourceMappingURL=215.02de1761.chunk.js.map