var InfoGeniuz = {}; //namespace
InfoGeniuz.revelData = {} ;

InfoGeniuz.leadCascades = {} ;

InfoGeniuz.leadCascades.steelhouse 			= { s : 'SteelHouse' 		, t: 'Retargeting' 		, m : 'SEM' ,	sO : 'SteelHouse' } ;
InfoGeniuz.leadCascades.steel_house 		= { s : 'Steel House' 		, t: 'Retargeting' 		, m : 'SEM' ,	sO : 'SteelHouse' } ;
InfoGeniuz.leadCascades.stealhouse 			= { s : 'StealHouse' 		, t: 'Retargeting' 		, m : 'SEM' ,	sO : 'SteelHouse' } ;
InfoGeniuz.leadCascades.steal_house 		= { s : 'Steal House' 		, t: 'Retargeting' 		, m : 'SEM' ,	sO : 'SteelHouse' } ;
InfoGeniuz.leadCascades.facebook 			= { s : 'Facebook' 			, t: 'unknown' 			, m : 'SEM' ,	sO : 'Facebook' } ;
InfoGeniuz.leadCascades.adwords 			= { s : 'AdWords' 			, t: 'unknown' 			, m : 'SEM' ,	sO : 'AdWords' } ;
InfoGeniuz.leadCascades.adroll 				= { s : 'AdRoll' 			, t: 'Retargeting' 		, m : 'SEM' ,	sO : 'AdRoll' } ;

InfoGeniuz.leadCascades.linkedin 			= { s : 'LinkedIn' 			, t: 'CPC' 				, m : 'SEM' ,	sO : 'LinkedIn' } ;
InfoGeniuz.leadCascades.taboola 			= { s : 'Taboola' 			, t: 'CPC' 				, m : 'SEM'  ,	sO : 'Taboola' } ;
InfoGeniuz.leadCascades.outbrain 			= { s : 'Outbrain' 			, t: 'CPC' 				, m : 'SEM' ,	sO : 'Outbrain' } ;
InfoGeniuz.leadCascades.capterra 			= { s : 'Capterra' 			, t: 'CPC' 				, m : 'SEM' ,	sO : 'Capterra' } ;
InfoGeniuz.leadCascades.yelp 				= { s : 'Yelp' 				, t: 'CPC' 				, m : 'SEM' ,	sO : 'Yelp' } ;
InfoGeniuz.leadCascades.twitter 			= { s : 'Twitter' 			, t: 'CPC' 				, m : 'SEM' ,	sO : 'Twitter' } ;

InfoGeniuz.leadCascades.swadvice 			= { s : 'SoftwareAdvice'	, t: 'Aggregator' 		, m : 'SEM' ,	sO : 'SoftwareAdvice' } ;
InfoGeniuz.leadCascades.bussinesscom_s		= { s : 'Bussiness.com-S'	, t: 'Aggregator' 		, m : 'SEM' ,	sO : 'Bussiness.com-S' } ;
InfoGeniuz.leadCascades.bussinesscom_e 		= { s : 'Bussiness.com-E'	, t: 'Aggregator' 		, m : 'SEM'  ,	sO : 'Bussiness.com-E' } ;
InfoGeniuz.leadCascades.buyerzone 			= { s : 'BuyerZone'			, t: 'Aggregator' 		, m : 'SEM' ,	sO : 'BuyerZone' } ;
InfoGeniuz.leadCascades.poscom 				= { s : 'POS.com'			, t: 'Aggregator' 		, m : 'SEM' ,	sO : 'POS.com' } ;

InfoGeniuz.leadCascades.google				= { s : 'Google' 			, t: 'Organic' 			, m : 'SEO'  ,	sO : 'Google' } ;
InfoGeniuz.leadCascades.yahoo 				= { s : 'Yahoo' 			, t: 'Organic' 			, m : 'SEO' ,	sO : 'Yahoo' } ;
InfoGeniuz.leadCascades.bing 				= { s : 'Bing' 				, t: 'Organic' 			, m : 'SEO'  ,	sO : 'Bing' } ;

InfoGeniuz.leadCascades.direct 				= { s : 'Direct'			, t: 'Direct'			, m : 'SEO' ,	sO : 'Direct' } ;
InfoGeniuz.leadCascades.directp 			= { s : '(Direct)'			, t: 'Direct'			, m : 'SEO' ,	sO : 'Direct' } ;

