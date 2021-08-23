import React from 'react'

const GlobalStyles = () => {
    return <div>
<style global="true" jsx="true">{`
:root {
	--factor: 1;
}

.fp_feature_filter {
	font-weight: 300;
	font-size: 12pt;
	max-height: 1000px;
	overflow: auto;
	clear: both;
}

.fp_feature_filter input {
	margin-right: 10px;
}

.fp_feature_filter input[type='text'] {
	width: 153px;
}

.fp_feature_filter span {
	white-space: nowrap;
	cursor: pointer;
}
			
.fp_filter_panel {
	width: 250px;
	float: left;
	margin: 10px;
	padding: 10px;
	border: 1px solid gray;
	margin-bottom: 100px;
}

.fp_buttons {
	width: 100%;
	clear: both;
}

.fp_clear_button {
	float: right;
	cursor: pointer;
}

.fp_home_button {
	float: left;
	cursor: pointer;
}

.fp_more_link {
	width: 100%;
	text-align: center;
	margin-top: 10px;
	cursor: pointer;
	font-style: italic;
	font-size: 10pt;
}

.fp_feature_count {
	font-size: 9pt;
	color: gray;
}

.fp_pointer {
	cursor: pointer;
}

.fp_debug {
	font-size: 10pt;
	border: 1px solid black;
	margin: 10px;
	padding: 3px;
}				

.fp_clear_search {
	border: 1px solid gray;
	cursor: pointer;
	padding: 2px;
	font-size: 10pt;
	margin-left: -5px;
}	
`}</style>	
</div>
}            

export default GlobalStyles