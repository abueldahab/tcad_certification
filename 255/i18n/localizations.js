/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "Working With Remote Data",
		"%l_lessontitle": "Working With Remote Data",
		"%l_subtitle": "Building Native Mobile Apps With Appcelerator Titanium",
		"%l_slidenote_titleslide": "<b>Module time: 60 mins</b><br/>(30 teaching, 30 lab)",
		"%l_agenda1": "Using the HTTPClient API to fetch remote data",
		"%l_agenda2": "File uploads and downloads",
		"%l_agenda3": "Working with JSON and XML",
		"%l_agenda4": "Working with SOAP",
		"%l_slidenote_agenda": "",
		"%l_xmlhttp": "The XMLHTTPRequest Object",
		"%l_in_the_browser": "In the web browser, Ajax requests rely on the XMLHTTPRequest object provided by the browser",
		"%l_slidenote_xmlhttp": "In a web browser, Ajax works through a five step process as shown he <br><ol><li>User interacts with page</li><li>Which creates an XHR object  = ReadyState 1</li><li>Which passes an HTTP request to the server = ReadyState 2</li><li>The server creates a response and sends back XML or JSON data<br>ReadyState 3 when data begins to arrive<br>ReadyState 4 when data is all there</li><li>The callback function of the XHR object updates the UI</li></ol>",
		"%l_httpclient": "The HTTPClient Object",
		"%l_ti_network": "Ti.Network.HTTPClient implements the XHR specification",
		"%l_thats_why": "That's why you see 'xhr' in sample code",
		"%l_low_level": "Low level HTTP client interface with support for all HTTP verbs",
		"%l_should_be": "Should be familiar to Ajax programmers",
		"%l_slidenote_httpclient": "XHR refers to the XMLHTTPRequest object, and is seen in demo apps like the Kitchen Sink<br>Titanium implements XHR<br>Very similar to low-level Ajax without a jQuery type library<br>Support for all verbs: get, post, delete, put",
		"%l_typical": "A Typical Network Request",
		"%l_language": "Language-independent text-based means to represent arrays and objects (without methods)",
		"%l_compact": "Compact data format, efficient over slow networks",
		"%l_standardized": "Standardized and widely supported, see json.org",
		"%l_xhrcode1": "\nvar xhr = Ti.Network.createHTTPClient();\nxhr.onload = function() {\n  // do something with the response payload\n};\nxhr.open('GET', 'http://example.com/endpoint');\nxhr.send();\n ",
		"%l_slidenote_typical": "Define XHR object<br>Specify an onload callback and other lifecycle handlers<br>Open the the request<br>Then finally send the request",

		"%l_post": "POST Example:",
		"%l_xhrcode2": "\nvar xhr = Ti.Network.createHTTPClient();\nxhr.onload = function() {\n  // do something with the response payload\n};\nxhr.open('POST', 'http://example.com/endpoint');\nxhr.send({myvariable: 'value'});\n ",
		

		"%l_lifecycle": "Lifecycle Callbacks",
		"%l_generally": "This is a good idea - synchronous network is a bad idea",
		"%l_good_idea": "Compact data format, efficient over slow networks",
		"%l_onload": "<b>onload:</b>function called when HTTP request returns",
		"%l_onerror": "<b>onerror:</b>function called for HTTP request error",
		"%l_onreadystatechange": "<b>onreadystatechange:</b>low-level handler for HTTP state",
		"%l_slidenote_lifecycle": "XHR centered around callbacks<br>So, asynchronous<br>Could probably do sync but that's not a best practice<br>As of SDK 1.8, HTTP 4xx & 5xx errors cause onerror() to be called rather than onload()",

		"%l_demo_download": "Demo: File Download",
		"%l_filedemo": "From KitchenSink:<br/>Platform > XHR > File Download<br/>Platform > XHR > File Upload",
		"%l_slidenote_demo_download": "Demo - KitchenSink<br>Platform > XHR > File Download<br>- click Set Web View (url)<br/><br/><u>examples/xhr_filedownload.js ~line 28</u><ul><li>show onload(), responseData, and webview</li><li>show ondatastream()</li><li>show onerror()</li>Then, show open() and send()</li></ul>",

		"%l_working_json": "Working With JSON",
		"%l_json_namespace": "JSON namespace is built in to global scope",
		"%l_recommended": "Recommended data transport format for Titanium Mobile",
		"%l_super_easy": "Super easy to serialize response data",
		"%l_json_parse": "<b>JSON.parse()</b> - convert string to JavaScript object",
		"%l_json_stringify": "<b>JSON.stringify()</b> - convert JavaScript object to string",
		"%l_slidenote_working_json": "JSON is built into and accessible in global scope<br>JSON is compact, easy to serialize and re-hydrate",

		"%l_working_xml": "Working With XML",
		"%l_xml_dom": "XML DOM Level 2 API built in",
		"%l_xml_doc": "XML document created for your for every HTTPClient request",
		"%l_xml_related": "XML related functions in the Ti.XML namespace",
		"%l_many_xml": "Many XML/XHR examples in Kitchen Sink",
		"%l_more_data": "More data over the wire, but still commonly used",
		"%l_slidenote_working_xml": "Web services often publish their data in XML<br>An XML doc object is created when you fetch an XML document<br>See the Ti.XML namespace on the API docs<br>Examples in the KitchenSink",

		"%l_demo_twitter": "Demo: Twitter XML",
		"%l_twitterdemo": "From KitchenSink:<br/>Platform > XHR > XML Data",
		"%l_slidenote_demo_twitter": "Demo - KitchenSink<br>Platform > XHR > XML Data<br>- Pulls public data stream from Twitter API<br><ul><li>Get data from XML for label</li><li>Dumping raw data into a text field</li></ul><br>examples/xhr_xml.js<ul><li>XHR object, onload handler</li><li>Show how variables are extracted:</li><ul><li>doc, elements, screenName, and text node</li></ul><li>responseText dumped into textarea</li><li>open() & URL</li></ul>",
		"%l_few_words": "A Few Words on SOAP",
		"%l_soap": "'Simple Object Access Protocol'- possibly the most ironic acronym in tech history",
		"%l_at_end": "At the end of the day, it is just a layer of abstraction over the top of XML and HTTP",
		"%l_plan_a": "Plan A: Use a server-side proxy to return JSON",
		"%l_plan_b": "Plan B: Use the Suds helper library",
		"%l_plan_c": "Plan C: Manually construct SOAP envelopes",
		"%l_in_practice": "In practice, people usually go with Plan C",
		"%l_slidenote_few_words_slide": "Examples in the Kitchen Sink<br>Consuming/invoking SOAP web services means correctly setting the HTTP headers and XML payload (SOAP envelope) of the request<br>Lots of meta data included in every request, which means lots of data over a slow cellular connection<br>Suds at github.com/kwhinnery/Suds",
		
		"%l_qa": "Q&A",
		"%l_slidenote_qa": "",

		"%l_lab_goals": "Lab Goals",
		"%l_make": "Make TiBountyHunter communicate with a very simple web service over HTTP",
		"%l_requirements": "Requirements:",
		"%l_seed": "Seed the database with results from the web service",
		"%l_send": "Send a request to the server when a fugitive is captured",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/255+Working+with+Remote+Data'>wiki.appcelerator.org/display/td/255+Working+with+Remote+Data</a>",
		"%l_slidenote_lab_goals": "Communicate over HTTP<br>Uninstall because of database changes<br>Seed database on first-run with data from web service<br>Demo: <b>TiBHH255</b><ul<li>Show populated and empty tabs</li><li>Capture a fugitive</li><li>Delete a fugitive</li></ul>",

		"%l_solution": "Solution Walkthrough",
		"%l_slidenote_solution": "Walk through &mdash; TiBH260<br><u>network.js</u><ul><li>Walk through all code, top to bottom</li><li>Load url in browser to show JSON data</li></ul><u>db.js</u><ul><li>'seeded' block at end</li><li>network call to get fugitives</li></ul>"
	}
});