//Simple cookie handler functions
InfoGeniuz.getCookie = (function ( cname ) {
    var name = cname + "=";    
	var ca = document.cookie.split(';');    
	for(var i=0; i<ca.length; i++) {        
		var c = ca[i];        
		while (c.charAt(0)==' ') c = c.substring(1);        
			if (c.indexOf(name) == 0) return c.substring(name.length,c.length);    
	}   
	return "";
}) ;

InfoGeniuz.createCookie = (function ( name, value, days ) {    var expires;    if (days) {        var date = new Date();        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));        expires = "; expires=" + date.toGMTString();    }    else {        expires = "";    }    document.cookie = name + "=" + value + expires + "; path=/";}) ;

//Check if nested object property exists
InfoGeniuz.checkNested = function(obj /*, level1, level2, ... levelN*/) {  var args = Array.prototype.slice.call(arguments, 1);  for (var i = 0; i < args.length; i++) {    if (!obj || !obj.hasOwnProperty(args[i])) {      return false;    }    obj = obj[args[i]];  }  return true;}

InfoGeniuz.DetectBrowser = {
	init: function ()
	{
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
	},
	searchString: function (data)
	{
		for (var i = 0; i < data.length; i++)
		{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString)
			{
				if (dataString.indexOf(data[i].subString) != -1) return data[i].identity;
			}
			else if (dataProp) return data[i].identity;
		}
	},
	searchVersion: function (dataString)
	{
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
	},
	dataBrowser: [
	{
		string: navigator.userAgent,
		subString: "Chrome",
		identity: "Chrome"
	}, {
		string: navigator.userAgent,
		subString: "OmniWeb",
		versionSearch: "OmniWeb/",
		identity: "OmniWeb"
	}, {
		string: navigator.vendor,
		subString: "Apple",
		identity: "Safari",
		versionSearch: "Version"
	}, {
		prop: window.opera,
		identity: "Opera"
	}, {
		string: navigator.vendor,
		subString: "iCab",
		identity: "iCab"
	}, {
		string: navigator.vendor,
		subString: "KDE",
		identity: "Konqueror"
	}, {
		string: navigator.userAgent,
		subString: "Firefox",
		identity: "Firefox"
	}, {
		string: navigator.vendor,
		subString: "Camino",
		identity: "Camino"
	}, { // for newer Netscapes (6+)  
		string: navigator.userAgent,
		subString: "Netscape",
		identity: "Netscape"
	}, {
		string: navigator.userAgent,
		subString: "MSIE",
		identity: "Internet Explorer",
		versionSearch: "MSIE"
	}, {
		string: navigator.userAgent,
		subString: "Gecko",
		identity: "Mozilla",
		versionSearch: "rv"
	}, { // for older Netscapes (4-)  
		string: navigator.userAgent,
		subString: "Mozilla",
		identity: "Netscape",
		versionSearch: "Mozilla"
	}]

};

InfoGeniuz.DetectBrowser.init(); 

/*  Cant use document write with AutOptimize */
/*
InfoGeniuz.gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write("<script src='" + InfoGeniuz.gaJsHost + "google-analytics.com/ga.js' type='text/javascript'>" + "</sc" + "ript>");
*/

if (typeof (_gat) != "undefined")
{
	InfoGeniuz.pageTracker = _gat._getTracker("UA-1-1");
	InfoGeniuz.pageTracker._trackPageview();
}

InfoGeniuz._uGC = function (l, n, s, d)
{
	if (!l || l == "" || !n || n == "" || !s || s == "") return "";
	if (typeof(d)=='undefined'||d==''||!d){d='=';}
	var i, i2, i3, c = "";
	i = l.indexOf(n);
	i3 = n.indexOf(d) + d.length;
	if (i > -1)
	{
		i2 = l.indexOf(s, i);
		if (i2 < 0)
		{
			i2 = l.length;
		}
		c = l.substring((i + i3), i2);
	}
	return ( c.toLowerCase() == "(not%20set)" || c.toLowerCase() == 'not%20set' || c.toLowerCase() == 'not+set' || c.toLowerCase() == 'not set'  || c.toLowerCase() == '(not+set)' || c.toLowerCase() == '(not set)' ) ? '' : c ;
}

var revelTracker		=  InfoGeniuz.getCookie('_first_touch');
var z		=  InfoGeniuz._uGC(document.cookie, '__utmz=', ';');
var source  =  decodeURI(InfoGeniuz._uGC(z, 'utmcsr=', '|')); 
var medium  =  '' ;
var lead_type 	=  '' ;
var ad_origin 	=  '' ;

