webpackJsonp([20],{"./node_modules/json-loader/index.js!./.cache/json/guide-language-more-types.json":function(e,a){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:20}}}},{node:{relativePath:"guide/editor-setup.md",childMarkdownRemark:{frontmatter:{title:"Editor setup",order:1}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/getting-started.md",childMarkdownRemark:{frontmatter:{title:"Getting started",order:0}}}},{node:{relativePath:"guide/tools.md",childMarkdownRemark:{frontmatter:{title:"Tools",order:4}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:10}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:4}}}},{node:{relativePath:"guide/language/conditionals.md",childMarkdownRemark:{frontmatter:{title:"Conditionals",order:4}}}},{node:{relativePath:"guide/javascript/syntax-cheetsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax cheetsheet",order:1}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/language/data-types.md",childMarkdownRemark:{frontmatter:{title:"Built-in Data Types",order:2}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring & Pattern Matching",order:5}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:9}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:10}}}},{node:{relativePath:"guide/language/functions.md",childMarkdownRemark:{frontmatter:{title:"Functions",order:3}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:1}}}},{node:{relativePath:"guide/language/more-functions.md",childMarkdownRemark:{frontmatter:{title:"More on Functions",order:6}}}},{node:{relativePath:"guide/language/modules.md",childMarkdownRemark:{frontmatter:{title:"Modules",order:12}}}},{node:{relativePath:"guide/language/more-types.md",childMarkdownRemark:{frontmatter:{title:"More on Types",order:7}}}},{node:{relativePath:"guide/language/let-bindings.md",childMarkdownRemark:{frontmatter:{title:"Let Bindings",order:2}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:8}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/language/types.md",childMarkdownRemark:{frontmatter:{title:"Types",order:1}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:5}}}},{node:{relativePath:"guide/language/primitives.md",childMarkdownRemark:{frontmatter:{title:"Primitives",order:0}}}},{node:{relativePath:"guide/language/externals.md",childMarkdownRemark:{frontmatter:{title:"Externals",order:11}}}}]},file:{relativePath:"guide/language/more-types.md",childMarkdownRemark:{html:'<h4>Mutually Recursive Types</h4>\n<p>Just like functions, types can be mutually recursive through <code>and</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> student = {taughtBy: teacher}\nand teacher = {students: list student};</code></pre>\n      </div>\n<p><strong>Note</strong> that there\'s no semicolon ending the first line and no <code>type</code> on the second line.</p>\n<h4>Type Arguments</h4>\n<p>Types can be "parameterized" (akin to generics in other languages). It\'s as if a type is a function that takes in arguments and returns a new type. The parameters need to start with <code>\'</code>.</p>\n<p>Types with parameters allow us to kill duplications. Before:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* this is a tuple of 3 items, explained next */</span>\n<span class="hljs-keyword">type</span> intCoordinates = (int, int, int);\n<span class="hljs-keyword">type</span> floatCoordinates = (float, float, float);\n\n<span class="hljs-keyword">let</span> buddy: intCoordinates = (<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">20</span>);</code></pre>\n      </div>\n<p>After:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> coordinates \'a = (\'a, \'a, \'a);\n\n<span class="hljs-comment">/* apply the coordinates "type function" and return the type (int, int, int) */</span>\n<span class="hljs-keyword">type</span> intCoordinatesAlias = coordinates int;\n<span class="hljs-keyword">let</span> buddy: intCoordinatesAlias = (<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">20</span>);\n\n<span class="hljs-comment">/* or, more commonly, write it inline */</span>\n<span class="hljs-keyword">let</span> buddy: coordinates float = (<span class="hljs-number">10.5</span>, <span class="hljs-number">20.5</span>, <span class="hljs-number">20.5</span>);</code></pre>\n      </div>\n<p>In practice, types are inferred for you. So the more concise version of the above example would be nothing but:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> buddy = (<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">20</span>);</code></pre>\n      </div>\n<p>The type system infers that it\'s a <code>(int, int, int)</code>. Nothing else needed to be written down.</p>\n<p>Type arguments appear everywhere.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* inferred as `list string` */</span>\n<span class="hljs-keyword">let</span> greetings = [<span class="hljs-string">"hello"</span>, <span class="hljs-string">"world"</span>, <span class="hljs-string">"how are you"</span>];</code></pre>\n      </div>\n<p>If types didn\'t accept parameters (aka, if we didn\'t have "type functions"), the standard library will need to define the types <code>listOfString</code>, <code>listOfInt</code>, <code>listOfTuplesOfInt</code>, etc.</p>\n<p>Types can receive more arguments, and be composable.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> result \'a \'b =\n| <span class="hljs-type">Ok</span> \'a\n| <span class="hljs-type">Error</span> \'b;\n\n<span class="hljs-keyword">type</span> myPayload = {data: string};\n\n<span class="hljs-keyword">type</span> myPayloadResults \'errorType = list (result myPayload \'errorType);\n\n<span class="hljs-keyword">let</span> payloadResults: myPayloadResults string = [\n  <span class="hljs-type">Ok</span> {data: <span class="hljs-string">"hi"</span>},\n  <span class="hljs-type">Ok</span> {data: <span class="hljs-string">"bye"</span>},\n  <span class="hljs-type">Error</span> <span class="hljs-string">"Something wrong happened!"</span>\n];</code></pre>\n      </div>\n<h2>Exceptions</h2>\n<p>Exceptions are just a special kind of <a href="#built-in-data-types-variant">variant</a>, "thrown" in <strong>exceptional</strong> cases (don\'t abuse them!). When you have ordinary variants, you often don\'t <strong>need</strong> exceptions, since you can just use variants types such as <code>type result</code> above.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>try (somethingThatThrows ()) {\n| <span class="hljs-type">Not_found</span> =&gt; print_endline <span class="hljs-string">"Item not found!"</span>\n| <span class="hljs-type">Invalid_argument</span> message =&gt; print_endline message\n};</code></pre>\n      </div>\n<p>You can make your own exceptions like you\'d make a variant (exceptions need to be capitalized too).</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-none"><code><span class="hljs-keyword">exception</span> <span class="hljs-type">InputClosed</span> <span class="hljs-built_in">string</span>;\n...\nraise (<span class="hljs-type">InputClosed</span> <span class="hljs-string">"the stream has closed!"</span>);</code></pre>\n      </div>\n<h2>Objects</h2>\n<p>Although functions are the preferred way of working within Reason, it\'s also possible to use\nobjects.</p>\n<p>An object encapsulates data that it stores within fields, and has methods that can be invoked\nagainst the data it has.</p>\n<h5>Declaring an object type</h5>\n<p>An object can have an object type to define its structure.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> tesla = {\n  .\n  color: string\n};</code></pre>\n      </div>\n<p>The extra dot at the beginning is to indicate that this is a closed object type, which means that\nan object based on this type must have exactly this public structure.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> car \'a = {\n  ..\n  color: string\n} <span class="hljs-keyword">as</span> \'a;</code></pre>\n      </div>\n<p>Two dots, also called an elision, indicate that this is an open object type, and therefore\ncan also contain other values and methods. An open object is also polymorphic and therefore\nrequires a parameter.</p>\n<p>An object type is not required to create an object.</p>\n<h5>Creating an object</h5>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> tesla = {\n  .\n  drive: int =&gt; int\n};\n\n<span class="hljs-keyword">let</span> obj:tesla = {\n  <span class="hljs-keyword">val</span> hasEnvy = {contents: <span class="hljs-literal">false</span>};\n  <span class="hljs-keyword">pub</span> drive speed =&gt; {\n    this#enableEnvy <span class="hljs-literal">true</span>;\n    speed\n  };\n  <span class="hljs-keyword">pri</span> enableEnvy envy =&gt; {\n    hasEnvy.contents = envy\n  };\n};</code></pre>\n      </div>\n<p>This object is of object type tesla and has a public method <code>drive</code>. It also contains a\nprivate method <code>enableEnvy</code> that is only accesible from within the object.</p>\n<p>The following example shows an open object type which uses a type as parameter. The\nobject type parameter is required to implement all the methods of the open object\ntype.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> tesla \'a = {\n  ..\n  drive: int =&gt; int\n} <span class="hljs-keyword">as</span> \'a;\n\n<span class="hljs-keyword">let</span> obj:\n  tesla {. drive: int =&gt; int, doYouWant: unit =&gt; bool}\n  = {\n  <span class="hljs-keyword">val</span> hasEnvy = {contents: <span class="hljs-literal">false</span>};\n  <span class="hljs-keyword">pub</span> drive speed =&gt; {\n    this#enableEnvy <span class="hljs-literal">true</span>;\n    speed\n  };\n  <span class="hljs-keyword">pub</span> doYouWant () =&gt; hasEnvy.contents;\n  <span class="hljs-keyword">pri</span> enableEnvy envy =&gt; {\n    hasEnvy.contents = envy\n  };\n};</code></pre>\n      </div>',frontmatter:{title:"More on Types"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/language/more-types.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-language-more-types-edd923c1dd8981b9dead.js.map