var sysValues = '' ; 
var rsys 	=  InfoGeniuz.getCookie('__rsys');
	rsys 	=  (rsys.indexOf('|') > -1 )?rsys.split('|'):[rsys] ;
	if ( rsys[0] != '' ) {
		for (i = 0; i < rsys.length; i++) {
			sysValues = sysValues + "<option value='"+rsys[i]+"' selected='selected'>"+rsys[i]+"</option>" ;
		}
	} else {
		sysValues = "<option value='(none selected)'>(none selected)</option>" ;
	}
var sysValuesMkto = rsys ; 
	
var featValues = ''	;
var rfeat 	=  InfoGeniuz.getCookie('__rfeat');
	rfeat 	=  (rfeat.indexOf('|') > -1 )?rfeat.split('|'):[rfeat] ;
	
	if ( rfeat[0] != '' ) {
		for (i = 0; i < rfeat.length; i++) {
			featValues = featValues + "<option value='"+rfeat[i]+"' selected='selected'>"+rfeat[i]+"</option>" ;
		}
	} else {
		featValues = "<option value='(none selected)'>(none selected)</option>" ;
	}
var featValuesMkto = rfeat ; 
var term = InfoGeniuz._uGC(z, 'utmctr=', '|');
var content = InfoGeniuz._uGC(z, 'utmcct=', '|');
var campaign = InfoGeniuz._uGC(z, 'utmccn=', '|');
var gclid = InfoGeniuz._uGC(z, 'utmgclid=', '|');
var csegment = InfoGeniuz._uGC(document.cookie, '__utmv=', ';');
var first = '';
var previous = '';
var current = '';
var pViews = '';
var fVisits = '';
var pVisits = '';
var cVisits = '';
var nVisits = '';



InfoGeniuz.init = function () {

	InfoGeniuz.igz_g_gclid = gclid ; 
	InfoGeniuz.igz_a_type = InfoGeniuz._uGC(revelTracker, 'lead_type[[[', '|||', '[[[');
	InfoGeniuz.igz_a_placement = InfoGeniuz._uGC(revelTracker, 'placement[[[', '|||', '[[[');
	ad_origin = InfoGeniuz._uGC(revelTracker, 'ad_origin[[[', '|||', '[[[');
	InfoGeniuz.igz_r_gaid = InfoGeniuz._uGC(revelTracker, 'gaid[[[', '|||', '[[[');
	
	// These fields are set based on source
	
	if ( medium == '' ) { medium = decodeURI(InfoGeniuz._uGC(z, 'utmcmd=', '|')); }

	if ( csegment != '')
	{
		var csegmentex = /[1-9]*?\.(.*)/;
		csegment = csegment.match(csegmentex);
		csegment = csegment[1];
	}
	else
	{
		csegment = '';
	}

	var a = InfoGeniuz._uGC(document.cookie, '__utma=', ';');
	var aParts = a.split(".");
	fVisits = aParts[2];
	pVisits = aParts[3];
	cVisits = aParts[4];
	nVisits = aParts[5];

	if( fVisits != undefined ) {
		first = new Date(fVisits * 1000);
	}
	
	
		
	var a = InfoGeniuz._uGC(document.cookie, '__utmb=', ';');
	var aParts = a.split(".");
	pViews = aParts[1];
	term = term.split('%20');
	var no = term.length;
	aa = '';
	for (var i = 0; i < no; i++)
	{
		aa = aa + ' ' + term[i];
	}
	term = (term == ' ' ) ? '' : aa;
	if( pViews == undefined ) {
		pViews = '';
	}
	if( pVisits != undefined ) {
		previous = new Date(pVisits * 1000);
	}
	if( cVisits != undefined ) {
		current = new Date(cVisits * 1000);
	}
}

InfoGeniuz.init() ;  //Initalize all values Once, to be used on each form

InfoGeniuz.addDataToForm = function( form ) {

	// form is a jQuery object
	form = jQuery(form);
	
	//Prevents duplicate fields
	form.find('input[name^="igz_"]').remove();
	
	//now, create a data element for us
	var formbody = form.find('.gform_body');

	/*  New Lead Source Values Here */ 

	formbody.append("<input type='hidden' class='LeadSource' name='LeadSource' value='Website' />");
	formbody.append("<input type='hidden' class='Lead_Source_Medium__c' name='Lead_Source_Medium__c' value='"+
		((medium==''||medium=='-'||medium=='(none)')?((source=='(direct)')?'Direct':'unknown'):medium).replace('organic','Organic').replace('referral','Referral')
	+"' />");
	formbody.append("<input type='hidden' class='Lead_Source_Medium_Detail__c' name='Lead_Source_Medium_Detail__c' value='"+source.replace('(direct)','Direct')+"' />");

	/*  End New Lead Source Values ### */ 
	
	
	/* Create fields but maybe no values yet (unless set in cookie)*/
	formbody.append("<input type='hidden' class='igz_g_city' name='igz_g_city' value='"+InfoGeniuz.revelData.igz_g_city+"' />");
	formbody.append("<input type='hidden' class='igz_g_country' name='igz_g_country' value='"+InfoGeniuz.revelData.igz_g_country+"' />");
	formbody.append("<input type='hidden' class='igz_g_state' name='igz_g_state' value='"+InfoGeniuz.revelData.igz_g_state+"' />");
	formbody.append("<input type='hidden' class='igz_g_longitude' name='igz_g_longitude' value='"+InfoGeniuz.revelData.igz_g_longitude+"' />");
	formbody.append("<input type='hidden' class='igz_g_latitude' name='igz_g_latitude' value='"+InfoGeniuz.revelData.igz_g_latitude+"' />");
		
	/* This data is ok to pre load with values since its always already there */
	formbody.append("<input type='hidden' name='igz_h_browser' value='"+InfoGeniuz.DetectBrowser.browser+"' />");
	formbody.append("<input type='hidden' name='igz_h_brversion' value='"+InfoGeniuz.DetectBrowser.version+"' />");
	formbody.append("<input type='hidden' name='igz_h_os' value='"+window.navigator.platform+"' />");

	formbody.append("<input type='hidden' name='igz_t_original' value='"+first+"' />");
	formbody.append("<input type='hidden' name='igz_t_previous' value='"+previous+"' />");
	formbody.append("<input type='hidden' name='igz_t_current' value='"+current+"' />");
	formbody.append("<input type='hidden' name='igz_a_pageviews' value='"+pViews+"' />");

	formbody.append("<input type='hidden' name='igz_a_source' value='"+source+"' />");
	formbody.append("<input type='hidden' name='igz_a_medium' value='"+((medium==''||medium=='-')?'unknown':medium)+"' />");
	formbody.append("<input type='hidden' name='igz_a_type' value='"+((InfoGeniuz.igz_a_type==''||InfoGeniuz.igz_a_type=='-')?'unknown':InfoGeniuz.igz_a_type)+"' />");
	formbody.append("<input type='hidden' name='igz_a_placement' value='"+InfoGeniuz.igz_a_placement+"' />");
	
	formbody.append("<input type='hidden' name='igz_a_ad_origin' value='"+((ad_origin==''&&medium.toLowerCase()=='sem')?'usa':ad_origin)+"' />");
	formbody.append("<input type='hidden' name='igz_a_term' value='"+term+"' />");
	formbody.append("<input type='hidden' name='igz_a_content' value='"+content+"' />");
	formbody.append("<input type='hidden' name='igz_a_campaign' value='"+((campaign==''||campaign=='-')?'unknown':campaign)+"' />");
	formbody.append("<input type='hidden' name='igz_a_segment' value='"+csegment+"' />");

	formbody.append("<input type='hidden' class='igz_g_gclid' name='igz_g_gclid' value='"+InfoGeniuz.igz_g_gclid+"' />");
	formbody.append("<input type='hidden' class='igz_r_gaid' name='igz_r_gaid' value='"+InfoGeniuz.igz_r_gaid+"' />");
	formbody.append("<input type='hidden' class='igz_g_locale' name='igz_g_locale' value='"+jQuery('html').attr('lang')+"' />");
	
	
	formbody.append("<input type='hidden' name='igz_a_visits' value='"+nVisits+"' />");
	var today = new Date();
	formbody.append("<input type='hidden' name='igz_t_time' value='"+today+"' />");
	
	formbody.append("<select multiple style='display:none;' name='igz_a_systems[]'>" + sysValues + "</select>" ) ;
	formbody.append("<select multiple style='display:none;' name='igz_a_features[]'>" + featValues + "</select>" ) ;
	
	formbody.append("<textarea style='display:none;' name='utm_source_code'>Source: " + decodeURI(InfoGeniuz._uGC(z, 'utmcsr=', '|')) + 
															   "\nLead Type: " + InfoGeniuz.igz_a_type + 
															   "\nMedium: " + decodeURI(InfoGeniuz._uGC(z, 'utmcmd=', '|')) + 
															   "\nTerm: " + term + 
															   "\nCampaign: " + campaign +  
															   "\nContent: " + content +  
															   "\nGCLID: " + gclid +   
															   "\nAd Origin: " + ad_origin +   
															   "\nPlacement: " + InfoGeniuz.igz_a_placement +   
															   "\nPage: " + location.protocol + '//' + location.host + location.pathname +   
	"</textarea>");
}
InfoGeniuz.addDataToMARKETO_Form = function() {

	_return = {}
	
	/*  New Lead Source Values Here */ 
	_return.LeadSource = 'Website' ;
	_return.Lead_Source_Medium__c = ((medium==''||medium=='-'||medium=='(none)')?((source=='(direct)')?'Direct':'unknown'):medium).replace('organic','Organic').replace('referral','Referral') ;
	_return.Lead_Source_Medium_Detail__c = source.replace('(direct)','Direct') ;
	
	/*  End New Lead Source Values ### */ 
	//_return.Marketing_Vertical__c = sysValuesMkto ;
	//_return.Marketing_Product_Features__c = featValuesMkto ;
	_return.GAID__c = InfoGeniuz.igz_r_gaid ;
	_return.GCLID__c = InfoGeniuz.igz_g_gclid ;
	_return.Browser__c = InfoGeniuz.DetectBrowser.browser ;
	_return.Browser_Version__c = InfoGeniuz.DetectBrowser.version ;
	_return.Operating_System__c = window.navigator.platform ;
	//_return.Marketing_Placement__c = InfoGeniuz.igz_a_placement ;
	//_return.Marketing_Ad_Origin__c = ((ad_origin==''&&medium.toLowerCase()=='sem')?'usa':ad_origin) ;
	//_return.Marketing_Lead_Source_Level_2__c = ((InfoGeniuz.igz_a_type==''||InfoGeniuz.igz_a_type=='-')?'unknown':InfoGeniuz.igz_a_type) ;
	//_return.Campaign_Name__c = ((campaign==''||campaign=='-')?'unknown':campaign) ;
	//_return.Campaign_Term__c = term ;
	//_return.Campaign_Content__c = content ;
	//_return.Marketing_lead_Source_level_3__c = source ;
	//_return.Marketing_Main_Lead_Source_1__c = ((medium==''||medium=='-')?'unknown':medium) ;
	_return.gacid = '';
	//_return.Marketing_utm_source_Codc__c = decodeURI(InfoGeniuz._uGC(z, 'utmcsr=', '|')) + 
	//														   "\nLead Type: " + InfoGeniuz.igz_a_type + 
	//														   "\nMedium: " + decodeURI(InfoGeniuz._uGC(z, 'utmcmd=', '|')) + 
	//														   "\nTerm: " + term + 
	//														   "\nCampaign: " + campaign +  
	//														   "\nContent: " + content +  
	//														   "\nGCLID: " + gclid +   
	//														   "\nAd Origin: " + ad_origin +   
	//														   "\nPlacement: " + InfoGeniuz.igz_a_placement +   
	//														   "\nPage: " + location.protocol + '//' + location.host + location.pathname ;
															   
	/*		formbody.append("<input type='hidden' name='igz_a_segment' value='"+csegment+"' />");		*/
	return _return ;

}

InfoGeniuz.handleFormSubmit = function(e){
	/*e.preventDefault();
	var keys = Object.keys(e.currentTarget);
	
	form_id = $(e.currentTarget).attr('id').split('_')[1] ;
			
	InfoGeniuz._gdTimeOut.submitting = true ;
	InfoGeniuz._gdTimeOut.form_id = form_id ;
	InfoGeniuz._gdTimeOut.timeout = setTimeout(function(){ InfoGeniuz.submitOnGeoFailure(); },3800);
	
	formWrap = jQuery('#gform_wrapper_' + InfoGeniuz._gdTimeOut.form_id);
	formWrap.find('form').off('submit' , InfoGeniuz.handleFormSubmit ) ;
	InfoGeniuz.getGeoInfo();
	
	return false;*/
}		

InfoGeniuz.getGeoInfo = function () {
	geoip2.insights(InfoGeniuz.populateGeoInfo, InfoGeniuz.submitOnGeoFailure );	
}

InfoGeniuz.populateGeoInfo = function(data) { 
	/*
	//Get the infoGeniuz fields that Revel wants ;)
	InfoGeniuz.revelData = {} ;
	InfoGeniuz.revelData.igz_g_city = ( data.city.names !== 'undefined' ) ? data.city.names.en : ' - ' ;
	InfoGeniuz.revelData.igz_g_country = ( data.country.names !== 'undefined' ) ? data.country.names.en : ' - ' ;
	InfoGeniuz.revelData.igz_g_state = ( data.subdivisions[0] !== 'undefined' && data.subdivisions[0].names  !== 'undefined' ) ? data.subdivisions[0].names.en : ' - ' ;
	InfoGeniuz.revelData.igz_g_longitude = ( data.location !== 'undefined' && data.location.longitude !== 'undefined' ) ? data.location.longitude : ' - ' ;
	InfoGeniuz.revelData.igz_g_latitude = ( data.location !== 'undefined' && data.location.latitude !== 'undefined' ) ? data.location.latitude : ' - ' ;
	InfoGeniuz.revelData.hasGeo = '1' ;

	__Cookie = JSON.stringify( InfoGeniuz.revelData ) ;
	__days = 5 ; //How long to store the cookie
	InfoGeniuz.createCookie( 'geoData', __Cookie, 5 )  	
		
	console.log( JSON.stringify( data , true , 4 ) ) ;
	clearTimeout(InfoGeniuz._gdTimeOut.timeout);
	formWrap = jQuery( '#gform_wrapper_' + InfoGeniuz._gdTimeOut.form_id );
	$(formWrap).find( 'form' ).off( 'submit' , InfoGeniuz.handleFormSubmit ) ;

	$(formWrap).find('.igz_g_city').val( InfoGeniuz.revelData.igz_g_city );
	$(formWrap).find('.igz_g_country').val( InfoGeniuz.revelData.igz_g_country );
	$(formWrap).find('.igz_g_state').val( InfoGeniuz.revelData.igz_g_state );
	$(formWrap).find('.igz_g_longitude').val( InfoGeniuz.revelData.igz_g_longitude );
	$(formWrap).find('.igz_g_latitude').val( InfoGeniuz.revelData.igz_g_latitude );
	*/
	//alert( 'sucess' ) ;
	formWrap.find( 'form' ).submit() ;
}

InfoGeniuz.submitOnGeoFailure = function(error) {
	//alert( 'failure' ) ;
	jQuery('#gform_wrapper_' + InfoGeniuz._gdTimeOut.form_id).submit();
}

//Check for a cookie with previously loaded geo Data	
/*
InfoGeniuz.cookie = InfoGeniuz.getCookie( 'geoData' ) ;

try {
    InfoGeniuz.revelData = JSON.parse(InfoGeniuz.cookie);
} catch (e) {
    InfoGeniuz.revelData = false ; 
}*/

//Wait for DOM ready to manipulate forms

jQuery(document).ready(function ($) {
	InfoGeniuz._gdTimeOut = { 	submitting : false , 	form_id : 0 , 	timeout : false } ;
	
	jQuery(document).bind('gform_page_loaded', function(event, form_id, current_page) {
		
		var formWrap = $('#gform_wrapper_' + form_id );
		var form = form.find('form');

		//console.log('refreshing data for form '+form_id);
		InfoGeniuz.addDataToForm(form);
		/*if ( 'undefined' == typeof(InfoGeniuz.revelData.hasGeo) || false == InfoGeniuz.revelData || '' == InfoGeniuz.revelData || 1 != InfoGeniuz.revelData.hasGeo ) { 
			form.find('form').on('submit' , InfoGeniuz.handleFormSubmit ) ;
		}*/
		
	});

	$('.gform_wrapper').each(function() {
		// call the fn to create & fill in our data.
		InfoGeniuz.addDataToForm(this);
		/*if ( 'undefined' == typeof(InfoGeniuz.revelData.hasGeo) || false == InfoGeniuz.revelData || '' == InfoGeniuz.revelData || 1 != InfoGeniuz.revelData.hasGeo ) { 
			$(this).find('form').on('submit' , InfoGeniuz.handleFormSubmit ) ;
		}*/
		
	});
	
	setTimeout(function(){
		$('.mktoForm').each(function() {
		//	InfoGeniuz.addDataToMARKETO_Form(this);
			
		});
	} , 2200 );
	
});